// const base_url = "https://wagon-chat.herokuapp.com";
const base_url = "api/v1";

export function fetchMessages(channel) {
  const url = `${base_url}/${channel}/messages`;
  const promise = fetch(url, { credentials: "same-origin"}).then(response => response.json());

  return {
    type: "FETCH_MESSAGES",
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const url = `${base_url}/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: "POST_MESSAGE",
    payload: promise
  };
}
