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
import React from "react";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { addCustumer } from "../../Interface/InterfaceClient";
import { useQuery } from "@tanstack/react-query";
import { GetByIdSyndicat } from "../../../backEnd/AuthService";

interface ShowModalProps extends addCustumer {
  isOpen: boolean;
  handleModalClose: () => void;
  id: number;
  role: string;
}

const ShowModalSyndicat: React.FC<ShowModalProps> = ({
  isOpen,
  handleModalClose,
  role,
  id,
}) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const {
    data: dataUser,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getProprietaireById", id],
    queryFn: () => GetByIdSyndicat(id),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

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
      open={isOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          ml: 1,
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >
          Information d'un syndicat
        </DialogTitle>
        <Button
          sx={{ fontSize: "1.3rem", fontWeight: "bold", mr: 1.5 }}
          onClick={handleModalClose}
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
                    Nom
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.user.lastname}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Prenom
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.user.firstname}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Sexe
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.user.sexe}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Numero Telephone
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.phone}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Adresse Mail
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.user.email}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Date de Naissance
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.dateOfBirth}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Role
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {role}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Ville de Naissance
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.ville}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Nationnalité
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.pays}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Quartier
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dataUser?.quartier}
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

export default ShowModalSyndicat;
