import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contactus() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-16 pt-16 items-center justify-center text-center">
          <h1 className="md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <h1 className="md:text-4xl mt-8 pb-8">
            Contact{" "}
            <span className="text-pink-500"> Us! :)</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
              {/* if there is a button in form, it will close the modal */}
              {/* xs */}
              <div className="grid justify-center hw ">
              <div>
                <label> Name </label> <br />
                  {/* md */}
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-md w-full max-w-xs" />
              </div>
              <div>
              <label> E-mail ID </label> <br />
                  {/* md */}
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-md w-full max-w-xs" />
              </div>
              <div>
              <label> Message </label> <br />
                  {/* md */}
                  <textarea className="textarea textarea-md textarea-bordered" placeholder="Message"></textarea>
              </div> 
              </div>  
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Submit
                </button>
              </div>
            </form>
      </div>
    </>
  );
}

export default Contactus;
