// Footer global del sitio
// Aparece en todas las páginas

function Footer(){
    return(
        <footer className="footer mt-auto py-3 border-top">
            <div className="container text-center">
                <p className="m-0">
                    © {new Date().getFullYear()} Concesionario
                </p>
            </div>
        </footer>
    );
}

export default Footer;