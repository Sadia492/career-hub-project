import React, { useContext, useState } from "react";
import { authContext } from "../Context/AuthProvider";
import Register from "../components/Register";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [isWithEmail, setIsWithEmail] = useState(true);
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithGithub, signInWithTwitter } =
    useContext(authContext);
  const handleWithEmailBtn = () => {
    setIsWithEmail(false);
  };
  return (
    <div>
      {isWithEmail ? (
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <button
              onClick={() => signInWithGoogle(navigate)}
              className="btn btn-neutral rounded-full h-20 w-96 text-xl"
            >
              Sign Up With Google
            </button>
          </div>
          <div>
            <button
              onClick={() => signInWithGithub(navigate)}
              className="btn btn-neutral rounded-full h-20 w-96 text-xl"
            >
              Sign Up With Github
            </button>
          </div>
          <div>
            <button
              onClick={() => signInWithTwitter(navigate)}
              className="btn btn-neutral rounded-full h-20 w-96 text-xl"
            >
              Sign Up With Twitter
            </button>
          </div>
          <div>
            <button
              onClick={handleWithEmailBtn}
              className="border-2 rounded-full px-4 py-2 h-20 w-96 text-xl"
            >
              Continue With Email
            </button>
          </div>
        </div>
      ) : (
        <Register></Register>
      )}
      <p className="text-center">
        Already have an account? Please{" "}
        <Link to="/login" className="text-blue-500 underline">
          Login
        </Link>
      </p>
    </div>
  );
}
