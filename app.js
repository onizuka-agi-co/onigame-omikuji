const STORAGE_KEY = "onigame-omikuji-history";

const fortunes = [
  {
    tier: "大吉",
    tone: "great",
    title: "今日は追い風が吹いてる",
    message: "迷っていたことは、小さく始めるほど良い流れに乗れそう。勢いで一歩だけ進めると景色が変わります。",
    color: "朱色",
    item: "あたたかいお茶",
  },
  {
    tier: "中吉",
    tone: "good",
    title: "丁寧に進めると当たり日",
    message: "大きなジャンプより、ひとつずつ整える日に向いています。軽く片付けるだけでも運気が上向きです。",
    color: "山吹色",
    item: "メモ帳",
  },
  {
    tier: "吉",
    tone: "soft",
    title: "ふつうに見えて、かなり良い日",
    message: "派手さはなくても、穏やかに前進できる運勢です。焦らず、自分のペースを守るとちょうどいい結果になります。",
    color: "若草色",
    item: "お気に入りのペン",
  },
  {
    tier: "末吉",
    tone: "caution",
    title: "あと少しで流れが変わる",
    message: "急ぐと空回りしやすい日です。いったん深呼吸して、やることをひとつに絞ると持ち直せます。",
    color: "青磁色",
    item: "ハンカチ",
  },
  {
    tier: "凶",
    tone: "hard",
    title: "休む勇気も今日の運",
    message: "無理に勝ちにいくより、疲れを減らすほうが大事な日です。少し手を抜けたら、もうそれで十分です。",
    color: "藤色",
    item: "甘いおやつ",
  },
];

const fortuneCard = document.getElementById("fortune-card");
const fortuneBadge = document.getElementById("fortune-badge");
const fortuneTitle = document.getElementById("fortune-title");
const fortuneMessage = document.getElementById("fortune-message");
const fortuneColor = document.getElementById("fortune-color");
const fortuneItem = document.getElementById("fortune-item");
const historyList = document.getElementById("history-list");
const drawButton = document.getElementById("draw-button");
const resetButton = document.getElementById("reset-button");

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function saveHistory(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function formatTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function renderHistory() {
  const history = loadHistory();

  if (history.length === 0) {
    historyList.innerHTML = '<li class="history-empty">まだ結果はありません。</li>';
    return;
  }

  historyList.innerHTML = history
    .map(
      (entry) => `
        <li>
          <span class="history-tier">${entry.tier} · ${formatTime(entry.timestamp)}</span>
          <p class="history-text">${entry.title}</p>
        </li>
      `
    )
    .join("");
}

function drawFortune() {
  const picked = fortunes[Math.floor(Math.random() * fortunes.length)];

  fortuneCard.dataset.tone = picked.tone;
  fortuneBadge.textContent = picked.tier;
  fortuneTitle.textContent = picked.title;
  fortuneMessage.textContent = picked.message;
  fortuneColor.textContent = picked.color;
  fortuneItem.textContent = picked.item;

  fortuneCard.classList.remove("revealed");
  requestAnimationFrame(() => {
    fortuneCard.classList.add("revealed");
  });

  const history = loadHistory();
  history.unshift({
    tier: picked.tier,
    title: picked.title,
    timestamp: Date.now(),
  });

  saveHistory(history.slice(0, 5));
  renderHistory();
}

function resetHistory() {
  localStorage.removeItem(STORAGE_KEY);
  renderHistory();
}

drawButton.addEventListener("click", drawFortune);
resetButton.addEventListener("click", resetHistory);

renderHistory();
