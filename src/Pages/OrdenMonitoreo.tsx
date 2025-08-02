import { useEffect, useState } from "react";
import CardEtapaSeis from "../Components/EtapasAgregarAnalisis/CardEtapaSeis";
import CardEtapaTCCI from "../Components/EtapasAgregarAnalisis/CardEtapaTresCuatroCinco";
import CardEtapaUno from "../Components/EtapasAgregarAnalisis/CardEtapaUno";
import { useNavigate } from "react-router-dom";

function OrdenMonitoreo() {
  const [UVisible, setUVisible] = useState(true);
  const [DTCCIVisible,setCVisible] = useState(false);
  const [SVisible, setSVisible] = useState(false);
  const [analisisList,setAnalisis] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    if(analisisList.length){
      console.log("Analisis guardado:",analisisList);
      navigate('/');
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
