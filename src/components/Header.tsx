import './Header.scss';
import { useContext } from 'react';
import DesktopContext from '../context/DesktopContext';

export const Header = () => {
    const isDesktop = useContext(DesktopContext);
    return (
        <>
            <div className="Header" style={{ flexDirection: isDesktop ? 'row' : 'column' }}>
                <a href="/">
                    <img className="Header--Logo" alt="Janae Dueck Logo" src={`${process.env.PUBLIC_URL}/logo.jpeg`}></img>
                </a>
                <h1 className="Header--Text">Art and Illustration</h1>
            </div>
        </>
    )
}