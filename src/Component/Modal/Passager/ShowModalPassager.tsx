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
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import { useNavigate, useSearchParams } from "react-router-dom";
import { GetByIdPassager } from "../../../backEnd/AuthService";

const ShowModalPassager = ({ id }: { id: number }) => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  const {
    data: dataUser,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getByIdPassager", id],
    queryFn: () => GetByIdPassager(id),
    enabled: !!id,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;
  console.log("les donnée:", dataUser);
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
      open={searchParams.get("isOpenModalShowPassager") === "true"}
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
          Information d'un passager(e)
        </DialogTitle>
        <Button
          sx={{ fontSize: "1.3rem", fontWeight: "bold", mr: 1.5 }}
          onClick={() => navigate("/clients/passager")}
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
              <Tab label="Le detail d'une destination" value="1" />
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
                    nom
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.datas?.nom}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Prénom
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.datas?.prenom}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Ville de départ
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.datas?.villeDepart}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Ville de destination
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.datas?.villeDestination}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Télephone
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.datas?.phone}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Nom de la gare
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.datas?.gare?.nom}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Status
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.datas?.status}
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

export default ShowModalPassager;
