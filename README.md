# 🏝️ 澎湖之旅 2026 - 旅遊 App
<!-- Last deployed: 2026-02-04 14:24 -->

一個功能完整的 Progressive Web App (PWA)，用於管理澎湖四天三夜旅行行程。

## ✨ 功能特色

- 📅 **每日行程表**：清晰的時間軸顯示每日活動
- 🌤️ **天氣資訊**：每日天氣預報和衣著建議
- 🗺️ **地圖導航**：一鍵開啟 Google Maps 導航
- 📱 **PWA 支援**：可安裝到 iOS 主畫面
- 🔄 **離線功能**：支援離線瀏覽
- 🎨 **精美設計**：現代化 UI 與流暢動畫

## 🚀 快速開始

### 1. 在電腦上測試

```powershell
# 進入專案目錄
cd c:\Users\許宗誌\Desktop\code\travel-app

# 啟動本地伺服器（使用 npx）
npx -y http-server -p 8080

# 或使用 Python（如果已安裝）
python -m http.server 8080
```

然後在瀏覽器開啟：`http://localhost:8080`

### 2. 在 iPhone 上使用

**選項 A：透過本地網路（電腦和手機需在同一 WiFi）**

1. 在電腦上啟動伺服器後，查看電腦的 IP 位址
2. 在 iPhone Safari 開啟：`http://[你的電腦IP]:8080`
3. 點擊「分享」按鈕 ⎋
4. 選擇「加入主畫面」
5. App 圖示會出現在主畫面上！

**選項 B：部署到網路（建議）**

可以部署到以下任一免費平台：
- **GitHub Pages**：上傳到 GitHub 儲存庫
- **Netlify**：拖曳資料夾即可部署
- **Vercel**：快速部署靜態網站

部署後即可在任何地方用 iPhone 存取並安裝到主畫面。

## 📋 行程內容

- **5/21 (四)**：抵達澎湖、康倪海洋生技、星光海洋牧場、隘門沙灘、花火節
- **5/22 (五)**：吉貝島一日遊、水上活動、喜來登吃到飽
- **5/23 (六)**：水族館、跨海大橋、二崁古厝、玄武岩、夜釣小管
- **5/24 (日)**：觀音亭、篤行十村、老街、免稅店、返回台中

## 🎯 使用說明

1. **切換日期**：點擊頂部日期按鈕查看不同天的行程
2. **查看天氣**：每日天氣資訊和穿著建議
3. **地圖導航**：點擊「開始導航」直接跳轉 Google Maps
4. **離線使用**：首次載入後即可離線瀏覽

## 🛠️ 技術架構

- **HTML5**：語義化標籤
- **CSS3**：現代化設計、漸層、動畫
- **Vanilla JavaScript**：無框架依賴
- **PWA**：Service Worker、Manifest
- **Google Maps API**：地圖整合

## 📁 專案結構

```
travel-app/
├── index.html          # 主頁面
├── styles.css          # 樣式設計
├── app.js              # 核心邏輯
├── manifest.json       # PWA 配置
├── service-worker.js   # 離線支援
├── icons/              # App 圖示
│   ├── icon-192.png
│   └── icon-512.png
└── README.md           # 說明文件
```

## 🎨 設計特色

- 海洋風格漸層配色
- 玻璃擬態（Glassmorphism）效果
- 流暢的頁面過渡動畫
- 響應式設計適配各種螢幕
- iOS 原生風格操作體驗

## 📱 iOS 安裝步驟

1. 在 Safari 開啟 App 網址
2. 點擊底部「分享」按鈕 ⎋
3. 向下滑動選擇「加入主畫面」
4. 點擊「新增」
5. 完成！App 已安裝到主畫面

## 🔧 進階設定

### 啟用真實天氣資料

目前使用模擬天氣資料。如需真實天氣：

1. 註冊 [OpenWeatherMap](https://openweathermap.org/api) 取得免費 API Key
2. 在 `app.js` 中找到 `displayWeather` 函數
3. 新增 API 呼叫邏輯

### 自訂行程

編輯 `app.js` 中的 `itineraryData` 物件即可修改行程內容。

## 📝 授權

此專案為個人使用，享受您的澎湖之旅！🌊
