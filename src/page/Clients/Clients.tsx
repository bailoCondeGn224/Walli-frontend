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

const Clients = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenShowModal, setIsOpenShowModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };
  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalOpenShow = () => {
    setIsOpenShowModal(true);
  };

  const handleModalCloseUpdate = () => {
    setIsOpenUpdateModal(false);
  };

  const handleModalOpenUpdate = () => {
    setIsOpenUpdateModal(true);
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
  // pour les colonnes du tableau
  const columns: any[] = [
    {
      field: "id",
      headerName: (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>ID Client</b>
      ),
      flex: 1,
    },
    {
      field: "nom",
      headerName: <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Nom</b>,
      flex: 1,
      cellClassName: "nom-column--cell",
    },
    {
      field: "prenom",
      headerName: (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Prénom</b>
      ),
      flex: 1,
      cellClassName: "prenom-column--cell",
    },
    {
      field: "email",
      headerName: (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Email </b>
      ),
      flex: 1,
      cellClassName: "prenom-column--cell",
    },
    {
      field: "sexe",
      headerName: (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Sexe</b>
      ),
      flex: 1,
      cellClassName: "sexe-column--cell",
    },
    {
      field: "telephone",
      headerName: (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Telephone</b>
      ),
      flex: 1,
    },
    {
      headerName: (
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
            <IconButton onClick={handleModalOpenShow}>
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
            <IconButton onClick={handleModalOpenUpdate}>
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
        clientData={ClientData}
        columns={columns}
        handleModalOpen={handleModalOpen}
        onSelectChange={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Client isOpen={isOpen} handleModalClose={handleModalClose} />
      <DeleteModal
        isOpen={isOpenDeleteModal}
        handleClose={handleModalCloseDelete}
      />
      <ShowModal
        nom="conde"
        prenom="bailo"
        email="bailoconde@gmail.com"
        role="admin"
        dateNaissance="01-1998"
        ville="conakry"
        numeroTelephone="613134885"
        typePiece="passport"
        pieceIdentite="0054875421"
        sexe="M"
        nationnalite="Guineen"
        isOpen={isOpenShowModal}
        handleModalClose={handleModalCloseShowModal}
      />
      <UpdateModal
        nom="conde"
        prenom="bailo"
        email="bailoconde@gmail.com"
        role="admin"
        dateNaissance="01-1998"
        ville="conakry"
        numeroTelephone="613134885"
        typePiece="passport"
        pieceIdentite="0054875421"
        sexe="M"
        nationnalite="Guineen"
        isOpen={isOpenUpdateModal}
        handleModalClose={handleModalCloseUpdate}
      />
    </Box>
  );
};

export default Clients;
