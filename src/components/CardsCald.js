import React from "react";
import "../css/calendario.css";
import Calendarios from "./calendarios.js";
import YearInput from "./yearinput";
import { useState } from "react";
function CardsCald() {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const currentYear = new Date().getFullYear();
  const [yearSet, setYearSet] = useState(currentYear); // Estado para el año seleccionado

  const handleYearChange = (newYear) => {
    setYearSet(newYear);
  };

  return (
    <>
      <YearInput onYearChange={handleYearChange} />
      <div className="card-content">
        {months.map((mes) => (
          <div className="card" style={{ width: "18rem" }} key={mes.toString()}>
            <div className="card-body">
              <h5 className="card-title">{mes}</h5>
              {/* <p className="card-text"> */}
              <Calendarios mesProps={months.indexOf(mes)} yearSet={yearSet} />
              {/* </p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default CardsCald;
