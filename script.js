// ===================== 即時時鐘程式 =====================

// 快取 DOM，避免每秒重複查詢
const clockEl = document.getElementById('clock');
const dateEl  = document.getElementById('dateDisplay');
const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

function updateClock() {
    const now = new Date();

    // 時間（補零至兩位數）
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hh}:${mm}:${ss}`;

    // 日期
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const d = now.getDate();
    dateEl.textContent = `${y}年${m}月${d}日 ${weekdays[now.getDay()]}`;
}

// 先顯示一次，避免空白
updateClock();

// 對齊整秒再啟動，避免誤差累積
const delay = 1000 - new Date().getMilliseconds();
setTimeout(() => {
    updateClock();
    setInterval(updateClock, 1000);
}, delay);