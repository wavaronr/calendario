import ProfileAsesor from './ProfileAsesor';
import React, { useState, useEffect } from 'react';

function AsesorOffCanvas({ weekNumberP }) {
  const [weekNumber, setWeekNumber] = useState(1);

  console.log(weekNumberP)

  useEffect(() => {
    // Verificar si weekNumberP es un número antes de actualizar el estado
    if (typeof weekNumberP === 'number') {
      setWeekNumber(weekNumberP);
    }
  }, [weekNumberP]);
  
  console.log("weekNumber",weekNumber)
  return (
    <div
      className="offcanvas offcanvas-start"
      data-bs-scroll="true"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          Asesores
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ProfileAsesor weekNumberP={weekNumber}/>
      </div>
    </div>
  );
}
export default AsesorOffCanvas;
