import { Grid } from "@mui/material";
import CardEtapaCinco from "./CardEtapaCinco";
import CardEtapaCuatro from "./CardEtapaCuatro";
import CardEtapaTres from "./CardEtapaTres";
import { useEffect, useState } from "react";

function CardEtapaDTCCI({ analisisList, setAnalisis }: any) {
  const [etapaTres, setEtapaTres] = useState();
  const [etapaCuatro, setEtapaCuatro] = useState();
  const [etapaCinco, setEtapaCinco] = useState();

  const [disabledProps, setDisabledProps] = useState({
    disabledET: false,
    disabledEC: false,
    disabledECI: false
  });

  const limpiarSet = () => {
    setEtapaTres(undefined);
    setEtapaCuatro(undefined);
    setEtapaCinco(undefined);
  };

  useEffect(() => {
    if (etapaCinco) {
      setAnalisis([
        ...analisisList,
        {
          etapaTres,
          etapaCuatro,
          etapaCinco,
        },
      ]);
      limpiarSet();
    }
  }, [etapaCinco]);

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <CardEtapaTres setEtapa={setEtapaTres} disabled={{ disabledProps, setDisabledProps }} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <CardEtapaCuatro setEtapa={setEtapaCuatro} disabled={{ disabledProps, setDisabledProps }} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <CardEtapaCinco setEtapa={setEtapaCinco} disabled={{ disabledProps, setDisabledProps }} />
      </Grid>
    </Grid>
  );
}
export default CardEtapaDTCCI;
