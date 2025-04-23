import React, { useState } from "react";
import CardEtapaCinco from "../Components/CardEtapaCinco";
import CardEtapaCuatro from "../Components/CardEtapaCuatro";
import CardEtapaDos from "../Components/CardEtapaDos";
import CardEtapaSeis from "../Components/CardEtapaSeis";
import CardEtapaTres from "../Components/CardEtapaTres";
import CardEtapaUno from "../Components/CardEtapaUno";

function OrdenMonitoreo() {
  const [UVisible, setUVisible] = useState(true);
  const [DVisible, setDVisible] = useState(false);
  const [TVisible, setTVisible] = useState(false);
  const [CVisible, setCVisible] = useState(false);
  const [CIVisible, setCIVisible] = useState(false);
  const [SVisible, setSVisible] = useState(false);
  return (
    <div>
      {UVisible && <CardEtapaUno setHide={setUVisible} setShow={setDVisible} />}
      {DVisible && <CardEtapaDos setHide={setDVisible} setShow={setTVisible}/>}
      {TVisible && <CardEtapaTres setHide={setTVisible} setShow={setCVisible} />}
      {CVisible && <CardEtapaCuatro setHide={setCVisible} setShow={setCIVisible} />}
      {CIVisible && <CardEtapaCinco setHide={setCIVisible} setShow={setSVisible} />}
      {SVisible && <CardEtapaSeis setHide={setSVisible}/>}
    </div>
  );
}
export default OrdenMonitoreo;
