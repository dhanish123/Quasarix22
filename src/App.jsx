import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Treatments from './components/Treatments/Treatments';
import MeetLily from './components/MeetLily/MeetLily';
import ChatBubble from './components/ChatBubble/ChatBubble';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <Hero />
        <Treatments />
        <MeetLily />
        <ChatBubble />
        <div className="footer-bar"></div>
      </main>
    </div>
  );
}

export default App;
