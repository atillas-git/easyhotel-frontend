import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
/**
 * Author : Atilla Sina Postacı
 * HInput component
 * Do not perform breaking changes unless it is necessary, only extend.
 */
const HInput = ({
  label,
  variant,
  type,
  required,
  sx,
  onChange,
  onFocus,
  ...other
}) => {
  return (
    <TextField
      label={label}
      variant={variant ? variant : "outlined"}
      type={type}
      required={required ? required : false}
      sx={sx ? sx : style()}
      onChange={onChange}
      onFocus={onFocus}
      {...other}
    />
  );
};
const style = () => ({
  width: "100%",
});

HInput.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  sx: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  other: PropTypes.object,
};
export default HInput;
