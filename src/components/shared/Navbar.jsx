import { NavLink } from "react-router-dom";
import './Navbar.css'
import useAuth from "../../myHooks/useAuth";
import Swal from "sweetalert2";
import {AiOutlineMenu} from 'react-icons/ai';
import useRole from "../../myHooks/useRole";


const Navbar = () => {
	const {user, logoutUser} = useAuth();
  const [role, isPending] = useRole();
	const navLinks = <>
	<NavLink to="/" className="ml-5">Home</NavLink>
  {/* role based dashboard: */}
  {
    !isPending && role === 'admin' && <NavLink to="/adminDashboard/surveys" className="ml-5">Dashboard</NavLink>
  }
  {
    !isPending && role === 'surveyor' && <NavLink to="/surveyorDashboard" className="ml-5">Dashboard</NavLink>
  }
	<NavLink to="/surveys" className="ml-5">Surveys</NavLink>
	<NavLink to="/surveyDetails" className="ml-5">SurveyDetails</NavLink>
	<NavLink to="/pro" className="ml-5 bg-[#fec89a] px-3 py-2 rounded-full">Pro</NavLink>
	</>
   const handleLogout = () => {
    logoutUser()
      .then()
      .catch((err) => Swal.fire(err.message));
  };
  return (
    <div>
      <div className="navbar navbar-sticky navbar-glass hidden lg:flex">
        <div className="navbar-start">
          <img
            src="https://i.imgur.com/Ci5vu8p.png"
            alt="website logo"
            className="w-12"
          />
        </div>
        <div className="navbar-center">{navLinks}</div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
              <img src={user.photoURL} alt=""  className="w-12 rounded-full"/>
              <p>{user.displayName}</p>
            </>
          ) : (
            <>
              <NavLink to="/login" className="mr-4 btn btn-primary">
                Login
              </NavLink>
              <img
                src="https://i.imgur.com/BSXLY0r.png"
                alt=""
                className="w-12"
              />
            </>
          )}
        </div>
      </div>
      {/* for mobile */}
      <div className="lg:hidden ">
        <div className="navbar rounded-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <label className="btn  mx-2" tabIndex="0">
                <AiOutlineMenu className="text-xl"></AiOutlineMenu>
              </label>
              <div className="dropdown-menu dropdown-menu-right-bottom">
                <NavLink to="/" className="dropdown-item text-sm">
                  Home
                </NavLink>
                <NavLink to="/addJob" className="dropdown-item text-sm">
                  Add job
                </NavLink>
                <NavLink to="/myPostedJobs" className="dropdown-item text-sm">
                  My posted jobs
                </NavLink>
                <NavLink to="/myBids" className="dropdown-item text-sm">
                  My bids
                </NavLink>
                <NavLink to="/bidRequests" className="dropdown-item text-sm">
                  Bid requests
                </NavLink>
              </div>
            </div>
          </div>
          <div className="navbar-center">
            <img
              src="https://i.imgur.com/Ci5vu8p.png"
              alt="website logo"
              className="w-24"
            />
          </div>
          <div className="navbar-end">
             {user ? (
            <>
              <button onClick={handleLogout} className="text-xs md:text-xl mr-2">Logout</button>
              <img src={user.photoURL} alt="user name"  className="w-10 rounded-full"/>
              <p>{user.displayName}</p>
            </>
          ) : (
            <>
              <NavLink to="/login" className="mr-2 text-xs md:text-xl ">
                Login
              </NavLink>
              <img
                src="https://i.imgur.com/BSXLY0r.png"
                alt="User default logo"
                className="w-10"
              />
            </>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;