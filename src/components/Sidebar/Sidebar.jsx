import React, { useState } from 'react';
import './Sidebar.scss';
import { Menu, X } from 'lucide-react';
import { SiFacebook, SiInstagram } from 'react-icons/si';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(v => !v);

    return (
        <>
            <button
                className={`sidebar-toggle${open ? ' is-open' : ''}`}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-pressed={open}
                onClick={toggle}
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            <aside className={`sidebar${open ? ' sidebar--open' : ''}`}>
                <div className="menu-icon" onClick={toggle} aria-hidden="true">
                    <Menu size={28} />
                </div>
                <div className="logo-text">Lily.</div>
                <div className="social-icons">
                    <a href="#" aria-label="Facebook"><SiFacebook size={18} /></a>
                    <a href="#" aria-label="Instagram"><SiInstagram size={18} /></a>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
