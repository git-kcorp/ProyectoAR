import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import pacientesData from "../Data/pacientes.json";

import { useEffect, useState } from "react";

interface Paciente {
  id: number;
  nombre: string;
  apellido: string;
  nacimiento: string;
  cedula: number;
}

function CardEtapaDos({ setHide, setShow }: any) {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  useEffect(() => {
    setPacientes(pacientesData);
  }, []);

  const [form, setForm] = useState({
    cedula: 0,
    nombre: "",
    apellido: "",
    edad: 0,
    internado: false,
  });

  const calcularEdad = (nacimiento: Date) => {
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  };

  const handleCedula = (e: any) => {
    try {
      const paciente = (pacientes as Paciente[]).find(
        (o) => o.cedula === Number(e.target.value)
      );
      if (paciente) {
        const edad = calcularEdad(new Date(paciente.nacimiento));
        setForm({
          cedula: paciente.cedula,
          nombre: paciente.nombre,
          apellido: paciente.apellido,
          edad: edad,
          internado: false,
        });
      } else {
        setForm({
          cedula: e.target.value,
          nombre: "",
          apellido: "",
          edad: 0,
          internado: false,
        });
      }
    } catch {
      setForm({
        cedula: e.target.value,
        nombre: "",
        apellido: "",
        edad: 0,
        internado: false,
      });
    }
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    console.log("Data saved:", form);
    setHide(false);
    setShow(true);
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
          <TextField
            fullWidth
            margin="normal"
            label="Cedula"
            name="cedula"
            value={form.cedula}
            onChange={(e) => {
              handleChange(e);
              handleCedula(e);
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Apellido"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Edad"
            name="edad"
            value={form.edad}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="internado"
                checked={form.internado}
                onChange={handleChange}
              />
            }
            label="Internado"
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
  );
}
export default CardEtapaDos;
