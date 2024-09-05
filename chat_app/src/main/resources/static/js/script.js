let stompClient = null;

// Establishing WebSocket connection
function connect() {
  let socket = new SockJS("/server");
  stompClient = Stomp.over(socket);

  stompClient.connect({}, function (frame) {
    console.log(frame);

    stompClient.subscribe('/topic/return-to', function (response) {
      showMessage(JSON.parse(response.body));
    });
  });
}

// Entering chat room
function login() {
  let name = $("#name").val();
  localStorage.setItem("name", name);
   window.location.href = "/messaging_page.html";
}

// Sending message
function sendMessage() {
  if (!stompClient || stompClient.ws.readyState !== WebSocket.OPEN) {
    alert("WebSocket connection is not established.");
    return;
  }

  const messageContent = $("#content").val();
  const userName = localStorage.getItem("name");

  if (!messageContent || !userName) {
    alert("Message content or user name is missing!");
    return;
  }

  // Create the message payload
  const messagePayload = JSON.stringify({
    content: messageContent,
    name: userName,
  });

  stompClient.send("/app/message", {}, messagePayload);
let val = $("#content").val();
console.log(val +"------");
  $("#content").val("");
  val = $("#content").val();
  console.log(val +"##########");

}

function showMessage(response) {
  let identify = "";
  if (response.name === localStorage.getItem('name')) {
    identify = "media-chat media-chat-reverse";
  } else {
    identify = "media-chat";
  }

  const chatMessage = `
    <div class="media  ${identify}">

      <img class="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="...">
      <div class="media-body ">
        <p>${response.content}</p>
      </div>
    </div>
  `;

  $("#chat-content").append(chatMessage);
  scrollToBottom();
}
function scrollToBottom() {
  const chatContainer = $("#chat-content");
  chatContainer.scrollTop(chatContainer.prop("scrollHeight"));
}



function disconnect() {
  if (stompClient !== null) {
    stompClient.disconnect(function () {
      localStorage.removeItem("name");
      document.location.href = "/index.html";
    });
  }
}

$(document).ready(function () {
    connect();



  $("#submit-btn").click(function () {
    login();
  });

  $("#send").click(function () {
    sendMessage();
  });

  $("#logout").click(function () {
    disconnect();
  });
});
