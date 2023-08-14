import NavMenu from './NavMenu';
import { BrowserRouter } from "react-router-dom";

function Header() {
  return (
    <>
    <BrowserRouter>
    <NavMenu/>
    </BrowserRouter>
    </>
  );
}
export default Header;
