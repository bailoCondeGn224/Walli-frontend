import { Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import Header from "../Header/Header";
import FileBody from "../../Component/Helper/FileBody";
import { ToastContainer } from "react-toastify";
import { DeleteModalDestionation } from "../../Component/Button/ButtonAdd";
import UpdateModalGare from "../../Component/Modal/Gare/UpdateModalGare";
import { IoEyeSharp } from "react-icons/io5";
import { GrFormEdit } from "react-icons/gr";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { GetAllDestination } from "../../backEnd/AuthService";
import AddModalDestination from "../../Component/Modal/Destination/AddModalDestination";
import ShowModalDestination from "../../Component/Modal/Destination/ShowModalDestination";
import UpdateModalDestination from "../../Component/Modal/Destination/UpdateModalDestination";

const Trajet = () => {
  const { data: dataUser } = useQuery({
    queryKey: ["getDestination"],
    queryFn: GetAllDestination,
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
    navigate(`?isOpenModalShowDestinationUpdate=true&id=${id}`);
    setIdUpdate(id);
  };
  const handleShowClick = (id: number) => {
    navigate(`?isOpenModalShowDestination=true&id=${id}`);
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
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID Gestination",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>ID Gestination</b>
      ),
      flex: 1,
    },
    {
      field: "villeDepart",
      headerName: "Ville de Départ",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Nom de Départ</b>
      ),
      flex: 1,
    },
    {
      field: "villeDestination",
      headerName: "Ville d'Arrivée",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          Ville d'Arrivée
        </b>
      ),
      flex: 1,
    },

    {
      field: "gare.nom",
      headerName: "Nom de Destination",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          Nom de Destination
        </b>
      ),
      flex: 1,
      cellClassName: "prenom-column--cell",
      valueGetter: (Value: any, row: any) => {
        return `${row?.gare?.nom || ""} `;
      },
    },
    {
      field: "prix",
      headerName: "Prix de Destination (GNF)",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
          Prix de Destination (GNF)
        </b>
      ),
      flex: 1,
      valueGetter: (Value: any, row: any) => {
        return `${row.prix || ""} `;
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
            <IconButton
              onClick={() => handleShowClick(params.row.destinationId)}
            >
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
              onClick={() => handleUpdateClick(params.row.destinationId)}
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
              onClick={() => handleModalOpenDelete(params.row.destinationId)}
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
          title="La liste des destination"
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

      <AddModalDestination
        isOpen={isOpen}
        handleModalClose={handleModalClose}
        id={0}
      />

      <DeleteModalDestionation
        isOpen={isOpenDeleteModal}
        handleClose={handleModalCloseDelete}
        idItem={idDelete}
      />
      <UpdateModalDestination id={idUpdate!} />
      <ShowModalDestination id={idShow!} />
    </Box>
  );
};

export default Trajet;
