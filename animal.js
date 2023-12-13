const animals = [
    { name: "Penguin", image: "penguin.jpg" },
    { name: "Tiger", image: "tiger.jpg" },
    { name: "Panda", image: "panda.jpg" },
    { name: "Jaguar", image: "jaguar.jpg" },
    { name: "Crocodile", image: "crocodile.jpg" },
    { name: "Lion", image: "lion.jpg" },
    { name: "Monkey", image: "monkey.jpg" },
    { name: "Horse", image: "horse.jpg" },
    { name: "Giraffe", image: "giraffe.jpg" },
];

const shuffledAnimals = animals.sort(() => Math.random() - 0.5);

const animalContainer = document.getElementById("animals");
const nameContainer = document.getElementById("names");

shuffledAnimals.forEach((animal) => {
    const image = document.createElement("img");
    image.src = animal.image;
    image.draggable = true;
    image.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("animal", JSON.stringify(animal));
    });
    animalContainer.appendChild(image);
});

shuffledAnimals.forEach((animal) => {
    const name = document.createElement("div");
    name.textContent = animal.name;
    name.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
    name.addEventListener("drop", (event) => {
        const droppedAnimal = JSON.parse(event.dataTransfer.getData("animal"));
        if (droppedAnimal.name === name.textContent) {
            name.classList.add("correct");
        } else {
            name.classList.add("incorrect");
        }
    });
    nameContainer.appendChild(name);
});