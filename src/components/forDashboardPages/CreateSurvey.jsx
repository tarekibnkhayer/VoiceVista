import Swal from "sweetalert2";
import useAuth from "../../myHooks/useAuth";
import useAxiosSecure from "../../myHooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";


const CreateSurvey = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
  const currentDate = new Date().toISOString().split("T")[0];
    const handleAddSurvey = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const categories = form.categories.value;
      const title = form.title.value;
      const description = form.description.value;
      const deadline = form.deadline.value;
      const survey = {
        email,
        categories,
        title,
        description,
        deadline,
        yes: 0,
        no: 0,
        like: 0,
        dislike:0
      };
      axiosSecure
      .post(`/surveys?email=${user.email}`, survey)
      .then(() => {
        Swal.fire("Surveys created successfully");
        navigate("/surveyorDashboard");
      });
    };
    return (
        <div className="mt-24">
            <form
            onSubmit={handleAddSurvey}
        className="mx-auto  flex w-full max-w-sm flex-col gap-6"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-[#457b9d] font-mono  font-bold">
            Add Survey Here:
          </h1>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label className="form-label">Your Email address</label>

            <input
              placeholder="Type here"
              name="email"
              value={user?.email}
              readOnly
              type="email"
              className="input max-w-full"
            />
          </div>
          <div className="flex gap-4">
            <div className="form-field">
              <label className="form-label">Survey title</label>
              <div className="form-control">
                <input
                  name="title"
                  placeholder="Type here"
                  required
                  type="text"
                  className="input max-w-full"
                />
              </div>
            </div>
            <div className="form-field">
              <label className="form-label">Deadline</label>
              <div className="form-control">
                <input
                  name="deadline"
                  min={currentDate}
                  required
                  type="date"
                  className="input max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="form-field">
            <label className="form-label">Survey category</label>
            <select name="categories" className="input  max-w-full">
              <option value="Life Style">Life Style</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>

          <div className="form-field">
            <label className="form-label">Description</label>
            <div className="form-control">
              <textarea
                name="description"
                id=""
                cols="60"
                rows="5"
                className="border-[2px] px-4"
                required
              ></textarea>
            </div>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="submit" className="btn bg-[#a8dadc] hover:bg-[#1d3557] hover:text-white w-full">
                Create Survey
              </button>
            </div>
          </div>
        </div>
      </form>
        </div>
    );
};

export default CreateSurvey;