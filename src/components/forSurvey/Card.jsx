import PropTypes from 'prop-types';


const Card = ({survey}) => {
    return (
        <div>
            <div className="card h-64">
	<div className="card-body">
		<h2 className="card-header">{survey.title}</h2>
		<p className="text-content2 ">{survey.description}</p>
			<p className='text-lg font-semibold'><span className='text-green-500'>Total Voted:</span> {survey.totalVotes}</p>
			<p className='text-lg font-semibold'><span className='text-green-500'>Surveyor:</span> {survey.email}</p>
			<p className='text-lg font-semibold'><span className='text-green-500'>Category:</span> {survey.categories}</p>
	</div>
</div>
        </div>
    );
};

export default Card;
Card.propTypes = {
    survey: PropTypes.object
}