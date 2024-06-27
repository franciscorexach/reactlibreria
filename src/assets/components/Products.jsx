import data from "../data/data.json"
import { useParams, useNavigate, Link } from "react-router-dom"
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react";

const [ data, setData ] = useState([])

useEffect(() => {
    const fetchData = async () => {
        try {
            
            const querySnapshot = await getDocs(collection(db, "react-libreria"))
            
            const obtenerDocumentos = querySnapshot.docs.map(element => ({ id: element.id, ...element.data()}))
            setData(obtenerDocumentos)
            console.log(obtenerDocumentos)
        } catch(error) {
            console.log(error)
        }
    }

    fetchData()
}, [])

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