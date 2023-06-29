import React from "react";
import "../css/calendario.css";
function DaysCalendar({ day, colombianHolydays, monthCalendario, yearSet }) {
  const isFirstDay = day === 1;
  const isHolyday = colombianHolydays.some(
    (festivo) => festivo.dia === day && festivo.mes === monthCalendario
  );
  const dayStart = new Date(yearSet, monthCalendario, 1).getUTCDay() + 1; // retorna el primer dia de la semana sumando 1 unidad

  const listItemStyle = {
    ...(isHolyday && { color: "red", fontWeight: "bold" }),
    ...(isFirstDay && { gridColumnStart: dayStart }),
  };

  return (
    <li
      key={day}
      className={isFirstDay ? "firstday" : "weekdays"}
      style={listItemStyle}
    >
      {day}
    </li>
  );
}

export default DaysCalendar;
