import { Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import FileBody from "../../Component/Helper/FileBody";
import { ToastContainer } from "react-toastify";
import { GridColDef } from "@mui/x-data-grid";
import { IoEyeSharp } from "react-icons/io5";
import { GrFormEdit } from "react-icons/gr";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useQuery } from "@tanstack/react-query";
import { GetAllGare } from "../../backEnd/AuthService";
import Header from "../Header/Header";
import AddModalGare from "../../Component/Modal/Gare/AddModalGare";
import { DeleteModalGare } from "../../Component/Button/ButtonAdd";
import ShowModalGare from "../../Component/Modal/Gare/ShowModalGare";
import { useNavigate } from "react-router-dom";
import UpdateModalGare from "../../Component/Modal/Gare/UpdateModalGare";

const Gare = () => {
  const { data: dataUser } = useQuery({
    queryKey: ["getGare"],
    queryFn: GetAllGare,
  });

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
    navigate(`?isOpenModalShowGare=true&id=${id}`);
    setIdShow(id);
    console.log(id);
  };

  const handleModalCloseDelete = () => {
    setIsOpenDeleteModal(false);
  };

  const handleModalOpenDelete = (id: number) => {
    setIsOpenDeleteModal(true);
    setIdDelete(id);
  };

  console.log(dataUser);
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID Gare",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>ID Gare</b>
      ),
      flex: 1,
    },
    {
      field: "nom",
      headerName: "Nom de la Gare",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Nom de la Gare</b>
      ),
      flex: 1,
    },
    {
      field: "city",
      headerName: "Ville",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Ville</b>
      ),
      flex: 1,
    },
    {
      field: "longitude",
      headerName: "Longitude",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Longitude</b>
      ),
      flex: 1,
    },
    {
      field: "altitude",
      headerName: "Altitude",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Altitude</b>
      ),
      flex: 1,
    },
    {
      field: "latitude",
      headerName: "Latitude",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Latitude</b>
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
            <IconButton onClick={() => handleShowClick(params.row.gareId)}>
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
            <IconButton onClick={() => handleUpdateClick(params.row.gareId)}>
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
              onClick={() => handleModalOpenDelete(params.row.gareId)}
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
      <Box>
        <Header
          title="La liste des gares"
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

      <AddModalGare
        isOpen={isOpen}
        handleModalClose={handleModalClose}
        id={0}
      />
      <DeleteModalGare
        isOpen={isOpenDeleteModal}
        handleClose={handleModalCloseDelete}
        idItem={idDelete}
      />
      <UpdateModalGare id={idUpdate!} />
      <ShowModalGare id={idShow!} />
    </Box>
  );
};

export default Gare;
