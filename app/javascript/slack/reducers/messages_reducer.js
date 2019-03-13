const messagesReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_MESSAGES": {
      return action.payload.messages;
    }
    case "POST_MESSAGE": {
      const messageList = state.slice(0);
      messageList.push(action.payload);
      return messageList;
    }
    default:
      return state;
  }
}

export default messagesReducer;
