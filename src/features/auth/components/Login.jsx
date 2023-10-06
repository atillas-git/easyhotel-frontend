import HButton from "@/components/HButton/HButton";
import HCheckBox from "@/components/HCheckBox/HCheckBox";
import HInput from "@/components/HInput/HInput";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../styles/auth";
import PropTypes from "prop-types";
import { login } from "../api/auth";
import useStore from "@/hooks/useStore";

const Login = ({ setShowRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginClient = useStore((state) => state.loginClient);

  const onLogin = async () => {
    if (!email || !password) {
      return toast.warn("Please fill the necessary fields !");
    }
    try {
      setLoading(true);
      const res = await login({ email: email, password: password });
      loginClient(res.data);
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
      <Typography
        variant="h5"
        fontWeight={"bold"}
        boxShadow={"none"}
        marginBottom={2}
      >
        Please Login
      </Typography>
      <HInput
        required={true}
        label="Email"
        variant="filled"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <HInput
        required={true}
        label={"Password"}
        variant="filled"
        type={showPassword ? "text" : "password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <HCheckBox label="Show Password" onChange={checkShowPassword} />
      <HButton
        disabled={loading}
        variant="contained"
        onClick={onLogin}
        loading={loading}
        sx={{ boxShadow: "none" }}
      >
        Login
      </HButton>
      <HButton
        color="contrastText"
        variant="contained"
        sx={{ boxShadow: "none" }}
        onClick={() => setShowRegister(true)}
      >
        SignUp
      </HButton>
    </FormGroup>
  );
};
Login.propTypes = {
  setShowRegister: PropTypes.func.isRequired,
};
export default Login;
