// ==================== 美食清單資料 ====================
// 從 food-editor.html 匯出後，將 JSON 資料貼到這裡
// 資料格式範例：
// const foodListData = {
//     categories: [
//         { id: 'penghu-city', name: '澎湖市區', color: '#667eea' },
//         { id: 'penghu-island', name: '澎湖環島', color: '#48bb78' }
//     ],
//     foodList: [
//         {
//             id: '1',
//             name: '星光海洋牧場',
//             address: '澎湖縣湖西鄉北寮村',
//             hours: '10:00 - 18:00',
//             rating: 4.5,
//             category: 'penghu-island',
//             mapUrl: 'https://www.google.com/maps/...'
//         }
//     ]
// };

// 預留：美食清單資料
const foodListData = {
    categories: [
        { id: 'local-snacks', name: '市區小吃', color: '#ef4444' },
        { id: 'local-meals', name: '市區正餐', color: '#f59e0b' },
        { id: 'breakfast', name: '早餐', color: '#fbbf24' },
        { id: 'restaurants', name: '餐廳', color: '#3b82f6' },
        { id: 'island-tour', name: '環島', color: '#10b981' },
        { id: 'souvenirs', name: '伴手禮', color: '#8b5cf6' }
    ],
    foodList: [
        // 市區小吃
        { name: '蔬脆蛋餅', rating: 4.5, reviews: 764, category: 'local-snacks', mapUrl: 'https://www.google.com/maps/search/?api=1&query=蔬脆蛋餅+澎湖' },
        { name: '倍果蔬食章魚燒', rating: 4.8, reviews: 246, category: 'local-snacks', mapUrl: 'https://www.google.com/maps/search/?api=1&query=倍果蔬食章魚燒+澎湖' },
        { name: '四海日式串燒', rating: 4.6, reviews: 136, category: 'local-snacks', mapUrl: 'https://www.google.com/maps/search/?api=1&query=四海日式串燒+澎湖' },
        { name: '關帝廟香腸', rating: 4.5, reviews: 132, category: 'local-snacks', mapUrl: 'https://www.google.com/maps/search/?api=1&query=關帝廟香腸+澎湖' },
        { name: '赤崁炸粿', rating: 4.2, reviews: 714, category: 'local-snacks', mapUrl: 'https://www.google.com/maps/search/?api=1&query=赤崁炸粿+澎湖' },
        { name: '紫玉仙草', rating: 4.4, reviews: 1689, category: 'local-snacks', mapUrl: 'https://www.google.com/maps/search/?api=1&query=紫玉仙草+澎湖' },
        { name: '劉正港檸檬汁', rating: 3.9, reviews: 1000, category: 'local-snacks', mapUrl: 'https://www.google.com/maps/search/?api=1&query=劉正港檸檬汁+澎湖' },
        { name: '藍媽媽仙草光復總店', rating: 4.6, reviews: 894, category: 'local-snacks', mapUrl: 'https://www.google.com/maps/search/?api=1&query=藍媽媽仙草光復總店+澎湖' },
        { name: '文康滷菜', rating: 4.4, reviews: 666, category: 'local-snacks', mapUrl: 'https://www.google.com/maps/search/?api=1&query=文康滷菜+澎湖' },
        { name: '玉冠嫩仙草-澎湖總店', rating: 4.4, reviews: 8590, category: 'local-snacks', mapUrl: 'https://www.google.com/maps/search/?api=1&query=玉冠嫩仙草+澎湖總店+澎湖' },
        { name: '阿豹香腸攤', rating: 3.5, reviews: 2389, category: 'local-snacks', mapUrl: 'https://www.google.com/maps/search/?api=1&query=阿豹香腸攤+澎湖' },

        // 市區正餐
        { name: '拾貳鮮 鮮魚湯專賣店', rating: 4.5, reviews: 413, category: 'local-meals', mapUrl: 'https://www.google.com/maps/search/?api=1&query=拾貳鮮+鮮魚湯專賣店+澎湖' },
        { name: '應時勢小吃部筒仔米糕', rating: 4.3, reviews: 213, category: 'local-meals', mapUrl: 'https://www.google.com/maps/search/?api=1&query=應時勢小吃部筒仔米糕+澎湖' },
        { name: '福牡蠣屋', rating: 4.2, reviews: 2678, category: 'local-meals', mapUrl: 'https://www.google.com/maps/search/?api=1&query=福牡蠣屋+澎湖' },

        // 早餐
        { name: '汐品蛋餅', rating: 4.8, reviews: 108, category: 'breakfast', mapUrl: 'https://www.google.com/maps/search/?api=1&query=汐品蛋餅+澎湖' },
        { name: '香亭土魠魚羹', rating: 3.5, reviews: 1549, category: 'breakfast', mapUrl: 'https://www.google.com/maps/search/?api=1&query=香亭土魠魚羹+澎湖' },
        { name: '益豐豆漿', rating: 3.9, reviews: 1409, category: 'breakfast', mapUrl: 'https://www.google.com/maps/search/?api=1&query=益豐豆漿+澎湖' },
        { name: '北新橋牛雜湯', rating: 4.3, reviews: 3693, category: 'breakfast', mapUrl: 'https://www.google.com/maps/search/?api=1&query=北新橋牛雜湯+澎湖' },
        { name: '鐘記燒餅（北辰店）', rating: 4.2, reviews: 700, category: 'breakfast', mapUrl: 'https://www.google.com/maps/search/?api=1&query=鐘記燒餅+北辰店+澎湖' },
        { name: '鐘記燒餅', rating: 4.2, reviews: 2703, category: 'breakfast', mapUrl: 'https://www.google.com/maps/search/?api=1&query=鐘記燒餅+澎湖' },
        { name: '二信早餐-飯糰專賣店', rating: 4.3, reviews: 536, category: 'breakfast', mapUrl: 'https://www.google.com/maps/search/?api=1&query=二信早餐+飯糰專賣店+澎湖' },
        { name: '二信飯糰創始店', rating: 3.8, reviews: 1729, category: 'breakfast', mapUrl: 'https://www.google.com/maps/search/?api=1&query=二信飯糰創始店+澎湖' },
        { name: '西河食堂', rating: 4.4, reviews: 1923, category: 'breakfast', mapUrl: 'https://www.google.com/maps/search/?api=1&query=西河食堂+澎湖' },

        // 餐廳
        { name: '清峰海鮮', rating: 4.5, reviews: 1429, category: 'restaurants', mapUrl: 'https://www.google.com/maps/search/?api=1&query=清峰海鮮+澎湖' },
        { name: '來福海鮮餐廳', rating: 4.1, reviews: 3723, category: 'restaurants', mapUrl: 'https://www.google.com/maps/search/?api=1&query=來福海鮮餐廳+澎湖' },
        { name: '漁翁小吃部', rating: 4.3, reviews: 342, category: 'restaurants', mapUrl: 'https://www.google.com/maps/search/?api=1&query=漁翁小吃部+澎湖' },

        // 環島
        { name: '江巷仔內仙人掌冰', rating: 4.7, reviews: 1220, category: 'island-tour', mapUrl: 'https://www.google.com/maps/search/?api=1&query=江巷仔內仙人掌冰+澎湖' },
        { name: '旺旺手工海菜煎餅', rating: 4.4, reviews: 543, category: 'island-tour', mapUrl: 'https://www.google.com/maps/search/?api=1&query=旺旺手工海菜煎餅+澎湖' },
        { name: '澎湖老家餡餅', rating: 4.6, reviews: 1222, category: 'island-tour', mapUrl: 'https://www.google.com/maps/search/?api=1&query=澎湖老家餡餅+澎湖' },

        // 伴手禮
        { name: '媽宮食品 中正店', rating: 4.0, reviews: 668, category: 'souvenirs', mapUrl: 'https://www.google.com/maps/search/?api=1&query=媽宮食品+中正店+澎湖' }
    ]
};

// ==================== 行程資料 ====================
// 行程資料
const itineraryData = {
    '2026-05-21': {
        date: '5/21 (四)',
        weather: {
            temp: 28,
            desc: '晴朗',
            rainChance: 20,
            windSpeed: 15,
            suggestions: ['🕶️ 建議攜帶防曬用品', '🧴 記得補充防曬乳']
        },
        activities: [
            {
                time: '07:30 – 08:15',
                title: '台中機場起飛，抵達澎湖',
                type: '✈️',
                category: 'transport',
                desc: '從台中出發前往澎湖',
                location: '台中機場',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=台中機場'
            },
            {
                time: '09:00 – 11:00',
                title: '康倪海洋生技 - 丑丑館',
                type: '🏛️',
                category: 'attraction',
                desc: '參觀海洋生技館',
                location: '澎湖縣湖西鄉龍門村',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=康倪海洋生技'
            },
            {
                time: '11:30 – 14:00',
                title: '星光海洋牧場（午餐）',
                type: '🍽️',
                category: 'meal',
                desc: '海上平台用餐體驗',
                location: '澎湖縣湖西鄉北寮村',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=星光海洋牧場'
            },
            {
                time: '14:00 – 17:30',
                title: '隘門沙灘、及林春咖啡館',
                type: '🏖️',
                category: 'attraction',
                desc: '沙灘活動與咖啡時光',
                location: '澎湖縣湖西鄉隘門村',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=林投公園+澎湖'
            },
            {
                time: '17:30 – 19:30',
                title: '日新餐廳（晚餐）',
                type: '🍽️',
                category: 'meal',
                desc: '享用在地美食',
                location: '澎湖縣馬公市',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=日新餐廳+澎湖'
            },
            {
                time: '21:00',
                title: '花火節煙火施放',
                type: '🎆',
                category: 'event',
                desc: '觀賞澎湖國際海上花火節',
                location: '觀音亭',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=觀音亭+澎湖'
            },
            {
                time: '22:00',
                title: '回宸楓民宿休息',
                type: '🏠',
                category: 'accommodation',
                desc: '入住民宿',
                location: '宸楓民宿',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=宸楓民宿+澎湖'
            }
        ]
    },
    '2026-05-22': {
        date: '5/22 (五)',
        weather: {
            temp: 29,
            desc: '多雲時晴',
            rainChance: 15,
            windSpeed: 18,
            suggestions: ['🕶️ 建議攜帶防曬用品', '💧 多補充水分']
        },
        activities: [
            {
                time: '07:00 – 08:00',
                title: '赤崁往吉貝',
                type: '⛴️',
                category: 'transport',
                desc: '搭船前往吉貝島',
                location: '赤崁碼頭',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=赤崁碼頭+澎湖'
            },
            {
                time: '08:00 – 12:00',
                title: '吉貝環島、水上活動',
                type: '🏄',
                category: 'attraction',
                desc: '環島遊覽及水上活動體驗',
                location: '吉貝島',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=吉貝島'
            },
            {
                time: '12:00 – 14:00',
                title: '吉貝別野餐廳（午餐）',
                type: '🍽️',
                category: 'meal',
                desc: '品嚐吉貝海鮮',
                location: '吉貝島',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=吉貝別野餐廳'
            },
            {
                time: '14:00 – 16:00',
                title: '搭船由吉貝往赤崁（14:00開船）',
                type: '⛴️',
                category: 'transport',
                desc: '返回本島',
                location: '吉貝碼頭',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=吉貝碼頭'
            },
            {
                time: '16:00 – 18:00',
                title: '民宿休息、市區自由行',
                type: '🚶',
                category: 'leisure',
                desc: '休息並探索市區',
                location: '馬公市區',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=宸楓念念澄緣民宿+澎湖',
                foodLink: { label: '🍽️ 市區小吃推薦', category: 'local-snacks' }
            },
            {
                time: '18:00 – 21:00',
                title: '喜來登吃到飽（晚餐）',
                type: '🍽️',
                category: 'meal',
                desc: 'Buffet 自助餐',
                location: '喜來登酒店',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=喜來登+澎湖'
            },
            {
                time: '21:00',
                title: '回宸楓民宿休息',
                type: '🏠',
                category: 'accommodation',
                desc: '返回民宿',
                location: '宸楓民宿',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=宸楓民宿+澎湖'
            }
        ]
    },
    '2026-05-23': {
        date: '5/23 (六)',
        weather: {
            temp: 27,
            desc: '多雲',
            rainChance: 35,
            windSpeed: 20,
            suggestions: ['☂️ 建議攜帶雨具', '🧥 可能需要薄外套']
        },
        activities: [
            {
                time: '08:00 – 11:00',
                title: '澎湖水族館',
                type: '🐠',
                category: 'attraction',
                desc: '參觀海洋生物',
                location: '澎湖縣白沙鄉',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=澎湖水族館'
            },
            {
                time: '11:00 – 13:00',
                title: '清峰海鮮（午餐）',
                type: '🍽️',
                category: 'meal',
                desc: '品嚐新鮮海產',
                location: '澎湖縣白沙鄉',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=清峰海鮮'
            },
            {
                time: '13:00 – 14:00',
                title: '跨海大橋',
                type: '🌉',
                category: 'attraction',
                desc: '澎湖地標景點',
                location: '澎湖跨海大橋',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=澎湖跨海大橋'
            },
            {
                time: '14:00 – 17:00',
                title: '二崁陳家古厝、池東大菓葉玄武岩',
                type: '🏛️',
                category: 'attraction',
                desc: '文化古蹟與自然景觀',
                location: '澎湖縣西嶼鄉',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=二崁陳家古厝',
                mapUrl2: 'https://www.google.com/maps/search/?api=1&query=池東大菓葉玄武岩+澎湖'
            },
            {
                time: '17:00 – 18:00',
                title: '回市區',
                type: '🚗',
                category: 'transport',
                desc: '返回馬公市',
                location: '馬公市',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=宸楓念念澄緣民宿+澎湖'
            },
            {
                time: '18:00 – 20:00',
                title: '船尾燒烤（晚餐）',
                type: '🍽️',
                category: 'meal',
                desc: '享用燒烤美食',
                location: '馬公市',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=船尾燒烤+澎湖'
            },
            {
                time: '20:00 – 22:00',
                title: '夜釣小管 或 逛街',
                type: '🎣',
                category: 'leisure',
                desc: '夜間活動',
                location: '馬公市',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=澎湖夜釣小管',
                foodLink: { label: '🍽️ 市區小吃推薦', category: 'local-snacks' }
            },
            {
                time: '22:00',
                title: '回宸楓民宿休息',
                type: '🏠',
                category: 'accommodation',
                desc: '返回民宿',
                location: '宸楓民宿',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=宸楓民宿+澎湖'
            }
        ]
    },
    '2026-05-24': {
        date: '5/24 (日)',
        weather: {
            temp: 26,
            desc: '陰天',
            rainChance: 40,
            windSpeed: 22,
            suggestions: ['☂️ 建議攜帶雨具', '🧥 建議穿著薄外套']
        },
        activities: [
            {
                time: '08:00 – 09:00',
                title: '觀音亭',
                type: '⛩️',
                category: 'attraction',
                desc: '海濱景點',
                location: '澎湖縣馬公市',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=觀音亭+澎湖'
            },
            {
                time: '09:00 – 10:00',
                title: '篤行十村',
                type: '🏘️',
                category: 'attraction',
                desc: '眷村文化園區',
                location: '澎湖縣馬公市',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=篤行十村'
            },
            {
                time: '10:00 – 12:00',
                title: '澎湖老街',
                type: '🏪',
                category: 'attraction',
                desc: '中央老街巡禮',
                location: '中央老街',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=澎湖中央老街'
            },
            {
                time: '12:00 – 14:00',
                title: '漁翁小吃部（午餐）',
                type: '🍽️',
                category: 'meal',
                desc: '在地小吃',
                location: '澎湖縣馬公市',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=漁翁小吃部+澎湖'
            },
            {
                time: '14:00 – 16:00',
                title: '澎坊購物休閒廣場 (免稅店)',
                type: '🛍️',
                category: 'shopping',
                desc: '購買伴手禮',
                location: '澎湖縣馬公市',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=澎坊購物休閒廣場+澎湖'
            },
            {
                time: '16:00 – 17:35',
                title: '前往機場',
                type: '🚗',
                category: 'transport',
                desc: '準備搭機返台',
                location: '澎湖機場',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=澎湖機場'
            },
            {
                time: '17:35 – 18:15',
                title: '澎湖機場起飛，返抵台中',
                type: '✈️',
                category: 'transport',
                desc: '返回台中',
                location: '澎湖機場',
                mapUrl: 'https://www.google.com/maps/search/?api=1&query=澎湖機場'
            }
        ]
    },
    '2026-05-25': {
        date: '5/25 (一)',
        weather: {
            temp: 27,
            desc: '多雲時晴',
            rainChance: 25,
            windSpeed: 16,
            suggestions: ['🕶️ 建議攜帶防曬用品', '💧 記得補充水分']
        },
        activities: []
    }
};

// 當前選擇的日期
let currentDate = '2026-05-21';

// 設置底部導航
function setupBottomNavigation() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const itinerarySection = document.getElementById('itinerary-content');
    const foodSection = document.getElementById('food-section');

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
            if (foodSection) foodSection.style.display = 'none';

            // 顯示行程區塊並更新日期
            if (tab.startsWith('day')) {
                itinerarySection.style.display = 'block';

                // 更新當前日期並顯示行程
                currentDate = date;
                displayItinerary(currentDate);
            } else if (tab === 'food') {
                // 顯示美食推薦
                if (foodSection) {
                    foodSection.style.display = 'block';
                    displayFoodRecommendations();
                }
            }

            // 滾動到頂部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// 初始化 App
function initApp() {
    setupDateNavigation();
    setupBottomNavigation();
    displayItinerary(currentDate);
    display4DayWeather();
    checkInstallPrompt();
    registerServiceWorker();
}

// 設置日期導航
function setupDateNavigation() {
    const dateBtns = document.querySelectorAll('.date-btn');
    dateBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有 active 狀態
            dateBtns.forEach(b => b.classList.remove('active'));
            // 添加當前 active 狀態
            btn.classList.add('active');
            // 更新日期
            currentDate = btn.dataset.date;
            // 更新顯示
            displayItinerary(currentDate);
        });
    });
}

// 獲取即時天氣數據
// 獲取真實天氣資料（使用 Open-Meteo API - 免費無需註冊）
async function fetchWeatherData() {
    try {
        // 澎湖座標
        const latitude = 23.5667;
        const longitude = 119.5833;

        // Open-Meteo API (免費、無需 API key)
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia/Taipei&forecast_days=4`;

        const response = await fetch(url);
        const data = await response.json();

        if (!data.daily) {
            console.error('無法取得天氣資料');
            return null;
        }

        // 轉換資料格式
        const weatherData = [];
        for (let i = 0; i < 4; i++) {
            const date = new Date(data.daily.time[i]);
            const dayNames = ['日', '一', '二', '三', '四', '五', '六'];
            const dayOfWeek = dayNames[date.getDay()];
            const month = date.getMonth() + 1;
            const day = date.getDate();

            // 計算平均溫度
            const tempMax = Math.round(data.daily.temperature_2m_max[i]);
            const tempMin = Math.round(data.daily.temperature_2m_min[i]);
            const tempAvg = Math.round((tempMax + tempMin) / 2);

            const weatherCode = data.daily.weathercode[i];
            const rainChance = data.daily.precipitation_probability_max[i] || 0;

            weatherData.push({
                date: `${month}/${day} (${dayOfWeek})`,
                temp: tempAvg,
                tempMax: tempMax,
                tempMin: tempMin,
                desc: getWeatherDescription(weatherCode),
                rainChance: rainChance,
                weatherCode: weatherCode
            });
        }

        return weatherData;

    } catch (error) {
        console.error('獲取天氣數據失敗:', error);
        // 如果 API 失敗，返回備用資料
        return getFallbackWeatherData();
    }
}

// 根據 WMO 天氣代碼返回中文描述
function getWeatherDescription(code) {
    if (code === 0) return '晴朗';
    if (code === 1) return '大致晴朗';
    if (code === 2) return '部分多雲';
    if (code === 3) return '陰天';
    if (code >= 45 && code <= 48) return '有霧';
    if (code >= 51 && code <= 55) return '毛毛雨';
    if (code >= 61 && code <= 65) return '下雨';
    if (code >= 66 && code <= 67) return '凍雨';
    if (code >= 71 && code <= 77) return '下雪';
    if (code >= 80 && code <= 82) return '陣雨';
    if (code >= 85 && code <= 86) return '陣雪';
    if (code >= 95 && code <= 99) return '雷雨';
    return '多雲';
}

// 備用天氣資料（當 API 失敗時使用）
function getFallbackWeatherData() {
    const today = new Date();
    const dayNames = ['日', '一', '二', '三', '四', '五', '六'];
    const weatherData = [];

    for (let i = 0; i < 4; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dayOfWeek = dayNames[date.getDay()];
        const month = date.getMonth() + 1;
        const day = date.getDate();

        weatherData.push({
            date: `${month}/${day} (${dayOfWeek})`,
            temp: 25 + Math.floor(Math.random() * 5),
            tempMax: 28,
            tempMin: 22,
            desc: '多雲',
            rainChance: 20 + Math.floor(Math.random() * 30),
            weatherCode: 2
        });
    }

    return weatherData;
}

// 顯示4天天氣預報
async function display4DayWeather() {
    const forecastContainer = document.getElementById('weather-forecast');

    // 顯示載入狀態
    forecastContainer.innerHTML = `
        <div class="weather-loading">
            <div class="loading-spinner">⏳</div>
            <div>載入天氣數據中...</div>
        </div>
    `;

    // 獲取天氣數據
    const weatherData = await fetchWeatherData();

    if (!weatherData || weatherData.length === 0) {
        forecastContainer.innerHTML = `
            <div class="weather-error">
                <div>❌</div>
                <div>無法載入天氣數據</div>
            </div>
        `;
        return;
    }

    // 顯示天氣預報（最多4天）
    forecastContainer.innerHTML = weatherData.slice(0, 4).map(data => {
        const { date, temp, desc, rainChance, weatherCode } = data;

        // 根據天氣代碼確定圖示
        const weatherIcon = getWeatherIcon(weatherCode);

        return `
            <div class="forecast-day">
                <div class="forecast-date">${date}</div>
                <div class="forecast-icon">${weatherIcon}</div>
                <div class="forecast-temp">${temp}°C</div>
                <div class="forecast-details">
                    <div class="forecast-detail">
                        <span>💧</span>
                        <span>${rainChance}%</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 根據 WMO 天氣代碼返回對應圖示
function getWeatherIcon(code) {
    if (code === 0 || code === 1) return '☀️'; // 晴朗
    if (code === 2) return '⛅'; // 多雲
    if (code === 3) return '☁️'; // 陰天
    if (code >= 45 && code <= 48) return '🌫️'; // 霧
    if ((code >= 51 && code <= 55) || (code >= 61 && code <= 65)) return '🌧️'; // 雨
    if (code >= 71 && code <= 77) return '❄️'; // 雪
    if (code >= 80 && code <= 82) return '🌦️'; // 陣雨
    if (code >= 85 && code <= 86) return '🌨️'; // 陣雪
    if (code >= 95 && code <= 99) return '⛈️'; // 雷雨
    return '🌤️'; // 預設
}

// 顯示行程
function displayItinerary(date) {
    const timeline = document.getElementById('timeline');
    const data = itineraryData[date];

    if (!data) {
        timeline.innerHTML = '<p>無行程資料</p>';
        return;
    }


    // 計算第幾天 (從 2026-05-21 開始)
    const startDate = new Date('2026-05-21');
    const currentDateObj = new Date(date);
    const dayDiff = Math.floor((currentDateObj - startDate) / (1000 * 60 * 60 * 24)) + 1;

    // 更新標題
    const headerText = document.getElementById('itinerary-header-text');
    if (headerText) {
        headerText.textContent = data.date;
    }

    timeline.innerHTML = data.activities.map((activity, index) => `
        <div class="timeline-item" style="animation-delay: ${index * 0.1}s">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
                <div class="timeline-time">${activity.time}</div>
                <h3 class="timeline-title">
                    <span class="timeline-type">${activity.type}</span>
                    ${activity.title}
                </h3>
                <p class="timeline-desc">${activity.desc}</p>
                ${activity.mapUrl || activity.mapUrl2 || activity.foodLink ? `
                    <div class="timeline-actions">
                        ${activity.mapUrl ? `
                            <a href="${activity.mapUrl}" target="_blank" class="action-btn">
                                <span>📍</span>
                                <span>查看地圖${activity.mapUrl2 ? ' (1)' : ''}</span>
                            </a>
                        ` : ''}
                        ${activity.mapUrl2 ? `
                            <a href="${activity.mapUrl2}" target="_blank" class="action-btn">
                                <span>📍</span>
                                <span>查看地圖 (2)</span>
                            </a>
                        ` : ''}
                        ${activity.foodLink ? `
                            <button class="action-btn food-link-btn" onclick="switchToFoodCategory('${activity.foodLink.category}')">
                                <span>${activity.foodLink.label}</span>
                            </button>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');

}

// 切換到美食推薦的特定分類
function switchToFoodCategory(category) {
    // 切換到美食推薦分頁
    const foodTab = document.querySelector('.tab-btn[data-tab="food"]');
    const allTabs = document.querySelectorAll('.tab-btn');
    const itinerarySection = document.getElementById('itinerary-content');
    const foodSection = document.getElementById('food-section');

    // 更新底部導航狀態
    allTabs.forEach(tab => tab.classList.remove('active'));
    if (foodTab) foodTab.classList.add('active');

    // 切換內容顯示
    itinerarySection.style.display = 'none';
    if (foodSection) {
        foodSection.style.display = 'block';
        // 顯示指定分類的美食
        displayFoodRecommendations(category);
        // 滾動到頂部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// 顯示天氣
function displayWeather(date) {
    const data = itineraryData[date];
    if (!data || !data.weather) return;

    const { temp, desc, rainChance, windSpeed, suggestions } = data.weather;

    document.getElementById('temperature').textContent = `${temp}°C`;
    document.getElementById('weather-desc').textContent = desc;
    document.getElementById('rain-chance').textContent = `${rainChance}%`;
    document.getElementById('wind-speed').textContent = `${windSpeed} km/h`;

    const suggestionsContainer = document.getElementById('weather-suggestions');
    suggestionsContainer.innerHTML = suggestions.map(s => `
        <div class="suggestion">
            <span class="suggestion-icon">${s.split(' ')[0]}</span>
            <span>${s.split(' ').slice(1).join(' ')}</span>
        </div>
    `).join('');
}
// 當前選擇的美食分類
let currentFoodCategory = 'all';

// 顯示美食推薦
function displayFoodRecommendations(filterCategory = 'all') {
    if (!foodListData) return;

    currentFoodCategory = filterCategory;

    // 初始化分類標籤（只在第一次調用時）
    initFoodFilterTabs();

    const container = document.getElementById('food-content');

    // 根據選擇的分類篩選
    let categoriesToShow = foodListData.categories;

    if (filterCategory !== 'all') {
        categoriesToShow = foodListData.categories.filter(cat => cat.id === filterCategory);
    }

    // 按分類整理餐廳
    const html = categoriesToShow.map(category => {
        const restaurants = foodListData.foodList.filter(food => food.category === category.id);

        if (restaurants.length === 0) return '';

        return `
            <div class="food-category">
                <h3 class="category-title" style="color: ${category.color}">
                    <span class="category-icon" style="background: ${category.color}"></span>
                    ${category.name}
                </h3>
                <div class="food-items">
                    ${restaurants.map(food => `
                        <div class="food-card">
                            <div class="food-header">
                                <div class="food-name">${food.name}</div>
                                <div class="food-rating">
                                    <span class="rating-stars">⭐ ${food.rating}</span>
                                    <span class="rating-count">(${food.reviews})</span>
                                </div>
                            </div>
                            <a href="${food.mapUrl}" target="_blank" class="food-map-link">
                                <span>📍</span>
                                <span>查看地圖</span>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

// 初始化美食分類標籤
function initFoodFilterTabs() {
    const tabsContainer = document.getElementById('food-filter-tabs');
    if (!tabsContainer || !foodListData) return;

    // 檢查是否已經初始化
    if (tabsContainer.dataset.initialized === 'true') {
        // 只更新 active 狀態
        updateFilterTabsState();
        return;
    }

    // 生成所有分類標籤
    const tabsHTML = `
        <button class="filter-tab ${currentFoodCategory === 'all' ? 'active' : ''}" data-category="all">全部</button>
        ${foodListData.categories.map(cat => `
            <button class="filter-tab ${currentFoodCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">${cat.name}</button>
        `).join('')}
    `;

    tabsContainer.innerHTML = tabsHTML;
    tabsContainer.dataset.initialized = 'true';

    // 綁定點擊事件
    const filterTabs = tabsContainer.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            displayFoodRecommendations(category);
        });
    });
}

// 更新篩選標籤的active狀態
function updateFilterTabsState() {
    const tabsContainer = document.getElementById('food-filter-tabs');
    if (!tabsContainer) return;

    const filterTabs = tabsContainer.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        if (tab.dataset.category === currentFoodCategory) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// 檢查是否顯示安裝提示
function checkInstallPrompt() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator.standalone);

    if (isIOS && !isInStandaloneMode) {
        setTimeout(() => {
            const installPrompt = document.getElementById('install-prompt');
            installPrompt.classList.add('show');

            document.getElementById('close-install').addEventListener('click', () => {
                installPrompt.classList.remove('show');
                localStorage.setItem('installPromptClosed', 'true');
            });
        }, 3000);
    }
}

// 註冊 Service Worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js')
            .then(reg => console.log('Service Worker 註冊成功', reg))
            .catch(err => console.log('Service Worker 註冊失敗', err));
    }
}

// 當 DOM 載入完成後初始化
document.addEventListener('DOMContentLoaded', initApp);
