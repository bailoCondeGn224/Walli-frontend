import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import { SignupSchemaLineUpdate } from "../../Helper/InitialevalueFormik";
import { GetByIdLine, updateLine } from "../../../backEnd/AuthService";
import { useNavigate, useSearchParams } from "react-router-dom";

const ModalUpdateLine = ({ id }: any) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
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
    mutationFn: ({ id, userData }: { id: number; userData: any }) =>
      updateLine(id, userData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getLine"],
        exact: true,
        refetchType: "active",
      });
      navigate("/engins/line");
      notify();
    },
    onError: (error) => {
      console.log(error);
      notifyErreur();
      navigate("/engins/line");
    },
  });

  const handleSubmits = (values: any) => {
    console.log(values);
    const submissionValues = {
      ...values,
      syndicatId: parseInt(values.syndicatId, 10),
    };
    mutation.mutate({ id: id, userData: submissionValues });
  };

  const {
    data: dataUser,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getProprietaireById", { id }],
    queryFn: () => GetByIdLine(id),
    enabled: !!id,
  });

  const initialValuesLineUpdate = {
    nomline: dataUser?.nomline,
    ville: dataUser?.ville,
    quartier: dataUser?.quartier,
    syndicatId: dataUser?.syndicat.id,
  };

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
      open={searchParams.get("isOpenModalUpdateLine") === "true"}
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
          onClick={() => navigate("/engins/line")}
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
        initialValues={initialValuesLineUpdate}
        validationSchema={SignupSchemaLineUpdate}
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
                    id="nomline"
                    name="nomline"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.nomline}
                    error={!!touched.nomline && !!errors.nomline}
                    helperText={
                      touched.nomline && typeof errors.nomline === "string"
                        ? errors.nomline
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
                    id="ville"
                    name="ville"
                    variant="outlined"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.ville}
                    error={!!touched.ville && !!errors.ville}
                    helperText={
                      touched.nomline && typeof errors.nomline === "string"
                        ? errors.nomline
                        : undefined
                    }
                    sx={{ height: "40px" }}
                  />
                </Box>

                <Box>
                  <label htmlFor="quartier" style={{ fontWeight: "bold" }}>
                    quartier
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
                    helperText={
                      touched.quartier && typeof errors.quartier === "string"
                        ? errors.quartier
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
                onClick={() => navigate("/engins/line")}
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

export default ModalUpdateLine;
