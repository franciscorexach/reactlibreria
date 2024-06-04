const Card = ({ nombre, autor, precio, imagen, stock }) => {
    return (
        <div className="card">
            <div className="container-img">
                <img src={imagen} alt={`Imagen del producto ${ nombre }`} />
            </div>
            <div>
                <h3>
                    { nombre }
                </h3>
                <h4>
                    { autor }
                </h4>
                <h4>
                    { precio }
                </h4>
                <h4>
                    { stock }
                </h4>
            </div>
        </div>
    )
}

export default Card;