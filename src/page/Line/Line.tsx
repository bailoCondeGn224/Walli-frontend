import { Box, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import FileBody from "../../Component/Helper/FileBody";
import { ToastContainer } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { GetAllLine } from "../../backEnd/AuthService";
import { GridColDef } from "@mui/x-data-grid";
import { IoEyeSharp } from "react-icons/io5";
import { GrFormEdit } from "react-icons/gr";
import AddModalLine from "../../Component/Modal/Line/AddModalLine";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import ShowModalLine from "../../Component/Modal/Line/ShowModalLine";
import ModalUpdateLine from "../../Component/Modal/Line/ModalUpdateLine";
import { DeleteModalLine } from "../../Component/Button/ButtonAdd";

const Line = () => {
  const { data: dataUser } = useQuery({
    queryKey: ["getLine"],
    queryFn: GetAllLine,
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenShowModal, setIsOpenShowModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState<boolean>(false);
  const [idClient, setIdClient] = useState<number>();
  const [idUpdate, setIdUpdate] = useState<number>();
  const [idUpdateSyndicat, setidUpdateSyndicat] = useState<number>();
  const [idDelete, setIdDelete] = useState<number>();
  const [idShow, setIdShow] = useState<number>();

  const navigate = useNavigate();

  const handleModalClose = () => {
    setIsOpen(false);
  };
  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleShowClick = (id: number) => {
    navigate(`?isOpenModalShowLine=true&id=${id}`);
    setIdShow(id);
    console.log(id);
  };

  const handleUpdateClick = (id: number) => {
    navigate(`?isOpenModalUpdateLine=true&id=${id}`);
    setIdUpdate(id);
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
      headerName: "ID Line",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>ID</b>
      ),
      flex: 1,
    },
    {
      field: "nom",
      headerName: "Nom Syndicat",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Nom Syndicat</b>
      ),
      flex: 1,

      valueGetter: (Value: any, row: any) => {
        return `${row.syndicat?.user?.lastname || ""} `;
      },
    },

    {
      field: "prenom",
      headerName: "prenom Syndicat",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Nom Syndicat</b>
      ),
      flex: 1,

      valueGetter: (Value: any, row: any) => {
        return `${row.syndicat?.user?.firstname || ""} `;
      },
    },
    {
      field: "email",
      headerName: "Email",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Email</b>
      ),
      flex: 1,
      valueGetter: (Value: any, row: any) => {
        return `${row.syndicat?.user?.email || ""} `;
      },
    },
    {
      field: "sexe",
      headerName: "Sexe",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Sexe</b>
      ),
      flex: 1,
      valueGetter: (Value: any, row: any) => {
        return `${row.syndicat?.user?.sexe || ""} `;
      },
    },
    {
      field: "phone",
      headerName: "Téléphone",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Téléphone</b>
      ),
      flex: 1,
      valueGetter: (Value: any, row: any) => {
        return `${row.syndicat?.phone || ""} `;
      },
    },
    {
      field: "quartier",
      headerName: "Quartier",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Quartier</b>
      ),
      flex: 1,
      valueGetter: (Value: any, row: any) => {
        return `${row.syndicat?.quartier || ""} `;
      },
    },
    {
      field: "ville",
      headerName: "Ville/Commune",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Ville/Commune</b>
      ),
      flex: 1,
      valueGetter: (Value: any, row: any) => {
        return `${row.syndicat?.ville || ""} `;
      },
    },
    {
      field: "nomline",
      headerName: "Line",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Line</b>
      ),
      flex: 1,
      valueGetter: (Value: any, row: any) => {
        return `${row?.nomline} `;
      },
    },
    {
      field: "engins",
      headerName: "Nombre Engin(s)",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          Nombre Engin(s)
        </b>
      ),
      flex: 1,
      valueGetter: (Value: any, row: any) => {
        return `${row.engins?.length || ""} `;
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
            <IconButton onClick={() => handleShowClick(params.row.id)}>
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
            <IconButton onClick={() => handleUpdateClick(params.row.id)}>
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

  function handleSelectChange(value: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Box>
      <Box>
        <Header
          title="La liste des lines"
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
      <AddModalLine
        isOpen={isOpen}
        handleModalClose={handleModalClose}
        id={0}
      />
      <DeleteModalLine
        isOpen={isOpenDeleteModal}
        handleClose={handleModalCloseDelete}
        idItem={idDelete}
      />
      <ModalUpdateLine id={idUpdate!} />
      <ShowModalLine id={idShow!} />
    </Box>
  );
};

export default Line;
