import PropTypes from 'prop-types';
const SectionTitle = ({title}) => {
    return (
        <div>
            <h2 className="text-center text-5xl mt-10 font-black text-[#457b9d]">{title}</h2>
            <hr className='mt-4 border-[2px] mb-2 '/>
        </div>
    );
};

export default SectionTitle;
SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
}