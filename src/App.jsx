import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Navbar } from "./components/Navbar/Navbar"
import "./style/style.scss"

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer tienda={"Vurdertrend"} />


    </div>
  )
}

export default App
