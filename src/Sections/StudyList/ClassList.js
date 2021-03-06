import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { alpha, styled } from "@mui/material/styles";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Button,
  Box,
  TextField,
  Popover,
  Menu,
  MenuItem,
  Autocomplete,
  Typography,
} from "@mui/material";
import AssignmentBuilder from "../../components/AssignmentBuilder";
import moment from "moment-timezone";

// fake data generator
const getItems = (
  count,
  description,
  time,
  currentTime,
  afterTime,
  offset = 0
) => {
  return Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: description,
    time: time,
    currentTime: currentTime,
    afterTime: afterTime,
  }));
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle, time) => {
  // console.log("THIS IS THE FUCKING TIME: " + time);
  return {
    // some basic styles to make the items look a bit nicer
    display: "flex",
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    borderRadius: "12px",
    height: time,
    alignItems: "center",
    background: isDragging ? "lightblue" : "white",

    // styles we need to apply on draggables
    ...draggableStyle,
  };
};
const getListStyle = (isDraggingOver) => ({
  backgroundColor: "white",
  backgroundImage: `linear-gradient(135deg, ${alpha(
    "#FF5ACD",
    0.5
  )} 0%, ${alpha("#FBDA61", 0.5)} 100%)`,
  padding: grid,
  width: "100%",
  borderRadius: 12,
  marginTop: 10,
  overflowY: "scroll",
});

function ClassList() {
  const start = moment();
  const roundTime = 30 - (start.minute() % 30);
  const [state, setState] = useState([
    getItems(1, "Ex: CS 103 Pset 4", 60, moment()),
  ]);
  // const [currentTime, setCurrentTime] = useState;
  const [hour, setHour] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(60);
  const [type, setType] = useState();
  const [assignmentClass, setAssignmentClass] = useState();

  const [description, setDescription] = useState("");

  useEffect(() => {
    setHour(moment().add(roundTime, "minutes"));
  }, []);
  const handleAddBlock = () => {};
  console.log(state);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    }
    // else {
    //   const result = move(state[sInd], state[dInd], source, destination);
    //   const newState = [...state];
    //   newState[sInd] = result[sInd];
    //   newState[dInd] = result[dInd];

    //   setState(newState.filter((group) => group.length));
    // }
  }

  const handleClose = () => {
    setMenuOpen(false);
  };

  const handleGetTime = (index) => {
    const time = moment();
    for (let i = 0; i < index; i++) {
      time.add(state[0][i].time, "minutes");
      console.log(time);
    }
    return time.format("LT");
  };

  const handleSetTime = (holdTime) => {
    setTime(holdTime);
  };
  const handleSetClass = (holdClass) => {
    setAssignmentClass(holdClass);
    setDescription(description + holdClass);
  };
  const handleSetType = (holdType) => {
    setType(holdType);
    setDescription(description + holdType);
  };
  const times = [
    { time: 15 },
    { time: 30 },
    { time: 60 },
    { time: 120 },
    { time: 180 },
  ];

  return (
    <div
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        overflow: "scroll",
        margin: "12px",
        padding: "12px",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <AssignmentBuilder
          handleAddBlock={handleAddBlock}
          handleSetTime={handleSetTime}
          handleSetClass={handleSetClass}
          handleSetType={handleSetType}
        />
      </div>

      <div
        style={{
          flexDirection: "row",
          flex: 1,
          display: "flex",
          width: "100%",
          height: 40,
        }}
      >
        <TextField
          size="small"
          label="Description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          style={{ marginRight: "16px", width: "80%", marginBottom: "16px" }}
        ></TextField>
        <Button
          variant="contained"
          size="small"
          style={{
            width: "20%",
            backgroundImage: `linear-gradient(135deg, ${alpha(
              "#FF5ACD",
              0.5
            )} 0%, ${alpha("#FBDA61", 0.5)} 100%)`,
            backgroundColor: "white",
            color: "black",
          }}
          onClick={() => {
            const start = moment();
            const remainder = 30 - (start.minute() % 30);
            if (state.length === 0) {
              setState([state[0].concat(getItems(1, description, time, hour))]);
              // console.log("THIS IS THE TIME SEAOFHSDOIGFHSGIO");
              // console.log(hour.add(time, "minutes"));
              setHour(hour.add(time, "minutes"));
            } else {
              // console.log(hour);
              setState([state[0].concat(getItems(1, description, time, hour))]);
              // console.log("THIS IS THE TIME SEAOFHSDOIGFHSGIO");
              // console.log(hour.add(time, "minutes"));
              setHour(hour.add(time, "minutes"));
            }
            setAssignmentClass("");
            setType("");
            setTime(60);
            setDescription("");
          }}
        >
          Add
        </Button>
      </div>

      <div style={{ display: "flex", flex: 1, width: "100%" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => (
                <Box
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      // width: "100%",
                      padding: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <Typography>Start time</Typography>
                    <Typography>Description</Typography>
                    <Typography>Actions</Typography>
                  </div>
                  {el.map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style,
                              item.time
                            )}
                          >
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                                textAlign: "center",
                                alignItems: "center",
                                height: "100%",
                              }}
                            >
                              <div
                                style={{
                                  display: "inline-grid",
                                  flexDirection: "column",
                                  justifyContent: "space-between",
                                  alignContent: "space-between",
                                  height: "100%",
                                }}
                              >
                                <Typography style={{ fontSize: "12px" }}>
                                  {index === 0
                                    ? moment().format("LT")
                                    : handleGetTime(index)}
                                </Typography>
                                {/* <Typography style={{ fontSize: "12px" }}>
                                  {hour.format("LT")}
                                </Typography> */}
                              </div>
                              <Typography
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                {item.content}
                              </Typography>
                              <Button
                                type="button"
                                variant="outlined"
                                size="small"
                                onClick={() => {
                                  const newState = [...state];
                                  newState[ind].splice(index, 1);
                                  setState(
                                    newState.filter((group) => group.length)
                                  );
                                }}
                              >
                                delete
                              </Button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
}

export default ClassList;
