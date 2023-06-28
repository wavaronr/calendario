import React, { useEffect, useState } from "react";

function FirstDay(props) {
    console.log("con cambio ",props.yearSet)
    const [ColombianHolydays, setColombianHolydays] = useState([props.yearSet]);
    const isFirstDay = props.dia === 1;
  
  
  useEffect(() => {
    const fetchData = async () => {
      const holydaysData = await props.colombianHolydays(props.yearSet);
      setColombianHolydays(holydaysData);
    };
    fetchData();
  }, []);
  const isHolyday = ColombianHolydays.some(
    (festivo) => festivo.dia === props.dia && festivo.mes === props.monthCalendario
  );
  const dayStart = new Date(props.yearSet, props.monthCalendario, 1).getUTCDay() + 1; // retorna el primer dia de la semana sumando 1 unidad

  return (
    <>
      <li
        key={props.dia}
        className={isFirstDay ? "firstday" : "weekdays"}
        style={
          isHolyday
            ? { color: "red", fontWeight: "bold", gridColumnStart: dayStart }
            : { gridColumnStart: dayStart }
        }
      >
        {props.dia}
      </li>
    </>
  );
}

export default FirstDay;
