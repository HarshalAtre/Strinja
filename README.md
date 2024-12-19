# NeuralChat: A Comprehensive Chat Application

NeuralChat is an advanced chat application that seamlessly combines real-time communication with machine learning features to enhance user interaction. The app includes functionalities like "Auto-Suggestion," which provides accurate text predictions as users type, and "Emojify," a tool that suggests relevant emojis based on sentence context. With these innovations, NeuralChat not only facilitates instant messaging but also elevates the overall user experience.

## Key Features

### Real-Time Communication

- Implemented using **Socket.io**, enabling seamless and instantaneous messaging between users.
- Integrated with a notification system to alert users about **new messages** and **friend requests**, ensuring effective engagement.

### State Management

- Utilized **Redux** and **RTK Query** to handle application state efficiently and facilitate asynchronous data fetching.
- Managed over 10+ query states to ensure robust and scalable application performance.

### Search and Discovery

- Developed a search functionality allowing users to find others by name, enhancing the app’s usability.

### Machine Learning Integrations

#### Auto-Suggestion

- Built an auto-complete feature with **85% accuracy** to predict and suggest text during chats, improving typing efficiency and reducing response time.

#### Emojify

- Designed a recommendation engine using **Recurrent Neural Networks (RNN)** and **Flask** to suggest up to five relevant emojis for a given sentence with **70% precision**, making conversations more expressive and engaging.

### User Experience

- Constructed a fully responsive design using **Material-UI (MUI)** to ensure 100% compatibility across mobile devices.
- Focused on accessibility and user-friendly design principles to deliver an optimized chatting experience.

## Technical Stack

- **Frontend**: React.js, Material-UI
- **Backend**: Node.js, Flask (for ML models)
- **Database**: MongoDB
- **Real-Time Communication**: WebSockets, Socket.io

## How It Works

1. **Real-Time Messaging**: Messages are transmitted via WebSockets using Socket.io, ensuring instant delivery.
2. **Notification System**: A backend listener monitors friend requests and messages, triggering real-time notifications.
3. **Search and Auto-Suggestion**: Leveraging Redux and RTK Query for efficient query handling, users can search for friends or rely on the auto-suggest feature for rapid responses.
4. **Emoji Recommendations**: The Emojify feature processes user sentences through an RNN model served by Flask, analyzing context and suggesting fitting emojis to enhance communication.

## Installation

To run NeuralChat locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/NeuralChat.git
   cd NeuralChat
   ```
2. Install dependencies:
   ```bash
   npm install
   cd client && npm install
   ```
3. Start the servers:
   - Start the **Express.js backend server**:
     ```bash
     npm run server
     ```
   - Start the **Flask server**:
     ```bash
     python app.py
     ```
   - Start the **React.js frontend**:
     ```bash
     cd client
     npm start
     ```

## Future Enhancements

- **Enhanced ML Models**: Improve the accuracy of Auto-Suggestion and Emojify.
- **Voice and Video Chat**: Extend functionality to support multimedia communication.
- **Language Support**: Include multi-language support for a global user base.

Feel free to contribute, suggest features, or raise issues by opening a pull request!

