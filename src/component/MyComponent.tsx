type TItems = {
    id: number,
    name: string
}

const items: TItems[] = [
    { id: 1, name: "Item 1"},
    { id: 2, name: "Item 2"},
    { id: 3, name: "Item 3"}
]


const MyComponent = () => {
    return(
        <div>
            <h1>Haloo, Aku React Functional Component!</h1>
            {items.map((data, idx) => {
                return <p key={idx}>{data.name}</p>
            })}
        </div>
    )
}

export default MyComponent