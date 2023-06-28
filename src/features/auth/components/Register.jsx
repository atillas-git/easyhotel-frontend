import HButton from "@/components/HButton/HButton";
import HCheckBox from "@/components/HCheckBox/HCheckBox";
import HInput from "@/components/HInput/HInput";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../styles/auth";
import PropTypes from "prop-types";
import countries from "@/config/counties";
import HSelect from "@/components/HSelect/HSelect";
import { register } from "../api/auth";

const Register = ({ setShowRegister }) => {
  const [name, setName] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [telNo, setTelNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [sex, setSex] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);

  const onRegister = async () => {
    if (!name || !email || !password || !telNo || !sex || !country) {
      return toast.warn("Please fill the necessary fields !");
    }
    try {
      setLoading(true);
      await register({
        name: name,
        telNo: telNo,
        email: email,
        password: password,
        sex: sex,
        country: country,
        hotelId: hotelId,
      });
      toast.success("Register Success ! Please login.");
      setShowRegister(false);
    } catch (error) {
      toast.error(error.response ? error.response.data : error);
    } finally {
      setLoading(false);
    }
  };

  const checkShowPassword = (e) => {
    return setShowPassword(e.target.checked);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSexChange = (e) => {
    setSex(e.target.value);
  };

  return (
    <FormGroup sx={auth.authForm}>
      <Typography variant="h5">Sign Up</Typography>
      <HInput
        required={true}
        label="Hotel Id"
        variant="outlined"
        type="text"
        onChange={(e) => setHotelId(e.target.value)}
      />
      <HInput
        required={true}
        label="Name"
        variant="outlined"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
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
      <HInput
        required={true}
        label={"Re-Enter Password"}
        type={showPassword ? "text" : "password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <HCheckBox label="Show Password" onChange={checkShowPassword} />
      <HInput
        required={true}
        label="Telephone Number"
        variant="outlined"
        type="text"
        onChange={(e) => setTelNo(e.target.value)}
      />
      <HSelect
        label="Gender"
        options={sexes}
        value={sex}
        handleChange={handleSexChange}
        required
      />
      <HSelect
        label="Country"
        options={countries}
        value={country}
        handleChange={handleCountryChange}
        required
      />
      <HButton disabled={loading} variant="contained" onClick={onRegister}>
        SignUp
      </HButton>
      <HButton
        disabled={loading}
        color="contrastText"
        variant="contained"
        onClick={() => setShowRegister(false)}
      >
        Login
      </HButton>
    </FormGroup>
  );
};

const sexes = [
  {
    label: "Male",
    value: "MALE",
  },
  {
    label: "Female",
    value: "FEMALE",
  },
];

Register.propTypes = {
  setShowRegister: PropTypes.func,
};
export default Register;
