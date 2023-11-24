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
			<span className="text-sm text-content3 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus</span>
		</label>
		<div className="accordion-content text-content2">
			<div className="min-h-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus iusto laborum autem placeat aspernatur inventore eius deleniti reprehenderit? Numquam commodi totam mollitia quod</div>
		</div>
	</div>
	<div className="accordion">
		<input type="checkbox" id="toggle-10" className="accordion-toggle" />
		<label htmlFor="toggle-10" className="accordion-title font-bold ">
			<span>How to make a survey</span>
			<span className="text-sm text-content3 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus</span>
		</label>
		<div className="accordion-content">
			<div className="min-h-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus iusto laborum autem placeat aspernatur inventore eius deleniti reprehenderit? Numquam commodi totam mollitia quod</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default FrequentAsk;