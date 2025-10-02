const starData = [
    {
        name: "シリウス",
        image: "https://i.ibb.co/CszfBq4/Sirius.png",
        spectral_class: "A0V",
        magnitude: "-1.46",
        mass_ratio: 2.06,
        radius_ratio: 1.71,
        temperature: "9,940 K",
        luminosity_ratio: 25.4
    },
    {
        name: "カノープス",
        image: "https://i.ibb.co/f4R0p0N/Canopus.png",
        spectral_class: "F0Ia",
        magnitude: "-0.74",
        mass_ratio: 8,
        radius_ratio: 71,
        temperature: "7,350 K",
        luminosity_ratio: 10700
    },
    {
        name: "アルファ・ケンタウリ",
        image: "https://i.ibb.co/VMyh28Y/planet1.png",
        spectral_class: "G2V",
        magnitude: "-0.27",
        mass_ratio: 1.1,
        radius_ratio: 1.2,
        temperature: "5,790 K",
        luminosity_ratio: 1.5
    },
    {
        name: "アークトゥルス",
        image: "https://i.ibb.co/m0fW3jR/Arcturus.png",
        spectral_class: "K1.5III",
        magnitude: "-0.04",
        mass_ratio: 1.08,
        radius_ratio: 25.4,
        temperature: "4,286 K",
        luminosity_ratio: 170
    },
    {
        name: "ベガ",
        image: "https://i.ibb.co/D8R3P4H/Vega.png",
        spectral_class: "A0V",
        magnitude: "0.03",
        mass_ratio: 2.1,
        radius_ratio: 2.36,
        temperature: "9,602 K",
        luminosity_ratio: 37
    },
    {
        name: "カペラ",
        image: "https://i.ibb.co/q7Xh1fD/Capella.png",
        spectral_class: "G8III",
        magnitude: "0.08",
        mass_ratio: 2.5,
        radius_ratio: 12.2,
        temperature: "4,940 K",
        luminosity_ratio: 78
    },
    {
        name: "リゲル",
        image: "https://i.ibb.co/30h1t4j/Rigel.png",
        spectral_class: "B8Ia",
        magnitude: "0.13",
        mass_ratio: 21,
        radius_ratio: 78,
        temperature: "12,100 K",
        luminosity_ratio: 120000
    },
    {
        name: "プロキオン",
        image: "https://i.ibb.co/Zc2M1pG/Procyon.png",
        spectral_class: "F5IV",
        magnitude: "0.34",
        mass_ratio: 1.499,
        radius_ratio: 2.05,
        temperature: "6,530 K",
        luminosity_ratio: 6.9
    },
    {
        name: "アケルナル",
        image: "https://i.ibb.co/S3GzH2s/spaceship.png", // 例の画像
        spectral_class: "B3Vpe",
        magnitude: "0.45",
        mass_ratio: 6.7,
        radius_ratio: 8,
        temperature: "14,500 K",
        luminosity_ratio: 3300
    },
    {
        name: "ベテルギウス",
        image: "https://i.ibb.co/GtnqW2t/Betelgeuse.png",
        spectral_class: "M2Iab",
        magnitude: "0.50",
        mass_ratio: 18,
        radius_ratio: 900,
        temperature: "3,500 K",
        luminosity_ratio: 100000
    },
    {
        name: "ハダル",
        image: "https://i.ibb.co/Yq7zV2C/Hadar.png",
        spectral_class: "B1III",
        magnitude: "0.61",
        mass_ratio: 10,
        radius_ratio: 8.4,
        temperature: "25,000 K",
        luminosity_ratio: 25000
    },
    {
        name: "アルタイル",
        image: "https://i.ibb.co/rQf1z2B/Altair.png",
        spectral_class: "A7V",
        magnitude: "0.77",
        mass_ratio: 1.8,
        radius_ratio: 1.8,
        temperature: "7,550 K",
        luminosity_ratio: 10.7
    },
    {
        name: "アルデバラン",
        image: "https://i.ibb.co/N1J5m7p/Aldebaran.png",
        spectral_class: "K5III",
        magnitude: "0.86",
        mass_ratio: 1.7,
        radius_ratio: 44.2,
        temperature: "3,910 K",
        luminosity_ratio: 425
    },
    {
        name: "アンタレス",
        image: "https://i.ibb.co/Qf2QW4v/Antares.png",
        spectral_class: "M1.5Iab-b",
        magnitude: "1.06",
        mass_ratio: 15,
        radius_ratio: 883,
        temperature: "3,660 K",
        luminosity_ratio: 75900
    },
    {
        name: "スピカ",
        image: "https://i.ibb.co/Yy5D0cK/Spica.png",
        spectral_class: "B1V",
        magnitude: "0.98",
        mass_ratio: 10.3,
        radius_ratio: 7.4,
        temperature: "22,400 K",
        luminosity_ratio: 20500
    },
    {
        name: "ポルックス",
        image: "https://i.ibb.co/W5qF8sY/Pollux.png",
        spectral_class: "K0IIIb",
        magnitude: "1.15",
        mass_ratio: 1.86,
        radius_ratio: 9.06,
        temperature: "4,865 K",
        luminosity_ratio: 32
    },
    {
        name: "フォーマルハウト",
        image: "https://i.ibb.co/Yk3mQ7C/Fomalhaut.png",
        spectral_class: "A3V",
        magnitude: "1.16",
        mass_ratio: 1.9,
        radius_ratio: 1.84,
        temperature: "8,500 K",
        luminosity_ratio: 16
    },
    {
        name: "デネブ",
        image: "https://i.ibb.co/8bN0fX2/Deneb.png",
        spectral_class: "A2Ia",
        magnitude: "1.25",
        mass_ratio: 20,
        radius_ratio: 203,
        temperature: "8,525 K",
        luminosity_ratio: 196000
    },
    {
        name: "アクルックス",
        image: "https://i.ibb.co/4M0mB1k/Acrux.png",
        spectral_class: "B0.5IV",
        magnitude: "0.77",
        mass_ratio: 14,
        radius_ratio: 7.4,
        temperature: "28,000 K",
        luminosity_ratio: 25000
    },
    {
        name: "アルタイル",
        image: "https://i.ibb.co/rQf1z2B/Altair.png",
        spectral_class: "A7V",
        magnitude: "0.77",
        mass_ratio: 1.8,
        radius_ratio: 1.8,
        temperature: "7,550 K",
        luminosity_ratio: 10.7
    },
    {
        name: "ベテルギウス",
        image: "https://i.ibb.co/GtnqW2t/Betelgeuse.png",
        spectral_class: "M2Iab",
        magnitude: "0.50",
        mass_ratio: 18,
        radius_ratio: 900,
        temperature: "3,500 K",
        luminosity_ratio: 100000
    }
];

const starNameEl = document.getElementById('star-name');
const starImageEl = document.getElementById('star-image');
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
        starImageEl.src = star.image;
        starNameEl.textContent = star.name;
        spectralClassEl.textContent = star.spectral_class;
        magnitudeEl.textContent = star.magnitude;
        massEl.innerHTML = `${star.mass_ratio}倍`;
        radiusEl.innerHTML = `${star.radius_ratio}倍`;
        temperatureEl.textContent = star.temperature;
        luminosityEl.innerHTML = `${star.luminosity_ratio}倍`;

        starCard.style.opacity = '1';
        starCard.style.transform = 'translateY(0)';
    }, 500);
}

// 最初にアプリを開いたときに表示
window.addEventListener('load', () => {
    displayRandomStar();
});

nextStarBtn.addEventListener('click', displayRandomStar);
