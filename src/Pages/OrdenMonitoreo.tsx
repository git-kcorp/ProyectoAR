import CardEtapaCinco from "../Components/CardEtapaCinco";
import CardEtapaCuatro from "../Components/CardEtapaCuatro";
import CardEtapaDos from "../Components/CardEtapaDos";
import CardEtapaSeis from "../Components/CardEtapaSeis";
import CardEtapaTres from "../Components/CardEtapaTres";
import CardEtapaUno from "../Components/CardEtapaUno";
import Grid from '@mui/material/Grid';





function OrdenMonitoreo() {
    return (
        <Grid container spacing={2} padding={1} margin={1}>
            <Grid>
                <CardEtapaUno />
            </Grid>
            <Grid>
                <CardEtapaDos />
            </Grid>
            <Grid>
                <CardEtapaTres />
            </Grid>
            <Grid>
                <CardEtapaCuatro />
            </Grid>
            <Grid>
                <CardEtapaCinco />
            </Grid>
            <Grid>
                <CardEtapaSeis />
            </Grid>

        </Grid >

    );
}
export default OrdenMonitoreo;