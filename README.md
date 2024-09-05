# Chat-Application
 "Connect, Share, and Chat Effortlessly."

 This is a real-time chat application built using Java Spring Boot with WebSocket for backend communication, and HTML, CSS, and JavaScript for the frontend. The app allows users to connect and chat dynamically in real time.

## Features
• Real-Time Communication: Uses WebSocket to enable instant messaging between users. 

• Dynamic Messaging: Messages are sent and received dynamically without page refresh.

• User Notifications: Displays notifications when a user connects or disconnects.

• Responsive Design: Optimized for both desktop and mobile devices.

• Simple UI: Clean and intuitive user interface with basic chat functionalities.


## Technologies Used
• Backend: Java Spring Boot with WebSocket and STOMP for real-time messaging.

• Frontend: HTML, CSS, and JavaScript (jQuery) for the user interface.

• WebSocket Protocol: Enables full-duplex communication channels over a single TCP connection.

## Installation
1.Clone the Repository : 
git clone https://github.com/ShubhamGawde/Chat-Application.git
cd chat-app

2.Backend Setup
• Navigate to the backend directory and run:
mvn clean install
mvn spring-boot:run

Access the Application
• Open your browser and go to: http://localhost:8080



## Usage
•Open the chat application in your browser.

•Enter a username to join the chat.

•Start sending messages to other connected users in real-time.

•Users will be notified of new messages, user joins, and disconnects.



## WebSocket Flow
1.Connect: Users connect to the WebSocket server using STOMP protocol.

2.Send Message: Messages are sent to the server and broadcast to all subscribed clients.

3.Receive Message: Clients receive messages in real-time without refreshing the page.

## Acknowledgments
• Spring Boot documentation
• STOMP WebSocket tutorials
• Open source libraries and tools used in this project
