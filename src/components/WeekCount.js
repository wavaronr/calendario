import { getISOWeek } from "date-fns";

function WeekCount({ monthCalendario, yearSet }) {
  const day = [1, 8, 15, 22, 28];
  const weekNumbers = day.map((dayItem) => {
    const date = new Date(yearSet, monthCalendario, dayItem);
    const weekNumber = getISOWeek(date); // funcion de libreria date-fns que retorna numero de semana segun date
    return weekNumber;
  });

  return (
    <ol className="numerWeek">
      <li className="numerW-title">Sem</li>
      {weekNumbers.map((weekNumber) => (
        <li className="numerW" key={weekNumber.toString}>
          {weekNumber}
        </li>
      ))}
    </ol>
  );
}

export default WeekCount;