import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
interface ResetPasswordProps {
  open: boolean;
  onClose: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ open, onClose }) => {
  const [close, setClose] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClose = () => {
    setClose(true);
  };

  // Fonction pour fermer le modal
  const closeQrcode = () => {
    navigate("/engins/engin1");
  };
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "30%",
          background: "white",
        },
      }}
      maxWidth="lg"
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box>
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
            Enregistrement d'un client
          </DialogTitle>
          <Button
            onClick={onClose}
            sx={{ fontSize: "1.3rem", fontWeight: "bold", mr: 1.5 }}
          >
            <CancelPresentationIcon
              sx={{
                color: "rgba(0, 0, 160, 0.70)",
                width: "30px",
                height: "30px",
              }}
            />
          </Button>
        </Box>
        <DialogContent dividers>
          <Box
            sx={{
              p: 1,
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "14px",
            }}
          >
            <Box>
              <label htmlFor="email">Adresse mail</label>
              <TextField
                fullWidth
                type="text"
                size="small"
                name="email"
                id="outlined-email"
                variant="outlined"
              />
            </Box>
            <Box>
              <label htmlFor="old-password">Ancien Mot de passe</label>
              <TextField
                fullWidth
                type="password"
                size="small"
                name="old-password"
                id="outlined-old-password"
                variant="outlined"
              />
            </Box>
            <Box>
              <label htmlFor="new-password">Nouvelle Mot de Passe</label>
              <TextField
                fullWidth
                type="password"
                size="small"
                name="new-password"
                id="outlined-new-password"
                variant="outlined"
              />
            </Box>
            <Box>
              <label htmlFor="confirm-password">
                Confirmation Mot de Passe
              </label>
              <TextField
                fullWidth
                type="password"
                size="small"
                name="confirm-password"
                id="outlined-confirm-password"
                variant="outlined"
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "space-between",
            marginTop: "15px",
            mr: 2.8,
            ml: 2.5,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              bgcolor: "#F33E3E",
              color: "white",
              ml: "0px",
              borderRadius: "6px",
              fontWeight: "bold",
              height: "36px",
              width: "170px",
              border: "none",
              "&:hover": {
                bgcolor: "black",
                color: "white",
                height: "36px",
              },
            }}
            onClick={onClose}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              bgcolor: "rgba(0, 0, 160, 0.70)",
              borderRadius: "5px",
              height: "36px",
              color: "white",
              width: "170px",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "black",
                color: "white",
                height: "36px",
              },
            }}
          >
            Ajouter
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ResetPassword;
