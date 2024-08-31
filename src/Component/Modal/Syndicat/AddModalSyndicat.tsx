import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import "react-toastify/dist/ReactToastify.css";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { countries } from "../../../Data/ClientData";
import { addCustumer, CountryType } from "../../Interface/InterfaceClient";
import { SignupSchema } from "../../Helper/InitialevalueFormik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AddSyndicat } from "../../../backEnd/AuthService";

const AddModalSyndicat = ({ isOpen, handleModalClose, id }: addCustumer) => {
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
    mutationFn: AddSyndicat,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["syndicat"],
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
    const userIdAsNumber = parseInt(values.userId, 10);
    const nationalityLabel = values.pays ? values.pays.label : "";
    const submissionValues = {
      ...values,
      nationality: nationalityLabel,
      userId: userIdAsNumber,
    };
    console.log(submissionValues);
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
          Enregistrement d'un client
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
        initialValues={{
          userId: 0,
          dateOfBirth: "",
          quartier: "",
          ville: "",
          phone: "",
          pays: { label: "", code: "", phone: "" },
        }}
        validationSchema={SignupSchema}
      >
        {({
          values,
          handleChange,
          handleBlur,
          touched,
          errors,
          setFieldValue,
        }) => (
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
                  <label htmlFor="userId" style={{ fontWeight: "bold" }}>
                    User ID
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="userId"
                    name="userId"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.userId}
                    error={!!touched.userId && !!errors.userId}
                    helperText={touched.userId && errors.userId}
                    sx={{ height: "40px" }}
                  />
                </Box>
                <Box>
                  <label htmlFor="dateOfBirth" style={{ fontWeight: "bold" }}>
                    Date de naissance
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.dateOfBirth}
                    error={!!touched.dateOfBirth && !!errors.dateOfBirth}
                    helperText={touched.dateOfBirth && errors.dateOfBirth}
                    sx={{ height: "40px" }}
                  />
                </Box>
                <Box>
                  <label htmlFor="quartier" style={{ fontWeight: "bold" }}>
                    Quartier
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="quartier"
                    name="quartier"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.quartier}
                    error={!!touched.quartier && !!errors.quartier}
                    helperText={touched.quartier && errors.quartier}
                    sx={{ height: "40px" }}
                  />
                </Box>
                <Box>
                  <label htmlFor="ville" style={{ fontWeight: "bold" }}>
                    Ville
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="ville"
                    name="ville"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.ville}
                    error={!!touched.ville && !!errors.ville}
                    helperText={touched.ville && errors.ville}
                    sx={{ height: "40px" }}
                  />
                </Box>
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
                    value={values.phone}
                    error={!!touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                    sx={{ height: "40px" }}
                  />
                </Box>
                <Box>
                  <label htmlFor="pays" style={{ fontWeight: "bold" }}>
                    Nationalité
                  </label>
                  <Autocomplete
                    id="pays"
                    options={countries}
                    getOptionLabel={(option: CountryType) => option.label}
                    value={values.pays}
                    isOptionEqualToValue={(option, value) =>
                      option.code === value?.code
                    }
                    onChange={(event, value: CountryType | null) => {
                      setFieldValue("pays", value);
                    }}
                    renderOption={(props, option) => {
                      const { key, ...optionProps } = props;
                      return (
                        <Box
                          key={key}
                          component="li"
                          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                          {...optionProps}
                        >
                          <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                          />
                          {option.label} ({option.code}) +{option.phone}
                        </Box>
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                        sx={{
                          height: "40px",
                          "& .MuiOutlinedInput-root": {
                            height: "100%",
                          },
                          "& .MuiInputBase-input": {
                            padding: "0px",
                          },
                        }}
                      />
                    )}
                  />
                  {touched.pays && errors.pays && (
                    <div style={{ color: "red", marginTop: "5px" }}>
                      {errors.pays.label}
                    </div>
                  )}
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

export default AddModalSyndicat;
