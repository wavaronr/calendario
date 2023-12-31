import React, { useState } from 'react';
import '../css/calendario.css';

import AsesorOffCanvas from './AsesorOffCanvas';
import Calendarios from './Calendarios.js';
import YearInput from './yearinput';

function CardsCald() {
  const currentYear = new Date().getFullYear();
  const [weekNumber, setWeekNumber] = useState(1);
  const [yearSet, setYearSet] = useState(currentYear); // Estado para el año seleccionado

  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const handleYearChange = (newYear) => {
    setYearSet(newYear);
  };

  return (
    <>
      <YearInput onYearChange={handleYearChange} />
      <div className="card-content">
        {months.map((mes) => (
          <div className="card" style={{ width: '18rem' }} key={mes.toString()}>
            <div className="card-body">
              <h5 className="card-title">{mes}</h5>
              <Calendarios
                monthCalendario={months.indexOf(mes)}
                yearSet={yearSet}
                setWeekNumber={setWeekNumber}
              />
              </div>
            </div>
        ))}
        <AsesorOffCanvas weekNumber={weekNumber} />
      </div>
    </>
  );
}
export default CardsCald;
