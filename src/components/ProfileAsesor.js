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

  const profiler =[]
  profiler.push(profiles[weekNumberP-1])
  console.log(profiler)

  return (
    <>
      {
       
       profiler?.map((profile, index) => {
          return (
            <div className="card" key={index + profile?.asigned}>
              <h5 className="card-title">Zona {profile?.week}</h5>
              <div className="card-body" key={profile?.asigned+index}>
              {/* { name, cargo, buttons } */}
                {profile?.asigned?.map((asing, index) => (
                  <p className="card-text" key={asing.name + index}>
                    Asesor:{asing.name}
                    <br />
                    Cargo:{asing.cargo}
                    <button className="btn btn-outline-primary" key={asing.buttons + index}>
                      para corregir {asing.buttons}
                    </button>
                  </p>
                ))}
              </div>
            </div>
          );
      })
    }
    </>
  );
}

export default ProfileAsesor;

