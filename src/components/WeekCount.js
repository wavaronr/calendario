import { getISOWeek } from "date-fns";

function WeekCount({ monthCalendario, yearSet }) {
  const day = [1, 7, 14, 21, 28];
  const weekNumbers = day.map((dayItem) => {
    const date = new Date(yearSet, monthCalendario, dayItem);
    const weekNumber = getISOWeek(date);
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
