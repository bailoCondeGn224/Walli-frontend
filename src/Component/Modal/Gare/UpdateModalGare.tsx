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
import React, { useEffect, useState } from "react";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { SignupSchemaGare } from "../../Helper/InitialevalueFormik";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetByIdGare, updateGare } from "../../../backEnd/AuthService";
import { GareinitialeValue } from "../../Interface/InterfaceClient";

const UpdateModalGare = ({ id }: { id: number }) => {
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
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const {
    data: dataUser,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getProprietaireByIdGare", id],
    queryFn: () => GetByIdGare(id),
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: ({ id, userData }: { id: any; userData: any }) =>
      updateGare(id, userData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getEngin"],
        exact: true,
        refetchType: "active",
      });
      navigate("/engins/engin1");
      notify();
    },
    onError: (error) => {
      console.log(error);
      notifyErreur();
      navigate("/engins/engin1");
    },
  });

  const initialValuesGare: GareinitialeValue = {
    nom: dataUser?.nom || "",
    city: dataUser?.city || "",
    longitude: dataUser?.longitude || "",
    altitude: dataUser?.altitude || "",
    latitude: dataUser?.latitude || "",
    syndicatId: dataUser?.syndicatId ? dataUser?.syndicatId : "",
  };

  const handleSubmits = (values: any) => {
    console.log(values);
    const submissionValues = {
      ...values,
      syndicatId: parseInt(values.syndicatId, 10),
    };
    mutation.mutate({ id: id, userData: submissionValues });
  };

  useEffect(() => {
    if (dataUser) {
      setIsDataLoaded(true);
    }
  }, [dataUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

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
          width: "50%",
          maxWidth: "md",
          maxHeight: 600,
          background: "white",
          padding: 2,
        },
      }}
      maxWidth="md"
      open={
        searchParams.get("isOpenModalUpdateGare") === "true" && isDataLoaded
      }
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
          onClick={() => navigate("/engins/gare")}
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
                    Nom ligne
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
                    helperText={
                      touched.nom && typeof errors.nom === "string"
                        ? errors.nom
                        : undefined
                    }
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
                    helperText={
                      touched.city && typeof errors.city === "string"
                        ? errors.city
                        : undefined
                    }
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
                    helperText={
                      touched.syndicatId &&
                      typeof errors.syndicatId === "string"
                        ? errors.syndicatId
                        : undefined
                    }
                    sx={{ height: "40px" }}
                  />
                </Box>

                <Box>
                  <label htmlFor="syndicatId" style={{ fontWeight: "bold" }}>
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
                    helperText={
                      touched.longitude && typeof errors.longitude === "string"
                        ? errors.longitude
                        : undefined
                    }
                    sx={{ height: "40px" }}
                  />
                </Box>
                <Box>
                  <label htmlFor="syndicatId" style={{ fontWeight: "bold" }}>
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
                    helperText={
                      touched.latitude && typeof errors.latitude === "string"
                        ? errors.latitude
                        : undefined
                    }
                    sx={{ height: "40px" }}
                  />
                </Box>

                <Box>
                  <label htmlFor="syndicatId" style={{ fontWeight: "bold" }}>
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
                    helperText={
                      touched.altitude && typeof errors.altitude === "string"
                        ? errors.altitude
                        : undefined
                    }
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
                onClick={() => navigate("/engins/gare")}
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

export default UpdateModalGare;
