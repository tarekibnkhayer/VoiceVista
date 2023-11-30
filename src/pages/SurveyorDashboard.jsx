import React, {  useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../myHooks/useAxiosSecure";
import useAuth from "../myHooks/useAuth";
import { TfiWrite } from "react-icons/tfi";
import Chart from 'react-apexcharts'

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
				<th>Interact Emails</th>
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
                surveys?.map((survey, i) => <tr key={survey._id}>
                    <th>{i + 1}</th>
                    <td>{survey.title}</td>
                    <td>
                        {survey?.voters?.map(voter => <p key={voter}>{voter}</p>)}
                    </td>
                    <td>{survey.createdAt}</td>
                    <td>{survey.totalVotes}</td>
                    <td>
                    <label className="btn btn-primary" htmlFor={`model-${survey._id}`}>Open Comments</label>
<input className="modal-state" id={`model-${survey._id}`} type="checkbox" />
<div className="modal">
	<label className="modal-overlay" htmlFor={`model-${survey._id}`}></label>
	<div className="modal-content flex flex-col gap-5">
		<label htmlFor={`model-${survey._id}`} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
		<h2 className="text-xl">Comments</h2>
		<span>
            {survey?.comments?.map(comment => <div key={comment._id}>{comment.comment}</div>)}
        </span>
		<div className="flex gap-3">
			<button className="btn btn-error btn-block">Ok</button>

			<button className="btn btn-block">Cancel</button>
		</div>
	</div>
</div>
                </td>
                <td>
                    <label className="btn bg-green-600 text-white" htmlFor={`model1-${survey._id}`}>See chart</label>
<input className="modal-state" id={`model1-${survey._id}`} type="checkbox" />
<div className="modal">
	<label className="modal-overlay" htmlFor={`model1-${survey._id}`}></label>
	<div className="modal-content flex flex-col gap-5">
		<label htmlFor={`model1-${survey._id}`} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
		{
             <div >
             <React.Fragment>
             <div>
                     <Chart
                     type='pie'
                     width={200}
                     height={250}
                     series={[survey.yes, survey.no]} 
                     options={
                         {
                             noData: {text: 'No vote'},
                         labels: ['Yes', 'No'],
                         legend: {position: 'bottom'}
                         
                     } 
                 }
                     >
         
                     </Chart>
                 </div>
             </React.Fragment>
         </div> 
        }
	</div>
</div>
                </td>
                <td>
                <button className="btn btn-primary text-white w-full">See Details</button>
                </td>
                  <td><Link to={`/updateSurvey/${survey._id}`}><TfiWrite className="text-2xl"></TfiWrite></Link></td>
                </tr>)
            }
		</tbody>
	</table>
</div>
        </div>
    );
};

export default SurveyorDashboard;