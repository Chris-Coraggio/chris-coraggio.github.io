import './Header.scss';

export const Header = () => {
    return (
        <div className="Header">
            <a href="/">
                <img className="Header--Logo" alt="Janae Dueck Logo" src={`${process.env.PUBLIC_URL}/logo.png`}></img>
            </a>
        </div>
    )
}