let allPlants = []; // গ্লোবাল ভ্যারিয়েবল

const loadAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      allPlants = data.plants;
      displayPlants(allPlants);
    });
};

const displayPlants = (plants) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  plants.forEach((plant) => {
    const card = document.createElement("div");
    card.classList.add("p-4", "bg-white", "shadow", "rounded-lg", "gap-5");

    card.innerHTML = `
      <img src="${plant.image}" 
           alt="${plant.name}" src='${plant.image}'"
           class="w-full h-40 object-cover rounded mb-2"/>
      <h2 onclick="loadWordData(${plant.id})" class="text-lg font-semibold">${plant.name}</h2>
      <p class="text-sm text-gray-600">${plant.description}...</p>
      <div class="flex items-center justify-between">
      <p class="text-sm text-yellow-600 font-medium">${plant.category}</p>
      <p class="font-bold text-green-600 mt-2">$${plant.price}</p>
      </div>
      <p><button onclick="loadLevelCard(${plant.id})" class="btn bg-green-600 text-white font-semibold w-full cart-box">Add to cart</button></p>
    `;
    cardContainer.appendChild(card);
  });
};

// বাটন লোড করা
const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayLessons(json.categories));
};

const displayLessons = (lessons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  lessons.forEach((lesson) => {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
      <button 
        onclick="filterByCategory('${lesson.category_name}')" 
        class="btn btn-secondary w-50"> 
        ${lesson.category_name}
      </button>
    `;
    levelContainer.append(btnDiv);
  });
};

// ক্যাটাগরি ফিল্টার
const filterByCategory = (categoryName) => {
  if (!allPlants.length) return; // সেফগার্ড

  const filtered = allPlants.filter((plant) => plant.category === categoryName);

  displayPlants(filtered);
};

// প্রথমে সব লোড হবে

const loadWordData = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;

  const res = await fetch(url);
  const details = await res.json();
  displayWordDetails(details.plants);
};

const displayWordDetails = (plant) => {
  // console.log(plant);
  const detailBox = document.getElementById("details-container");
  detailBox.innerHTML = `<div class="space-y-5">
              <img src="${plant.image}" alt="" class="w-full h-70">
              <p class="text-xl font-bold">Name : ${plant.name}</p>
              <p class="text-sm text-yellow-600 font-medium"> Describtion: ${plant.description}</p>
              <p class="font-bold text-green-600 mt-2"> Category : ${plant.category}</p>
              <p class="font-bold text-green-600 mt-2"> Price : ${plant.price}</p>
            </div>`;
  document.getElementById("my_modal_5").showModal();
};

let cart = []; // কার্টের লিস্ট রাখার জন্য

// কার্টে আইটেম যোগ করার ফাংশন
const loadLevelCard = (id) => {
  // কারেন্ট প্ল্যান্ট খুঁজে বের করবো
  const plant = allPlants.find((p) => p.id === id);
  if (!plant) return;

  // কার্টে পুশ করা
  cart.push(plant);

  // UI তে শো করা
  displayCart();
};

// কার্ট দেখানোর ফাংশন
const displayCart = () => {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  let total = 0; // মোট প্রাইস ট্র্যাক করার জন্য

  cart.forEach((item, index) => {
    total += Number(item.price); // প্রতিবার যোগ হবে

    const div = document.createElement("div");
    div.classList.add(
      "flex",
      "items-center",
      "bg-white",
      "rounded",
      "shadow",
      "h-20",
      "mt-5",
      "justify-between",
      "px-2"
    );

    div.innerHTML = `
      <span class="font-semibold">${item.name}</span>
      <span class="text-green-300">$${item.price}</span>
      <button onclick="removeFromCart(${index})" class="text-red-600 font-bold">X</button>
    `;
    cartContainer.appendChild(div);
  });

  // মোট প্রাইস দেখানো
  if (cart.length > 0) {
    const totalDiv = document.createElement("div");
    totalDiv.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "font-bold",
      "mt-3",
      "text-green-400",
      "text-lg"
    );
    totalDiv.innerHTML = `
      <span>Total:</span>
      <span>$${total}</span>
    `;
    cartContainer.appendChild(totalDiv);
  }
};

// কার্ট থেকে রিমুভ করার ফাংশন
const removeFromCart = (index) => {
  cart.splice(index, 1); // আইটেম বাদ
  displayCart();
};

loadLessons();
loadAllPlants();
