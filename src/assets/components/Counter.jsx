import { useCount } from "./useCount";

const Counter = () => {
    const { count, incrementar, decrementar, resetear} = useCount(1, 0, 10)

    return(
        <div>
            <div>
                <button onClick={incrementar}>Añadir</button>
                <button onClick={decrementar}>Quitar</button>
                <button onClick={resetear}>Resetear</button>
            </div>
        </div>
    )
}

export default Counter