import React, { useState } from 'react';
import { getISOWeek } from 'date-fns';

import { getMondayNumbers } from './getMondayNumbers';
import AsesorOffCanvas from './AsesorOffCanvas';

function WeekCount({ monthCalendario, yearSet }) {
  const [weekNumberP, setWeekNumberP] = useState(1);
  const day = [
    1,
    ...getMondayNumbers(monthCalendario, yearSet).filter(
      (number) => number !== 1
    ),
  ];
  const weekNumbers = day.map((dayItem) => {
    const date = new Date(yearSet, monthCalendario, dayItem);
    const weekNumber = getISOWeek(date); // funcion de libreria date-fns que retorna numero de semana segun date
    const handleClick = (weekNumber) => {
      console.log('Botón fue clicado');
      // Puedes hacer aquí cualquier acción que desees al hacer clic en el botón
      setWeekNumberP(weekNumber)

    };

    return (
      <li className="numerW" key={weekNumber + '-' + monthCalendario}>
        <button
          className="btn numerW"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
          onClick={() =>handleClick(weekNumber)}
        >
          {weekNumber}
        </button>
        <AsesorOffCanvas weekNumberP={weekNumberP}/>
      </li>
    );
  });

  return (
    <>
      <AsesorOffCanvas />
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
