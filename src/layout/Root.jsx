import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xs  mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;