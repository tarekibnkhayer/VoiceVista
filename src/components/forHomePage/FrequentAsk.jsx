import SectionTitle from "../shared/SectionTitle";


const FrequentAsk = () => {
    return (
        <div>
            <SectionTitle title="FAQ"></SectionTitle>
            <div className="accordion-group accordion-group-hover accordion-group-bordered bg-[#f1faee] font-roboto">
	<div className="accordion ">
		<input type="checkbox" id="toggle-9" className="accordion-toggle" />
		<label htmlFor="toggle-9" className="accordion-title font-bold">
			<span>How can be a Pro User?</span>
			<span className="text-sm text-content3 font-normal">You can be Pro user if you pay us 40$ through stripe</span>
		</label>
		<div className="accordion-content text-content2">
			<div className="min-h-0">You can be Pro user if you pay us 40$ through stripe payment gateway. It is very easy to pay.Just give your card number , expiry date of the card an CVC</div>
		</div>
	</div>
	<div className="accordion">
		<input type="checkbox" id="toggle-10" className="accordion-toggle" />
		<label htmlFor="toggle-10" className="accordion-title font-bold ">
			<span>How to make a survey</span>
			<span className="text-sm text-content3 font-normal">If you want to make a survey you have to be a surveyor role</span>
		</label>
		<div className="accordion-content">
			<div className="min-h-0">If you want to make a survey you have to be a surveyor role
			make by an admin.An admin can make you a surveyor and after that you logged in you can see a dashboard. If you go to the dashboard you can see a + sign to make survey.After clicking this you will be redirected to createSurvey page. And if you fill up the form it and submit then it will create automatically a survey for you</div>
		</div>
	</div>
	<div className="accordion">
		<input type="checkbox" id="toggle-110" className="accordion-toggle" />
		<label htmlFor="toggle-110" className="accordion-title font-bold ">
			<span>What is the benefit of being a Pro User?</span>
			<span className="text-sm text-content3 font-normal">A Pro User can do all the thing what a logged in user can do , in addition</span>
		</label>
		<div className="accordion-content">
			<div className="min-h-0">A Pro User can do all the thing what a logged in user can do , in addition a Pro User also can comment on surveys.And after commenting the comments will be refetch in real time and also show his/her name and photo with comment.Is not it cool?</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default FrequentAsk;