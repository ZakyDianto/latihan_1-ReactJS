import React, { useState} from "react"

const Counter = () => {
    //Deklarasi state dengan useState hook
    const [count, setCount] = useState(0)

    //fungsi untuk menambah nilai count
    const increment = () => {
        setCount(count + 1)
    }

    //fungsi untuk mengurangi nilai count
    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button className="bg-green-500 px-2" onClick={increment}>+</button>
            <button className="bg-red-500 px-2" onClick={decrement}>-</button>
        </div>
    )
}

export default Counter