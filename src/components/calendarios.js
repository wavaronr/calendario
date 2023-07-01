import React, { useEffect, useState } from "react";
import { holydays } from "./holydays.js";
import "../css/calendario.css";
import DaysCalendar from "./DaysCalendar.js";

function Calendarios({ mesProps, yearSet }) {
  const [colombianHolydays, setColombianHolydays] = useState([]);
  const monthCalendario = mesProps; // recibe el mes de CardsCald.js para rendering

  useEffect(() => {
    const fetchData = async () => {
      const holydaysData = await holydays(yearSet);
      setColombianHolydays(holydaysData);
    };

    fetchData();
  }, [yearSet]);

  // se suma a monthCalendar 1 para obtener el dia anterior al siguiente mes
  const countDays = new Date(yearSet, monthCalendario + 1, 0).getDate();

  const days = Array.from({ length: countDays }, (_, index) => index + 1); // genera el array segun la cantidad de dias del mes
  const daysTitle = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

  return (
    <div className="calendar">
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
            colombianHolydays={colombianHolydays}
            monthCalendario={monthCalendario}
            yearSet={yearSet}
          />
        ))}
      </ol>
    </div>
  );
}

export default Calendarios;
