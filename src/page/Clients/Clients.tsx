import { Box, IconButton, Tooltip } from "@mui/material";
import ClientData from "../../Data/ClientData";
import { IoEyeSharp } from "react-icons/io5";
import { GrFormEdit } from "react-icons/gr";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import "./Clients.css";
import { DeleteModal } from "../../Component/Button/ButtonAdd";
import Client from "../../Component/Modal/Clients/Client";
import { useState } from "react";
import ShowModal from "../../Component/Modal/Clients/ShowModal";
import UpdateModal from "../../Component/Modal/Clients/UpdateModal";
import FileBody from "../../Component/Helper/FileBody";
import { useQuery } from "@tanstack/react-query";
import { GetAllProprietaire } from "../../backEnd/AuthService";
import { GridColDef } from "@mui/x-data-grid";

const Clients = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenShowModal, setIsOpenShowModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState<boolean>(false);
  const [idClient, setIdClient] = useState<number>();
  const [idClientUpdate, setIdClientUpdate] = useState<number>();

  const handleModalClose = () => {
    setIsOpen(false);
  };
  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalOpenShow = (id: number) => {
    setIsOpenShowModal(true);
    setIdClient(id);
  };

  const handleModalCloseUpdate = () => {
    setIsOpenUpdateModal(false);
  };

  const handleModalOpenUpdate = (id: number) => {
    setIsOpenUpdateModal(true);
    setIdClientUpdate(id);
  };

  const handleModalCloseDelete = () => {
    setIsOpenDeleteModal(false);
  };

  const handleModalOpenDelete = () => {
    setIsOpenDeleteModal(true);
  };

  const handleModalCloseShowModal = () => {
    setIsOpenShowModal(false);
  };

  const { data: dataUser } = useQuery({
    queryKey: ["proprietaireid"],
    queryFn: GetAllProprietaire,
  });
  console.log(dataUser);
  // pour les colonnes du tableau
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID client",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>ID</b>
      ),
      flex: 1,
    },
    {
      field: "nom",
      headerName: "Nom client",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Nom </b>
      ),
      flex: 1,
      cellClassName: "nom-column--cell",
      valueGetter: (Value: any, row: any) => {
        return `${row.user.lastname || ""} `;
      },
    },
    {
      field: "prenom",
      headerName: "prenom client",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Prenom </b>
      ),
      flex: 1,
      cellClassName: "prenom-column--cell",
      valueGetter: (Value: any, row: any) => {
        return `${row.user.firstname || ""} `;
      },
    },
    {
      field: "email",
      headerName: "email",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Email </b>
      ),
      flex: 1,
      cellClassName: "prenom-column--cell",
      valueGetter: (Value: any, row: any) => {
        return `${row.user.email || ""} `;
      },
    },
    {
      field: "sexe",
      headerName: "sexe",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Sexe </b>
      ),
      flex: 1,
      cellClassName: "sexe-column--cell",
      valueGetter: (Value: any, row: any) => {
        return `${row.user.sexe || ""} `;
      },
    },
    {
      field: "phone",
      headerName: "telephone",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Telephone </b>
      ),
      flex: 1,
    },
    {
      field: "city",
      headerName: "ville",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Ville </b>
      ),
      flex: 1,
    },
    {
      field: "nationality",
      headerName: "Nationalité",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Nationalité </b>
      ),
      flex: 1,
    },
    {
      field: "options",
      headerName: "Options",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Options</b>
      ),
      flex: 1,
      headerAlign: "center",
      renderCell: (params: any) => (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Tooltip
            title="Afficher"
            sx={{
              marginRight: "-15px",
              cursor: "pointer",
              padding: "0px 15px",
            }}
          >
            <IconButton onClick={() => handleModalOpenShow(params.row.id)}>
              <IoEyeSharp
                size={20}
                style={{ color: "rgba(0, 0, 160, 0.70)" }}
              />
            </IconButton>
          </Tooltip>

          <Tooltip
            title="Modifier"
            sx={{
              marginRight: "-15px",
              cursor: "pointer",
              padding: "0px 15px",
            }}
          >
            <IconButton onClick={() => handleModalOpenUpdate(params.row.id)}>
              <GrFormEdit
                size={20}
                style={{ color: "rgba(0, 0, 160, 0.70)" }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Supprimer"
            style={{ color: "red", cursor: "pointer", padding: "0px 15px" }}
          >
            <IconButton onClick={handleModalOpenDelete}>
              <DeleteRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box m="0px">
      <FileBody
        clientData={dataUser || []}
        columns={columns}
        handleModalOpen={handleModalOpen}
        onSelectChange={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Client isOpen={isOpen} handleModalClose={handleModalClose} id={0} />
      <DeleteModal
        isOpen={isOpenDeleteModal}
        handleClose={handleModalCloseDelete}
        idItem={undefined}
      />
      <ShowModal
        id={idClient!}
        isOpen={isOpenShowModal}
        role={"Admin"}
        handleModalClose={handleModalCloseShowModal}
      />
      <UpdateModal
        idClient={idClientUpdate!}
        isOpen={isOpenUpdateModal}
        handleModalClose={handleModalCloseUpdate}
      />
    </Box>
  );
};

export default Clients;
