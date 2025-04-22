
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function MyTimePicker({ label, value, onChange }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                label={label}
                value={value} 
                onChange={onChange}
                views={['hours', 'minutes']}
            />
        </LocalizationProvider>
    );
}


export default MyTimePicker;
