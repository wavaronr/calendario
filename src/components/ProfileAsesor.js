import getRandomProfile from "./getRandomProfile"
//import * as  fs from 'node:fs'



function ProfileAsesor() {
    const profiles = getRandomProfile()
   // const fs = require('fs');
/***
 * BORRADOR APARA DBJSON
 */
   // Convertir los perfiles a formato JSON
  // const jsonData = JSON.stringify(profiles);

 // const writeFileSync = fs.writeFileSync;
   // Guardar los perfiles en un archivo JSON
  // writeFileSync('profiles.json', jsonData);


/**FN */
  
    return (
      <>
        {profiles.map(({name,cargo,buttons}, index) => (
          <div className="card" key={index}>
            <h5 className="card-title">Zona {index+1}</h5>
            <div className="card-body">
              <p className="card-text">
                Asesor: {name}
                <br />
                Cargo: {cargo}
                </p>
                {buttons.map((button, buttonIndex) => (
                <button className="btn btn-outline-primary" key={buttonIndex}>
                  {button}
                </button>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  }
  
  export default ProfileAsesor;
  