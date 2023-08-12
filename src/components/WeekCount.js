import React, { useState } from 'react';
import { getISOWeek } from 'date-fns';

import { getMondayNumbers } from './getMondayNumbers';
import AsesorOffCanvas from './AsesorOffCanvas';

function WeekCount({ monthCalendario, yearSet }) {
  
  const [weekNumber, setWeekNumber] = useState(1);
  const [month, setMonth] = useState(monthCalendario);


  console.log(month)

  const day = [
    1,
    ...getMondayNumbers(monthCalendario, yearSet).filter(
      (number) => number !== 1
    ),
  ];

  const handleClick = (selectedWeek,selectedMonth) => {
    setWeekNumber(selectedWeek);
    setMonth(selectedMonth)

  };

  console.log(month)
  const weekNumbers = day.map((dayItem) => {
    const date = new Date(yearSet, monthCalendario, dayItem);
    const weekNumber = getISOWeek(date); // funcion de libreria date-fns que retorna numero de semana segun date

    return (
      <li className="numerW" key={weekNumber + '-' + monthCalendario}>
        <button
          className="btn numerW"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
          onClick={() => handleClick(weekNumber,monthCalendario)}
        >
          {weekNumber}
        </button>
      </li>
    );
  });

  return (
    <>
        <AsesorOffCanvas weekNumber={weekNumber}  />
      <ol className="numerWeek">
        <li className="numerW-title" key={'Sem'}>
          {' '}
          Sem{' '}
        </li>
        {weekNumbers}
      </ol>
    </>
  );
}

export default WeekCount;
