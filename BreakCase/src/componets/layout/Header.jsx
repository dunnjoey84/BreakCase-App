//importing!
import { NavLink } from "react-router";

//creates the header!
export default function Header() {
    return (
        <header className="site-header">
            <div>

                <NavLink
                    className="brand"
                    to="/"
                >
                    <span className="brand-mark">
                        BC
                    </span>
                    <span>
                        BreakCase
                    </span>
                </NavLink>

                <nav>

                    <NavLink
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        to="/"
                        end
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        to="/cases"
                    >
                        Cases
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                        to="/about"
                    >
                        About
                    </NavLink>

                </nav>
            </div>
        </header>
    );
}