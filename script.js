const starData = [
    {
        name: "シリウス",
        spectral_class: "A0V",
        magnitude: "-1.46",
        mass: "2.06 M☉",
        radius: "1.71 R☉",
        temperature: "9,940 K",
        luminosity: "25.4 L☉"
    },
    {
        name: "ベガ",
        spectral_class: "A0V",
        magnitude: "0.03",
        mass: "2.1 M☉",
        radius: "2.36 R☉",
        temperature: "9,602 K",
        luminosity: "37 L☉"
    },
    {
        name: "プロキオン",
        spectral_class: "F5IV",
        magnitude: "0.34",
        mass: "1.499 M☉",
        radius: "2.05 R☉",
        temperature: "6,530 K",
        luminosity: "6.9 L☉"
    },
    {
        name: "リゲル",
        spectral_class: "B8Ia",
        magnitude: "0.13",
        mass: "21 M☉",
        radius: "78 R☉",
        temperature: "12,100 K",
        luminosity: "120,000 L☉"
    },
    {
        name: "カノープス",
        spectral_class: "F0Ia",
        magnitude: "-0.74",
        mass: "8 M☉",
        radius: "71 R☉",
        temperature: "7,350 K",
        luminosity: "10,700 L☉"
    },
    {
        name: "アークトゥルス",
        spectral_class: "K1.5III",
        magnitude: "-0.04",
        mass: "1.08 M☉",
        radius: "25.4 R☉",
        temperature: "4,286 K",
        luminosity: "170 L☉"
    }
];

const starNameEl = document.getElementById('star-name');
const spectralClassEl = document.getElementById('spectral-class');
const magnitudeEl = document.getElementById('magnitude');
const massEl = document.getElementById('mass');
const radiusEl = document.getElementById('radius');
const temperatureEl = document.getElementById('temperature');
const luminosityEl = document.getElementById('luminosity');
const nextStarBtn = document.getElementById('next-star-btn');
const starCard = document.getElementById('star-card');

let lastStarIndex = null;

function displayRandomStar() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * starData.length);
    } while (randomIndex === lastStarIndex);

    const star = starData[randomIndex];
    lastStarIndex = randomIndex;

    starCard.style.opacity = '0';
    starCard.style.transform = 'translateY(20px)';

    setTimeout(() => {
        starNameEl.textContent = star.name;
        spectralClassEl.textContent = star.spectral_class;
        magnitudeEl.textContent = star.magnitude;
        massEl.textContent = star.mass;
        radiusEl.textContent = star.radius;
        temperatureEl.textContent = star.temperature;
        luminosityEl.textContent = star.luminosity;

        starCard.style.opacity = '1';
        starCard.style.transform = 'translateY(0)';
    }, 500);
}

nextStarBtn.addEventListener('click', displayRandomStar);

// 最初にアプリを開いたときに表示
displayRandomStar();
