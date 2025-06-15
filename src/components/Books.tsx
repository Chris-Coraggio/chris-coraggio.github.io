import { useContext } from "react";
import DesktopContext from "@/context/DesktopContext";

export const Books = () => {
    const _isDesktop = useContext(DesktopContext);
    return (
        <div className="Books" id="books">
            <h2>Books</h2>
            <ul>
                <li></li>
            </ul>
        </div>
    );
}