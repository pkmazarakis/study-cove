/* eslint-disable jsx-a11y/alt-text */
import { Modal, Box, Typography, Grid, Paper, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import Confetti from "react-confetti";
import { experimentalStyled as styled } from "@mui/material/styles";
import Reward from "react-rewards";
// import { Typography } from "@mui/material";
import "./App.css";
import Header from "./Sections/Header/Header";
import CoveTypography from "./components/CoveTypography";
import Clock from "react-live-clock";
import ClassList from "./Sections/StudyList/ClassList";
import useMediaQuery from "@mui/material/useMediaQuery";
import YoutubeEmbed from "./components/YoutubeEmbed";

export default function App() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [open, setOpen] = useState(false);
  const [reward, setReward] = useState();
  const [picture, setPicture] = useState(1);
  const matches = useMediaQuery("(min-width:1000px)", { noSsr: true });

  const images = [
    "https://images.pexels.com/photos/2261166/pexels-photo-2261166.jpeg",
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    "https://wallpaperaccess.com/full/1556608.jpg",
    "https://images.pexels.com/photos/1420701/pexels-photo-1420701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/940271/pexels-photo-940271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/4031592/pexels-photo-4031592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3454270/pexels-photo-3454270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?cs=srgb&dl=pexels-henry-%26-co-2341290.jpg&fm=jpg",
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const Backdrop = styled("div")`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.1);
    -webkit-tap-highlight-color: transparent;
  `;
  var handleRewardRequest = function (event) {
    setWidth(event.clientX);
    setHeight(event.clientY);
    reward?.rewardMe();
  };

  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Open Sans"],
      },
    });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes;
    return strTime;
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${images[picture]})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        flex: 1,
        alignItems: "center",
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onClick={(event) => handleRewardRequest(event)}
    >
      <Header handleOpen={handleOpen} />
      {matches ? (
        <Box sx={{ flexGrow: 1, flex: 1, width: "100%", overflow: "scroll" }}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <CoveTypography
                style={{
                  display: "flex",
                  fontSize: 100,
                  fontWeight: "bold",
                  color: "#ffffff",
                  alignSelf: "center",
                  width: "100%",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <Clock format="h:mm" interval={1000} ticking={true} />
              </CoveTypography>
              <YoutubeEmbed embedId="rokGy0huYEA" />
            </Grid>
            <Grid item xs={7}>
              <ClassList />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <div style={{ flexGrow: 1, flex: 1, width: "100%" }}>
          <CoveTypography
            style={{
              display: "flex",
              fontSize: 100,
              fontWeight: "bold",
              color: "#ffffff",
              alignSelf: "center",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Clock format="h:mm" interval={1000} ticking={true} />
          </CoveTypography>
          <ClassList />
          <YoutubeEmbed embedId="rokGy0huYEA" />
        </div>
      )}
      {/* 
      <div
        style={{ position: "absolute", left: width, top: height, zIndex: 1000 }}
      >
        <Reward
          ref={(ref) => setReward(ref)}
          config={{
            emoji: [
              // "😈",
              // "😌",
              // "🥺",
              // "📖",
              // "📚",
              // "💪",
              // "🗓"
              "✏️",
            ],
            elementCount: 3,
            startVelocity: 8,
            decay: 0.95,
            lifetime: 30,
            spread: 90,
            angle: 90,
            zIndex: 1000,
          }}
          type="emoji"
        ></Reward>
      </div> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={Backdrop}
      >
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 24,
            p: 4,
            borderRadius: "12px",
            padding: "18px",
            width: "80%",
            height: "80%",
            flexGrow: 1,
            overflowY: "scroll",
            border: "2px solid rgba(0, 0, 0, 0.2)",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 4, md: 12 }}
          >
            {Array.from(images).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>
                  <img
                    src={images[index]}
                    width={"100%"}
                    height={200}
                    style={{
                      borderRadius: 24,
                      objectFit: "cover",
                      border: "2px solid rgba(0, 0, 0, 0.05)",
                    }}
                    onClick={() => {
                      setPicture(index);
                    }}
                  />
                </Item>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            style={{ marginTop: "24px", width: "100%" }}
            onClick={() => {
              handleClose();
            }}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
