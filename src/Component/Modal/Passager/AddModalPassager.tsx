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
import {
  initialValuesPassagerAdd,
  userSchemaPassager,
} from "../../Helper/InitialevalueFormik";
import { villesGuineeConakry } from "../../../Data/ClientData";
import { addCustumer } from "../../Interface/InterfaceClient";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddPersonne } from "../../../backEnd/AuthService";

const AddModalPassager = ({ isOpen, handleModalClose }: addCustumer) => {
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
    mutationFn: AddPersonne,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getPassager"],
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
    const submissionValues = {
      ...values,
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
        initialValues={initialValuesPassagerAdd}
        validationSchema={userSchemaPassager}
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
                {/* Nom */}
                <Box>
                  <label htmlFor="nom" style={{ fontWeight: "bold" }}>
                    Nom
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="nom"
                    name="nom"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.nom || ""}
                    error={!!touched.nom && !!errors.nom}
                    helperText={touched.nom && errors.nom}
                    sx={{ height: "40px" }}
                  />
                </Box>
                <Box>
                  <label htmlFor="prenom" style={{ fontWeight: "bold" }}>
                    Prénom
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="prenom"
                    name="prenom"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.prenom || ""}
                    error={!!touched.prenom && !!errors.prenom}
                    helperText={touched.prenom && errors.prenom}
                    sx={{ height: "40px" }}
                  />
                </Box>
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

                {/* Phone */}
                <Box>
                  <label htmlFor="phone" style={{ fontWeight: "bold" }}>
                    Numéro de téléphone
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="phone"
                    name="phone"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone || ""}
                    error={!!touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                    sx={{ height: "40px" }}
                  />
                </Box>

                {/* Status */}
                <Box>
                  <label htmlFor="status" style={{ fontWeight: "bold" }}>
                    Statut
                  </label>
                  <Select
                    fullWidth
                    size="small"
                    labelId="status-select-label"
                    id="status"
                    name="status"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.status}
                    error={!!touched.status && !!errors.status}
                  >
                    <MenuItem value="ANNULER">Annuler</MenuItem>
                    <MenuItem value="ATTENTE">Attente</MenuItem>
                    <MenuItem value="AFFECTER">Affecter</MenuItem>
                  </Select>
                </Box>

                {/* Gare ID */}
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

export default AddModalPassager;
