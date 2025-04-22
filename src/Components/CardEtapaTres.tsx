import { Box, Button, Container, TextField, Typography } from "@mui/material";
import analisisData from '../Data/analisis.json';

import { useEffect, useState } from "react";

interface Analisis {
    ANALISIS: number,
    NOMBRE: string,
    TECNICA: string,
    RANGO: string
}

function CardEtapaTres() {

    const [analisis, setAnalisis] = useState<Analisis[]>([]);

    useEffect(() => {
        setAnalisis(analisisData);
    }, []);

    const [form, setForm] = useState({
        ANALISIS: 0,
        NOMBRE: '',
        TECNICA: '',
        RANGO: '',
    });

    const handleCodigo = (e: any) => {
        const analisisO = (analisis as Analisis[]).find((a) => a.ANALISIS === Number(e.target.value));
        if (analisis) {
            setForm({
                ANALISIS: analisisO!.ANALISIS,
                NOMBRE: analisisO!.NOMBRE,
                TECNICA: analisisO!.TECNICA,
                RANGO: analisisO!.RANGO,
            })
        }
    }

    const handleChange = (e: any) => {
        console.log("hi")
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    

    const handleSave = () => {
        console.log("Data saved:", form);
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
            </Typography>
            <Box
                sx={{
                    background: 'linear-gradient(to right,rgb(41, 40, 40),rgb(4, 2, 0))',
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
                        name="codigo_analisis"
                        value={form.ANALISIS}
                        onChange={(e) => {
                            handleChange(e);
                            handleCodigo(e);
                        }}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Nombre"
                        name="nombre"
                        value={form.NOMBRE}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Tecnica"
                        name="tecnica"
                        value={form.TECNICA}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Rango"
                        name="rango"
                        value={form.RANGO}
                        onChange={handleChange}
                    />

                    <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => handleSave()}>Guardar</Button>
                </form>
            </Box>
        </Container>
    );
}
export default CardEtapaTres;