// Layout global de la aplicación
// Aquí colocamos elementos que se repiten en todas las páginas

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (

        <>
            {/* Header visible en toda la app */}
            <Header />

            {/* Contenido dinámico de cada página */}
            <main className="main-content">
                
                    {children}

            </main>

            {/* Footer global */}
            <Footer />
        </>

    );
}

export default Layout;