import { useEffect, useState } from "react";
import CardEtapaSeis from "../Components/EtapasAgregarAnalisis/CardEtapaSeis";
import CardEtapaTCCI from "../Components/EtapasAgregarAnalisis/CardEtapaTresCuatroCinco";
import CardEtapaUno from "../Components/EtapasAgregarAnalisis/CardEtapaUno";

function OrdenMonitoreo() {
  const [UVisible, setUVisible] = useState(true);
  const [DTCCIVisible,setCVisible] = useState(false);
  const [SVisible, setSVisible] = useState(false);
  const [analisisList,setAnalisis] = useState([])

  useEffect(()=>{
    if(analisisList){
      console.log("Analisis guardado:",analisisList);
    }
  },[analisisList])

  return (
    <div>
      {UVisible && <CardEtapaUno setHide={setUVisible} setShow={setCVisible} />}
      {DTCCIVisible && <CardEtapaTCCI analisisList={analisisList} setAnalisis={setAnalisis}/>}
      {SVisible && <CardEtapaSeis setHide={setSVisible}/>}
    </div>
  );
}
export default OrdenMonitoreo;
