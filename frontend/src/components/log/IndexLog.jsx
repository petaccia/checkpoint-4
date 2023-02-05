import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function IndexLog() {
  const [signUpModal, setSignUpModal] = useState(true);
  const [signInModal, setSignInModal] = useState(false);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  return (
    <div className="h-full text-center pt-5 md:mx-auto  md:h-[80vh] w-[80vh] bg-cyan-300 rounded-xl ">
      <div className="">
        <div className="  cursor-pointer rounded-xl px-3 py-6">
          <button
            type="button"
            onClick={(e) => handleModals(e)}
            id="register"
            className={
              signUpModal
                ? " w-64 h-[5vh] mx-10 my-20 bg-blue-500 translate-x-2 active:bg-blue-600 rounded-xl "
                : ""
            }
          >
            S'inscrire
          </button>

          <button
            type="button"
            onClick={(e) => handleModals(e)}
            id="login"
            className={
              signInModal
                ? " w-64 h-[5vh] bg-blue-500 translate-x-2 active:bg-blue-600 rounded-xl"
                : ""
            }
          >
            Se connecter
          </button>
        </div>
        {signUpModal && <SignUpForm />}
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
}

export default IndexLog;
