// Router principal de la aplicación.

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import CochesPage from "../pages/coches/CochesPage";

import CocheDetallePage from "../pages/coches/CocheDetallePage";

function AppRouter() {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    {/* Página principal */}
                    <Route path="/" element={<Home />} />
                    {/* Página de coches */}
                    <Route path="/coches" element={<CochesPage />}></Route>
                    {/* Página para detalle del coche */}
                    <Route path="/coches/:id" element={<CocheDetallePage />}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default AppRouter;