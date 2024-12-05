import React, { useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/api';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';  
import { OverlayPanel } from 'primereact/overlaypanel';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Header.css';
import { Button } from 'primereact/button';

export default function TemplateDemo() {

    const op = useRef(null);

    const navigate = useNavigate();

    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );

    const handleSignout = () => {
        console.log('User signed out');
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        navigate('/login'); // Redirect to signout page
    };
    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Core',
                    icon: 'pi pi-bolt',
                    shortcut: '⌘+S',
                    template: itemRenderer
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server',
                    shortcut: '⌘+B',
                    template: itemRenderer
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil',
                    shortcut: '⌘+U',
                    template: itemRenderer
                },
                {
                    separator: true
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette',
                            badge: 2,
                            template: itemRenderer
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette',
                            badge: 3,
                            template: itemRenderer
                        }
                    ]
                }
            ]
        },
        
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div>
            {/* Avatar with onclick */}
            <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                shape="circle"
                style={{ cursor: 'pointer' }}
                onClick={(e) => op.current.toggle(e)} // Toggle submenu on click
            />

            {/* Submenu panel */}
            <OverlayPanel ref={op} className="custom-avatar-menu">
                <div className="flex flex-column p-3" style={{ width: '150px' }}>
                    <Button label="Profile" className="p-button-text" onClick={() => navigate('/profile')} />
                    <Button label="Settings" className="p-button-text" onClick={() => navigate('/settings')} />
                    <Button label="Sign Out" className="p-button-text" onClick={handleSignout} />
                </div>
            </OverlayPanel>
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}
        