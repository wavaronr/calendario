import React, { useState, useEffect } from 'react';
import { getDataAsesor } from './getDataAsesor';

function ProfileAsesor({ weekNumberP }) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const profile = await getDataAsesor('allprofile');
      setProfiles(profile);
    };

    fetchData();
  }, [weekNumberP]);

  const weekIt = weekNumberP - 1;
  const profiler =[]
  profiler.push(profiles[weekIt])

  const rederProfiles = Object.keys(profiler)?.map((index) => {
    const zona = profiler[weekIt]?.week;
    const persons = profiler[weekIt]?.asigned;

    console.log("zona",zona)
    console.log("persons", persons)
    if(zona!== undefined){
    return (
      <div className="card" key={index}>
        <h5 className="card-title">Zona {zona}</h5>
        <div className="card-body" key={persons + index}>
          {persons?.map(({name,cargo,buttons}, index) => (
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
  }
  else {
    return <div>Cargando...</div>;
  }
  });

  // console.log(rederProfiles);

  return <>{rederProfiles}</>;
}

export default ProfileAsesor;


