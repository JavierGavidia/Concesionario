// Layout global de la aplicación
// Aquí colocamos elementos que se repiten en todas las páginas

import { useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {

    const location = useLocation();

    return (

        <>
            {/* Header visible en toda la app */}
            <Header />

            {/* Contenido dinámico de cada página */}
            <main className={`main-content ${location.pathname.slice(1)}-page`}>
                
                    {children}

            </main>

            {/* Footer global */}
            <Footer />
        </>

    );
}

export default Layout;