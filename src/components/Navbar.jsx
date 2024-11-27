import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-around">
        <li><NavLink to="/" className="hover:underline">Homepage</NavLink></li>
        <li><NavLink to="/encyclopedia" className="hover:underline">Encyclopedia</NavLink></li>
        <li><NavLink to="/builder" className="hover:underline">Armor Builder</NavLink></li>
        <li><NavLink to="/saved-sets" className="hover:underline">Saved Sets</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
