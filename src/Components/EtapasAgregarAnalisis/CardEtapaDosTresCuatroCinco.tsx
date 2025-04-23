import { Grid } from "@mui/material";
import CardEtapaCinco from "./CardEtapaCinco";
import CardEtapaCuatro from "./CardEtapaCuatro";
import CardEtapaTres from "./CardEtapaTres";
import { useEffect, useState } from "react";

function CardEtapaDTCCI({setAnalisis}:any) {
  const [etapaTres,setEtapaTres] = useState();
  const [etapaCuatro,setEtapaCuatro] = useState();
  const [etapaCinco,setEtapaCinco] = useState();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 3}}>
        <CardEtapaTres setEtapa={setEtapaTres}/>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <CardEtapaCuatro setEtapa={setEtapaCuatro}/>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <CardEtapaCinco setEtapa={setEtapaCinco}/>
      </Grid>
    </Grid>
  );
}
export default CardEtapaDTCCI;
