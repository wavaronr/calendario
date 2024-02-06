import { getDataProfile } from './getDataAsesor';
import React, { useState, useEffect } from 'react';
import '../css/calendario.css';
import { Container } from 'react-bootstrap';

function CardProfile() {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const profile = await getDataProfile();
      setProfiles(profile);
    };

    fetchData();
  }, []);

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const cardsProfiles = filteredProfiles.map(({ id, name, cargo }) => (
    // <div className="bordeador">
    <div className="cardprofile" key={'card-Profile' + { id }}>
      <div
        className="card-body"
        style={{ width: '100px' }}
        key={'card-body-Profile' + { id }}
      >
        <h5 className="card-title p-3" key={'card-title-Profile' + { id }}>
          {name}
        </h5>
        <p className="card-text p-2" key={'card-text-Profile' + { id }}>
          Identificación: {id}
          <br />
          Cargo: {cargo}
        </p>
      </div>
      <div className="container p-1">
        <button className="btn btn-primary mt-auto">Editar</button>
        <button className="btn btn-danger mt-auto">Eliminar</button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container p-5 ">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="card-profiles">{cardsProfiles} </div>
      </div>
    </>
  );
}

export default CardProfile;
