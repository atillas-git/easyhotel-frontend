import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import FormHelperText from "@mui/material/FormHelperText";
const MenuProps = {
  PaperProps: {
    style: {
      width: 480,
    },
  },
};
const HSelect = ({
  label,
  value,
  handleChange,
  sx,
  options,
  errorMessage,
  required,
}) => {
  return (
    <FormControl
      sx={sx ? sx : { minWidth: "100%", mt: 1 }}
      required={required}
      error={errorMessage ? true : false}
    >
      <InputLabel id="select-id-label">{label}</InputLabel>
      <Select
        labelId="select-id-label"
        id="select-id"
        value={value}
        onChange={handleChange}
        autoWidth
        label={label}
        MenuProps={MenuProps}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option, index) => {
          return (
            <MenuItem
              key={"select" + option.label + index}
              value={option.value}
              sx={{ width: "100%" }}
            >
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{errorMessage ? errorMessage : ""}</FormHelperText>
    </FormControl>
  );
};
HSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  handleChange: PropTypes.func,
  sx: PropTypes.object,
  options: PropTypes.array,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
};
export default HSelect;
