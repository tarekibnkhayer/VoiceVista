import { useEffect, useState } from "react";
import Card from "../components/forSurvey/Card";
import useAxiosPublic from "../myHooks/useAxiosPublic";
import useSurveys from "../myHooks/useSurveys";
import { CiFilter } from "react-icons/ci";

const Surveys = () => {
   const [allSurvey, isPending] = useSurveys();
   const [surveys, setSurveys] = useState([]);
   useEffect(() => {
	if(!isPending){
		setSurveys(allSurvey);
	}
   },[allSurvey, isPending])
   const axiosPublic = useAxiosPublic();
   const handleCategoryChange = e => {
	e.preventDefault();
	const selectedCategory = e.target.value;
	axiosPublic.get(`/selectedSurveyCat?selectedCategory=${selectedCategory}`)
	.then(res =>  {
		setSurveys(res.data);
	})
   };
   const handleTitleChange = e => {
	e.preventDefault();
	const selectedTitle = e.target.value;
	if(selectedTitle){
		axiosPublic.get(`/selectedSurveyTitle?selectedTitle=${selectedTitle}`)
	.then(res => {
		setSurveys(res.data);
	})
	}
	else{
		setSurveys(allSurvey);
	}
   }
   const handleVoteChange = e => {
	e.preventDefault();
	const selectedVote = e.target.value;
	if(selectedVote === 'a'){
		setSurveys(allSurvey);
	}
	if(selectedVote === 'b'){
		const min = 5;
		const max = 20;
		axiosPublic.get(`/filterSurveyByVote?minVotes=${min}&maxVotes=${max}`)
		.then(res => {
			setSurveys(res.data);
		})
	}
	if(selectedVote === 'c'){
		const min = 0;
		const max = 4;
		axiosPublic.get(`/filterSurveyByVote?minVotes=${min}&maxVotes=${max}`)
		.then(res => {
			setSurveys(res.data)
		})
	}
   }
    return (
        <div className="mt-24">
            <div>
            <aside className="sidebar h-full justify-start">
	<section className="sidebar-title items-center p-4">
		<CiFilter className="text-xl"></CiFilter>
		<div className="">
			<span>Filter</span>
		</div>
	</section>
	<section className="sidebar-content overflow-visible">
		<nav className="menu rounded-md">
			<section className="menu-section px-4">
				<ul className="menu-items">
					<li>
						<input type="checkbox" id="menu-1" className="menu-toggle" />
						<label className="menu-item justify-between" htmlFor="menu-1">
							<div>
								<span>Category</span>
							</div>

							<span className="menu-icon">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</span>
						</label>

						<div className="menu-item-collapse">
                            <div className="min-h-0">
                            <select name="categories" className="input  max-w-full" onChange={handleCategoryChange}>
              <option value="">All</option>
              <option value="Life Style">Life Style</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Entertainment">Entertainment</option>
            </select>
                            </div>
						</div>
					</li>
					<li>
						<input type="checkbox" id="menu-2" className="menu-toggle" />
						<label className="menu-item justify-between" htmlFor="menu-2">
							<div>
								<span>Vote</span>
							</div>

							<span className="menu-icon">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</span>
						</label>

						<div className="menu-item-collapse">
							<div className="min-h-0">
                                 <select name="vote" className="input  max-w-full" onChange={handleVoteChange}>
              <option value="a">All</option>
              <option value="b">5 to 20 voted</option>
              <option value="c">0 to 4 voted</option>
            </select>
							</div>
						</div>
					</li>
					<li>
						<input type="checkbox" id="menu-3" className="menu-toggle" />
						<label className="menu-item justify-between" htmlFor="menu-3">
							<div>
								<span>Title</span>
							</div>

							<span className="menu-icon">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
								</svg>
							</span>
						</label>

						<div className="menu-item-collapse">
							<div className="min-h-0">
                                 <select name="categories" className="input  max-w-full" onChange={handleTitleChange}>
              <option value="">All</option>
              <option value="What do you think?">What do you think?</option>
              <option value="Travelling">Traveling</option>
              <option value="What do you prefer?">What do you prefer?</option>
            </select>
							</div>
						</div>
					</li>
				</ul>
			</section>
		</nav>
	</section>
</aside>
            </div>
          <div className="grid grid-cols-3 gap-4 mt-12">
          {
            !isPending  &&   surveys?.map(survey => <Card key={survey._id} survey={survey}></Card> )
            }
          </div>
        </div>
    );
};

export default Surveys;