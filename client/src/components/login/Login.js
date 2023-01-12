import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import '../../styles/login.scss'

const Login = () => {
  return (
    <section className="login">
      <button initial={{ y: "-100vh" }} animate={{ y: 0 }}>
        Login with Google
        <FcGoogle />
      </button>
    </section>
  );
};

export default Login;