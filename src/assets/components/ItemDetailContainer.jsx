const ItemDetailContainer = () => {
    return (
        <div>
            <h3>{element.name}</h3>
            <h4>{element.author}</h4>
            <h4>{element.price}</h4>
            <h4>{element.category}</h4>
            <h4>{element.stock}</h4>
        </div>
    )
}

export default ItemDetailContainer;