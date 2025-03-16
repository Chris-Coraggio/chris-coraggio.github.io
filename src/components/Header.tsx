import './Header.scss';
import { useContext } from 'react';
import DesktopContext from '../context/DesktopContext';

export const Header = () => {
    const isDesktop = useContext(DesktopContext);
    return (
        <>
            <div className="Header" style={{ flexDirection: isDesktop ? 'row' : 'column' }}>
                <img height="200px" src={`${process.env.PUBLIC_URL}/illustrations/headerimagething.jpeg`} />
                    <p>
                        <span className="bold-i-guess">
                            Janae Dueck Coraggio
                        </span>
                        <span className="h4--Text">Illustrations and Books</span>
                        </p>
            </div>
        </>
    )
}