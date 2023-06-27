import React from "react";
import "../css/calendario.css";
import holydays from "./holydays.js";

function Calendarios(props) {
  const monthCalendario = props.mesProps;
  const yearSet = props.yearSet;
  const colombianHolydays = holydays(yearSet);
  console.log("llego en calendario",colombianHolydays)

  // se suma a monthCalendar 1 para obtener el dia anterior al siguiente mes
  const cantidadDias = new Date(yearSet, monthCalendario + 1, 0).getDate();

  const dias = Array.from({ length: cantidadDias }, (_, index) => index + 1);
  const diasTitle = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  const dayStart = new Date(yearSet, monthCalendario, 1).getUTCDay() + 1; // retorna el primer dia de la semana sumando 1 unidad

  return (
    <div className="calendar">
      <ol className="ol">
        {diasTitle.map((diaL) => (
          <li className="dayLetter" key={diaL}>
            {diaL}
          </li>
        ))}
        {dias.map((dia) =>
          dia === 1 ? (
            <li className="firstday" style={{ gridColumnStart: dayStart }}>
              1
            </li>
          ) : (
            <li
              className="weekDays"
              key={dia}
              style={
                colombianHolydays.some(
                  (festivo) =>
                    festivo.dia === dia && festivo.mes === monthCalendario
                )
                  ? { color: "red", fontWeight: "bold" }
                  : {}
                // la etiqueta style recibe los parametro de la funcion holydays donde cambia el formato cuando hay conicidencia
              }
            >
              {dia}
            </li>
          )
        )}
      </ol>
    </div>
  );
}

export default Calendarios;
