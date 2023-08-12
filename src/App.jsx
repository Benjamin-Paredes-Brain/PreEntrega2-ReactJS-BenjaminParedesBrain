import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ItemListContainer } from "./components/Item/ItemListContainer"
import { Navbar } from "./components/Header/Navbar"
import "./style/style.scss"
import { Home } from "./components/Homee/Home"
import { ItemDetailContainer } from "./components/Item/ItemDetailContainer"
import { ItemFilters } from "./components/Item/ItemFilters"
import { NotFound } from "./components/NotFound/NotFound"
import { Contact } from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"
import { CartContextProvider } from "./context/CartContext"
import { Checkout } from "./components/Checkout/Checkout"
import { AllResults } from "./components/Header/AllResults"
import { CreateAccount } from "./components/Account/CreateAccount"
import { LoginAccount } from "./components/Account/LoginAccount"
import { AuthContextProvider } from "./context/Authcontex"
import { MyAccount } from "./components/Account/MyAccount"

function App() {

  return (
    <AuthContextProvider>
      <CartContextProvider>

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<ItemListContainer />} />
            <Route path="/detail/:itemid" element={<ItemDetailContainer />} />
            <Route path="/category/:itemCategory" element={<ItemFilters />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/all-results/:searchText" element={<AllResults />} />
            <Route path="/register" element={<CreateAccount />} />
            <Route path="/login" element={<LoginAccount />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />

        </BrowserRouter>

      </CartContextProvider>
    </AuthContextProvider>
  )
}

export default App
