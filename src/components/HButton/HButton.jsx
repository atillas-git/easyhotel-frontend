/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import React from "react";
/**
 * Author : Atilla Sina Postacı
 * Hotel Button Component
 * Do not perform breaking changes unless it is necessary, only extend.
 */
const HButton = React.forwardRef(function HButton(
  { children, color, sx, onClick, ...other },
  ref
) {
  const theme = useTheme();
  const buttonColor = color ? color : "main";
  return (
    <Button
      sx={{ ...style(theme, buttonColor), ...sx }}
      onClick={onClick}
      variant="contained"
      {...other}
      ref={ref}
    >
      {children}
    </Button>
  );
});
const style = (theme, color = "main") => ({
  marginTop: 1,
  backgroundColor: theme.palette.primary[color],
  color: "white",
});
export default HButton;
