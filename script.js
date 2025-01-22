const cardsData = [
  { 
    category: "Enseres", 
    image: "img/Mesa1.png", 
    title: "ESCRITORIO PARA PROFESOR", 
    description: "ESTRUCTURA DE METAL CON MADERA ENCHAPADA CON 3 CAJONES" 
  },
  { 
    category: "Enseres", 
    image: "img/Armario.png", 
    title: "ARMARIO DE 2 PUERTAS", 
    description: "ESTANTES INTERIORES DE MADERA ENCHAPADA" 
  },
  { 
    category: "Enseres", 
    image: "img/Mesa1.png", 
    title: "MESA PARA COMEDOR", 
    description: "DE MADERA MACIZA Y CABALLETE DE METAL" 
  },
  { 
    category: "Enseres", 
    image: "img/Silla1.png", 
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
];

function filterCards(category) {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";
  
    // Filtra las tarjetas según la categoría
    const filteredCards = category === "All" ? cardsData : cardsData.filter(card => card.category === category);
  
    // Crea las tarjetas dinámicamente
    filteredCards.forEach(card => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}">
        <div class="card-content">

          <h3>${card.title}</h3>
          <p>${card.description}</p>
        </div>
      `;
      container.appendChild(cardElement);
    });
  
    // Actualiza el estado de los botones
    const buttons = document.querySelectorAll(".filter-button");
    buttons.forEach(button => button.classList.remove("active")); // Remueve la clase activa de todos
    const activeButton = Array.from(buttons).find(button => button.textContent.trim().toUpperCase() === category.toUpperCase());
    if (activeButton) {
      activeButton.classList.add("active"); // Añade la clase activa al botón correspondiente
    }
  }

// Mostrar todas las cards al cargar la página
filterCards("All");