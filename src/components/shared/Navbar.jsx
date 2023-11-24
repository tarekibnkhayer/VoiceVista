import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
	const navLinks = <>
	<NavLink to="/" className="ml-5">Home</NavLink>
	<NavLink to="/surveys" className="ml-5">Surveys</NavLink>
	<NavLink to="/surveyDetails" className="ml-5">SurveyDetails</NavLink>
	<NavLink to="/pro" className="ml-5 bg-[#fec89a] px-3 py-2 rounded-full">Pro</NavLink>
	</>
  return (
    <div>
      <div className="navbar navbar-glass navbar-sticky hidden lg:flex bg-[#457b9d] text-white">
	<div className="navbar-start">
	<img
            src="https://i.imgur.com/Ci5vu8p.png"
            alt="website logo"
            className="w-14"
          />
	</div>
	<div className="navbar-center">
		{navLinks}
	</div>
	<div className="navbar-end">
		<NavLink to="/login">Login</NavLink>
	</div>
</div>
    </div>
  );
};

export default Navbar;