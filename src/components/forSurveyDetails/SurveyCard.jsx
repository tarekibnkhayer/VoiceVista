import PropTypes from 'prop-types';
import { AiOutlineLike ,  AiOutlineDislike} from "react-icons/ai";
import { useEffect, useRef, useState } from 'react';
import useRole from '../../myHooks/useRole';
import useAuth from '../../myHooks/useAuth';
import useAxiosSecure from '../../myHooks/useAxiosSecure';
import useSurveys from '../../myHooks/useSurveys';

const SurveyCard = ({survey}) => {
    const [hasVoted, setHasVoted] = useState(false);
    const [hasSelected, setHasSelected] = useState(false);
    const [roleBasedSurvey, setRoleBasedSurvey] = useState(false);
    const [,, refetch] = useSurveys();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [role] = useRole();
    const commentRef = useRef();
    useEffect(() => {
        if (user && (role === 'user' || role === 'pro-user')) {
            setRoleBasedSurvey(true);
        }
    }, [user, role]);
    const handleYes = id => {
        setHasVoted(true);
        const value = 'yes';
        axiosSecure.patch(`/specificSurvey?id=${id}`, {value});
    };
    const handleNo = id => {
        setHasVoted(true);
        const value = 'no';
        axiosSecure.patch(`/specificSurvey?id=${id}`,{value});
    };
    const handleLike = id => {
        setHasSelected(true);
        const value = 'like';
        axiosSecure.patch(`/specificSurvey?id=${id}`,{value})
        .then(() => {
            refetch();
        })
    };
    const handleDisLike = (id) => {
        console.log(id);
        setHasSelected(true);
        const value = 'dislike';
        axiosSecure.patch(`/specificSurvey?id=${id}`,{value})
        .then(() => {
            refetch();
        })
    };
    const handleAddComment = (id) => {
        console.log(id);
        const comment = commentRef.current.value;
        axiosSecure.patch(`/addComment?id=${id}`, {user: user.displayName, comment, photo: user.photoURL})
        .then(() => {
            refetch();
            commentRef.current.value = '';
        })
    }
    return (
        <div>
            <div className="card">
	<div className="card-body">
		<h2 className="card-header">{survey.title}</h2>
        <h3 className='font-bold'>Category: {survey.categories}</h3>
		<p className="text-content2">{survey.description}</p>
        <button className='btn btn-outline-primary' onClick={() => handleYes(survey._id)} disabled={hasVoted || !roleBasedSurvey}>Yes</button>
        <button className='btn btn-outline-secondary' onClick={() => handleNo(survey._id)} disabled={!roleBasedSurvey || hasVoted}>No</button>
        <div className='flex gap-4'>
       <button className='flex items-center' onClick={() => handleLike(survey._id)} disabled={hasSelected || !roleBasedSurvey}> <AiOutlineLike className='text-xl'/>Like {survey.like}</button>
       <button className='flex items-center' onClick={() => handleDisLike(survey._id)} disabled={hasSelected || !roleBasedSurvey}> <AiOutlineDislike className='text-xl'/>Dislike{survey.dislike}</button>
       <label className="btn btn-primary" htmlFor={`modal-${survey._id}`}>
        Comments
       </label>
<input className="modal-state" id={`modal-${survey._id}`} type="checkbox" />
<div className="modal">
	<label className="modal-overlay" htmlFor={`modal-${survey._id}`} ></label>
	<div className="modal-content flex flex-col gap-5">
		<label htmlFor={`modal-${survey._id}`}  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
		<h2 className="text-xl">Comments</h2>
		<div className='space-y-4'>
            {
                survey.comments?.map(comment => <div key={comment._id}>
                    <div className='flex items-center gap-4'>
                        <img src={comment.photo} alt="" className='w-8 rounded-full' />
                        <h3>{comment.user}</h3>
                    </div>
                    <h1 className='text-lg font-medium mt-2'>{comment.comment}</h1>
                     </div>)
            }
        </div>
           <div className='flex flex-col gap-3'>
           <textarea className='border p-2' ref={commentRef}></textarea>
            <button className='btn btn-primary' onClick={() => handleAddComment(survey._id)}>Add comment</button>
           </div>
	</div>
</div>
        </div>
		<div className="card-footer">
			<button className="bg-[#e63946] text-white btn">Report</button>
            <p className='text-xs'>TimeStamps: {survey.createdAt}</p>
		</div>
	</div>
</div>
        </div>
    );
};

export default SurveyCard;
SurveyCard.propTypes = {
   survey: PropTypes.object
}