import { useParams } from "react-router-dom";
import ordenes from '../Data/Ordenes.json';
import { useState } from "react";
import { Box, Container, TextField, Typography } from "@mui/material";


interface Orden {
    id: number;
    fecha: string;
    paciente: string;
    informe: string;
}

function OrdenDetalle() {

    const { id } = useParams();
    const orden = (ordenes as Orden[]).find((o) => o.id === Number(id));

    const [editFecha, setEditFecha] = useState(false);
    const [editPaciente, setEditPaciente] = useState(false);
    const [editInforme, setEditInforme] = useState(false);


    const [form, setForm] = useState({
        fecha: orden?.fecha || '',
        paciente: orden?.paciente || '',
        informe: orden?.informe || ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        console.log("Data saved:", form);
    }

    if (!orden) return <Typography>Orden no encontrada</Typography>;

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                Detalle de Orden #{orden.id}
            </Typography>
            <Box
                sx={{
                    background: 'linear-gradient(to right,rgb(41, 40, 40),rgb(4, 2, 0))',
                    padding: 4,
                    borderRadius: 3,
                    boxShadow: 3,  // Sombra suave
                }}
            >
                <form>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Fecha"
                        name="fecha"
                        value={form.fecha}
                        onChange={handleChange}
                        onDoubleClick={() => setEditFecha(true)}
                        disabled={!editFecha}
                        onBlur={() => {
                            setEditFecha(false)
                            handleSave();
                        }}
                    />
                    <TextField
                        color="primary"
                        fullWidth
                        margin="normal"
                        label="Paciente"
                        name="paciente"
                        value={form.paciente}
                        onChange={handleChange}
                        onDoubleClick={() => setEditPaciente(true)}
                        disabled={!editPaciente}
                        onBlur={() => {
                            setEditPaciente(false);
                            handleSave();
                        }}

                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Informe"
                        name="informe"
                        value={form.informe}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        onDoubleClick={() => setEditInforme(true)}
                        disabled={!editInforme}
                        onBlur={() => {
                            setEditInforme(false);
                            handleSave();
                        }}
                    />
                </form>
            </Box>
        </Container>
    );
}
export default OrdenDetalle;