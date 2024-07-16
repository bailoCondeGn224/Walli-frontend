import { Box, IconButton, Tooltip } from "@mui/material";
import { GrFormEdit } from "react-icons/gr";
import { IoEyeSharp } from "react-icons/io5";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import TwoWheelerRoundedIcon from "@mui/icons-material/TwoWheelerRounded";
import DirectionsBusRoundedIcon from "@mui/icons-material/DirectionsBusRounded";
import { GridColDef } from "@mui/x-data-grid";
import { enginsRoulants } from "../../Data/ClientData";
import FileBody from "../../Component/Helper/FileBody";
import ModalAddEngin from "../../Component/Modal/Engins/ModalAddEngin";
import { useState } from "react";

const Engin = () => {
  const [isOpenEngin, setIsOpenEngin] = useState<boolean>(false);
  //   const [isOpenShowModalEngin, setIsOpenShowModalEngin] =
  //     useState<boolean>(false);
  //   const [isOpenDeleteModalEngin, setIsOpenDeleteModalEngin] =
  //     useState<boolean>(false);
  //   const [isOpenUpdateModalEngin, setIsOpenUpdateModalEngin] =
  //     useState<boolean>(false);

  const handleModalClose = () => {
    setIsOpenEngin(false);
  };
  const handleModalOpen = () => {
    setIsOpenEngin(true);
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID Client",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>ID Client</b>
      ),
      flex: 1,
    },
    {
      field: "immatricule",
      headerName: "Immatricule",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Immatricule</b>
      ),
      flex: 1,
      cellClassName: "nom-column--cell",
    },
    {
      field: "nomProprietaire",
      headerName: "Nom propriétaire",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          Nom propriétaire
        </b>
      ),
      flex: 1,
      cellClassName: "prenom-column--cell",
    },
    {
      field: "marque",
      headerName: "Marque",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Marque</b>
      ),
      flex: 1,
      cellClassName: "prenom-column--cell",
    },
    {
      field: "modele",
      headerName: "Modèle",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Modèle</b>
      ),
      flex: 1,
      cellClassName: "sexe-column--cell",
    },
    {
      field: "typeActivite",
      headerName: "Type Activité",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Type Activité</b>
      ),
      flex: 1,
      renderCell: (params: any) => {
        let icon;
        if (params.value === "Moto Taxi") {
          icon = (
            <TwoWheelerRoundedIcon
              style={{ color: " rgb(184, 151, 3)", marginRight: 8 }}
            />
          );
        } else if (params.value === "Moto Personelle") {
          icon = (
            <TwoWheelerRoundedIcon style={{ color: "gray", marginRight: 8 }} />
          );
        } else if (params.value === "Voiture Taxi") {
          icon = (
            <DirectionsBusRoundedIcon
              style={{ color: " rgb(184, 151, 3)", marginRight: 8 }}
            />
          );
        } else if (params.value === "Voiture Personelle") {
          icon = (
            <DirectionsBusRoundedIcon
              style={{ color: "gray", marginRight: 8 }}
            />
          );
        }

        return (
          <Box display="flex" alignItems="center">
            <IconButton>{icon}</IconButton>
            {params.value}
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
      renderCell: (_params: any) => (
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
            <IconButton>
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
            <IconButton>
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
            <IconButton>
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
        clientData={enginsRoulants}
        columns={columns}
        handleModalOpen={handleModalOpen}
      />
      <ModalAddEngin isOpen={isOpenEngin} handleModalClose={handleModalClose} />
    </Box>
  );
};

export default Engin;
