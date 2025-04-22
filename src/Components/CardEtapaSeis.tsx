import { Box, Button, Container, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";



function CardEtapaSeis() {


    const [form, setForm] = useState({
        ANALISIS: 0,
        NOMBRE: '',
        TECNICA: '',
        RANGO: '',
    });

    const handleChange = (e: any) => {
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
                    background: 'linear-gradient(to right,rgb(255, 255, 255),rgb(76, 76, 76))',
                    padding: 4,
                    borderRadius: 3,
                    boxShadow: 3,
                }}
            >
                <form>
                    {/* <Select
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
                    </Select> */}

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Rango"
                        name="RANGO"
                        value={form.RANGO}
                        onChange={handleChange}
                    />

                    <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => handleSave()}>Guardar</Button>
                </form>
            </Box>
        </Container>
    );
}
export default CardEtapaSeis;