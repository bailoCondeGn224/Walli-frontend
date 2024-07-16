import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { addCustumer, showClient } from "../../Interface/InterfaceClient";
import { BsTelephone } from "react-icons/bs";
interface ShowModalProps extends addCustumer, showClient {}
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
  const SignupSchema = Yup.object().shape({
    nom: Yup.string().required("Nom est requis"),
    prenom: Yup.string().required("Prénom est requis"),
    email: Yup.string().email("Email invalide").required("Email est requis"),
    role: Yup.string().required("Role est requis"),
    dateNaissance: Yup.string().required("Date de naissance est requise"),
    ville: Yup.string().required("Ville est requise"),
    numeroTelephone: Yup.string().required("Numéro de téléphone est requis"),
    typePiece: Yup.string().required("Type de pièce est requis"),
    pieceIdentite: Yup.string().required("Pièce d'identité est requise"),
    sexe: Yup.string().required("Sexe est requis"),
    nationnalite: Yup.string().required("Nationalité est requise"),
  });

  const handleSubmits = (values: showClient) => {
    console.log(
      "values",
      nom,
      prenom,
      sexe,
      numeroTelephone,
      email,
      typePiece,
      pieceIdentite
    );
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "40%",
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

      <Formik
        onSubmit={handleSubmits}
        initialValues={{
          nom: nom,
          prenom: prenom,
          email: email,
          role: role,
          dateNaissance: dateNaissance,
          ville: ville,
          numeroTelephone: numeroTelephone,
          typePiece: typePiece,
          pieceIdentite: pieceIdentite,
          sexe: sexe,
          nationnalite: nationnalite,
        }}
        validationSchema={SignupSchema}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <DialogContent dividers>
              <Box
                sx={{
                  p: 1,
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                }}
              >
                <Box>
                  <label htmlFor="nom" style={{ fontWeight: "bold" }}>
                    Nom
                  </label>
                  <TextField
                    disabled
                    type="text"
                    size="small"
                    name="nom"
                    id="outlined-nomPME"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.nom}
                    error={!!touched.nom && !!errors.nom}
                    helperText={touched.nom && !!errors.nom}
                  />
                </Box>
                <Box>
                  <label htmlFor="prenom" style={{ fontWeight: "bold" }}>
                    Prénom
                  </label>
                  <TextField
                    disabled
                    type="text"
                    size="small"
                    name="prenom"
                    id="outlined-prenomPME"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.prenom}
                    error={!!touched.prenom && !!errors.prenom}
                    helperText={touched.prenom && !!errors.prenom}
                  />
                </Box>
                <Box>
                  <label htmlFor="email" style={{ fontWeight: "bold" }}>
                    Email
                  </label>
                  <TextField
                    disabled
                    type="text"
                    size="small"
                    name="email"
                    id="outlined-email"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && !!errors.email}
                  />
                </Box>
                <Box>
                  <label htmlFor="role" style={{ fontWeight: "bold" }}>
                    Role
                  </label>
                  <Select
                    disabled
                    fullWidth
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="role"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.role}
                    error={!!touched.role && !!errors.role}
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
                  <label htmlFor="" style={{ fontWeight: "bold" }}>
                    Date naissance
                  </label>
                  <TextField
                    disabled
                    fullWidth
                    size="small"
                    type="date"
                    name="dateNaissance"
                    id="outlined-dateNaissance"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.dateNaissance}
                    error={!!touched.dateNaissance && !!errors.dateNaissance}
                    helperText={touched.dateNaissance && !!errors.dateNaissance}
                  />
                </Box>
                <Box>
                  <label htmlFor="ville" style={{ fontWeight: "bold" }}>
                    Ville
                  </label>
                  <TextField
                    disabled
                    size="small"
                    id="outlined-ville"
                    name="ville"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.ville}
                    error={!!touched.ville && !!errors.ville}
                    helperText={touched.ville && !!errors.ville}
                  />
                </Box>
                <Box>
                  <label
                    htmlFor="numeroTelephone"
                    style={{ fontWeight: "bold" }}
                  >
                    Numero Telephone
                  </label>
                  <TextField
                    disabled
                    size="small"
                    name="numeroTelephone"
                    id="outlined-numeroTelephone"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.numeroTelephone}
                    error={
                      !!touched.numeroTelephone && !!errors.numeroTelephone
                    }
                    helperText={
                      touched.numeroTelephone && !!errors.numeroTelephone
                    }
                  />
                </Box>
                <Box>
                  <label htmlFor="pieceIdentite" style={{ fontWeight: "bold" }}>
                    N° Piece Identité
                  </label>
                  <TextField
                    disabled
                    size="small"
                    name="pieceIdentite"
                    id="outlined-pieceIdentite"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.pieceIdentite}
                    error={!!touched.pieceIdentite && !!errors.pieceIdentite}
                    helperText={touched.pieceIdentite && !!errors.pieceIdentite}
                  />
                </Box>
                <Box>
                  <label htmlFor="role" style={{ fontWeight: "bold" }}>
                    Type Piece Identité
                  </label>
                  <Select
                    disabled
                    fullWidth
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="role"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.role}
                    error={!!touched.role && !!errors.role}
                  >
                    {["PASSEPORT", "CARTE IDENTITE", "CARTE ELECTEUR"].map(
                      (piece) => (
                        <MenuItem key={piece} value={piece}>
                          {piece}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </Box>
                <Box>
                  <label htmlFor="sexe" style={{ fontWeight: "bold" }}>
                    Sexe
                  </label>
                  <FormControl size="small" fullWidth>
                    <Select
                      disabled
                      labelId="sexe-label"
                      id="sexe"
                      name="sexe"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.sexe}
                      error={!!touched.sexe && !!errors.sexe}
                    >
                      <MenuItem value="Masculin">Masculin</MenuItem>
                      <MenuItem value="Feminin">Feminin</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <label htmlFor="role" style={{ fontWeight: "bold" }}>
                    Type Piece Identité
                  </label>
                  <Select
                    disabled
                    fullWidth
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="role"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.role}
                    error={!!touched.role && !!errors.role}
                  >
                    {[
                      "GUINEE",
                      "MALI",
                      "SENEGAL",
                      "BURKINA FASSO",
                      "COTE D'IVOIRE",
                    ].map((piece) => (
                      <MenuItem key={piece} value={piece}>
                        {piece}
                      </MenuItem>
                    ))}
                  </Select>
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
                Suivant
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default ShowModal;
