import { Box, IconButton, Tooltip } from "@mui/material";
import Header from "../Header/Header";
import FileBody from "../../Component/Helper/FileBody";
import { ToastContainer } from "react-toastify";
import { GridColDef } from "@mui/x-data-grid";
import { IoEyeSharp } from "react-icons/io5";
import { GrFormEdit } from "react-icons/gr";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import CachedIcon from "@mui/icons-material/Cached";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { useState } from "react";
import { GetAllPassager } from "../../backEnd/AuthService";
import AddModalPassager from "../../Component/Modal/Passager/AddModalPassager";
import { DeleteModalPassager } from "../../Component/Button/ButtonAdd";
import ShowModalPassager from "../../Component/Modal/Passager/ShowModalPassager";

const Passager = () => {
  const { data: dataUser } = useQuery({
    queryKey: ["getPassager"],
    queryFn: GetAllPassager,
  });
  console.log(dataUser);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [idUpdate, setIdUpdate] = useState<number>();
  const [idShow, setIdShow] = useState<number>();
  const [idDelete, setIdDelete] = useState<number>();

  const navigate = useNavigate();
  const handleModalClose = () => {
    setIsOpen(false);
  };
  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleUpdateClick = (id: number) => {
    navigate(`?isOpenModalUpdateGare=true&id=${id}`);
    setIdUpdate(id);
  };
  const handleShowClick = (id: number) => {
    navigate(`?isOpenModalShowPassager=true&id=${id}`);
    setIdShow(id);
  };

  const handleModalCloseDelete = () => {
    setIsOpenDeleteModal(false);
  };

  const handleModalOpenDelete = (id: number) => {
    setIsOpenDeleteModal(true);
    setIdDelete(id);
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID Passager",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>ID Passager</b>
      ),
      flex: 1,
    },
    {
      field: "nom",
      headerName: "Nom Passager(e)",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          Nom Passager(e)
        </b>
      ),
      flex: 1,
    },
    {
      field: "prenom",
      headerName: "Prenom",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Prenom</b>
      ),
      flex: 1,
    },
    {
      field: "villeDepart",
      headerName: "Ville Départ",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Ville Départ</b>
      ),
      flex: 1,
    },
    {
      field: "villeDestination",
      headerName: "Ville Destination",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          Ville Destination
        </b>
      ),
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Telephone",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Telephone</b>
      ),
      flex: 1,
    },
    {
      field: "gare",
      headerName: "Nom Gare",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Nom Gare</b>
      ),
      valueGetter: (Value: any, row: any) => {
        return `${row?.gare?.nom} `;
      },
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Status</b>
      ),
      flex: 1,
      renderCell: (params: any) => {
        let icon;
        switch (params.value) {
          case "ANNULER":
            icon = <DoDisturbAltIcon color="error" />;
            break;
          case "ATTENTE":
            icon = <CachedIcon color="primary" />;
            break;
          case "AFFECTER":
            icon = <AssignmentTurnedInIcon color="success" />;
            break;
          default:
            icon = null;
        }
        return (
          <Box display="flex" alignItems="center" width="100%" height="100%">
            {icon}
          </Box>
        );
      },
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
            <IconButton onClick={() => handleShowClick(params.row.passagerId)}>
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
            <IconButton
              onClick={() => handleUpdateClick(params.row.passagerId)}
            >
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
            <IconButton
              onClick={() => handleModalOpenDelete(params.row.passagerId)}
            >
              <DeleteRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];
  function handleSelectChange(value: string): void {
    throw new Error("Function not implemented.");
  }
  return (
    <Box>
      {" "}
      <Box>
        <Header
          title="La liste des Passagers"
          subtitle="La liste des lines"
          nombre1=""
          entete1=""
          nombre2=""
          entete2=""
        />
      </Box>
      <FileBody
        clientData={dataUser}
        columns={columns}
        handleModalOpen={handleModalOpen}
        onSelectChange={handleSelectChange}
      />
      <ToastContainer />
      <AddModalPassager
        isOpen={isOpen}
        handleModalClose={handleModalClose}
        id={0}
      />
      <DeleteModalPassager
        isOpen={isOpenDeleteModal}
        handleClose={handleModalCloseDelete}
        idItem={idDelete}
      />
      {/*
      <UpdateModalGare id={idUpdate!} /> */}
      <ShowModalPassager id={idShow!} />
    </Box>
  );
};

export default Passager;
