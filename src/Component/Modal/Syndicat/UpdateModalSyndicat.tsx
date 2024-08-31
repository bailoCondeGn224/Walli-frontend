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
import { Formik } from "formik";
import React from "react";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import { Form } from "react-router-dom";
import {
  CountryType,
  InitialValuesTypeUdateSyndicat,
  updateClient,
} from "../../Interface/InterfaceClient";
import { countries } from "../../../Data/ClientData";
import { SignupSchema } from "../../Helper/InitialevalueFormik";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { GetByIdSyndicat, updateSyndicat } from "../../../backEnd/AuthService";

const UpdateModalSyndicat: React.FC<updateClient> = ({
  idSyndicat,
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

  const queryClient = useQueryClient();
  const {
    data: dataUser,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getSyndicatById", idSyndicat],
    queryFn: () => GetByIdSyndicat(idSyndicat),
    enabled: !!idSyndicat,
  });

  const mutation = useMutation({
    mutationFn: ({ id, userData }: { id: number; userData: any }) =>
      updateSyndicat(id, userData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["proprietaireid"],
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
    const nationalityLabel = values.nationality ? values.nationality.label : "";
    const submissionValues = {
      ...values,
      pays: nationalityLabel,
      userId: values.userId,
    };

    console.log(submissionValues);
    mutation.mutate({
      id: idSyndicat,
      userData: submissionValues,
    });
  };

  const initialValues: InitialValuesTypeUdateSyndicat = {
    userId: dataUser?.userId || 0,
    dateOfBirth: dataUser?.dateOfBirth || "",
    ville: dataUser?.ville || "",
    phone: dataUser?.phone || "",
    pays: dataUser?.pays || {
      label: "",
      code: "",
      phone: "",
    },
    quartier: dataUser?.quartier || "",
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
                  <label htmlFor="ville" style={{ fontWeight: "bold" }}>
                    Ville
                  </label>
                  <TextField
                    size="small"
                    fullWidth
                    id="outlined-ville"
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
                  <label htmlFor="pays" style={{ fontWeight: "bold" }}>
                    Nationalité
                  </label>
                  <Autocomplete
                    id="country-select-demo"
                    options={countries}
                    getOptionLabel={(option: CountryType) =>
                      option.label || "Unknown Country"
                    }
                    value={values.pays}
                    isOptionEqualToValue={(option, value) =>
                      option.code === value?.code
                    }
                    onChange={(event, value: CountryType | null) => {
                      setFieldValue("pays", value);
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
                        name="pays"
                        variant="outlined"
                        error={!!touched.pays && !!errors.pays}
                        helperText={
                          touched.pays && errors.pays
                            ? String(errors.pays)
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

export default UpdateModalSyndicat;
