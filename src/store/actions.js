const Actions = {
    SET_IS_ROOM_HOST: "SET_IS_ROOM_HOST",
    SET_CONNECT_ONLY_WITH_AUDIO: "SET_CONNECT_ONLY_WITH_AUDIO",
  };
  
  export const setIsRoomHost = (isRoomHost) => {
    return {
      type: Actions.SET_IS_ROOM_HOST,
      isRoomHost,
    };
  };
  
  export const setConnectOnlyWithAudio = (onlyWithAudio) => {
    return {
      type: Actions.SET_CONNECT_ONLY_WITH_AUDIO,
      onlyWithAudio,
    };
  };
  
  export default Actions;
  