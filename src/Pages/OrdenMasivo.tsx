import { Box, Button, Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CardEtapaDTCCI from "../Components/EtapasAgregarAnalisis/CardEtapaTresCuatroCinco";

const OrdenMasivo = () => {
  const [analisisList, setAnalisis] = useState([]);

  useEffect(()=>{
    console.log("analisis",analisisList);
  },[analisisList])

  const [form, setForm] = useState({
    analisis: [],
    cantPacientes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("saved");
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box
          sx={{
            background:
              "linear-gradient(to right,rgb(255, 255, 255),rgb(76, 76, 76))",
            padding: 4,
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <form>
            <TextField
              fullWidth
              margin="normal"
              label="Cantidad de pacientes"
              name="cantPac"
              value={form.cantPacientes}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => handleSave()}
            >
              Guardar
            </Button>
          </form>
        </Box>
      </Container>
      <CardEtapaDTCCI analisisList={analisisList} setAnalisis={setAnalisis} />
    </>
  );
};
export default OrdenMasivo;
