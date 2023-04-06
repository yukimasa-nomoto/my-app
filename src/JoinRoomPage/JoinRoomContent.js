import React, { useState } from "react";
import JoinRoomInputs from "./JoinRoomInputs";
import {connect} from 'react-redux';

const JoinRoomContent = (props) => {
  const { isRoomHost} = props;

  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const handleJoinRoom = () => {
    //joining the room
    console.log("joining");
  };

  return (
    <>
      <JoinRoomInputs 
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
    </>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(JoinRoomContent);