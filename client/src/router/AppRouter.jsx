// Router principal de la aplicación.

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../pages/Home";

function AppRouter() {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    {/* Página principal */}
                    <Route path="/" element={<Home />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default AppRouter;