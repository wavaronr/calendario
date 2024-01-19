import { getDataProfile } from './getDataAsesor';
import React, { useState, useEffect } from 'react';
import '../css/calendario.css';

function CardProfile() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const profile = await getDataProfile();
      setProfiles(profile);
    };

    fetchData();
  }, []);
  console.log(profiles);

  const cardsProfiles = profiles?.map(({ id, name, cargo }) => (
    <div className="card" key={'card-Profile' + { id }}>
      <div className="card-body" key={'card-body-Profile' + { id }}>
        <h5 className="card-title" key={'card-title-Profile' + { id }}>
          {name}
        </h5>
        <p class="card-text " key={'card-text-Profile' + { id }}>
          Identificacion: {id}
          <br></br>
          Cargo: {cargo}
        </p>
        <button class="btn btn-primary">Editar</button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <div className="card-profiles">{cardsProfiles}</div>
      </div>
    </>
  );
}
export default CardProfile;
