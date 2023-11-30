import {  NavLink, Outlet } from "react-router-dom";
import useAuth from "../myHooks/useAuth";


const AdminDashboard = () => {
    const {user} = useAuth();
    return (
        <div className="flex">
            {/* dashboard Navbar */}
            <aside className="sidebar h-full justify-start">
	<section className="sidebar-title items-center p-4">
		<div className="flex flex-col">
			<span>VoiceVista</span>
			<span className="text-xs font-normal text-content2">opinions</span>
		</div>
	</section>
	<section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
		<nav className="menu rounded-md">
			<section className="menu-section px-4">
				<span className="menu-title">Main menu</span>
				<ul className="menu-items">
					<NavLink to={'/adminDashboard/surveys'}>
					<li className="menu-item">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
							<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span>Surveys</span>
					</li>
					</NavLink>

					<NavLink to={'/adminDashboard/manageUsers'}>
					<li className="menu-item menu-active">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
						<span>Manage users</span>
					</li>
					</NavLink>
					<NavLink to={'/adminDashboard/payments'}>
					<li className="menu-item">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
						</svg>
						<span>Payments</span>
					</li>
					</NavLink>
					<NavLink to={"/"}>
					<li className="menu-item">
						<span>Home</span>
					</li>
					</NavLink>
				
				</ul>
			</section>
		</nav>
	</section>
	<section className="sidebar-footer h-full justify-end bg-gray-2 pt-2">
		<div className="divider my-0"></div>
		<div className="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4">
			<label className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4" tabIndex="0">
				<div className="flex flex-row gap-4 p-4">
					<div className="avatar avatar-md">
						<img src={user?.photoURL} alt="avatar" />
					</div>

					<div className="flex flex-col">
						<span>{user?.displayName}</span>
						<span className="text-xs font-normal text-content2">Admin</span>
					</div>
				</div>
			</label>
			<div className="dropdown-menu dropdown-menu-right-top ml-2">
				<a className="dropdown-item text-sm">Profile</a>
				<a tabIndex="-1" className="dropdown-item text-sm">Account settings</a>
				<a tabIndex="-1" className="dropdown-item text-sm">Change email</a>
				<a tabIndex="-1" className="dropdown-item text-sm">Subscriptions</a>
				<a tabIndex="-1" className="dropdown-item text-sm">Change password</a>
				<a tabIndex="-1" className="dropdown-item text-sm">Refer a friend</a>
				<a tabIndex="-1" className="dropdown-item text-sm">Settings</a>
			</div>
		</div>
	</section>
</aside>
           <div className="flex-1 bg-[#F6F6F6]">
          <Outlet></Outlet>
           </div>
        </div>
    );
};

export default AdminDashboard;