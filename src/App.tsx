

import { NavBar } from "./components/NavBar";
import { Compras } from "./pages/Compras";
import { Ingredientes } from "./pages/Ingredientes";
import { Menus } from "./pages/Menus";
import { Recetas } from "./pages/Recetas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      
      <Routes>
        <Route path="/" Component={Menus} />
        <Route path="/menus" Component={Menus} />
        <Route path="/recetas" Component={Recetas} />
        <Route path="/ingredientes" Component={Ingredientes} />
        <Route path="/compras" Component={Compras} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

