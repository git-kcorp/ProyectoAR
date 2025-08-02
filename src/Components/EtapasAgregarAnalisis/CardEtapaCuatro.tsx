import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

function CardEtapaCuatro({ setVisible,setEtapa, disabled }: any) {
  const [form, setForm] = useState({
    dosis: "",
    unidad_dosis: "",
    via: "",
    intervalo: "",
    sustrato: "",
    pico_valle: "",
  });

  const { disabledProps, setDisabledProps } = disabled;



  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  useEffect(() => {
    if (form.dosis && form.pico_valle) {
      setEtapa({ form });
      setDisabledProps({ ...disabledProps, disabledEC: true })
      setVisible(false);
    }
  }, [form])

  return (
    <fieldset disabled={disabledProps.disabledEC}>
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
            {/* Dosis */}
            <TextField
              fullWidth
              margin="normal"
              label="Dosis"
              name="dosis"
              value={form.dosis}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {/* Unidad Dosis */}
            <Select
              color="primary"
              fullWidth
              label="Unidad Dosis"
              name="unidad_dosis"
              value={form.unidad_dosis}
              onChange={(e: any) => {
                setForm({ ...form, unidad_dosis: e.target.value });
              }}
            >
              <MenuItem key={"ng/ml"} value={"ng/ml"}>
                {"ng/ml"}
              </MenuItem>
            </Select>
            {/* Via */}
            <Select
              color="primary"
              fullWidth
              label="Via"
              name="via"
              value={form.via}
              onChange={(e: any) => {
                setForm({ ...form, via: e.target.value });
              }}
            >
              <MenuItem key={"Oral"} value={"Oral"}>
                {"Oral"}
              </MenuItem>
            </Select>
            {/* Intervalo */}
            <TextField
              fullWidth
              margin="normal"
              label="Intervalo"
              name="intervalo"
              value={form.intervalo}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {/* Sustrato */}
            <Select
              color="primary"
              fullWidth
              label="Sustrato"
              name="sustrato"
              value={form.sustrato}
              onChange={(e: any) => {
                setForm({ ...form, sustrato: e.target.value });
              }}
            >
              <MenuItem key={"Sangre"} value={"Sangre"}>
                {"Sangre"}
              </MenuItem>
            </Select>
            {/* Pico o valle */}
            <Select
              color="primary"
              fullWidth
              label="Pico/Valle"
              name="pico_valle"
              value={form.pico_valle}
              onChange={(e: any) => {
                setForm({ ...form, pico_valle: e.target.value });
              }}
            >
              <MenuItem key={"Valle"} value={"Valle"}>
                {"Valle"}
              </MenuItem>
              <MenuItem key={"Pico"} value={"Pico"}>
                {"Pico"}
              </MenuItem>
            </Select>
          </form>
        </Box>
      </Container>
    </fieldset>
  );
}
export default CardEtapaCuatro;
