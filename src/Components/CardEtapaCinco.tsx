import { Box, Button, Container, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import MyDatePicker from "./MyDatePicker";
import MyTimePicker from "./MyTimePicker";

function CardEtapaCinco() {
    const [form, setForm] = useState({
        fecha_extraccion: null,
        hora_extraccion: null,
        fecha_iniciado: null,
        fecha_ultima_dosis: null,
        hora_ultima_dosis: null,
        diferencia_horas: ''
    });

    const handleDateChange = (field: any) => (newValue: any) => {
        setForm((prevForm) => ({
            ...prevForm,
            [field]: newValue
        }));
        if(form.hora_extraccion && form.hora_ultima_dosis){
            console.log("Hay datos");
        }
    };

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        console.log("Data saved:", form);
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Box
                sx={{
                    background: 'linear-gradient(to right,rgb(255, 255, 255),rgb(76, 76, 76))',
                    padding: 4,
                    borderRadius: 3,
                    boxShadow: 3,
                }}
            >
                <form>
                    <MyDatePicker
                        label="Fecha de extracción"
                        value={form.fecha_extraccion}
                        onChange={handleDateChange('fecha_extraccion')}
                    />
                    <MyTimePicker
                        label="Hora Extraccion"
                        value={form.hora_extraccion}
                        onChange={handleDateChange('hora_extraccion')}
                    />
                    <MyDatePicker
                        label="Fecha iniciado"
                        value={form.fecha_iniciado}
                        onChange={handleDateChange('fecha_iniciado')}
                    />
                    <MyDatePicker
                        label="Fecha última dosis"
                        value={form.fecha_ultima_dosis}
                        onChange={handleDateChange('fecha_ultima_dosis')}
                    />
                    <MyTimePicker
                        label="Hora Ultima Dosis"
                        value={form.hora_ultima_dosis}
                        onChange={
                            handleDateChange('hora_ultima_dosis')
                        }
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
                    <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSave}>
                        Guardar
                    </Button>
                </form>
            </Box>
        </Container>
    );
}
export default CardEtapaCinco;
