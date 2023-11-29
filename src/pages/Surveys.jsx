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
                                 <select name="categories" className="input  max-w-full">
              <option value="Life Style">5 or more voted</option>
              <option value="Technology">5 voted</option>
              <option value="Health">3 voted</option>
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
                                 <select name="categories" className="input  max-w-full">
              <option value="Life Style">All</option>
              <option value="Life Style">What do you think?</option>
              <option value="Technology">Traveling</option>
              <option value="Health">What do you prefer?</option>
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