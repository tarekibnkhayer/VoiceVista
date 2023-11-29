import PropTypes from 'prop-types';

const Card = ({survey}) => {
    return (
        <div>
            <div className="card h-64">
	<div className="card-body">
		<h2 className="card-header">{survey.title}</h2>
		<p className="text-content2 ">{survey.description}</p>
		<div className="card-footer">
			<button className="btn-secondary btn">Learn More</button>
		</div>
	</div>
</div>
        </div>
    );
};

export default Card;
Card.propTypes = {
    survey: PropTypes.object
}