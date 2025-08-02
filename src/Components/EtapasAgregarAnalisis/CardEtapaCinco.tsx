import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, duration, TextField } from "@mui/material";
import { useState } from "react";
import MyDatePicker from "../Reutilizables/MyDatePicker";
import MyTimePicker from "../Reutilizables/MyTimePicker";
import dayjs from "dayjs";
import durationP from 'dayjs/plugin/duration';

function CardEtapaCinco({ setVisibleT,setVisibleCu,setVisibleCI,setEtapa, disabled }: any) {

  const { disabledProps, setDisabledProps } = disabled;

  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [form, setForm] = useState({
    fecha_extraccion: dayjs(),
    hora_extraccion: dayjs(),
    fecha_iniciado: null,
    fecha_ultima_dosis: dayjs().add(-1, "day"),
    hora_ultima_dosis: dayjs().add(-12, "hour"),
    diferencia_horas: "",
  });

  dayjs.extend(durationP);

  const calculateDiffHours = (startDateTime: any, endDateTime: any) => {
    const diffInMillis = endDateTime.diff(startDateTime);
    const diffInHours = dayjs.duration(diffInMillis).hours();
    const diffInMinutes = dayjs.duration(diffInMillis).minutes();
    return `${diffInHours}:${diffInMinutes}`;
  }

  const handleDateChange = (field: any) => (newValue: any) => {
    setForm((prevForm) => {
      const updatedForm = { ...prevForm, [field]: newValue };

      if (updatedForm.hora_extraccion && updatedForm.hora_ultima_dosis) {
        updatedForm.diferencia_horas = calculateDiffHours(
          updatedForm.fecha_ultima_dosis.hour(updatedForm.hora_ultima_dosis.hour()).minute(updatedForm.hora_ultima_dosis.minute()),

          updatedForm.fecha_extraccion.hour(updatedForm.hora_extraccion.hour()).minute(updatedForm.hora_extraccion.minute())
        );
      }

      return updatedForm;
    });
  };


  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEtapa({ form });
    setOpenDialog(false);
  };

  const handleAddAnother = () => {
    setVisibleT(true);
    setVisibleCu(true);
    setEtapa({ form });
    setOpenDialog(false);
    setDisabledProps({
      disabledET: false,
      disabledEC: false,
      disabledECI: false
    })
  }

  return (
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
          <MyDatePicker
            label="Fecha de extracción"
            value={form.fecha_extraccion}
            onChange={handleDateChange("fecha_extraccion")}
          />
          <MyTimePicker
            label="Hora Extraccion"
            value={form.hora_extraccion}
            onChange={handleDateChange("hora_extraccion")}
          />
          <MyDatePicker
            label="Fecha iniciado"
            value={form.fecha_iniciado}
            onChange={handleDateChange("fecha_iniciado")}
          />
          <MyDatePicker
            label="Fecha última dosis"
            value={form.fecha_ultima_dosis}
            onChange={handleDateChange("fecha_ultima_dosis")}
          />
          <MyTimePicker
            label="Hora Ultima Dosis"
            value={form.hora_ultima_dosis}
            onChange={handleDateChange("hora_ultima_dosis")}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Diferencia de horas"
            name="diferencia_horas"
            value={form.diferencia_horas}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 2 }}
            onClick={() => setOpenDialog(true)}
          >
            Terminar
          </Button>
        </form>
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>¿Desea agregar otro análisis?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Puede continuar agregando otro análisis o finalizar aquí.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} color="secondary">
            No
          </Button>
          <Button onClick={handleAddAnother} color="primary" autoFocus>
            Sí
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
export default CardEtapaCinco;
