import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Typography,
  Tab,
  Grid,
} from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { addCustumer, showClient } from "../../Interface/InterfaceClient";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Profile from "../../../assets/Profile.webp";

interface ShowModalProps extends addCustumer, showClient {
  isOpen: boolean;
  handleModalClose: () => void;
}

const ShowModal: React.FC<ShowModalProps> = ({
  isOpen,
  handleModalClose,
  nom,
  prenom,
  email,
  role,
  dateNaissance,
  ville,
  pieceIdentite,
  sexe,
  typePiece,
  nationnalite,
  numeroTelephone,
}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
                  <span style={{ fontSize: "14px", color: "gray" }}>{nom}</span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Prenom
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {prenom}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Sexe
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {sexe}
                  </span>
                </Grid>
                <Grid
                  item
                  xs={0}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Profil
                  </Typography>
                  <Box
                    component="img"
                    sx={{
                      height: 100,
                      width: 100,
                      borderRadius: "50%",
                      mt: 1,
                    }}
                    alt="Profile"
                    src={Profile}
                  />
                </Grid>

                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Numero Telephone
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {numeroTelephone}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Adresse Mail
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {email}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Date de Naissance
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {dateNaissance}
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
                    Type Piece
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {typePiece}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Ville de Naissance
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {ville}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Nationnalité
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {nationnalite}
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Numero du Piece Identité
                  </Typography>
                  <span style={{ fontSize: "14px", color: "gray" }}>
                    {pieceIdentite}
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

export default ShowModal;
