import React, { useState } from "react";
import {
  Box,
  Button,
  DialogActions,
  MenuItem,
  Modal,
  Select,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

interface ButtonAddProps {
  onClick: () => void;
}

interface ButtonDelete {
  isOpen: boolean;
  handleClose: () => void;
}

export const ButtonAdd: React.FC<ButtonAddProps> = ({ onClick }) => {
  return (
    <div>
      <Button
        onClick={onClick}
        sx={{
          border: "1px solid rgba(0,0,160, 0.7)",
          width: "128px",
          height: "36px",
          borderRadius: "0",
          color: "black",
          mb: "3px",
          "&:hover": {
            backgroundColor: "#000000",
            color: "#ffffff",
          },
        }}
      >
        Ajouter
      </Button>
    </div>
  );
};

interface Engin {
  motot: string;
  voitureT: string;
  motoP: string;
  voitureP: string;
}

const valueSeach: Engin[] = [
  {
    motot: "TAXI MOTO",
    voitureT: "TAXI VOITURE",
    motoP: "MOTO PERSONNELLE",
    voitureP: "VOITURE PERSONNELLE",
  },
];

interface ButtonSelectSeachProps {
  onSelectChange: (value: string) => void;
}

export const ButtonSelectSeach: React.FC<ButtonSelectSeachProps> = ({
  onSelectChange,
}) => {
  const [valueSelectForm, setValueSelectForm] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setValueSelectForm(value);
    onSelectChange(valueSelectForm);
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      name="valueSelectForm"
      onChange={handleChange}
      value={valueSelectForm}
      sx={{
        border: "1px solid rgba(0,0,160, 0.7)",
        width: "140px",
        height: "36px",
        borderRadius: "0",
        color: "black",
        mb: "3px",
      }}
    >
      {[
        "TAXI MOTO",
        "TAXI VOITURE",
        "MOTO PERSONNELLE",
        "VOITURE PERSONNELLE",
      ].map((value) => (
        <MenuItem key={value} value={value}>
          {value}
        </MenuItem>
      ))}
    </Select>
  );
};

export const DeleteModal: React.FC<ButtonDelete> = ({
  isOpen,
  handleClose,
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 426,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 1,
  };

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirmation
          </Typography>

          <Button onClick={handleClose}>
            <CancelPresentationIcon
              sx={{
                color: "rgba(0, 0, 160, 0.70) ",
                width: "30px",
                height: "30px",
              }}
            />
          </Button>
        </Box>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Etes vous sur de vouloir supprimer cet élément?
          <Typography color="rgba(0, 0, 160, 0.70)" sx={{ fontSize: "14px" }}>
            Cette action est irréversible
          </Typography>
        </Typography>
        <Box>
          <DialogActions
            sx={{
              justifyContent: "space-between",
              marginTop: "15px",
              mr: 0,
              ml: 0,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                bgcolor: "#F33E3E",
                color: "white",
                ml: "5px",
                borderRadius: "6px",
                fontWeight: "bold",
                height: "30px",
                width: "153px",
                "&:hover": {
                  bgcolor: "black",
                  color: "white",
                  height: "30px",
                },
              }}
              onClick={handleClose}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              variant="outlined"
              sx={{
                bgcolor: "rgba(0, 0, 160, 0.70)",
                borderRadius: "5px",
                height: "30px",
                color: "white",
                width: "153px",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "black",
                  color: "white",
                  height: "30px",
                },
              }}
            >
              Confirmer
            </Button>
          </DialogActions>
        </Box>
      </Box>
    </Modal>
  );
};
