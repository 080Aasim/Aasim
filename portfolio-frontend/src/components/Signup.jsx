import "./Signup.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { PortfolioContext } from "../context/Portfolio";
import DotField from "./DotField";
import { useNavigate } from "react-router-dom";
import Magnet from "./Magnet";

const API = "http://localhost:1308/api/user/sign-up";
function Signup() {
  const { signUp } = useContext(PortfolioContext);
  const navigate = useNavigate();
  const Schema = yup.object().shape({
    firstName: yup.string().required("*First Name is Required"),
    lastName: yup.string().required("*Last Name is Required"),
    email: yup.string().email("Invalid Email").required("*Email is Required"),
    password: yup
      .string()
      .min(6, "Minimum 6 characters")
      .max(20, "Maximum 20 characters")
      .required("*Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Do not match")
      .required("*Confirm Password is required"),
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
    const res = await signUp(data);
    if (res.success) {
      reset();
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
      <div className="frm absolute z-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="outer">
            <div className="username">
              <input
                type="text"
                placeholder="First Name..."
                {...register("firstName")}
              />
              <h3>{errors.firstName?.message}</h3>
              <input
                type="text"
                placeholder="Last Name..."
                {...register("lastName")}
              />
              <h3>{errors.lastName?.message}</h3>
            </div>
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
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              <h3>{errors.confirmPassword?.message}</h3>
            </div>
            <div>
              <Magnet padding={50} disabled={false} magnetStrength={1}>
                <button className="lbtn">Signup</button>
              </Magnet>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
