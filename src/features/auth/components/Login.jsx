import HButton from "@/components/HButton/HButton";
import HCheckBox from "@/components/HCheckBox/HCheckBox";
import HInput from "@/components/HInput/HInput";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAppStore } from "@/hooks/useAppStore";
import { auth } from "../styles/auth";
import PropTypes from "prop-types";
import { login } from "../api/auth";

const Login = ({ setShowRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAppStore();

  const onLogin = async () => {
    if (!email || !password) {
      return toast.warn("Please fill the necessary fields !");
    }
    try {
      setLoading(true);
      const res = await login({ email: email, password: password });
      dispatch({ type: "LOGIN", user: res.data });
    } catch (error) {
      toast.error(error.response ? error.response.data : error);
    } finally {
      setLoading(false);
    }
  };

  const checkShowPassword = (e) => {
    return setShowPassword(e.target.checked);
  };

  return (
    <FormGroup sx={auth.authForm}>
      <Typography variant="h5">Login</Typography>
      <HInput
        required={true}
        label="Email"
        variant="outlined"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <HInput
        required={true}
        label={"Password"}
        type={showPassword ? "text" : "password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <HCheckBox label="Show Password" onChange={checkShowPassword} />
      <HButton disabled={loading} variant="contained" onClick={onLogin}>
        Login
      </HButton>
      <HButton
        disabled={loading}
        color="contrastText"
        variant="contained"
        onClick={() => setShowRegister(true)}
      >
        SignUp
      </HButton>
    </FormGroup>
  );
};
Login.propTypes = {
  setShowRegister: PropTypes.func,
};
export default Login;
