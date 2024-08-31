import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { toast } from "react-toastify";
import { addCustumer } from "../../Interface/InterfaceClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  initialValuesGare,
  SignupSchemaGare,
} from "../../Helper/InitialevalueFormik";
import { AddGare } from "../../../backEnd/AuthService";

const AddModalGare = ({ isOpen, handleModalClose }: addCustumer) => {
  const notify = () => toast.success("Insertion  effectuée avec succès!");
  const notifyErreur = () =>
    toast.error("Insertion a echouée", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: AddGare,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getGare"],
        exact: true,
        refetchType: "active",
      });
      handleModalClose();
      notify();
    },
    onError: (error) => {
      console.log(error);
      notifyErreur();
      handleModalClose();
    },
  });

  const handleSubmits = (values: any) => {
    console.log(values);
    const submissionValues = {
      ...values,
      syndicatId: parseInt(values.syndicatId, 10),
    };
    mutation.mutate(submissionValues);
  };
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "50%",
          maxWidth: "md",
          maxHeight: 600,
          background: "white",
          padding: 2,
        },
      }}
      maxWidth="md"
      open={isOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >
          Enregistrement d'une gare
        </DialogTitle>
        <Button
          sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
          onClick={handleModalClose}
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

      <Formik
        onSubmit={handleSubmits}
        initialValues={initialValuesGare}
        validationSchema={SignupSchemaGare}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <DialogContent dividers>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(1, 1fr)",
                  gap: "16px",
                  "@media (min-width:600px)": {
                    gridTemplateColumns: "repeat(2, 1fr)",
                  },
                }}
              >
                <Box>
                  <label htmlFor="nomline" style={{ fontWeight: "bold" }}>
                    Nom gare
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="nom"
                    name="nom"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.nom}
                    error={!!touched.nom && !!errors.nom}
                    helperText={touched.nom && errors.nom}
                    sx={{ height: "40px" }}
                  />
                </Box>
                <Box>
                  <label htmlFor="ville" style={{ fontWeight: "bold" }}>
                    ville
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="city"
                    name="city"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.city}
                    error={!!touched.city && !!errors.city}
                    helperText={touched.city && errors.city}
                    sx={{ height: "40px" }}
                  />
                </Box>
                <Box>
                  <label htmlFor="longitude" style={{ fontWeight: "bold" }}>
                    Longitude
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="longitude"
                    name="longitude"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.longitude}
                    error={!!touched.longitude && !!errors.longitude}
                    helperText={touched.longitude && errors.longitude}
                    sx={{ height: "40px" }}
                  />
                </Box>
                <Box>
                  <label htmlFor="altitude" style={{ fontWeight: "bold" }}>
                    Altitude
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="altitude"
                    name="altitude"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.altitude}
                    error={!!touched.altitude && !!errors.altitude}
                    helperText={touched.altitude && errors.altitude}
                    sx={{ height: "40px" }}
                  />
                </Box>
                <Box>
                  <label htmlFor="latitude" style={{ fontWeight: "bold" }}>
                    Latitude
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="latitude"
                    name="latitude"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.latitude}
                    error={!!touched.latitude && !!errors.latitude}
                    helperText={touched.latitude && errors.latitude}
                    sx={{ height: "40px" }}
                  />
                </Box>
                <Box>
                  <label htmlFor="syndicatId" style={{ fontWeight: "bold" }}>
                    Syndicat ID
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="syndicatId"
                    name="syndicatId"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.syndicatId}
                    error={!!touched.syndicatId && !!errors.syndicatId}
                    helperText={touched.syndicatId && errors.syndicatId}
                    sx={{ height: "40px" }}
                  />
                </Box>
              </Box>
            </DialogContent>
            <DialogActions
              sx={{
                justifyContent: "space-between",
                marginTop: "15px",
                mr: 2.8,
                ml: 2.8,
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
                  height: "36px",
                  width: "170px",
                  "&:hover": {
                    bgcolor: "black",
                    color: "white",
                  },
                }}
                onClick={handleModalClose}
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
                  },
                }}
              >
                Ajouter
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default AddModalGare;
