import './Header.scss';
import { useContext } from 'react';
import DesktopContext from '../context/DesktopContext';

export const Header = () => {
    const isDesktop = useContext(DesktopContext);
    return (
        <>
            <div className="Header" style={{ flexDirection: isDesktop ? 'row' : 'column' }}>
                <a href="/">
                    <img className="Header--Logo" alt="Janae Coraggio Logo" src={`${process.env.PUBLIC_URL}/logo.png`}></img>
                </a>
                <h1 className="Header--Text">Janae Dueck Coraggio</h1>
            </div>
        </>
    )
}