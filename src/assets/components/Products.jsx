import data from "../data/data.json"
import { useParams, useNavigate, Link } from "react-router-dom"

const Products = () => {
    const { category } = useParams()
    const navigate = useNavigate()

    const handleCategoriaChange = ( event ) => {
        const categoria = event.target.value
        if ( categoria ) {
            navigate(`/products/${categoria}`)
        }
    }

    const filtrarProductos = ( data ) => {
        console.log(category)
        if ( category ) {
            return data.filter(( element ) => element.category === category )
        } else {
            return data
        }
    }

    return (
        <>
            <h2>
                Productos
            </h2>
            <select onChange={handleCategoriaChange}>
                <option value="" defaultValue>
                    Ver por categoría
                </option>
                <option value="Ficción">
                    Ficción
                </option>
                <option value="Filosofía">
                    Filosofía
                </option>
            </select>
            <div className="container-cards">
                {
                    filtrarProductos(data).map((element) => (
                        <Link to={`/product-details/${element.title}/${element.id}`} key={element.id} className="card">
                            <h3>
                                {
                                    element.title
                                }
                            </h3>
                            <h4>
                                ${element.price}
                            </h4>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default Products;