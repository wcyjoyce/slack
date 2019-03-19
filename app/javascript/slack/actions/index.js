// const base_url = "https://wagon-chat.herokuapp.com";
const base_url = "api/v1";

export function fetchMessages(channel) {
  const url = `${base_url}/channels/${channel}/messages`;
  const promise = fetch(url, { credentials: "same-origin" }).then(response => response.json());

  return {
    type: "FETCH_MESSAGES",
    payload: promise
  };
}

export function createMessage(channel, content) {
  const url = `${base_url}/channels/${channel}/messages`;
  const body = { content };
  const csrfToken = document.querySelector("meta[name='csrf-token']").attributes.content.value;
  const promise = fetch(url, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken
    },
    credentials: "same-origin",
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: "POST_MESSAGE",
    payload: promise
  };
}

export function selectChannel() {
  return {
    type: "SELECT_CHANNEL"
  }
}

export function postMessage(message) {
  return {
    type: "POST_MESSAGE",
    payload: message
  }
}
