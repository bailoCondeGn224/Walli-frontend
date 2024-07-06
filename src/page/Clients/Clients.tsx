import { Box, Button, IconButton, Tooltip } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { IoMdDownload } from "react-icons/io";
import ClientData from "../../Data/ClientData";
import DeleteIcon from "@mui/icons-material/Delete";
import { IoEyeSharp } from "react-icons/io5";
import { GrFormEdit } from "react-icons/gr";

import "./Clients.css";

const Clients = () => {
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
              <DeleteIcon sx={{ color: "red" }} size={10} />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box m="0px">
      <Box
        marginTop="25px"
        marginLeft="40px"
        marginRight="40px"
        height="75vh"
        sx={{
          background: "#ffffff",
          "& .nom-column--cell": {
            color: `var(--color-text-black)`,
          },
          "& .MuiDataGrid-row": {
            color: `var(--color-text-black)`,
          },
          "& .MuiDataGrid-columnHeadersInner": {
            bgcolor: "#FFFFFF",
          },
          "& .MuiDataGrid-VirtualScroller": {
            bgcolor: "#FFFFFF",
          },
          "& .MuiDataGrid-footerContainer": {
            bgcolor: "#FFFFFF",
          },
          "&.css-128fb87-MuiDataGrid-toolbarContainer": {
            bgcolor: "#FFFFFF",
          },
          "& .MuiDataGrid-virtualScrollerContent": {
            bgcolor: "#FFFFFF",
          },
        }}
      >
        <DataGrid
          rows={ClientData}
          columns={columns}
          pagination={true}
          checkboxSelection
          initialState={{
            pagination: { paginationModel: { pageSize: 9 } },
          }}
          pageSizeOptions={[5, 9, 25]}
          getRowId={(row) => row.id}
          slots={{
            toolbar: () => (
              <GridToolbarContainer
                sx={{
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: "10px",
                }}
              >
                <div>
                  <GridToolbarColumnsButton />
                  <GridToolbarFilterButton />
                  <GridToolbarDensitySelector />
                </div>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Button
                    variant="outlined"
                    // onClick={() => clientDataExport(ClientData)}
                    sx={{
                      color: "rgba(0, 0, 160, 0.70)",
                      borderColor: "rgba(0, 0, 160, 0.70)",
                      borderRadius: "0px",
                      minWidth: "36px",
                      minHeight: "36px",
                      padding: "0",
                      mb: "3px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        backgroundColor: "#000000",
                        color: "#ffffff",
                      },
                    }}
                  >
                    <IoMdDownload />
                  </Button>
                </Box>
              </GridToolbarContainer>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default Clients;
