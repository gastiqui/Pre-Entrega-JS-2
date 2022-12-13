// Array de nuestros productos 

const productos  = [
    {
    "id": 1,
    "producto": "Agua 2,5Lts",
    "precio": 100,
    "fechaVencimiento": "12/12/2023",
    "descripcion": "Hidratate con esta agua.",
    "categoria": "bebidas",
    "oferta": false,
    },
    {
        "id": 2,
        "producto": "Baguette 1Kg",
        "precio": 10,
        "fechaVencimiento": "12/01/2023",
        "descripcion": "Pan baguette francés",
        "categoria": "granos",
        "oferta": true
    },
    {
        "id": 3,
        "producto": "Carne vacuna 1Kg",
        "precio": 300,
        "fechaVencimiento": "12/01/2023",
        "descripcion": "La mejor carne argentina",
        "categoria": "carne",
        "oferta": false
    },
    {
        "id": 4,
        "producto": "Atún, 500 gramos",
        "precio": 30,
        "fechaVencimiento": "12/01/2023",
        "descripcion": "Atun de Japón",
        "categoria": "carne",
        "oferta": false
    },
    {
        "id": 5,
        "producto": "Pollo pata y muslo 1Kg",
        "precio": 50,
        "fechaVencimiento": "12/01/2023",
        "descripcion": "Pollo orgánico",
        "categoria": "carne",
        "oferta": false
    },
    {
        "id": 6,
        "producto": "Coca-Cola",
        "precio": 50,
        "fechaVencimiento": "12/05/2023",
        "descripcion": "Recien preparada",
        "categoria": "bebidas",
        "oferta": true
    },
    {
        "id": 7,
        "producto": "Galletas Oreo",
        "precio": 50,
        "fechaVencimiento": "12/05/2024",
        "descripcion": "Rellenas de crema. Sabor orginal",
        "categoria": "galletas",
        "oferta": true
    },
    {
        "id": 8,
        "producto": "Surtido Bagley",
        "precio": 50,
        "fechaVencimiento": "12/05/2024",
        "descripcion": "Surtido de las mejores galletas",
        "categoria": "galletas",
        "oferta": true
    },
    {
        "id": 9,
        "producto": "Pan integral",
        "precio": 15,
        "fechaVencimiento": "12/01/2023",
        "descripcion": "Pan de integral. NO TACC",
        "categoria": "granos",
        "oferta": false
    },
    {
        "id": 10,
        "producto": "Almendras",
        "precio": 60,
        "fechaVencimiento": "12/01/2023",
        "descripcion": "Alemndras frescas",
        "categoria": "frutos secos",
        "oferta": false
    },
    {
        "id": 11,
        "producto": "Nuez",
        "precio": 50,
        "fechaVencimiento": "12/01/2023",
        "descripcion": "Nueces peladas",
        "categoria": "Frutos secos",
        "oferta": false
    },
    {
        "id": 12,
        "producto": "Yogurt de vainilla",
        "precio": 30,
        "fechaVencimiento": "12/01/2023",
        "descripcion": "Yogurt líquido de vainilla",
        "categoria": "Lácteos",
        "oferta": false
    },
    {
        "id": 13,
        "producto": "Yogurt de frutilla",
        "precio": 30,
        "fechaVencimiento": "12/01/2023",
        "descripcion": "Yogurt líquido de vainilla",
        "categoria": "Lácteos",
        "oferta": false
    },
    {
        "id": 14,
        "producto": "Queso Port Salut",
        "precio": 130,
        "fechaVencimiento": "12/02/2023",
        "descripcion": "Queso fresco enriquecido",
        "categoria": "Lácteos",
        "oferta": false
    },
    {
        "id": 15,
        "producto": "Roquefort",
        "precio": 500,
        "fechaVencimiento": "12/03/2023",
        "descripcion": "Recien preparada",
        "categoria": "Lácteos",
        "oferta": false
    },
]


// Diferentes ejercicos sobre estos productos


// Hacer oferta de 15% a los productos:

function descuento () {
    productos.forEach(elemento => {
        if ( elemento.oferta ) {
            let resta = elemento.precio * 0.15
            elemento.precio -= resta
            }
        }
    )
}

descuento()


// Ordenar por ID de mayor a menor:


const mayorMenor = [...productos].sort(( a, b ) => {
    return b.id - a.id
})


console.table(mayorMenor)



// Ordenar por nombre de manera alfabética:

const aZ = [...productos].sort((a, b) => {
    if ( a.producto < b.producto ){
        return -1
    } else if ( a.producto > b.producto ){
        return 1
    } else {
        return 0
    }
})

console.table(aZ)


// Muestre en consola las ofertas después de preguntarle si las quiere ver


const listaOferta = productos.filter (( elemento  ) => {
    return elemento.oferta
})

const mostrarOferta = confirm()

if (mostrarOferta){
    console.table (listaOferta)
} else{
    console.log ("Ok")
}


// Buscar producto por nombre y mostrárselo


const ingresado = prompt()

const buscado = productos.filter (elemento => {
    return elemento.producto == ingresado
})

console.table (buscado)