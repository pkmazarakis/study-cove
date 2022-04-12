import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";

function AssignmentBuilder({
  handleAddBlock,
  handleSetTime,
  handleSetClass,
  handleSetType,
}) {
  const [description, setDescription] = useState("");

  const classes = [
    { class: "CS 103" },
    { class: "PHIL 193C" },
    { class: "COMM 1B" },
    { class: "BIOE 176" },
  ];
  const types = [
    { type: "Pset" },
    { type: "Exam" },
    { type: "Quiz" },
    { type: "Reading" },
    { type: "Essay" },
  ];
  const times = [
    { time: 15 },
    { time: 30 },
    { time: 60 },
    { time: 120 },
    { time: 180 },
  ];

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <div
        style={{
          flexDirection: "row",
          flex: 1,
          display: "flex",
          width: "100%",
          height: 40,
        }}
      >
        <Autocomplete
          size="small"
          id="activityClass"
          freeSolo
          style={{ marginRight: "16px", width: "40%" }}
          options={classes.map((option) => option.class)}
          renderInput={(params) => <TextField {...params} label="Class" />}
          onChange={(event, value) => {
            handleSetClass(value + " ");
          }}
        />
        <Autocomplete
          size="small"
          id="activityType"
          freeSolo
          style={{ width: "40%", marginRight: "16px" }}
          options={types.map((option) => option.type)}
          onChange={(event, value) => {
            handleSetType(value + " ");
          }}
          renderInput={(params) => <TextField {...params} label="Type" />}
        />
        <Autocomplete
          size="small"
          id="activityClass"
          freeSolo
          defaultValue={60}
          style={{ width: "30%" }}
          onChange={(event, value) => {
            handleSetTime(value);
          }}
          options={times.map((option) => option.time)}
          renderInput={(params) => <TextField {...params} label="Time" />}
        />
      </div>
    </Stack>
  );
}

export default AssignmentBuilder;
