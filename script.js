const cardsData = [
  { 
    category: "Enseres", 
    image: "img/Mesa1.jpg", 
    image2: "img/Escritorio2.jpg",
    title: "ESCRITORIO PARA PROFESOR", 
    description: "ESTRUCTURA DE METAL CON MADERA ENCHAPADA CON 3 CAJONES" 
  },
  { 
    category: "Enseres", 
    image: "img/Armario.png",
    image2: "img/Armario2.png", 
    title: "ARMARIO DE 2 PUERTAS", 
    description: "ESTANTES INTERIORES DE MADERA ENCHAPADA" 
  },
  { 
    category: "Enseres", 
    image: "img/MesaComedor.png", 
    title: "MESA PARA COMEDOR", 
    description: "DE MADERA MACIZA Y CABALLETE DE METAL" 
  },
  { 
    category: "Enseres", 
    image: "img/Silla1.png",
    image2: "img/Silla1b.jpg ", 
    title: "SILLA CON PUPITRE INTEGRADO", 
    description: "DE METAL CON LISTONES DE  MACIZA Y MULTILAMINADO DE 12MM" 
  },
  { 
    category: "Enseres", 
    image: "img/Silla2.png", 
    title: "SILLA PEDAGOGICA", 
    description: "NIVEL INICIAL, 1°, 2°, 3° CICLO EN METAL Y MADERA MACIZA" 
  },
  { 
    category: "Enseres", 
    image: "img/Silla3.png", 
    title: "PUPITRE PEDAGOGICO", 
    description: "NIVEL INICIAL, 1°, 2°, 3° CICLO EN METAL Y MADERA ENCHAPADA" 
  },
  { 
    category: "Demarcacion Vial", 
    image: "img/TachonesReflectivos.jpg",
    image2: "img/TachonesReflectivos2.jpg",
    title: "LOS TACHONES REFLECTIVOS Y/O REDUCTORES DE VELOCIDAD", 
    description: "DISPOSITIVOS AUXILIARES DE SEÑALIZACIÓN, ESTÁN FABRICADOS CON COMPONENTES QUE SON RESISTENTES AL DESGASTE OFRECIENDO UNA GRAN VISIBILIDAD DIURNA Y NOCTURNA" 
  },
  { 
    category: "Demarcacion Vial", 
    image: "img/Demarcacion.jpg",
    image2: "img/Demarcacion2.jpg",
    title: "PINTURA VIAL EN FRÍO", 
    description: "CON LA APLICACIÓN DE MICROESFERAS REFLECTIVAS. SENDAS PEATONALES CON DEMARCACION CONTINUA Y DISCONTINUA" 
  },
  { 
    category: "Carteleria", 
    image: "img/Carteleria.jpg",
    image2: "img/Carteleria2.jpg",
    title: "CARTELES VIALES", 
    description: "DE CHAPA Y CAÑO DE METAL" 
  },
  { 
    category: "Parques infantiles", 
    image: "img/Parque.jpg",
    image2: "img/Parque2.jpg",
    title: "PARQUE INFANTIL", 
    description: "CON 3 O MAS TORRES, DE METAL CON TOBOGANES DE FIBRA DE VIDRIO, TECHO DE POLICARBONATO, INSERCIONES DE GOMA Y ACABADO CON PINTURA ELECTRÓNICA EN POLVO" 
  },
  { 
    category: "Parques infantiles", 
    image: "img/ParqueMEC.jpg",
    image2: "img/ParqueMEC2.jpg",
    title: "PARQUE INFANTIL DE MADERA TIPOLOGIA MEC", 
    description: "" 
  },
  { 
    category: "Parques infantiles", 
    image: "img/ParqueMEC3.jpg",
    image2: "img/ParqueMEC4.jpg",
    title: "PARQUE INFANTIL DE MADERA TIPOLOGIA MEC", 
    description: "" 
  },
];

function filterCards(category) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  const filteredCards = category === "All" ? cardsData : cardsData.filter(card => card.category === category);

  filteredCards.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    // Crea la imagen con la lógica de alternar si hay `image2`
    const imageElement = document.createElement("img");
    imageElement.src = card.image;
    imageElement.alt = card.title;

    // Alterna entre `image` e `image2` si `image2` existe
    if (card.image2) {
      let currentImage = card.image;
      setInterval(() => {
        // Desvanecer la imagen antes de cambiarla
        imageElement.style.opacity = 0;

        setTimeout(() => {
          currentImage = currentImage === card.image ? card.image2 : card.image;
          imageElement.src = currentImage;
          imageElement.style.opacity = 1; // Reaparece después de cambiar
        }, 700); // Coincide con la duración de la transición CSS
      }, 5000); // Cambia cada 3 segundos
    }

    // Contenido de la card
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    cardContent.innerHTML = `
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    `;

    cardElement.appendChild(imageElement);
    cardElement.appendChild(cardContent);
    container.appendChild(cardElement);
  });
}

// Mostrar todas las cards al cargar la página
filterCards("All");