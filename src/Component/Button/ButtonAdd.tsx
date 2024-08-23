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
import { DatePicker } from "@mui/lab";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DeleteUser } from "../../backEnd/AuthService";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";
interface ButtonAddProps {
  onClick: () => void;
}

interface ButtonDelete {
  isOpen: boolean;
  handleClose: () => void;
  idItem: any;
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
  idItem,
}) => {
  const queryClient = useQueryClient();

  const notify = () => toast.success("Suppression  effectuée avec succès!");
  const notifyErreur = () =>
    toast.error("Suppression a echouée", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  // Mutation pour supprimer un utilisateur
  const mutation = useMutation({
    mutationFn: (id: number) => DeleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllUsers"],
        exact: true,
        refetchType: "active",
      });
      handleClose();
      notify();
    },
    onError: (error) => {
      console.error("Erreur lors de la suppression :", error);
      notifyErreur();
    },
  });

  const handleDelete = () => {
    mutation.mutate(idItem);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
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
                color: "rgba(0, 0, 160, 0.70)",
                width: "30px",
                height: "30px",
              }}
            />
          </Button>
        </Box>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Etes-vous sûr de vouloir supprimer cet élément ?
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
              onClick={handleDelete}
              // disabled={mutation.isLoading}
            >
              Confirmer
            </Button>
          </DialogActions>
        </Box>
      </Box>
    </Modal>
  );
};

// Style object for the modal (you might want to define it outside of the component)
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

export const DateButtonSelected = () => {
  return (
    <LocalizationProvider>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          label={'"month"'}
          openTo="month"
          views={["year", "month", "day"]}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
