import "./Signup.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { PortfolioContext } from "../context/Portfolio";
import { useNavigate } from "react-router-dom";
import DotField from "./DotField";
import Magnet from "./Magnet";

const API = "http://localhost:1308/api/user/sign-up";
function Login() {
  const { login } = useContext(PortfolioContext);
  const navigate = useNavigate();
  const Schema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("*Email is Required"),
    password: yup
      .string()
      .min(6, "Minimum 6 characters")
      .max(20, "Maximum 20 characters")
      .required("*Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
  });
  const onSubmit = async (data) => {
    const res = await login(data);
    if (res.success) {
      //   reset();
      navigate("/");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="LoginSignup">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          zIndex: 0,
        }}
      >
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#A855F7"
          gradientTo="#B497CF"
          glowColor="#120F17"
        />
      </div>
      <div className="log absolute z-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="outer">
            <div className="email">
              <input
                type="email"
                placeholder="email..."
                {...register("email")}
              />
              <h3>{errors.email?.message}</h3>
            </div>
            <div className="password">
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              <h3>{errors.password?.message}</h3>
            </div>
            <div>
              <Magnet padding={50} disabled={false} magnetStrength={1}>
                <button className="lbtn">
                  Login
                </button>
              </Magnet>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
