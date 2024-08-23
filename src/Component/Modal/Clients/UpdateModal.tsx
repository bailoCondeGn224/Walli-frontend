import {
  Autocomplete,
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
import * as Yup from "yup";
import { Form, Formik } from "formik";
import {
  CountryType,
  InitialValuesType,
  updateClient,
} from "../../Interface/InterfaceClient";
import "react-toastify/dist/ReactToastify.css";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { countries } from "../../../Data/ClientData";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  GetByIdProprietaire,
  updateProprietaire,
} from "../../../backEnd/AuthService";
import { toast } from "react-toastify";

const UpdateModal: React.FC<updateClient> = ({
  idClient,
  isOpen,
  handleModalClose,
}) => {
  const notify = () => toast.success("Mise a jour effectuée avec succès!");
  const notifyErreur = () =>
    toast.error("IMise a jour a echouée", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const SignupSchema = Yup.object().shape({
    dateOfBirth: Yup.string().required("Date de naissance est requise"),
    city: Yup.string().required("Ville est requise"),
    phone: Yup.string().required("Numéro de téléphone est requis"),
    typePiece: Yup.string().required("Type de pièce est requis"),
    pieceNumber: Yup.string().required("Pièce d'identité est requise"),
    nationality: Yup.object()
      .shape({
        label: Yup.string().required("Label est requis"),
        code: Yup.string().required("Code est requis"),
        phone: Yup.string(),
      })
      .required("Nationalité est obligatoire"),
    userId: Yup.number().required("UserID est obligatoire"),
  });

  function formatDateToISO(date: Date, timezoneOffsetHours?: number): string {
    if (!(date instanceof Date)) {
      throw new Error("Invalid date object passed to formatDateToISO");
    }

    const utcDate = new Date(
      Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours() + timezoneOffsetHours! || 0,
        date.getMinutes(),
        date.getSeconds()
      )
    );

    if (!isNaN(utcDate.getTime())) {
      return utcDate.toISOString();
    } else {
      throw new Error("Invalid date after adjustments");
    }
  }
  const queryClient = useQueryClient();
  const {
    data: dataUser,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getProprietaireByIdClient", idClient],
    queryFn: () => GetByIdProprietaire(idClient),
    enabled: !!idClient,
  });

  const mutation = useMutation({
    mutationFn: ({ id, userData }: { id: any; userData: any }) =>
      updateProprietaire(id, userData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["UpdateProprietaire"],
        exact: true,
        refetchType: "active",
      });
      notify();
    },
    onError: (error) => {
      console.log(error);
      notifyErreur();
    },
  });

  const handleSubmits = (values: any) => {
    const nationalityLabel = values.nationality ? values.nationality.label : "";
    const formattedDateOfBirth = formatDateToISO(new Date(values.dateOfBirth));

    const submissionValues = {
      ...values,
      nationality: nationalityLabel,
      userId: values.userId,
      dateOfBirth: formattedDateOfBirth,
    };
    console.log(submissionValues);
    mutation.mutate(submissionValues);
  };

  const initialValues: InitialValuesType = {
    userId: dataUser?.userId || 0,
    dateOfBirth: dataUser?.dateOfBirth || "",
    city: dataUser?.city || "",
    phone: dataUser?.phone || "",
    typePiece: dataUser?.typePiece || "",
    pieceNumber: dataUser?.pieceNumber || "",
    nationality: dataUser?.nationality || {
      label: "",
      code: "",
      phone: "",
    },
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

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
          Modification d'un client
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
        initialValues={initialValues}
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
                  p: 2,
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                }}
              >
                <Box>
                  <label htmlFor="userId" style={{ fontWeight: "bold" }}>
                    userId
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="outlined-userId"
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
                    Date naissance
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    type="date"
                    id="outlined-dateOfBirth"
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
                  <label htmlFor="city" style={{ fontWeight: "bold" }}>
                    Ville
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="outlined-city"
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
                  <label htmlFor="phone" style={{ fontWeight: "bold" }}>
                    Numero Telephone
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="outlined-phone"
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
                  <label htmlFor="pieceNumber" style={{ fontWeight: "bold" }}>
                    N° Piece Identité
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="outlined-pieceNumber"
                    name="pieceNumber"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.pieceNumber}
                    error={!!touched.pieceNumber && !!errors.pieceNumber}
                    helperText={touched.pieceNumber && errors.pieceNumber}
                    sx={{ height: "40px" }}
                  />
                </Box>
                <Box>
                  <label htmlFor="typePiece" style={{ fontWeight: "bold" }}>
                    Type Piece Identité
                  </label>
                  <FormControl fullWidth size="small">
                    <Select
                      labelId="select-typePiece"
                      id="select-typePiece"
                      name="typePiece"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.typePiece}
                      error={!!touched.typePiece && !!errors.typePiece}
                      sx={{ height: "40px" }}
                    >
                      {["PASSPORT", "CARTE IDENTITE", "CARTE ELECTEUR"].map(
                        (piece) => (
                          <MenuItem key={piece} value={piece}>
                            {piece}
                          </MenuItem>
                        )
                      )}
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <label htmlFor="nationality" style={{ fontWeight: "bold" }}>
                    Nationalité
                  </label>
                  <Autocomplete
                    id="country-select-demo"
                    options={countries}
                    getOptionLabel={(option: CountryType) =>
                      option.label || "Unknown Country"
                    }
                    value={values.nationality}
                    isOptionEqualToValue={(option, value) =>
                      option.code === value?.code
                    }
                    onChange={(event, value: CountryType | null) => {
                      setFieldValue("nationality", value);
                    }}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
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
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password",
                        }}
                        size="small"
                        fullWidth
                        name="nationality"
                        variant="outlined"
                        error={!!touched.nationality && !!errors.nationality}
                        helperText={
                          touched.nationality && errors.nationality
                            ? String(errors.nationality)
                            : undefined
                        }
                        sx={{ height: "40px" }}
                      />
                    )}
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
                Modifier
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default UpdateModal;
