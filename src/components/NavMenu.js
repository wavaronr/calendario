import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function NavMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const buttons = ['Home', 'Calendario', 'Perfiles', 'Link 2', 'Disabled'];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
    navigate(`/${buttons[index]}`, { replace: true });
  };

  return (
    <ul className="nav nav-tabs">
      {buttons.map((button, index) => (
        <li className="nav-item" key={index}>
          <button
            className={`nav-link ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {button}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;
