import {  useEffect, useState } from "react";
import useAxiosSecure from "../../myHooks/useAxiosSecure";
import SectionTitle from "../shared/SectionTitle";
import { CiFilter } from "react-icons/ci";
import useUsers from "../../myHooks/useUsers";


const ManageUsers = () => {
    const [allUsers, isPending, refetch] = useUsers();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if(!isPending){
            setUsers(allUsers);
        }
       },[allUsers, isPending])
    const axiosSecure = useAxiosSecure();
    const handleRoleChange = e => {
        const role = e.target.value;
        if(role){
            axiosSecure.get(`/roleBasedUsers?role=${role}`)
            .then(res => {
                setUsers(res.data);
            })
        }else{
            setUsers(allUsers);
        }
    };
    const handleMakeAdmin = id => {
        const role = 'admin';
        axiosSecure.patch(`/roleChange?id=${id}&role=${role}`)
        .then(() => {
            refetch();
        })
    };
    const handleMakeSurveyor = id => {
        const role = 'surveyor';
        axiosSecure.patch(`/roleChange?id=${id}&role=${role}`)
        .then(() => {
            refetch();
        })
    };
    return (
        <div className="mt-12 max-w-6xl mx-auto">
            <SectionTitle title="Manage Users"></SectionTitle>
            <aside className="sidebar h-full justify-start">
	<section className="sidebar-title items-center ">
		<CiFilter className="text-xl"></CiFilter>
			<span>Filter</span>
	</section>
	<section className="sidebar-content overflow-visible">
		<nav className="menu rounded-md">
			<section className="menu-section px-4">
				<ul className="menu-items">
					<li>
						<input type="checkbox" id="menu-2" className="menu-toggle" />
						<label className="menu-item justify-between" htmlFor="menu-2">
							<div>
								<span>Role</span>
							</div>

							<span className="menu-icon">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</span>
						</label>

						<div className="menu-item-collapse">
                            <div className="min-h-0">
                            <select name="categories" className="input  max-w-full" onChange={handleRoleChange}>
              <option value="">All</option>
              <option value="pro-user">pro-user</option>
              <option value="user">user</option>
              <option value="surveyor">surveyor</option>
            </select>
                            </div>
						</div>
					</li>
				</ul>
			</section>
		</nav>
	</section>
</aside>
            <div className="flex w-full overflow-x-auto ">
	<table className="table">
		<thead>
			<tr>
				<th>Serial</th>
				<th>Name</th>
				<th>Email</th>
				<th>Role</th>
                <th>Action</th>
                <th>Action</th>
			</tr>
		</thead>
		<tbody>
			{
                users?.map((user, i) => <tr key={user._id}>
                    <td>{i+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                <button className="btn btn-primary text-white w-full" onClick={() => handleMakeAdmin(user._id)} disabled={user.role !== 'user'}>Make Admin</button>
                </td>
                <td>
                <button className="btn btn-primary text-white w-full" onClick={() => handleMakeSurveyor(user._id)} disabled={user.role !== 'user'}>Make Surveyor</button>
                </td> 
                </tr>)
            }
		</tbody>
	</table>
</div>
        </div>
    );
};

export default ManageUsers;