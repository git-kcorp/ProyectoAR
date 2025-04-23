import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

function CardEtapaSeis({ setHide }: any) {
  const [form, setForm] = useState({
    monitoreo_toxicologico: "Monitoreo",
    observaciones: "",
    orden: 0,
    resultado: "",
    resultado_unidad: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Data saved:", form);
    setHide(false);
    alert("Analisis agregado falsamente!")
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom></Typography>
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
          <Select
            color="primary"
            fullWidth
            label="Monitoreo/Toxicologico"
            name="monitoreo_toxicologico"
            value={form.monitoreo_toxicologico}
            onChange={(e: any) => {
              setForm({ ...form, monitoreo_toxicologico: e.target.value });
            }}
          >
            <MenuItem key={"Monitoreo"} value={"Monitoreo"}>
              {"Monitoreo"}
            </MenuItem>
            <MenuItem key={"Toxicologico"} value={"Toxicologico"}>
              {"Toxicologico"}
            </MenuItem>
          </Select>

          <TextField
            fullWidth
            margin="normal"
            label="Observaciones"
            name="observaciones"
            value={form.observaciones}
            onChange={handleChange}
            rows={4}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Orden"
            name="orden"
            value={form.orden}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Resultado"
            name="resultado"
            value={form.orden}
            onChange={handleChange}
          />
          <Select
            color="primary"
            fullWidth
            label="Unidad de resultado"
            name="resultado_unidad"
            value={form.resultado_unidad}
            onChange={(e: any) => {
              setForm({ ...form, resultado_unidad: e.target.value });
            }}
          >
            <MenuItem key={"ng/ml"} value={"ng/ml"}>
              {"ng/ml"}
            </MenuItem>
          </Select>

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
  );
}
export default CardEtapaSeis;
