import { Route, Routes } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"
import { Products } from "./ProductsView/views/Products"
import { CreateProduct } from "./ProductsView/views/CreateProduct"
import { UsersTypes } from "./UsersTypesView/views/UsersTypes"
import { CreateUserType } from "./UsersTypesView/views/CreateUserType"


const App = () => {
  return (

    <main className="flex">
      <section className="absolute">
        <Sidebar />
      </section>
      <section className="ml-[270px]">
      <Routes>
        {/* PRODUCTS ROUTES */}
        <Route path="/products" element={<Products />} />
        <Route path="/create_product" element={<CreateProduct />} />

        {/* USERS TYPES ROUTES */}
        <Route path="/users_types" element={<UsersTypes />} />
        <Route path="/create_user_type" element={<CreateUserType />} />

        {/* 404 NOT FOUND */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      </section>
    </main>
  )
}

export default App
