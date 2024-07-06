import { RiQuestionFill } from "react-icons/ri";
import "./Connexion.css";
import { Box, Button, TextField, Typography } from "@mui/material";

const Connexion = () => {
  return (
    <div className="connexionCard">
      {/* la partie droite */}
      <div className="left">
        <div className="photo"></div>
      </div>
      {/* la partie gauche */}
      <div className="right">
        <div className="title">
          <h1>BIENVENUE CHEZ WALLI</h1>
        </div>
        <div className="formular">
          <h2>Se connecter</h2>
          <form>
            <label
              htmlFor="outlined-identifiant"
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
            <TextField
              type="text"
              variant="outlined"
              name="identifiant"
              id="outlined-identifiant"
              margin="normal"
              placeholder="Identifiant"
              fullWidth
              InputProps={{
                style: {
                  textAlign: "center",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                },
                disableUnderline: true,
              }}
            />
            <label htmlFor="" style={{ fontWeight: "bold", fontSize: "16px" }}>
              Mot de passe
            </label>
            <TextField
              variant="outlined"
              margin="normal"
              id="outlined-motpasse"
              placeholder="Mot de passe"
              name="motpasse"
              type="password"
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "-10px",
                  backgroundColor: "#fff",
                  border: "none",
                },
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
          </form>
          {/* Texte "Vous êtes perdu?" */}
          <Box display="flex" pt="20px" alignItems="center" gap={0}>
            <RiQuestionFill
              style={{ marginRight: "20px", color: "#FFF" }}
              size={24}
            />
            <Typography color="#939597">
              Avez vous besoin d'aide?
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
            <Box></Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
