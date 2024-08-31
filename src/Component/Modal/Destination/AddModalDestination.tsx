import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { addCustumer } from "../../Interface/InterfaceClient";
import {
  initialValuesDestination,
  SignupSchemaDestination,
} from "../../Helper/InitialevalueFormik";
import { villesGuineeConakry } from "../../../Data/ClientData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AddDestination } from "../../../backEnd/AuthService";

const AddModalDestination = ({ isOpen, handleModalClose }: addCustumer) => {
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
    mutationFn: AddDestination,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getDestination"],
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
    console.log("voici les valeur:", values);

    const submissionValues = {
      ...values,
      prix: parseFloat(values.prix),
      gareId: parseInt(values.gareId, 10),
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
          Enregistrement d'une Destination
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
        initialValues={initialValuesDestination}
        validationSchema={SignupSchemaDestination}
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
                  <label htmlFor="villeDepart" style={{ fontWeight: "bold" }}>
                    Ville de départ
                  </label>
                  <Select
                    fullWidth
                    size="small"
                    labelId="demo-simple-select-label"
                    id="villeDepart"
                    name="villeDepart"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.villeDepart}
                    error={!!touched.villeDepart && !!errors.villeDepart}
                  >
                    {villesGuineeConakry.map((ville) => (
                      <MenuItem key={ville} value={ville}>
                        {ville}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <Box>
                  <label
                    htmlFor="villeDestination"
                    style={{ fontWeight: "bold" }}
                  >
                    Ville de destination
                  </label>
                  <Select
                    fullWidth
                    size="small"
                    labelId="demo-simple-select-label"
                    id="villeDestination"
                    name="villeDestination"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.villeDestination}
                    error={
                      !!touched.villeDestination && !!errors.villeDestination
                    }
                  >
                    {villesGuineeConakry.map((ville) => (
                      <MenuItem key={ville} value={ville}>
                        {ville}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <Box>
                  <label htmlFor="prix" style={{ fontWeight: "bold" }}>
                    Prix(GNF)
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="prix"
                    name="prix"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.prix || ""}
                    error={!!touched.prix && !!errors.prix}
                    helperText={touched.prix && errors.prix}
                    sx={{ height: "40px" }}
                  />
                </Box>
                <Box>
                  <label htmlFor="gareId" style={{ fontWeight: "bold" }}>
                    Gare ID
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="gareId"
                    name="gareId"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.gareId || ""}
                    error={!!touched.gareId && !!errors.gareId}
                    helperText={touched.gareId && errors.gareId}
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

export default AddModalDestination;
