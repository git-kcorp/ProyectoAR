
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function MyTimePicker({ label, value, onChange }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                label={label}
                value={value} 
                onChange={onChange}
                views={['hours', 'minutes']}
            />
        </LocalizationProvider>
    );
}


export default MyTimePicker;
