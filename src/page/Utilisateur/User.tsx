import React, { useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import FileBody from "../../Component/Helper/FileBody";
import { DeleteModal } from "../../Component/Button/ButtonAdd";
import { IoEyeSharp } from "react-icons/io5";
import { GrFormEdit } from "react-icons/gr";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { GridColDef } from "@mui/x-data-grid";
import AddUserModal from "../../Component/Modal/User/AddUserModal";
import UdateModalUser from "../../Component/Modal/User/UdateModalUser";
import { initialUserValues } from "../../Component/Helper/InitialevalueFormik";
import ShowModalUser from "../../Component/Modal/User/ShowModalUser";
import { useQuery } from "@tanstack/react-query";
import { GetAllUsers } from "../../backEnd/AuthService";
import { MdOutlineAutofpsSelect } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import Client from "../../Component/Modal/Clients/Client";
import Header from "../Header/Header";

const User = () => {
  const [isOpenUser, setIsOpenUser] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isOpenShowModal, setIsOpenShowModal] = useState<boolean>(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState<boolean>(false);
  const [isuser, setIsuser] = useState<any>();
  const [showIdUser, setShowIdUser] = useState();
  const [updateId, setUpdate] = useState();
  const [insertProperty, setInsertProperty] = useState<number>();
  const [insertPropertyModal, setInsertPropertyModal] =
    useState<boolean>(false);

  const handleModalOpenUpdate = (id: any) => {
    setUpdate(id);
    setIsOpenUpdateModal(true);
  };

  const handleModalInsertProperty = (id: number) => {
    setInsertProperty(id);
    setInsertPropertyModal(true);
  };

  const handleModalOpenUpdateClose = () => {
    setIsOpenUpdateModal(false);
  };
  const handleModalOpenPropertyClose = () => {
    setInsertPropertyModal(false);
  };

  const handleModalOpenShow = (id: any) => {
    setIsOpenShowModal(true);
    setShowIdUser(id);
  };

  const handleModalCloseShowModal = () => {
    setIsOpenShowModal(false);
  };

  const handleModalCloseDelete = () => {
    setIsOpenDeleteModal(false);
  };

  const handleModalOpenDelete = (id: any) => {
    setIsOpenDeleteModal(true);
    setIsuser(id);
    console.log("l'id de l'user:", id);
  };

  const handleModalOpen = () => {
    setIsOpenUser(true);
  };

  const handleModalClose = () => {
    setIsOpenUser(false);
  };

  const {
    data: dataUser,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: GetAllUsers,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID User",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>ID Client</b>
      ),
      flex: 1,
    },
    {
      field: "firstname",
      headerName: "Prenom",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Prenom</b>
      ),
      flex: 1,
      cellClassName: "nom-column--cell",
    },
    {
      field: "lastname",
      headerName: "Nom",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Nom</b>
      ),
      flex: 1,
      cellClassName: "prenom-column--cell",
    },
    {
      field: "username",
      headerName: "Login",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Login</b>
      ),
      flex: 1,
      cellClassName: "prenom-column--cell",
    },
    {
      field: "role",
      headerName: "Role",
      valueGetter: (Value: any, row: any) => {
        return `${row.roles || ""} `;
      },
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Role</b>
      ),
      flex: 1,
      cellClassName: "prenom-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Email</b>
      ),
      flex: 1,
      cellClassName: "sexe-column--cell",
    },
    {
      field: "sexe",
      headerName: "Sexe",
      renderHeader: () => (
        <b style={{ fontSize: "0.9rem", fontWeight: "bold" }}>Sexe</b>
      ),
      flex: 1,
      cellClassName: "sexe-column--cell",
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
            title="inserer propriétaire"
            sx={{
              marginRight: "-15px",
              cursor: "pointer",
              padding: "0px 15px",
            }}
            onClick={() => handleModalInsertProperty(_params.row.id)}
          >
            <IconButton>
              <MdOutlineAutofpsSelect
                size={20}
                style={{ color: "rgba(0, 0, 160, 0.70)" }}
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
            onClick={() => handleModalOpenShow(_params.row.id)}
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
            onClick={() => handleModalOpenUpdate(_params.row.id)}
          >
            <IconButton>
              <GrFormEdit
                size={20}
                style={{ color: "rgba(0, 0, 160, 0.70)" }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip
            onClick={() => handleModalOpenDelete(_params.row.id)}
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
          title="La liste des utilisateurs"
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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AddUserModal isOpen={isOpenUser} handleClose={handleModalClose} />
      <DeleteModal
        isOpen={isOpenDeleteModal}
        handleClose={handleModalCloseDelete}
        idItem={isuser}
      />
      <UdateModalUser
        id={updateId}
        isOpen={isOpenUpdateModal}
        handleClose={handleModalOpenUpdateClose}
        initialUserValues={initialUserValues}
      />
      <ShowModalUser
        id={showIdUser}
        isOpen={isOpenShowModal}
        handleClose={handleModalCloseShowModal}
        initialUserValues={initialUserValues}
      />
      <Client
        isOpen={insertPropertyModal}
        handleModalClose={handleModalOpenPropertyClose}
        id={insertProperty!}
      />
    </Box>
  );
};

export default User;
