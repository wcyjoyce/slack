const messagesReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_MESSAGES":
      return action.payload;
    case "POST_MESSAGE":
      if (state.map(message => message.id).includes(action.payload.id)) {
        return state;
      } else {
        const messageList = state.slice(0);
        messageList.push(action.payload);
        return messageList;
      }
    case "SELECT_CHANNEL":
      return [];
    default:
      return state;
  }
}

export default messagesReducer;
