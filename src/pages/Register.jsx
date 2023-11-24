import { NavLink } from "react-router-dom";


const Register = () => {
    return (
        <div>
             <form  className="mx-auto flex w-full max-w-sm flex-col gap-6 mt-36">
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Register</h1>
            <p className="text-sm">create a new account here</p>
        </div>
        <div className="form-group">
            <div className="form-field">
                <label className="form-label">Name</label>
    
                <input placeholder="Type here" name="name" type="text" className="input max-w-full" required />
            </div>
            <div className="form-field">
                <label className="form-label">Email address</label>
    
                <input placeholder="Type here" name="email" type="email" className="input max-w-full" required />
            </div>
            <div className="form-field">
                <label className="form-label">Password</label>
                <div className="form-control">
                    <input placeholder="Type here" name="password" type="password" className="input max-w-full" required />
                </div>
            </div>
            <div className="form-field">
                <label className="form-label">Photo URL</label>
                <div className="form-control">
                    <input placeholder="Type here" name="photo" type="url" className="input max-w-full" required />
                </div>
            </div>
            <div className="form-field pt-5">
                <div className="form-control justify-between">
                    <button type="submit" className="btn bg-[#457b9d] text-white w-full hover:bg-[#1d3557]">Register</button>
                </div>
            </div>
    
            <div className="form-field">
                <div className="form-control justify-center">
                    <NavLink className="link link-underline-hover link-primary text-sm" to="/login">Already have an account? Login</NavLink>
                </div>
            </div>
        </div>
    </form>
        </div>
    );
};

export default Register;