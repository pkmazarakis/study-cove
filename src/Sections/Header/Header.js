/* eslint-disable jsx-a11y/alt-text */
import { Button, Icon, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CoveTypography from "../../components/CoveTypography";
import BackgroundPicker from "@mui/icons-material/GridOn";
import { alpha, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CreateRoom from "@mui/icons-material/Add";
import { isMobile } from "react-device-detect";
import Spacer from "react-spacer";

function Header({ handleOpen }) {
  const matches = useMediaQuery("(min-width:1000px)", { noSsr: true });

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        display: "flex",
        justifyContent: "flex-start",
        borderBottom: "0.1px",
        width: "98%",
        padding: "10px",
        alignItems: "center",
        // backgroundColor: "rgba(255, 255, 255, 0.2)",
      }}
    >
      <div>
        {isMobile || !matches ? (
          <IconButton onClick={() => handleOpen()}>
            <CreateRoom />
          </IconButton>
        ) : (
          <Button
            style={{
              marginRight: "16px",
              color: "#000000",
              alignItems: "center",
              backgroundImage: `linear-gradient(135deg, ${alpha(
                "#FF5ACD",
                0.5
              )} 0%, ${alpha("#FBDA61", 0.5)} 100%)`,
              zIndex: 1000,
              // padding: "8px",
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingTop: "8px",
              paddingBottom: "8px",
            }}
            startIcon={<CreateRoom />}
            onClick={() => handleOpen()}
          >
            Create Room
          </Button>
        )}

        {isMobile || !matches ? (
          <IconButton onClick={() => handleOpen()}>
            <BackgroundPicker />
          </IconButton>
        ) : (
          <Button
            style={{
              color: "#000000",
              alignItems: "center",
              backgroundImage: `linear-gradient(135deg, ${alpha(
                "#FF5ACD",
                0.5
              )} 0%, ${alpha("#FBDA61", 0.5)} 100%)`,
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingTop: "8px",
              paddingBottom: "8px",
            }}
            startIcon={<BackgroundPicker />}
            onClick={() => handleOpen()}
          >
            Change Background
          </Button>
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // alignSelf: "center",
          zIndex: -3,
          position: "absolute",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          src={require("../../assets/SPLogoTransparent.png")}
          width={40}
          height={40}
          style={{ marginRight: "16px" }}
        />
        {isMobile ? null : (
          <CoveTypography style={{ fontSize: 18, fontWeight: "regular" }}>
            Study Cove
          </CoveTypography>
        )}
      </div>
      <Spacer grow={"1"} />

      {isMobile ? null : (
        <CoveTypography style={{ fontSize: 18, fontWeight: "regular" }}>
          Hello, Platon
        </CoveTypography>
      )}
    </div>
  );
}

export default Header;
