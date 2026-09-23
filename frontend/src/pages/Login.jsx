import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import { asyncloginuser } from "../store/actions/userAction";

const Login = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // LOGIN HANDLER

  const LoginHandler = async (user) => {

    console.log("FORM SUBMITTED");
    console.log("User:", user);

    // Call login action
    const success = await dispatch(
      asyncloginuser(user)
    );

    // Redirect only if login is successful
    if (success) {
      navigate("/products");
    }

  };


  return (
    <form
      onSubmit={handleSubmit(LoginHandler)}
      className="flex flex-col w-1/4 justify-start items-start"
    >

      {/* EMAIL */}

      <input
        className="outline-0 border-b p-2 text-2xl mb-1 w-96"
        type="email"
        placeholder="User Email"
        {...register("email", {
          required: "Email is required",
        })}
      />

      {errors.email && (
        <p className="text-red-500 mb-3">
          {errors.email.message}
        </p>
      )}


      {/* PASSWORD */}

      <input
        className="outline-0 border-b p-2 text-2xl mb-1 w-96"
        type="password"
        placeholder="*********"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message:
              "Password must be at least 6 characters",
          },
        })}
      />

      {errors.password && (
        <p className="text-red-500 mb-3">
          {errors.password.message}
        </p>
      )}


      {/* LOGIN BUTTON */}

      <button
        type="submit"
        className="mt-5 px-4 py-2 bg-pink-800 rounded text-white"
      >
        Login User
      </button>


      {/* REGISTER */}

      <p className="mt-5">

        Don't have an account?{" "}

        <Link
          className="text-blue-400"
          to="/register"
        >
          Register
        </Link>

      </p>

    </form>
  );
};

export default Login;