import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Navbar } from "./components/Navbar/Navbar"
import { Item } from "./components/Item/Item"
import "./style/style.scss"

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer tienda={"Vurdertrend"} />
      <Item />


    </div>
  )
}

export default App
