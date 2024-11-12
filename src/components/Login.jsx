import React, { useContext } from "react";
import { authContext } from "../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const {
    signInWithGoogle,
    signInWithGithub,
    signInWithTwitter,
    signInWithEmail,
  } = useContext(authContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmail(email, password);

    e.target.reset();
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center items-center gap-4">
        <div>
          <button
            onClick={() => signInWithGoogle(navigate)}
            className="btn btn-neutral rounded-full h-20 w-96 text-xl"
          >
            Sign In With Google
          </button>
        </div>
        <div>
          <button
            onClick={() => signInWithGithub(navigate)}
            className="btn btn-neutral rounded-full h-20 w-96 text-xl"
          >
            Sign In With Github
          </button>
        </div>
        <div>
          <button
            onClick={() => signInWithTwitter(navigate)}
            className="btn btn-neutral rounded-full h-20 w-96 text-xl"
          >
            Sign In With Twitter
          </button>
        </div>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              onClick={() => navigate("/")}
              type="submit"
              className="btn btn-neutral"
            >
              Login
            </button>
            <p>
              New to this Website? Please{" "}
              <Link to="/register" className="text-blue-500 underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
