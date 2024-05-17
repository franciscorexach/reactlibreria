import ItemListContainer from "./ItemListContainer";

const Navbar = () => {
    return (
        <div>
            <h1>Papyros</h1>
        <ItemListContainer />
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Novedades</a></li>
                <li><a href="#">Ficción</a></li>
                <li><a href="#">Autoayuda</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    );
}

export default Navbar