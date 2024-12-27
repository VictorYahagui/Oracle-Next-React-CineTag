import { Link } from "react-router-dom";
import logo from "../../assets/Logo-cinetag-branco 1.png";
import { HeaderLink } from "../HeaderLink";

export function Header() {
    return (
        <>
            <header className="flex justify-around items-center py-4 bg-black">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <nav >
                    <HeaderLink URL="/">
                        Home
                    </HeaderLink>
                    <HeaderLink URL="/favorites">
                        Favorito
                    </HeaderLink>
                </nav>
            </header>
        </>
    )
}