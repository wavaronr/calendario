import React from "react";
import "../css/calendario.css";

function DaysCalendar({ day, colombianHolidays, monthCalendario, yearSet }) {
  const isFirstDay = day === 1;
  const isHoliday = colombianHolidays.some(
    (festivo) => festivo.dia === day && festivo.mes === monthCalendario
  );
  const dayStartCalendar =new Date(yearSet, monthCalendario, 1).getUTCDay()
  const dayStart = dayStartCalendar===0?7:dayStartCalendar; // retorna el primer dia de la semana sumando 1 unidad
    
  const listItemStyle = {
    ...(isHoliday && { color: "red", fontWeight: "bold" }),
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
