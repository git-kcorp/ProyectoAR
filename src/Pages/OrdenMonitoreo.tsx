import { useState } from "react";
import CardEtapaSeis from "../Components/EtapasAgregarAnalisis/CardEtapaSeis";
import CardEtapaDTCCI from "../Components/EtapasAgregarAnalisis/CardEtapaDosTresCuatroCinco";
import CardEtapaUno from "../Components/EtapasAgregarAnalisis/CardEtapaUno";

function OrdenMonitoreo() {
  const [UVisible, setUVisible] = useState(true);
  const [DTCCIVisible,setCVisible] = useState(false);
  const [SVisible, setSVisible] = useState(false);
  const [analisisList,setAnalisis] = useState([])

  return (
    <div>
      {UVisible && <CardEtapaUno setHide={setUVisible} setShow={setCVisible} />}
      {DTCCIVisible && <CardEtapaDTCCI setAnalisis={setAnalisis}/>}
      {SVisible && <CardEtapaSeis setHide={setSVisible}/>}
    </div>
  );
}
export default OrdenMonitoreo;
