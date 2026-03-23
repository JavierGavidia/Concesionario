// Simularemos los datos como si vinieran de una API

export const getCoches = async () => {
    // Simulación de llamada asincrona
    return [
        {
            id: 1,
            marca: "BMW",
            modelo: "Serie 3",
            // Array de imágenes
            imagenes: [
                "/images/img_coches/bmw/serie3_01.jpg",
                "/images/img_coches/bmw/serie3_02.jpg",
                "/images/img_coches/bmw/serie3_03.jpg",
                "/images/img_coches/bmw/serie3_04.jpg",
                "/images/img_coches/bmw/serie3_05.jpg",
            ],
            precio: 30000,
            oferta: true,
            percent: 25,

            // Info adicional
            matricula: "1234-ABC",
            cilindrada: "1998 cc",
            potencia: "190 CV",
            km: "45.000 km"
        },
        {
            id: 2,
            marca: "Audi",
            modelo: "A4",
            // Array de imágenes
            imagenes: [
                "/images/img_coches/audi/A4_01.jpg",
                "/images/img_coches/audi/A4_02.jpg",
                "/images/img_coches/audi/A4_03.jpg",
                "/images/img_coches/audi/A4_04.jpg",
                "/images/img_coches/audi/A4_05.jpg",
            ],
            precio: 28000,
            oferta: false,

            // Info adicional
            matricula: "5678-DEF",
            cilindrada: "1968 cc",
            potencia: "150 CV",
            km: "60.000 km"
        },
        {
            id: 3,
            marca: "Mercedes",
            modelo: "Clase C",
            // Array de imágenes
            imagenes: [
                "/images/img_coches/mercedes/claseC_01.jpg",
                "/images/img_coches/mercedes/claseC_02.jpg",
                "/images/img_coches/mercedes/claseC_03.jpg",
                "/images/img_coches/mercedes/claseC_04.jpg",
                "/images/img_coches/mercedes/claseC_05.jpg",
            ],
            precio: 35000,
            oferta: true,
            percent: 10,

            // Info adicional
            matricula: "9012-GHI",
            cilindrada: "2143 cc",
            potencia: "170 CV",
            km: "30.000 km"
        },
        {
            id: 4,
            marca: "Ford",
            modelo: "Mondeo",
            // Array de imágenes
            imagenes: [
                "/images/img_coches/ford/mondeo_01.jpg",
                "/images/img_coches/ford/mondeo_02.jpg",
                "/images/img_coches/ford/mondeo_03.jpg",
                "/images/img_coches/ford/mondeo_04.jpg",
                "/images/img_coches/ford/mondeo_05.jpg",
            ],
            precio: 20000,
            oferta: false,

            // Info adicional
            matricula: "3456-JKL",
            cilindrada: "1999 cc",
            potencia: "140 CV",
            km: "80.000 km"
        },
        {
            id: 5,
            marca: "Renault",
            modelo: "Austral",
            imagenes: [
                "/images/img_coches/renault/austral_01.jpg",
                "/images/img_coches/renault/austral_02.jpg",
                "/images/img_coches/renault/austral_03.jpg",
                "/images/img_coches/renault/austral_04.jpg",
                "/images/img_coches/renault/austral_05.jpg",
            ],
            precio: 30000,
            oferta: true,
            percent: 15,

            // Info adiicional
            matricula: "7890-MNO",
            cilindrada: "1333 cc",
            potencia: "160 CV",
            km: "10.000 km"
        }
    ];
};