import { Box, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import FileBody from "../../Component/Helper/FileBody";

import TwoWheelerRoundedIcon from "@mui/icons-material/TwoWheelerRounded";
import DirectionsBusRoundedIcon from "@mui/icons-material/DirectionsBusRounded";
import { GridColDef } from "@mui/x-data-grid";
import { IoEyeSharp } from "react-icons/io5";
import { GrFormEdit } from "react-icons/gr";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { taxesData } from "../../Data/ClientData";
import Header from "../Header/Header";

const Taxe = () => {
  const [isOpenEngin, setIsOpenEngin] = useState<boolean>(false);
  const [getValueSearchButton, setGetValueSearchButton] = useState("");

  const handleModalOpen = () => {
    setIsOpenEngin(true);
  };

  const handleSelectChange = (value: string) => {
    setGetValueSearchButton(value);
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID Taxe",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>ID Taxe</b>
      ),
      flex: 1,
    },
    {
      field: "matricule",
      headerName: "Immatricule",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Immatricule</b>
      ),
      flex: 1,
      cellClassName: "nom-column--cell",
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
      field: "model",
      headerName: "Model",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Model</b>
      ),
      flex: 1,
      cellClassName: "prenom-column--cell",
    },
    {
      field: "montant",
      headerName: "Montant",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Montant</b>
      ),
      flex: 1,
      cellClassName: "sexe-column--cell",
    },
    {
      field: "mois",
      headerName: "Mois",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Mois</b>
      ),
      flex: 1,
      cellClassName: "sexe-column--cell",
    },
    {
      field: "status",
      headerName: "Status",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Status</b>
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
            // onClick={() => handleShowClick(_params.row.id)}
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
            // onClick={() => handleUpdateClick(_params.row.id)}
          >
            <IconButton>
              <GrFormEdit
                size={20}
                style={{ color: "rgba(0, 0, 160, 0.70)" }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip
            // onClick={handleModalOpenDelete}
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
      <Box>
        <Header
          title="Taxes"
          subtitle="La liste des clients"
          nombre1="65%"
          entete1="Pourcentage"
          nombre2="1000"
          entete2="Payement du mois"
        />
      </Box>
      <FileBody
        clientData={taxesData}
        columns={columns}
        handleModalOpen={handleModalOpen}
        onSelectChange={handleSelectChange}
      />
    </Box>
  );
};

export default Taxe;
