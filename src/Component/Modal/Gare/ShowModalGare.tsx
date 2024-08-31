import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  Tab,
  Typography,
} from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { GetByIdGare } from "../../../backEnd/AuthService";

const ShowModalGare = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const {
    data: dataUser,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getProprietaireByIdGare", { id }],
    queryFn: () => GetByIdGare(id),
    enabled: !!id,
  });

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "85%",
          maxHeight: 500,
          background: "white",
        },
      }}
      maxWidth="lg"
      open={searchParams.get("isOpenModalShowGare") === "true"}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          ml: 1.3,
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >
          Information d'un client
        </DialogTitle>
        <Button
          sx={{ fontSize: "1.3rem", fontWeight: "bold", mr: 1.5 }}
          onClick={() => navigate("/engins/gare")}
        >
          <CancelPresentationIcon
            sx={{
              color: "rgba(0, 0, 160, 0.70) ",
              width: "30px",
              height: "30px",
            }}
          />
        </Button>
      </Box>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Vos Informations Personnelles" value="1" />
              <Tab label="Vos Engins" value="2" />
              <Tab label="Vos Taxes" value="3" />
              <Tab label="Autres Activités" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Nom de la gare
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.nom}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Ville de la line
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.city}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Numéro Téléphone du syndicat
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.syndicat?.phone}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Adresse Mail du syndicat
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.syndicat?.user?.email}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Prenom Syndicat
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.syndicat?.user?.firstname}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Nom Syndicat
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.syndicat?.user?.lastname}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Date de Naissance du syndicat
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {new Date(
                      dataUser?.syndicat?.dateOfBirth
                    ).toLocaleDateString()}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Pays du syndicat
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.syndicat?.nationality}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Ville du syndicat
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.syndicat?.ville}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Quartier du syndicat
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.syndicat?.quartier}
                  </span>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>

          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item Four</TabPanel>
        </TabContext>
      </Box>
    </Dialog>
  );
};

export default ShowModalGare;
