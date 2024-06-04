import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <h1>Papyros</h1>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/Contacto">Contacto</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar