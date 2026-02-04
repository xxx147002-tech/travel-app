

// 設置底部導航
function setupBottomNavigation() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const itinerarySection = document.getElementById('itinerary-content');
    const foodSection = document.getElementById('food-section');
    const preparationSection = document.getElementById('preparation-section');
    const dateNav = document.querySelector('.date-nav');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有 active 狀態
            tabBtns.forEach(b => b.classList.remove('active'));
            // 添加當前 active 狀態
            btn.classList.add('active');

            const tab = btn.dataset.tab;
            const date = btn.dataset.date;

            // 隱藏所有內容區塊
            itinerarySection.style.display = 'none';
            foodSection.style.display = 'none';
            preparationSection.style.display = 'none';

            // 顯示對應的內容
            if (tab.startsWith('day')) {
                // 顯示行程區塊
                itinerarySection.style.display = 'block';
                dateNav.style.display = 'flex';

                // 更新日期導航的選中狀態
                const dateBtns = document.querySelectorAll('.date-btn');
                dateBtns.forEach(b => b.classList.remove('active'));
                const targetDateBtn = document.querySelector(`.date-btn[data-date="${date}"]`);
                if (targetDateBtn) {
                    targetDateBtn.classList.add('active');
                }

                // 更新當前日期並顯示行程
                currentDate = date;
                displayItinerary(currentDate);
            } else if (tab === 'food') {
                foodSection.style.display = 'block';
                dateNav.style.display = 'none';
            } else if (tab === 'preparation') {
                preparationSection.style.display = 'block';
                dateNav.style.display = 'none';
            }

            // 滾動到頂部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// 美食推薦數據
const foodRecommendations = [
    {
        name: '🦪 星光海洋牧場',
        desc: '海上平台用餐體驗，新鮮烤蚵吃到飽',
        location: '澎湖縣湖西鄉北寮村'
    },
    {
        name: '🍴 日新餐廳',
        desc: '在地美食，海鮮料理',
        location: '澎湖縣馬公市'
    },
    {
        name: '🦐 吉貝別野餐廳',
        desc: '品嚐吉貝海鮮，新鮮海產',
        location: '吉貝島'
    },
    {
        name: '🍽️ 喜來登吃到飽',
        desc: 'Buffet 自助餐，多樣化美食',
        location: '喜來登酒店'
    },
    {
        name: '🐟 清峰海鮮',
        desc: '品嚐新鮮海產，澎湖特色料理',
        location: '澎湖縣白沙鄉'
    },
    {
        name: '🔥 船尾燒烤',
        desc: '享用燒烤美食，氣氛佳',
        location: '馬公市'
    },
    {
        name: '🍜 漁翁小吃部',
        desc: '在地小吃，道地澎湖味',
        location: '澎湖縣馬公市'
    },
    {
        name: '🌊 及林春咖啡館',
        desc: '沙灘旁的咖啡時光，景色優美',
        location: '澎湖縣湖西鄉隘門村'
    }
];

// 行前準備數據
const tripPreparationData = {
    '證件與金錢': [
        '身份證',
        '健保卡',
        '現金與信用卡',
        '機票或電子票證'
    ],
    '衣物': [
        '輕便衣物（夏季為主）',
        '薄外套（早晚溫差）',
        '泳衣泳褲',
        '拖鞋與運動鞋',
        '帽子與太陽眼鏡'
    ],
    '防曬用品': [
        '防曬乳（SPF 50+）',
        '曬後修護',
        '防水防曬',
        '陽傘'
    ],
    '日常用品': [
        '個人藥品',
        '防蚊液',
        '充電器與行動電源',
        '相機或手機',
        '盥洗用具',
        '雨具（備用）'
    ],
    '娛樂用品': [
        '浮潛裝備（可現場租借）',
        '防水袋',
        '沙灘玩具',
        '好心情 😊'
    ]
};

// 顯示美食推薦
function displayFoodRecommendations() {
    const container = document.getElementById('food-content');

    container.innerHTML = foodRecommendations.map(food => `
        <div class="food-card">
            <h3 class="food-title">${food.name}</h3>
            <p class="food-desc">${food.desc}</p>
            <span class="food-location">📍 ${food.location}</span>
        </div>
    `).join('');
}

// 顯示行前準備
function displayTripPreparation() {
    const container = document.getElementById('preparation-content');

    container.innerHTML = Object.keys(tripPreparationData).map(category => `
        <div class="preparation-category">
            <h3>📋 ${category}</h3>
            <ul class="preparation-list">
                ${tripPreparationData[category].map(item => `
                    <li class="preparation-item">${item}</li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}
