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
import { SignupSchemaDestination } from "../../Helper/InitialevalueFormik";
import { villesGuineeConakry } from "../../../Data/ClientData";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  GetByIdDestination,
  updateDestination,
} from "../../../backEnd/AuthService";
import { toast } from "react-toastify";

const UpdateModalDestination = ({ id }: { id: number }) => {
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

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const {
    data: dataUser,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getProprietaireByIdDestionation", id],
    queryFn: () => GetByIdDestination(id),
    enabled: !!id,
  });
  console.log("les donnee:", id);
  const initialValuesDestination = {
    villeDepart: dataUser?.villeDepart || "",
    villeDestination: dataUser?.villeDestination || "",
    prix: dataUser?.prix || "0",
    gareId: dataUser?.gare?.gareId || "",
  };

  const mutation = useMutation({
    mutationFn: ({ id, userData }: { id: any; userData: any }) =>
      updateDestination(id, userData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getDestination"],
        exact: true,
        refetchType: "active",
      });
      navigate("/engins/destination");
      notify();
    },
    onError: (error) => {
      console.log(error);
      notifyErreur();
      navigate("/engins/destination");
    },
  });
  const handleSubmits = (values: any) => {
    console.log("voici les valeur:", values);

    const submissionValues = {
      ...values,
      prix: parseFloat(values.prix),
      gareId: parseInt(values.gareId, 10),
    };
    mutation.mutate({ id: id, userData: submissionValues });
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "45%",
          background: "white",
        },
      }}
      maxWidth="lg"
      open={searchParams.get("isOpenModalShowDestinationUpdate") === "true"}
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
          Modification dun engin
        </DialogTitle>
        <Button
          sx={{ fontSize: "1.3rem", fontWeight: "bold", mr: 1.5 }}
          onClick={() => navigate("/engins/destination")}
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
                    {villesGuineeConakry.map((villeDestination) => (
                      <MenuItem key={villeDestination} value={villeDestination}>
                        {villeDestination}
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
                    helperText={
                      touched.prix && errors.prix
                        ? String(errors.prix)
                        : undefined
                    }
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
                    helperText={
                      touched.gareId && errors.gareId
                        ? String(errors.gareId)
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
                onClick={() => navigate("/engins/destination")}
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

export default UpdateModalDestination;
