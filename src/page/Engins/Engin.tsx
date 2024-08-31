import { Box, IconButton, Tooltip } from "@mui/material";
import { GrFormEdit } from "react-icons/gr";
import { IoEyeSharp } from "react-icons/io5";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import TwoWheelerRoundedIcon from "@mui/icons-material/TwoWheelerRounded";
import DirectionsBusRoundedIcon from "@mui/icons-material/DirectionsBusRounded";
import { GridColDef } from "@mui/x-data-grid";
import { ToastContainer } from "react-toastify";
import FileBody from "../../Component/Helper/FileBody";
import ModalAddEngin from "../../Component/Modal/Engins/ModalAddEngin";
import { useState } from "react";
import { DeleteModalEngin } from "../../Component/Button/ButtonAdd";
import ModalUpdateEngin from "../../Component/Modal/Engins/ModalUpdateEngin";
import ScannerIcon from "@mui/icons-material/Scanner";
import { useNavigate } from "react-router-dom";
import ModalShowEngin from "../../Component/Modal/Engins/ModalShowEngin";
import ModalQrCode from "../../Component/Modal/Engins/ModalQrCode";
import "./Engins.css";
import { useQuery } from "@tanstack/react-query";
import { GetAllEngin } from "../../backEnd/AuthService";
import Header from "../Header/Header";

const Engin = () => {
  const [isOpenEngin, setIsOpenEngin] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [getValueSearchButton, setGetValueSearchButton] = useState("");
  const [idUpdate, setIdUpdate] = useState<number>();
  const [idShow, setIdShow] = useState<number>();
  const [idDelete, setIdDelete] = useState<number>();

  const [idQr, setIdQr] = useState<number>();

  const navigate = useNavigate();

  const handleModalClose = () => {
    setIsOpenEngin(false);
  };

  const handleModalOpen = () => {
    setIsOpenEngin(true);
  };

  const handleModalCloseDelete = () => {
    setIsOpenDeleteModal(false);
  };

  const handleModalOpenDelete = (enginId: any) => {
    setIsOpenDeleteModal(true);
    setIdDelete(enginId);
  };

  const handleUpdateClick = (id: number) => {
    navigate(`?isOpenModalUpdate=true&id=${id}`);
    setIdUpdate(id);
  };

  const handleShowClick = (id: number) => {
    navigate(`?isOpenModalShow=true&id=${id}`);
    setIdShow(id);
  };

  const handleQrCodeClick = (id: number) => {
    navigate(`?isOpenModalQrCode=true&id=${id}`);
    setIdQr(id);
  };

  const handleSelectChange = (value: string) => {
    setGetValueSearchButton(value);
  };

  const { data: dataUser } = useQuery({
    queryKey: ["getEngin"],
    queryFn: GetAllEngin,
  });
  console.log(dataUser);

  const columns: GridColDef[] = [
    {
      field: "enginId",
      headerName: "ID Engin",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>ID</b>
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
      field: "proprietaire.user.lastname",
      headerName: "Nom propriétaire",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          Nom propriétaire
        </b>
      ),
      flex: 1,
      cellClassName: "prenom-column--cell",
      valueGetter: (Value: any, row: any) => {
        return `${row.proprietaire.user.lastname || ""} `;
      },
    },

    {
      field: "proprietaire.user.firstname",
      headerName: "prénom propriétaire",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          Prenom propriétaire
        </b>
      ),
      flex: 1,
      cellClassName: "prenom-column--cell",
      valueGetter: (Value: any, row: any) => {
        return `${row.proprietaire.user.firstname || ""} `;
      },
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
      headerName: "Modèle",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Modèle</b>
      ),
      flex: 1,
      cellClassName: "sexe-column--cell",
    },
    {
      field: "typeActivity",
      headerName: "Type Activité",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Type Activité</b>
      ),
      flex: 1,
      renderCell: (params: any) => {
        let icon;
        if (params.value === "MOTO_TAXI") {
          icon = (
            <TwoWheelerRoundedIcon
              style={{ color: "rgb(184, 151, 3)", marginRight: 8 }}
            />
          );
        } else if (params.value === "MOTO_PERSONNELLE") {
          icon = (
            <TwoWheelerRoundedIcon style={{ color: "gray", marginRight: 8 }} />
          );
        } else if (params.value === "VOITURE_TAXI") {
          icon = (
            <DirectionsBusRoundedIcon
              style={{ color: "rgb(184, 151, 3)", marginRight: 8 }}
            />
          );
        } else if (params.value === "VOITURE_PERSONNELLE") {
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
            title="Imprimer"
            sx={{
              marginRight: "-15px",
              cursor: "pointer",
              padding: "0px 15px",
            }}
            onClick={() => handleQrCodeClick(_params.row.enginId)}
          >
            <IconButton>
              <ScannerIcon
                style={{ color: "rgba(0, 0, 160, 0.70)" }}
                sx={{ size: "20px" }}
              />
            </IconButton>
          </Tooltip>

          <Tooltip
            title="Afficher"
            sx={{
              marginRight: "-15px",
              cursor: "pointer",
              padding: "0px 15px",
            }}
            onClick={() => handleShowClick(_params.row.enginId)}
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
            onClick={() => handleUpdateClick(_params.row.enginId)}
          >
            <IconButton>
              <GrFormEdit
                size={20}
                style={{ color: "rgba(0, 0, 160, 0.70)" }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip
            onClick={() => handleModalOpenDelete(_params.row.enginId)}
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
          title="La liste des engins"
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
      <ModalAddEngin
        isOpen={isOpenEngin}
        handleModalClose={handleModalClose}
        id={0}
      />

      <DeleteModalEngin
        isOpen={isOpenDeleteModal}
        handleClose={handleModalCloseDelete}
        idItem={idDelete}
      />

      <ModalUpdateEngin id={idUpdate!} />

      <ModalShowEngin id={idShow!} />

      <ModalQrCode id={idQr!} />
    </Box>
  );
};

export default Engin;
