import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ordenes from '../../Data/Ordenes.json';

interface Orden {
  id: number;
  fecha: string;
  paciente: string;
  informe: string;
}

function DataTable() {

  const navigate = useNavigate();

  const handleClick = (orden: Orden) => {
    navigate(`/orden/${orden.id}`);
  };


  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Paciente</TableCell>
            <TableCell>Informe</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(ordenes as Orden[]).map((orden) => (
            <TableRow key={orden.id}>
              <TableCell>{orden.id}</TableCell>
              <TableCell>{orden.fecha}</TableCell>
              <TableCell>{orden.paciente}</TableCell>
              <TableCell>{orden.informe}</TableCell>
              <TableCell>{<Button variant='outlined' color='primary' onClick={() => handleClick(orden)}>Accion</Button>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
