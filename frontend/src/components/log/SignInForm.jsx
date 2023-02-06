// import React, { useState } from "react";
// import apiConnexion from "@services/apiConnexion";

// function SignInForm() {
//   const [connexion, setConnexion] = useState({
//     email: "",
//     password: "",
//   });

//   const handleConnexion = (place, value) => {
//     const newConnexion = { ...connexion };
//     newConnexion[place] = value;
//     setConnexion(newConnexion);
//   };

//   const sendForm = (e) => {
//     e.preventDefault();
//     apiConnexion
//       .post("/login", connexion)
//       .then((res) => {
//         res.sendStatus(200);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={(e) => sendForm(e)} id="sign-up-form">
//         <label className="font-medium" htmlFor="email">
//           Email
//         </label>
//         <br />
//         <input
//           className="h-14 w-96 rounded-xl"
//           type="text"
//           name="email"
//           id="email"
//           onChange={(e) => handleConnexion(e.target.name, e.target.value)}
//           value={connexion.email}
//         />

//         <br />
//         <label className="font-medium" htmlFor="password">
//           Mot de passe
//         </label>
//         <br />
//         <input
//           className="h-14 w-96 rounded-xl"
//           type="password"
//           name="password"
//           id="password"
//           onChange={(e) => handleConnexion(e.target.name, e.target.value)}
//           value={connexion.password}
//         />

//         <br />
//       </form>
//       <div>
//         <button
//           onClick={(e) => sendForm(e)}
//           type="submit"
//           className="rounded-xl mt-3 px-6 py-1 border border-blue bg-darkPink text-black  hover:bg-white hover:text-darkPink text-xl"
//         >
//           Valider
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SignInForm;
