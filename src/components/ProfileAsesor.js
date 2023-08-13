import React, { useState, useEffect } from 'react';
import { getDataAsesor } from './getDataAsesor';

function ProfileAsesor({ weekNumber }) {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const profile = await getDataAsesor('allprofile');
      setProfiles(profile);
      setLoading(false);
    };

    fetchData();
  }, []);

  const weeklyAdvisers = profiles.find(
    (profile) => profile.week === weekNumber
  );

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : weeklyAdvisers ? (
        <div className="card">
          <h5 className="card-title">Semana {weeklyAdvisers.week}</h5>
          <div className="card-body">
            {weeklyAdvisers.asigned?.map(({ name, cargo, buttons }, index) => (
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
      ) : (
        <div>Nada que mostrar</div>
      )}
    </>
  );
}

export default ProfileAsesor;
