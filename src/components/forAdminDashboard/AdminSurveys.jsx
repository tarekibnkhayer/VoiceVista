import React from "react";
import useSurveys from "../../myHooks/useSurveys";
import SectionTitle from "../shared/SectionTitle";
import Chart from 'react-apexcharts'


const AdminSurveys = () => {
    const [allSurvey] = useSurveys();
    return (
        <div className="mt-12 max-w-6xl mx-auto">
            <SectionTitle title="All Survey"></SectionTitle>
            <div className="flex w-full overflow-x-auto mt-12">
	<table className="table">
		<thead>
			<tr>
				<th>Type</th>
				<th>Title/Name</th>
				<th>Surveyor Email</th>
                <th>Interact Emails</th>
				<th>Creation Time</th>
                <th>Voted</th>
                <th>Chart</th>
			</tr>
		</thead>
		<tbody>
			{
                allSurvey?.map((survey, i) => <tr key={survey._id}>
                    <td>{i+1}</td>
                    <td>{survey?.title}</td>
                    <td>{survey?.email}</td>
                    <td> {survey?.voters?.map(voter => <p key={voter}>{voter}</p>)}</td>
                    <td>{survey?.createdAt}</td>
                    <td>{survey?.totalVotes}</td>
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
                </tr>)
            }
		</tbody>
	</table>
</div>
        </div>
    );
};

export default AdminSurveys;