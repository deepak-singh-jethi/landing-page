document.addEventListener("DOMContentLoaded", function () {
  const featuresList = document.getElementById("featuresList");
  let selectedCategory;

  featuresData.forEach((feature) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    li.classList.add("feature-item");
    span.classList.add("feature-logo");
    span.style.backgroundImage = `url('${feature.icon}')`;
    div.classList.add("feature-div");
    h3.textContent = feature.title;
    p.textContent = feature.description;

    div.appendChild(h3);
    div.appendChild(p);
    li.appendChild(span);
    li.appendChild(div);
    featuresList.appendChild(li);
  });

  //   improve code from below => dear ai

  const carCategoriesContainer = document.querySelector(".car-types-area");

  // Create category buttons
  carCategories.forEach((category) => {
    // button
    const buttonDiv = document.createElement("div");
    const buttonTitle = document.createElement("p");
    const buttonImage = document.createElement("img");

    buttonDiv.classList.add("button-div");

    // title and image
    buttonTitle.textContent = category.name;

    buttonImage.src = category.image;
    buttonImage.classList.add("car-image2");

    if (category.name === "Economy Cars") {
      buttonDiv.classList.add("active-div");
      selectedCategory = category.name;
    }

    buttonDiv.addEventListener("click", () => {
      selectedCategory = category.name;
      const activeDiv = document.querySelector(".active-div");
      if (activeDiv) {
        activeDiv.classList.remove("active-div");
      }

      buttonDiv.classList.add("active-div");
      displayCarsByCategory(category.name);
    });

    buttonDiv.appendChild(buttonImage);
    buttonDiv.appendChild(buttonTitle);

    carCategoriesContainer.appendChild(buttonDiv);
  });

  // Function to display cars by category
  function displayCarsByCategory(category) {
    const carsContainer = document.querySelector(".cars-container");
    carsContainer.innerHTML = ""; // Clear previous cars

    const filteredCars = carData.filter((car) =>
      car.category.includes(category)
    );

    if (filteredCars.length > 0) {
      filteredCars.forEach((car) => {
        const carCard = createCarCard(car);
        carsContainer.appendChild(carCard);
      });
    } else {
      const noCarsMessage = document.createElement("p");
      noCarsMessage.textContent = "No cars available in this category.";
      carsContainer.appendChild(noCarsMessage);
    }
  }

  // Function to create a car card

  function createCarCard(car) {
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");

    // Car Image
    const carImage = document.createElement("img");
    carImage.src = car.image;
    carImage.alt = car.alt;
    carImage.classList.add("car-image");
    carCard.appendChild(carImage);

    // Details Container
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");

    // car category
    const carCategory = document.createElement("p");
    carCategory.textContent = car.category;
    carCategory.classList.add("car-category");
    detailsContainer.appendChild(carCategory);

    // Name (Yellow text at top left)
    const carName = document.createElement("h3");
    carName.textContent = car.name;
    carName.classList.add("car-name");
    detailsContainer.appendChild(carName);

    // Specifications (Power, Acceleration, Transmission)
    const specsContainer = document.createElement("div");
    specsContainer.classList.add("specs-container");

    // Power Icon and Text
    const powerItem = document.createElement("div");
    powerItem.innerHTML = `<i class="fas fa-bolt"></i> ${car.specifications.power}`;
    specsContainer.appendChild(powerItem);

    // Acceleration Icon and Text
    const accelerationItem = document.createElement("div");
    accelerationItem.innerHTML = `<i class="fas fa-tachometer-alt"></i> ${car.specifications.acceleration}`;
    specsContainer.appendChild(accelerationItem);

    // Transmission Icon and Text
    const transmissionItem = document.createElement("div");
    transmissionItem.innerHTML = `<i class="fas fa-cog"></i> ${car.specifications.transmission}`;
    specsContainer.appendChild(transmissionItem);

    detailsContainer.appendChild(specsContainer);

    // Price
    const carPrice = document.createElement("p");
    carPrice.textContent = `${car.price} AED/Day`;
    carPrice.classList.add("car-price");
    detailsContainer.appendChild(carPrice);

    // Reserve Button
    const reserveButton = document.createElement("a");
    reserveButton.href = car.reserveLink;
    reserveButton.textContent = "Reserve Now";
    reserveButton.classList.add("reserve-button");
    reserveButton.innerHTML = ` <img src="./assets/whatsapp (1).png" alt="" class="whatsapp-icon" /> Reserve Now`;
    detailsContainer.appendChild(reserveButton);

    carCard.appendChild(detailsContainer);

    return carCard;
  }

  displayCarsByCategory("Economy Cars");
});
