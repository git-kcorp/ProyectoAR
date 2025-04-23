import { Box, Button, Container, MenuItem, Select, TextField } from "@mui/material";
import clientesData from '../../Data/clientes.json';
import { useEffect, useState } from "react";

interface Cliente {
    id: number,
    nombre: string
}

function CardEtapaUno({ setHide, setShow }: any) {
    const fecha = new Date();

    const [form, setForm] = useState({
        fecha: `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDate()}`,
        cliente: '',
        hora : fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false })
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        console.log("Data saved:", form);
        setHide(false);
        setShow(true);
    }

    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        setClientes(clientesData);
    }, []);

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
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Fecha"
                        name="fecha"
                        value={form.fecha}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Hora Informado"
                        name="hora"
                        value={form.hora}
                        onChange={handleChange}
                        multiline
                    />
                    <Select
                        color="primary"
                        fullWidth
                        label="Cliente"
                        name="cliente"
                        value={form.cliente}
                        onChange={(e) => {
                            setForm({ ...form, cliente: e.target.value });
                        }}
                    >
                        {clientes.map((cliente) => (
                            <MenuItem key={cliente.id} value={cliente.id}>
                                {cliente.nombre}
                            </MenuItem>
                        ))}
                    </Select>
                    <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => handleSave()}>Guardar</Button>
                </form>
            </Box>
        </Container>
    );
}
export default CardEtapaUno;