import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import {
  EnginRoulantSchema,
  initialValuesEngin,
} from "../../Helper/InitialevalueFormik";
import { addCustumer } from "../../Interface/InterfaceClient";
import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddEngin } from "../../../backEnd/AuthService";

const ModalAddEngin = ({ isOpen, handleModalClose }: addCustumer) => {
  const [isSelectedAssurance, setIsSelectedAssurance] = useState(false);
  const [isSelectedCarteGris, setIsSelectedCarteGris] = useState(false);
  const [isSelectedVignette, setIsSelectedVignette] = useState(false);

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
    mutationFn: AddEngin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getEngin"],
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
    const validTypeActivities = [
      "MOTO_TAXI",
      "VOITURE_TAXI",
      "MOTO_PERSONNELLE",
      "VOITURE_PERSONNELLE",
    ];
    const typeActivity = validTypeActivities.includes(values.typeActivity)
      ? values.typeActivity
      : "MOTO_TAXI";
    const submissionValues = {
      ...values,
      typeActivity: typeActivity,
      proprietaireId: parseInt(values.proprietaireId, 10),
      lineId: parseInt(values.lineId, 10),
      existAssurance: values.existAssurance === "Oui" ? true : false,
      existCarteGris: values.existCarteGris === "Oui" ? true : false,
      existVignette: values.existVignette === "Oui" ? true : false,
    };
    console.log(submissionValues);
    mutation.mutate(submissionValues);
  };
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "45%",
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
          Enregistrement d'un engin
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

      <Formik
        onSubmit={handleSubmits}
        initialValues={initialValuesEngin}
        validationSchema={EnginRoulantSchema}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <DialogContent dividers>
              <Box
                sx={{
                  p: 1,
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "14px",
                }}
              >
                <Box>
                  <label htmlFor="immatricule">Immatricule</label>
                  <TextField
                    fullWidth
                    type="text"
                    size="small"
                    name="immatricule"
                    id="outlined-immatricule"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.immatricule}
                    error={!!touched.immatricule && !!errors.immatricule}
                    helperText={touched.immatricule && errors.immatricule}
                  />
                </Box>
                <Box>
                  <label htmlFor="proprietaireId">ID propriétaire</label>
                  <TextField
                    fullWidth
                    type="text"
                    size="small"
                    name="proprietaireId"
                    id="outlined-proprietaireId"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.proprietaireId}
                    error={!!touched.proprietaireId && !!errors.proprietaireId}
                    helperText={touched.proprietaireId && errors.proprietaireId}
                  />
                </Box>
                <Box>
                  <label htmlFor="lineId">ID line</label>
                  <TextField
                    fullWidth
                    type="text"
                    size="small"
                    name="lineId"
                    id="outlined-lineId"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lineId}
                    error={!!touched.lineId && !!errors.lineId}
                    helperText={touched.lineId && errors.lineId}
                  />
                </Box>
                <Box>
                  <label htmlFor="marque">Marque</label>
                  <TextField
                    fullWidth
                    type="text"
                    size="small"
                    name="marque"
                    id="outlined-marque"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.marque}
                    error={!!touched.marque && !!errors.marque}
                    helperText={touched.marque && errors.marque}
                  />
                </Box>
                <Box>
                  <label htmlFor="model">Modèle</label>
                  <TextField
                    fullWidth
                    type="text"
                    size="small"
                    name="model"
                    id="outlined-model"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.model}
                    error={!!touched.model && !!errors.model}
                    helperText={touched.model && errors.model}
                  />
                </Box>
                <Box>
                  <label htmlFor="typeActivity">Type d'activité</label>
                  <Select
                    fullWidth
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="typeActivity"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.typeActivity}
                    error={!!touched.typeActivity && !!errors.typeActivity}
                  >
                    {[
                      "TAXI_MOTO",
                      "TAXI_VOITURE",
                      "TAXI_PERSONNELLE",
                      "MOTO_PERSONNELLE",
                      "TAXI_VILLE",
                    ].map((ville) => (
                      <MenuItem key={ville} value={ville}>
                        {ville}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <Box>
                  <label htmlFor="dateService">Date mise en service</label>
                  <TextField
                    fullWidth
                    size="small"
                    type="date"
                    name="dateService"
                    id="outlined-dateService"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.dateService}
                    error={!!touched.dateService && !!errors.dateService}
                    helperText={touched.dateService && errors.dateService}
                  />
                </Box>
                <Box>
                  <label htmlFor="numeroCarteVerte">Numéro carte verte</label>
                  <TextField
                    fullWidth
                    size="small"
                    id="outlined-numeroCarteVerte"
                    name="numeroCarteVerte"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.numeroCarteVerte}
                    error={
                      !!touched.numeroCarteVerte && !!errors.numeroCarteVerte
                    }
                    helperText={
                      touched.numeroCarteVerte && errors.numeroCarteVerte
                    }
                  />
                </Box>
              </Box>

              <Stack direction="row" gap={2} p="8px">
                <Box
                  sx={{
                    border: "1px solid rgba(0, 0, 160, 0.70)",
                    borderRadius: "2px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    paddingBottom: "5px",
                  }}
                >
                  <Stack
                    alignContent="center"
                    alignItems="center"
                    textAlign="center"
                  >
                    <Typography> Aves vous une assurance?</Typography>
                    <FormControl>
                      <RadioGroup
                        name="existAssurance"
                        onChange={handleChange}
                        value={values.existAssurance}
                      >
                        <FormControlLabel
                          value="Oui"
                          control={<Radio />}
                          label="Oui"
                        />
                        <FormControlLabel
                          value="Non"
                          control={<Radio />}
                          label="Non"
                        />
                      </RadioGroup>
                    </FormControl>
                    <Box>
                      <label htmlFor="">Date expiration</label>
                      <TextField
                        sx={{ padding: "10px" }}
                        fullWidth
                        size="small"
                        id="outlined-dateEpireAssurance"
                        name="dateEpireAssurance"
                        type="date"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.dateEpireAssurance}
                        error={
                          !!touched.dateEpireAssurance &&
                          !!errors.dateEpireAssurance
                        }
                        helperText={
                          touched.dateEpireAssurance &&
                          errors.dateEpireAssurance
                        }
                      />
                    </Box>
                  </Stack>
                </Box>

                <Box
                  sx={{
                    border: "1px solid rgba(0, 0, 160, 0.70)",
                    borderRadius: "2px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    paddingBottom: "5px",
                  }}
                >
                  <Stack
                    alignContent="center"
                    alignItems="center"
                    textAlign="center"
                  >
                    <Typography>Avez-vous une carte grise?</Typography>
                    <FormControl>
                      <RadioGroup
                        name="existCarteGris"
                        onChange={handleChange}
                        value={values.existCarteGris}
                      >
                        <FormControlLabel
                          value="Oui"
                          control={<Radio />}
                          label="Oui"
                        />
                        <FormControlLabel
                          value="Non"
                          control={<Radio />}
                          label="Non"
                        />
                      </RadioGroup>
                    </FormControl>
                    <Box>
                      <label htmlFor="">Date expiration</label>
                      <TextField
                        sx={{ padding: "10px" }}
                        fullWidth
                        size="small"
                        id="outlined-dateEpireCarteGris"
                        name="dateEpireCarteGris"
                        type="date"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.dateEpireCarteGris}
                        error={
                          !!touched.dateEpireCarteGris &&
                          !!errors.dateEpireCarteGris
                        }
                        helperText={
                          touched.dateEpireCarteGris &&
                          errors.dateEpireCarteGris
                        }
                      />
                    </Box>
                  </Stack>
                </Box>

                <Box
                  sx={{
                    border: "1px solid rgba(0, 0, 160, 0.70)",
                    borderRadius: "2px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    paddingBottom: "5px",
                  }}
                >
                  <Stack
                    alignContent="center"
                    alignItems="center"
                    textAlign="center"
                  >
                    <Typography>Aves vous une vignette?</Typography>
                    <FormControl>
                      <RadioGroup
                        name="existVignette"
                        onChange={handleChange}
                        value={values.existVignette}
                      >
                        <FormControlLabel
                          value="Oui"
                          control={<Radio />}
                          label="Oui"
                        />
                        <FormControlLabel
                          value="Non"
                          control={<Radio />}
                          label="Non"
                        />
                      </RadioGroup>
                    </FormControl>
                    <Box>
                      <label htmlFor="">Date expiration</label>
                      <TextField
                        sx={{ padding: "10px" }}
                        fullWidth
                        size="small"
                        id="outlined-dateEpireVignette"
                        name="dateEpireVignette"
                        type="date"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.dateEpireVignette}
                        error={
                          !!touched.dateEpireVignette &&
                          !!errors.dateEpireVignette
                        }
                        helperText={
                          touched.dateEpireVignette && errors.dateEpireVignette
                        }
                      />
                    </Box>
                  </Stack>
                </Box>
              </Stack>
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
                    height: "36px",
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

export default ModalAddEngin;
