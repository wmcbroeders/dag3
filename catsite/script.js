const catImages = [
    'cat1.jpg',
    'cat2.jpg',
    'cat3.jpg',
    // Voeg hier de URL's van je kattenfoto's toe
];

const catImageElement = document.getElementById('cat-image');
const changeCatButton = document.getElementById('change-cat');

function getRandomCat() {
    const randomIndex = Math.floor(Math.random() * catImages.length);
    const randomCatImage = catImages[randomIndex];
    catImageElement.src = randomCatImage;
}

changeCatButton.addEventListener('click', getRandomCat);
getRandomCat();
