import React from "react";
import { Typography } from "@mui/material";

function CoveTypography({ children, style }) {
  return (
    <Typography style={{ ...style, fontFamily: "Open Sans", color: "#000000" }}>
      {children}
    </Typography>
  );
}

export default CoveTypography;
