import { useTheme } from "@emotion/react";
import { Button, CircularProgress } from "@mui/material";
import PropTypes from 'prop-types';

/**
 * Author : Atilla Sina Postacı
 * Hotel Button Component
 * Do not perform breaking changes unless it is necessary, only extend.
 */

const HButton = ({children,color,onClick,disabled,sx,loading,spinnerSize,startIcon,endIcon,...other})=>{
  const theme = useTheme();
  const buttonColor = color ? color : "main";
  return (
    <Button
      sx={{ ...style(theme, buttonColor), ...sx }}
      onClick={onClick}
      variant="contained"
      disabled = {disabled ? disabled : false}
      startIcon = {startIcon}
      endIcon = {endIcon}
      {...other}
    >
      {loading ? <CircularProgress size={spinnerSize ? spinnerSize : 25} sx={{p:0.5}}/> : 
        <>
          {children}
        </>
      }
    </Button>
  );
}

const style = (theme, color = "main") => ({
  backgroundColor: theme.palette.primary[color],
  color: "white",
  "&:hover":{
    boxShadow:"none"
  }
});

HButton.propTypes = {
  children:PropTypes.node.isRequired,
  color:PropTypes.oneOf(["main","dark","light","contrastText"]),
  sx:PropTypes.object,
  onClick:PropTypes.func,
  disabled:PropTypes.bool,
  other:PropTypes.any,
  loading:PropTypes.bool,
  spinnerSize:PropTypes.number,
  startIcon:PropTypes.node,
  endIcon:PropTypes.node
}

export default HButton;
