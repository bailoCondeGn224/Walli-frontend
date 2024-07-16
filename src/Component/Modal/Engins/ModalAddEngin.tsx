import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import {
  EnginRoulantSchema,
  initialValuesEngin,
} from "../../Helper/InitialevalueFormik";
import { addCustumer } from "../../Interface/InterfaceClient";
import { useEffect, useState } from "react";

const ModalAddEngin = ({ isOpen, handleModalClose }: addCustumer) => {
  const [isSelectedRadio, setIsSelected] = useState(false);
  const [isSelectedRadioButton, setIsSelectedRadioButton] =
    useState<boolean>(false);

  const selectedRadioButtonShowExpireDate = () => {
    setIsSelected(true);
  };

  const selectedRadioButtonHideExpireDate = () => {
    setIsSelected(false);
  };

  useEffect(() => {
    selectedRadioButtonHideExpireDate();
  }),
    [isSelectedRadio];

  const handleSubmits = () => {};
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
          Enregistrement d'un client
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
                  <label htmlFor="nom">Immatricule</label>
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
                    helperText={touched.immatricule && !!errors.immatricule}
                  />
                </Box>
                <Box>
                  <label htmlFor="prenom">Nom propriétaire</label>
                  <TextField
                    fullWidth
                    type="text"
                    size="small"
                    name="nomProprietaire"
                    id="outlined-nomProprietaire"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.nomProprietaire}
                    error={
                      !!touched.nomProprietaire && !!errors.nomProprietaire
                    }
                    helperText={
                      touched.nomProprietaire && !!errors.nomProprietaire
                    }
                  />
                </Box>
                <Box>
                  <label htmlFor="email">Marque</label>
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
                    helperText={touched.marque && !!errors.marque}
                  />
                </Box>
                <Box>
                  <label htmlFor="email">Modèle</label>
                  <TextField
                    fullWidth
                    type="text"
                    size="small"
                    name="modele"
                    id="outlined-modele"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.modele}
                    error={!!touched.modele && !!errors.modele}
                    helperText={touched.modele && !!errors.modele}
                  />
                </Box>
                <Box>
                  <label htmlFor="role">Type d'activité</label>
                  <Select
                    fullWidth
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="typeActivite"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.typeActivite}
                    error={!!touched.typeActivite && !!errors.typeActivite}
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
                  <label htmlFor="">Date mise en service</label>
                  <TextField
                    fullWidth
                    size="small"
                    type="date"
                    name="dateMiseEnSevice"
                    id="outlined-dateMiseEnSevice"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.dateMiseEnSevice}
                    error={
                      !!touched.dateMiseEnSevice && !!errors.dateMiseEnSevice
                    }
                    helperText={
                      touched.dateMiseEnSevice && !!errors.dateMiseEnSevice
                    }
                  />
                </Box>
                <Box>
                  <label htmlFor="ville">Numéro carte verte</label>
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
                      touched.numeroCarteVerte && !!errors.numeroCarteVerte
                    }
                  />
                </Box>
              </Box>

              <Stack direction="row" gap={2} pt="14px">
                <Box
                  sx={{
                    width: "230px",
                    height: "150px",
                    border: "1px solid rgba(0, 0, 160, 0.70)",
                    borderRadius: "6px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <Stack
                    alignContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <div>
                      <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Avez-vous une assurance ?
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-existeAssurance"
                          defaultValue="Non"
                        >
                          <FormControlLabel
                            value="Oui"
                            control={<Radio />}
                            label="Oui"
                            onClick={selectedRadioButtonShowExpireDate}
                          />
                          <FormControlLabel
                            value="Non"
                            control={<Radio />}
                            label="Non"
                            defaultValue="Non"
                            onClick={selectedRadioButtonHideExpireDate}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div>
                      <Box pl="15px">
                        <label htmlFor="">Date expiration</label>
                        <TextField
                          disabled={isSelectedRadio}
                          fullWidth
                          size="small"
                          type="date"
                          name="assuranceExpire"
                          id="outlined-assuranceExpire"
                          variant="outlined"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.assuranceExpire}
                          error={
                            !!touched.assuranceExpire &&
                            !!errors.assuranceExpire
                          }
                          helperText={
                            touched.assuranceExpire && !!errors.assuranceExpire
                          }
                          sx={{ width: "200px" }}
                        />
                      </Box>
                    </div>
                  </Stack>
                </Box>

                <Box
                  sx={{
                    width: "230px",
                    height: "150px",
                    border: "1px solid rgba(0, 0, 160, 0.70)",
                    borderRadius: "6px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <Stack
                    alignContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <div>
                      <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Avez-vous une vignette ?
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-existevignette"
                          defaultValue="Non"
                          onChange={selectedRadioButtonShowExpireDate}
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
                    </div>
                    <div>
                      <Box pl="15px">
                        <label htmlFor="">Date expiration</label>
                        <TextField
                          fullWidth
                          size="small"
                          type="date"
                          name="assuranceExpire1"
                          id="outlined-assuranceExpire"
                          variant="outlined"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.assuranceExpire}
                          error={
                            !!touched.assuranceExpire &&
                            !!errors.assuranceExpire
                          }
                          helperText={
                            touched.assuranceExpire && !!errors.assuranceExpire
                          }
                          sx={{ width: "200px" }}
                        />
                      </Box>
                    </div>
                  </Stack>
                </Box>

                <Box
                  sx={{
                    width: "230px",
                    height: "150px",
                    border: "1px solid rgba(0, 0, 160, 0.70)",
                    borderRadius: "6px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <Stack
                    alignContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <div>
                      <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Avez-vous une carte gris ?
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-existeCarteGris"
                          defaultValue="Non"
                        >
                          <FormControlLabel
                            value="Oui"
                            control={<Radio />}
                            label="Oui"
                            onClick={selectedRadioButtonShowExpireDate}
                          />
                          <FormControlLabel
                            value="Non"
                            control={<Radio />}
                            label="Non"
                            onClick={selectedRadioButtonHideExpireDate}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div>
                      <Box pl="15px">
                        <label htmlFor="">Date expiration</label>
                        <TextField
                          fullWidth
                          size="small"
                          type="date"
                          name="assuranceExpire"
                          id="outlined-assuranceExpire"
                          variant="outlined"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.assuranceExpire}
                          error={
                            !!touched.assuranceExpire &&
                            !!errors.assuranceExpire
                          }
                          helperText={
                            touched.assuranceExpire && !!errors.assuranceExpire
                          }
                          sx={{ width: "200px" }}
                        />
                      </Box>
                    </div>
                  </Stack>
                </Box>
              </Stack>
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
