import React from 'react';
import './ChatBubble.scss';
import { MessageCircle } from 'lucide-react';

const ChatBubble = () => {
    return (
        <div className="chat-bubble">
            <MessageCircle size={24} />
        </div>
    );
};

export default ChatBubble;
