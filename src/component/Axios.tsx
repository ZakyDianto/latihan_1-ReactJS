import axios from "axios"
import { useEffect } from "react"

const FetchApi = () => {
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users")
            .then((res) => {
                console.log(res.data)
            })
            .catch((error: Error) => {
                console.error(error)
            })
    }, [])

    return (
        <div>Mengambil Data</div>  
    )
}

export default FetchApi