import { RiQuestionFill } from "react-icons/ri";
import "./Connexion.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { login } from "../../backEnd/AuthService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface valuess {
  email: string;
  password: string;
}

const Connexion = () => {
  const userSchema = Yup.object().shape({
    email: Yup.string().required("Identifiant est requis"),
    password: Yup.string().required("Mot de passe est requis"),
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const initialValues: valuess = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: valuess) => {
    setIsLoading(true);
    setIsError("");
    try {
      const response = await login(values);
      console.log("Received response:", response);
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/clients/proprietaire");
    } catch (error) {
      console.error("Login error:", error);
      setIsError("Erreur de connexion");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="connexionCard">
      <div className="left">
        <div className="photo"></div>
      </div>
      <div className="right">
        <div className="title">
          <h1>BIENVENUE CHEZ WALLI</h1>
        </div>
        <div className="formular">
          <h2>Se connecter</h2>
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
          >
            {({ values, errors, touched, handleBlur, handleChange }) => (
              <Form>
                <label
                  htmlFor="outlined-email"
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  Identifiant
                </label>
                <span
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#939597",
                    marginBottom: "10px",
                  }}
                >
                  adresse mail ou numéro téléphone à la création du compte
                </span>
                <Field
                  as={TextField}
                  type="text"
                  variant="outlined"
                  name="email"
                  id="outlined-email"
                  margin="normal"
                  placeholder="Identifiant"
                  fullWidth
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  InputProps={{
                    style: {
                      textAlign: "center",
                      backgroundColor: "#fff",
                      borderRadius: "6px",
                    },
                    // disableUnderline: true,
                  }}
                />
                <label
                  htmlFor="outlined-password"
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  Mot de passe
                </label>
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  id="outlined-password"
                  placeholder="Mot de passe"
                  name="password"
                  type="password"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    style: {
                      textAlign: "center",
                      backgroundColor: "#fff",
                      borderRadius: "6px",
                    },
                    // disableUnderline: true,
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  type="submit"
                  sx={{
                    mt: 2,
                    bgcolor: "#fff",
                    fontWeight: "bold",
                    textTransform: "none",
                    borderRadius: "6px",
                    fontSize: "16px",
                    color: "black",
                    "&:hover": {
                      bgcolor: "black",
                      color: "#fff",
                    },
                    "&:focus": {
                      bgcolor: "black",
                    },
                  }}
                >
                  Se connecter
                </Button>
              </Form>
            )}
          </Formik>

          <Box display="flex" pt="20px" alignItems="center" gap={0}>
            <RiQuestionFill
              style={{ marginRight: "20px", color: "#FFF" }}
              size={24}
            />
            <Typography color="#939597">
              Avez-vous besoin d'aide?
              <span style={{ marginLeft: "8px" }}>
                <a
                  href="#"
                  style={{ textDecoration: "underline", color: "#FFF" }}
                >
                  AIDEZ MOI
                </a>
              </span>
            </Typography>
          </Box>

          <Box display="flex" pt="200px" alignItems="center" gap={1}>
            <Typography color="#fff">Powered by Walli</Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
