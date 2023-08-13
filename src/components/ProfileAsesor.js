import React, { useState, useEffect } from 'react';
import { getDataAsesor } from './getDataAsesor';

function ProfileAsesor({ weekNumber }) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const profile = await getDataAsesor('assignment');
      setProfiles(profile);
    };

    fetchData();
  }, []);

  const weekIt = weekNumber - 1;
  const profiler = [];
  profiler.push(profiles[weekIt]);
  const rederProfiles = Object.keys(profiler)?.map((index) => {
    const semana = profiler[index]?.week;
    const persons = profiler[index]?.asigned;

    if (semana !== undefined) {
      return (
        <div className="card" key={index + 'ProfileAsesor'}>
          <h5 className="card-title" key={semana + index}>
            Semana {semana}
          </h5>
          <div className="card-body" key={persons + index}>
            {persons?.map(({ name, cargo, buttons }, index) => (
              <p className="card-text" key={name + index}>
                Asesor:{name}
                <br />
                Cargo:{cargo}
                <button
                  className="btn btn-outline-primary"
                  key={buttons + index}
                >
                  para corregir {buttons}
                </button>
              </p>
            ))}
          </div>
        </div>
      );
    } else {
      return <div>Cargando...</div>;
    }
  });

  return <>{rederProfiles}</>;
}

export default ProfileAsesor;
