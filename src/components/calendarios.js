import React, { useEffect, useState } from "react";
import { holidays } from "./holidays.js";
import "../css/calendario.css";
import DaysCalendar from "./DaysCalendar.js";
import WeekCount from "./WeekCount.js";
function Calendarios({ mesProps, yearSet }) {
  const [colombianHolidays, setColombianHolidays] = useState([]);
  const monthCalendario = mesProps; // recibe el mes de CardsCald.js para rendering

  useEffect(() => {
    const fetchData = async () => {
      const holidaysData = await holidays(yearSet);
      setColombianHolidays(holidaysData);
    };

    fetchData();
  }, [yearSet]);

  // se suma a monthCalendar 1 para obtener el dia anterior al siguiente mes
  const countDays = new Date(yearSet, monthCalendario + 1, 0).getDate();

  const days = Array.from({ length: countDays }, (_, index) => index + 1); // genera el array segun la cantidad de dias del mes
  const daysTitle = [ "Lun", "Mar", "Mie", "Jue", "Vie", "Sab","Dom"];

  return (
    <div className="calendar">
      <WeekCount monthCalendario={monthCalendario} yearSet={yearSet} />
      <ol className="ol">
        {daysTitle.map((dayL) => (
          <li className="dayLetter" key={dayL}>
            {dayL}
          </li>
        ))}
        {days.map((day) => (
          <DaysCalendar
            key={day}
            day={day}
            colombianHolidays={colombianHolidays}
            monthCalendario={monthCalendario}
            yearSet={yearSet}
          />
        ))}
      </ol>
    </div>
  );
}

export default Calendarios;
