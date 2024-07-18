// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { useNavigate, Link } from "react-router-dom";
// import Logo from "../assets/logo.svg";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { loginRoute } from "../utils/APIRoutes";

// export default function Login() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({ username: "", password: "" });
//   const toastOptions = {
//     position: "bottom-right",
//     autoClose: 8000,
//     pauseOnHover: true,
//     draggable: true,
//     theme: "dark",
//   };
//   useEffect(() => {
//     if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//       navigate("/");
//     }
//   }, []);

//   const handleChange = (event) => {
//     setValues({ ...values, [event.target.name]: event.target.value });
//   };

//   const validateForm = () => {
//     const { username, password } = values;
//     if (username === "") {
//       toast.error("Email and Password is required.", toastOptions);
//       return false;
//     } else if (password === "") {
//       toast.error("Email and Password is required.", toastOptions);
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (validateForm()) {
//       const { username, password } = values;
//       const { data } = await axios.post(loginRoute, {
//         username,
//         password,
//       });
//       if (data.status === false) {
//         toast.error(data.msg, toastOptions);
//       }
//       if (data.status === true) {
//         localStorage.setItem(
//           process.env.REACT_APP_LOCALHOST_KEY,
//           JSON.stringify(data.user)
//         );

//         navigate("/");
//       }
//     }
//   };

//   return (
//     <>
//       <FormContainer>
//         <form action="" onSubmit={(event) => handleSubmit(event)}>
//           <div className="brand">
//             <img src={Logo} alt="logo" />
//             <h1>snappy</h1>
//           </div>
//           <input
//             type="text"
//             placeholder="Username"
//             name="username"
//             onChange={(e) => handleChange(e)}
//             min="3"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={(e) => handleChange(e)}
//           />
//           <button type="submit">Log In</button>
//           <span>
//             Don't have an account ? <Link to="/register">Create One.</Link>
//           </span>
//         </form>
//       </FormContainer>
//       <ToastContainer />
//     </>
//   );
// }

// const FormContainer = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   background-color: #131324;
//   .brand {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     justify-content: center;
//     img {
//       height: 5rem;
//     }
//     h1 {
//       color: white;
//       text-transform: uppercase;
//     }
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     background-color: #00000076;
//     border-radius: 2rem;
//     padding: 5rem;
//   }
//   input {
//     background-color: transparent;
//     padding: 1rem;
//     border: 0.1rem solid #4e0eff;
//     border-radius: 0.4rem;
//     color: white;
//     width: 100%;
//     font-size: 1rem;
//     &:focus {
//       border: 0.1rem solid #997af0;
//       outline: none;
//     }
//   }
//   button {
//     background-color: #4e0eff;
//     color: white;
//     padding: 1rem 2rem;
//     border: none;
//     font-weight: bold;
//     cursor: pointer;
//     border-radius: 0.4rem;
//     font-size: 1rem;
//     text-transform: uppercase;
//     &:hover {
//       background-color: #4e0eff;
//     }
//   }
//   span {
//     color: white;
//     text-transform: uppercase;
//     a {
//       color: #4e0eff;
//       text-decoration: none;
//       font-weight: bold;
//     }
//   }
// `;
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "" || password === "") {
      toast.error("Username and Password are required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  };

  return (
    <>
      <StyledFormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Snappy</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button type="submit">Log In</button>
          <span>
            Don't have an account? <Link to="/register">Create One</Link>
          </span>
        </form>
      </StyledFormContainer>
      <ToastContainer />
    </>
  );
}

const StyledFormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 4rem;
    }
    h1 {
      color: #333;
      text-transform: uppercase;
      font-family: "Arial", sans-serif;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 1rem;
    padding: 4rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  input {
    background-color: #f9f9f9;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    width: 100%;
    font-size: 1rem;
    color: #333;
    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
  button {
    background-color: #007bff;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.3rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #0056b3;
    }
  }
  span {
    color: #333;
    text-transform: none;
    font-size: 0.9rem;
    a {
      color: #007bff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
