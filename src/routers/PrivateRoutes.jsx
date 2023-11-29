import PropTypes from 'prop-types'
import {  Navigate, useLocation } from "react-router-dom";
import useAuth from '../myHooks/useAuth';

const PrivateRoutes = ({children}) => {
   const {user, loading} = useAuth();
   const location = useLocation();
   if(loading){
    return <table className="table w-full max-w-4xl">
	<thead>
		<tr>
			<th><div className="skeleton h-5 rounded-md"></div></th>
			<th><div className="skeleton h-5 rounded-md"></div></th>
			<th><div className="skeleton h-5 rounded-md"></div></th>
			<th><div className="skeleton h-5 rounded-md"></div></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th><div className="skeleton h-5 rounded-md"></div></th>
			<td><div className="skeleton h-5 rounded-md"></div></td>
			<td><div className="skeleton h-5 rounded-md"></div></td>
			<td><div className="skeleton h-5 rounded-md"></div></td>
		</tr>
		<tr>
			<th><div className="skeleton h-5 rounded-md"></div></th>
			<td><div className="skeleton h-5 rounded-md"></div></td>
			<td><div className="skeleton h-5 rounded-md"></div></td>
			<td><div className="skeleton h-5 rounded-md"></div></td>
		</tr>
		<tr>
			<th><div className="skeleton h-5 rounded-md"></div></th>
			<td><div className="skeleton h-5 rounded-md"></div></td>
			<td><div className="skeleton h-5 rounded-md"></div></td>
			<td><div className="skeleton h-5 rounded-md"></div></td>
		</tr>
		<tr>
			<th><div className="skeleton h-5 rounded-md"></div></th>
			<td><div className="skeleton h-5 rounded-md"></div></td>
			<td><div className="skeleton h-5 rounded-md"></div></td>
			<td><div className="skeleton h-5 rounded-md"></div></td>
		</tr>
	</tbody>
</table>
   }
   else if(user){
    return children;
   }
   return <Navigate to='/login' state={location.pathname} replace></Navigate>
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children: PropTypes.node
}