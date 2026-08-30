//importing!
import { Link } from "react-router";

//create foother
export default function Footer() {
    return (
        <footer className="site-footer">

            <div>
                <strong>
                    BreakCase
                </strong>

                <p>
                    The best true crime app out there, hands down. At least I think so.
                </p>
            </div>

            <div className="footer-links">

                <Link to="/about">
                    Ethics
                </Link>

                <a
                    href="https://www.fbi.gov/"
                    target="_blank"
                >
                    Report here if you actually figure something out!
                </a>

            </div>
        </footer>
    );
}