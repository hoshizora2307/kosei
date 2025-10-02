const starData = [
    {
        name: "シリウス",
        spectral_class: "A0V",
        magnitude: "-1.46",
        mass: "2.06 M☉",
        mass_ratio: 2.06,
        radius: "1.71 R☉",
        radius_ratio: 1.71,
        temperature: "9,940 K",
        luminosity: "25.4 L☉",
        luminosity_ratio: 25.4
    },
    {
        name: "ベガ",
        spectral_class: "A0V",
        magnitude: "0.03",
        mass: "2.1 M☉",
        mass_ratio: 2.1,
        radius: "2.36 R☉",
        radius_ratio: 2.36,
        temperature: "9,602 K",
        luminosity: "37 L☉",
        luminosity_ratio: 37
    },
    {
        name: "プロキオン",
        spectral_class: "F5IV",
        magnitude: "0.34",
        mass: "1.499 M☉",
        mass_ratio: 1.499,
        radius: "2.05 R☉",
        radius_ratio: 2.05,
        temperature: "6,530 K",
        luminosity: "6.9 L☉",
        luminosity_ratio: 6.9
    },
    {
        name: "リゲル",
        spectral_class: "B8Ia",
        magnitude: "0.13",
        mass: "21 M☉",
        mass_ratio: 21,
        radius: "78 R☉",
        radius_ratio: 78,
        temperature: "12,100 K",
        luminosity: "120,000 L☉",
        luminosity_ratio: 120000
    },
    {
        name: "カノープス",
        spectral_class: "F0Ia",
        magnitude: "-0.74",
        mass: "8 M☉",
        mass_ratio: 8,
        radius: "71 R☉",
        radius_ratio: 71,
        temperature: "7,350 K",
        luminosity: "10,700 L☉",
        luminosity_ratio: 10700
    },
    {
        name: "アークトゥルス",
        spectral_class: "K1.5III",
        magnitude: "-0.04",
        mass: "1.08 M☉",
        mass_ratio: 1.08,
        radius: "25.4 R☉",
        radius_ratio: 25.4,
        temperature: "4,286 K",
        luminosity: "170 L☉",
        luminosity_ratio: 170
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

const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');

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
        massEl.innerHTML = `${star.mass} <br>（太陽の${star.mass_ratio}倍）`;
        radiusEl.innerHTML = `${star.radius} <br>（太陽の${star.radius_ratio}倍）`;
        temperatureEl.textContent = star.temperature;
        luminosityEl.innerHTML = `${star.luminosity} <br>（太陽の${star.luminosity_ratio}倍）`;

        starCard.style.opacity = '1';
        starCard.style.transform = 'translateY(0)';
    }, 500);
}

// ページ読み込み完了後にオープニング画面を非表示にする
window.addEventListener('load', () => {
    // 3秒後にメインコンテンツを表示
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.style.visibility = 'visible';
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
            displayRandomStar(); // メイン画面表示後、最初の恒星をロード
        }, 1000); // 1秒かけてフェードアウト
    }, 3000); // 3秒後に実行
});

nextStarBtn.addEventListener('click', displayRandomStar);
