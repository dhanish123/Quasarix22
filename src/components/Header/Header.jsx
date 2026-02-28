import React from 'react';
import './Header.scss';
import { User } from 'lucide-react';

const Header = () => {
    return (
        <header className="top-header">
            <button className="login-btn">
                <User size={22} />
                Log In
            </button>
        </header>
    );
};

export default Header;
