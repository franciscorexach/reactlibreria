import { useState } from 'react';

export const useCount = (initial = 0, min, max) => {
    if(initial < min || initial > max) initial = min

    const [count, setCount] = useState(initial)

    const decrementar = () => {
        if(count > min) setCount( count => count - 1)
    }

    const incrementar = () => {
        if(count > min) setCount( count => count + 1)
    }

    const resetear = () => {
        setCount(initial)
    }

    return { decrementar, incrementar, resetear }

}