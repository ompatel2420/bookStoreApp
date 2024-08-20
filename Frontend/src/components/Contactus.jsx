import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
      .post("http://localhost:4001/Contactus", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Form submitted");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Contactus", JSON.stringify(res.data.contactus));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-16 pt-16 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Contact{" "}
            <span className="text-pink-500"> Us! :)</span>
          </h1>
          <br /> 
          <h1  className="text-2xl  md:text-4xl">
            Inquiry Form{" "}
            <span className="text-pink-500"> ! </span>
          </h1>
          <br />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-80  container mx-auto justify-center items-center">
                <div className="p-2">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="name" {...register("email", { required: true })} />
                    </label>
                    {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span> )}
                </div>
                
                <div className="p-2">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })} />
                        </label>
                        {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span> )}
                </div>
                <div className="p-2">
                    <textarea className="textarea w-80 textarea-bordered" placeholder="Message" {...register("email", { required: true })}></textarea>
                    {errors.message && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span> )}      
                </div>
                <button className="btn btn-wide ml-10 btn-active text-white text-l btn-secondary">Submit</button>
            </div>  
          </form>
        </div>
);
}

export default Contactus;
