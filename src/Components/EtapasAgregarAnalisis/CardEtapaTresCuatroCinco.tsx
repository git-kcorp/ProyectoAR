import { Grid } from "@mui/material";
import CardEtapaCinco from "./CardEtapaCinco";
import CardEtapaCuatro from "./CardEtapaCuatro";
import CardEtapaTres from "./CardEtapaTres";
import { useEffect, useState } from "react";

function CardEtapaDTCCI({ analisisList, setAnalisis }: any) {
  const [etapaTres, setEtapaTres] = useState();
  const [etapaCuatro, setEtapaCuatro] = useState();
  const [etapaCinco, setEtapaCinco] = useState();
  const [visibleTres, setVisibleTres] = useState(true);
  const [visibleCuatro, setVisibleCuatro] = useState(true);
  const [visibleCinco, setVisibleCinco] = useState(true);

  const [disabledProps, setDisabledProps] = useState({
    disabledET: false,
    disabledEC: false,
    disabledECI: false,
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
        {visibleTres && (
          <CardEtapaTres
            setVisible={setVisibleTres}
            setEtapa={setEtapaTres}
            disabled={{ disabledProps, setDisabledProps }}
          />
        )}
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        {visibleCuatro && (
          <CardEtapaCuatro
            setVisible={setVisibleCuatro}
            setEtapa={setEtapaCuatro}
            disabled={{ disabledProps, setDisabledProps }}
          />
        )}
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        {visibleCinco && (
          <CardEtapaCinco
            setVisibleT={setVisibleTres}
            setVisibleCu={setVisibleCuatro}
            setVisibleCI={setVisibleCinco}
            setEtapa={setEtapaCinco}
            disabled={{ disabledProps, setDisabledProps }}
          />
        )}
      </Grid>
    </Grid>
  );
}
export default CardEtapaDTCCI;
