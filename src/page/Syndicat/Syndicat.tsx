import { Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import FileBody from "../../Component/Helper/FileBody";
import { ToastContainer } from "react-toastify";
import { GridColDef } from "@mui/x-data-grid";
import { IoEyeSharp } from "react-icons/io5";
import { GrFormEdit } from "react-icons/gr";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useQuery } from "@tanstack/react-query";
import { GetAllSyndicat } from "../../backEnd/AuthService";
import AddModalSyndicat from "../../Component/Modal/Syndicat/AddModalSyndicat";
import ShowModalSyndicat from "../../Component/Modal/Syndicat/ShowModalSyndicat";
import UpdateModalSyndicat from "../../Component/Modal/Syndicat/UpdateModalSyndicat";
import { DeleteModalSyndicat } from "../../Component/Button/ButtonAdd";
import Header from "../Header/Header";

const Syndicat = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenShowModal, setIsOpenShowModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState<boolean>(false);
  const [idClient, setIdClient] = useState<number>();
  const [idUpdateSyndicat, setidUpdateSyndicat] = useState<number>();
  const [idDelete, setIdDelete] = useState<number>();

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
    setidUpdateSyndicat(id);
  };

  const handleModalCloseDelete = () => {
    setIsOpenDeleteModal(false);
  };

  const handleModalOpenDelete = (id: number) => {
    setIsOpenDeleteModal(true);
    setIdDelete(id);
  };

  const handleModalCloseShowModal = () => {
    setIsOpenShowModal(false);
  };

  const { data: dataUser } = useQuery({
    queryKey: ["syndicat"],
    queryFn: GetAllSyndicat,
  });
  console.log(dataUser);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID syndicat",
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
      field: "nomline",
      headerName: "telephone",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Line/Gare</b>
      ),
      flex: 1,

      valueGetter: (Value: any, row: any) => {
        return `${row.lines?.[0]?.nomline || ""} `;
      },
    },
    {
      field: "ville",
      headerName: "ville",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Ville </b>
      ),
      flex: 1,
    },
    {
      field: "quartier",
      headerName: "Nationalité",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>quartier </b>
      ),
      flex: 1,
    },
    {
      field: "pays",
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
            <IconButton onClick={() => handleModalOpenDelete(params.row.id)}>
              <DeleteRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box m="0px">
      <Box>
        <Header
          title="La liste de syndicat"
          subtitle="La liste des lines"
          nombre1=""
          entete1=""
          nombre2=""
          entete2=""
        />
      </Box>
      <FileBody
        clientData={dataUser || []}
        columns={columns}
        handleModalOpen={handleModalOpen}
        onSelectChange={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ToastContainer />
      <AddModalSyndicat
        isOpen={isOpen}
        handleModalClose={handleModalClose}
        id={0}
      />
      <DeleteModalSyndicat
        isOpen={isOpenDeleteModal}
        handleClose={handleModalCloseDelete}
        idItem={idDelete}
      />
      <ShowModalSyndicat
        id={idClient!}
        isOpen={isOpenShowModal}
        role={"Admin"}
        handleModalClose={handleModalCloseShowModal}
      />
      <UpdateModalSyndicat
        id={0}
        isOpen={isOpenUpdateModal}
        handleModalClose={handleModalCloseUpdate}
        idSyndicat={idUpdateSyndicat!}
      />
    </Box>
  );
};

export default Syndicat;
