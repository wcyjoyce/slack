const selectedChannelReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECTED_CHANNEL": {
      return action.payload;
    }
    default:
      return state;
  }
}

export default selectedChannelReducer;
