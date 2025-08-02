import { Box, Container, TextField, Typography } from "@mui/material";
import analisisData from "../../Data/analisis.json";

import { useEffect, useState } from "react";

interface Analisis {
  ANALISIS: number;
  NOMBRE: string;
  TECNICA: string;
  RANGO: string;
}

function CardEtapaTres({ setVisible,setEtapa, disabled }: any) {
  const [analisis, setAnalisis] = useState<Analisis[]>([]);
  const { disabledProps, setDisabledProps } = disabled;

  useEffect(() => {
    setAnalisis(analisisData);
  }, []);

  const [form, setForm] = useState({
    ANALISIS: 0,
    NOMBRE: "",
    TECNICA: "",
    RANGO: "",
  });

  const handleCodigo = (e: any) => {
    try {
      const analisisO = (analisis as Analisis[]).find(
        (a) => a.ANALISIS === Number(e.target.value)
      );
      if (analisis) {
        setForm({
          ANALISIS: analisisO!.ANALISIS,
          NOMBRE: analisisO!.NOMBRE,
          TECNICA: analisisO!.TECNICA,
          RANGO: analisisO!.RANGO,
        });
      }
    } catch {
      setForm({
        ANALISIS: e.target.value,
        NOMBRE: "",
        TECNICA: "",
        RANGO: "",
      });
    }
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const setClear = () => {
    setForm({
      ANALISIS:0,
      NOMBRE: "",
      TECNICA: "",
      RANGO: "",
    });
  }

  useEffect(() => {
    if (form.ANALISIS && form.NOMBRE) {
      setEtapa({ form });
      setDisabledProps({ ...disabledProps, disabledET: true });
      setClear();
      setVisible(false);
    }
  }, [form]);

  return (
    <fieldset disabled={disabledProps.disabledET}>
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
              label="Codigo Analisis"
              name="ANALISIS"
              value={form.ANALISIS}
              onChange={(e) => {
                handleChange(e);
                handleCodigo(e);
              }}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Nombre"
              name="NOMBRE"
              value={form.NOMBRE}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Tecnica"
              name="TECNICA"
              value={form.TECNICA}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Rango"
              name="RANGO"
              value={form.RANGO}
              onChange={handleChange}
            />
          </form>
        </Box>
      </Container>
    </fieldset>
  );
}
export default CardEtapaTres;
