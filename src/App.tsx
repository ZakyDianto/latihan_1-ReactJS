import MyClassComponent from "./component/MyClassComponent"
import MyComponent from "./component/MyComponent"
import Counter from "./component/Counter"
import FetchApi from "./component/Axios"
import "./index.css"

type TProps = {
  name: string
}
const WelcomeMessage = (props: TProps) => {
  return <h1>Hello, {props.name}!</h1>
}

const App = () => {
  return(
    <div>
      {/* <MyClassComponent /> */} 
      {/* <MyComponent /> */}
      {/* <Counter /> */}
      {/* <WelcomeMessage name="Bima" /> */}
      <FetchApi />
    </div>
  )
}

export default App
