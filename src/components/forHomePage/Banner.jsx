

const Banner = () => {
    return (
        <div className="lg:flex hidden">
             <div className="relative">
            <img src="https://i.imgur.com/y0WLdUE.jpg" alt="" className="min-h-[200px] md:min-h-[400px]" />
        </div>
        <div className="bg-[#a8dadc] font-roboto text-5xl space-y-4 w-max h-max py-2 absolute top-28 left-[400px]   bottom-0 flex flex-col justify-center items-center text-left font-bold">
            <h2>Dive Into Opinions: </h2>
            <h3>Your Platform, </h3>
            <h3>Your Voice.</h3>
        </div>
        <div className="absolute -top-8 left-[470px]   bottom-0 flex  justify-center items-center text-left font-bold">
            <button className="btn bg-[#457b9d] btn-xl hover:bg-[#1d3557] hover:text-white font-cinzel">Explore</button>
        </div>
        </div>
    );
};

export default Banner;