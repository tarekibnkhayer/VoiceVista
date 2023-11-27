import {  useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../myHooks/useAxiosSecure";
import useAuth from "../myHooks/useAuth";
import { TfiWrite } from "react-icons/tfi";

const SurveyorDashboard = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [surveys, setServeys] = useState([]);
    useEffect(() => {
       if(user){
        axiosSecure.get(`/surveys?email=${user.email}`)
        .then(res => {
            setServeys(res.data);
            console.log(res.data);
        })
        .catch(err => console.error(err));
       }
    },[axiosSecure, user, user?.email])
    return (
        <div className="my-24">
            <h2 className="text-center text-2xl">Want to Add a new Survey</h2>
            <FaCirclePlus className="mx-auto mt-3 text-3xl" onClick={() => navigate('/createSurvey')}></FaCirclePlus>
            <div className="flex w-full overflow-x-auto mt-12">
	<table className="table">
		<thead>
			<tr>
				<th>Serial</th>
				<th>Title</th>
				<th>Email</th>
				<th>Timestamp</th>
                <th>Voted</th>
                <th>User Feedback</th>
                <th>Chart</th>
                <th>Admin Feedback</th>
                <th>Action</th>
			</tr>
		</thead>
		<tbody>
			{
                surveys.map((survey, i) => <tr key={survey._id}>
                    <th>{i + 1}</th>
                    <td>{survey.title}</td>
                    <td>{survey.email}</td>
                    <td>{survey.createdAt}</td>
                    <td>1</td>
                  <button className="btn bg-[#457b9d] text-white w-full"><td>See</td></button>
                    <td>hello</td>
                  <button className="btn bg-[#1d3557] text-white w-full"><td>See Details</td></button>
                  <td><TfiWrite className="text-2xl"></TfiWrite></td>
                </tr>)
            }
		</tbody>
	</table>
</div>
        </div>
    );
};

export default SurveyorDashboard;