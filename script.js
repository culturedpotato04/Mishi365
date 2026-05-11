// ============================================================
//  365 Days for Mishi — script.js
//  All logic: state, cookies, messages, grid, reveals, confetti
// ============================================================

const TOTAL_DAYS = 365;

// ─── Reveal types cycling through all 13 styles ─────────────
const revealTypes = [
  { id: "scroll",   label: "Scroll",      mood: "Dreamy"      },
  { id: "envelope", label: "Envelope",    mood: "Sweet"       },
  { id: "curtain",  label: "Curtain",     mood: "Theatrical"  },
  { id: "flower",   label: "Flower",      mood: "Blooming"    },
  { id: "book",     label: "Storybook",   mood: "Cozy"        },
  { id: "star",     label: "Star",        mood: "Shiny"       },
  { id: "cloud",    label: "Cloud",       mood: "Soft"        },
  { id: "gift",     label: "Gift box",    mood: "Cheery"      },
  { id: "moon",     label: "Moon",        mood: "Calm"        },
  { id: "scratch",  label: "Scratch card",mood: "Playful"     },
  { id: "kite",     label: "Kite",        mood: "Free"        },
  { id: "snow",     label: "Snow globe",  mood: "Magical"     },
  { id: "paper",    label: "Paper note",  mood: "Warm"        }
];

// ─── Special handcrafted messages for milestone days ────────
const specialMessages = {
  1: {
    title: "Hello my little sunshine",
    line1: "Aaj se tumhari magic journey shuru hui. Har din tumhe yaad dilayega that you are loved so much and your smile is a full celebration.",
    line2: "Mishi, you are tiny and precious but your heart already shines so bright. Bilkul Mumma ki brave little star.",
    line3: "Aaj ka reminder. New beginnings are beautiful because they begin with hope.",
    action: "Give your sweetest smile today 🌸"
  },
  7: {
    title: "One whole sparkling week",
    line1: "Dekho tumne ek poora week complete kar liya. Wah meri champion girl.",
    line2: "When you keep showing up with your smile and courage, little steps become big magic.",
    line3: "Mumma jaisi himmat dheere dheere roz ki small actions se banti hai.",
    action: "Clap for yourself 7 times 👏"
  },
  14: {
    title: "Two weeks of sunshine",
    line1: "Chaudah din ho gaye and your light is still as bright as day one. Isn't that wonderful.",
    line2: "Real stars do not burn out quickly. They glow steadily day after day just like you are doing.",
    line3: "Keep this feeling close. It is yours and nobody can take it away.",
    action: "Tell yourself you are glowing 🌟"
  },
  21: {
    title: "Three weeks of being brave",
    line1: "Scientists say 21 days can make a habit. Guess what habit you have already made? Showing up with joy.",
    line2: "That is one of the most powerful things a person can do. And you are already doing it.",
    line3: "Mumma also shows up every day with love. See that bravery and feel inspired.",
    action: "Do a happy dance for 10 seconds 💃"
  },
  30: {
    title: "Thirty days of you being amazing",
    line1: "Ek mahina of joy, courage and tiny wins. That is not small at all. That is beautiful discipline.",
    line2: "You are learning that special children are not perfect children. They are children who keep trying with heart.",
    line3: "Aaj Mumma ko hug dena and tell her she is brave too.",
    action: "Say I can do hard things 💪"
  },
  50: {
    title: "Fifty days strong",
    line1: "Arre wah Mishi, 50 days. That means your heart knows how to stay bright even on normal days.",
    line2: "Real strength is not loud. Sometimes it is simply getting up and trying again with a soft smile.",
    line3: "You have that gift in you already.",
    action: "Draw one tiny star today ⭐"
  },
  75: {
    title: "Seventy five bright mornings",
    line1: "75 days is a quarter of a year. Do you know what that means? You have been showing up for a whole season.",
    line2: "Seasons change but your warmth stays. That is what makes you extraordinary.",
    line3: "Even on sleepy days you carried your light. That takes real heart.",
    action: "Take one slow deep breath and smile 🌈"
  },
  100: {
    title: "One hundred golden days",
    line1: "Aaj tum 100 days wali superstar ho. That is huge and so so lovely.",
    line2: "Look at Mumma and see this. Brave people are not made in one day. They are made in caring days, patient days and trying-again days.",
    line3: "Tum bhi waise hi grow kar rahi ho, with grace and sparkle.",
    action: "Tell yourself I am growing beautifully 🌼"
  },
  150: {
    title: "Your heart keeps blooming",
    line1: "150 days later and your light has not dimmed even a little. It has grown warmer.",
    line2: "Kind children change rooms. They make people feel safer and happier just by being themselves.",
    line3: "Keep your softness. It is a superpower.",
    action: "Do one kind thing for someone 💖"
  },
  175: {
    title: "Halfway through and still shining",
    line1: "Mishi you are almost halfway through your 365 days. That is incredible and real and true.",
    line2: "Half of all this magic is already yours. The other half is still waiting to surprise you.",
    line3: "Keep going. The best surprises are always ahead.",
    action: "Write your name and put a crown above it 👑"
  },
  200: {
    title: "Two hundred days of courage",
    line1: "Aaj ka message seedha dil se. You are not just cute. You are courageous too.",
    line2: "Jab life thoda confusing hota hai, brave children keep walking with love. Just like brave mothers do.",
    line3: "You can be gentle and strong at the same time.",
    action: "Stand tall like a hero for 10 seconds 🦸"
  },
  250: {
    title: "Still shining, still rising",
    line1: "Some stars twinkle for a moment. You keep glowing again and again.",
    line2: "That means your goodness is real. It lives inside you and comes back every day.",
    line3: "Never think your small efforts are small. They are building your future.",
    action: "Whisper I am proud of me 🌟"
  },
  300: {
    title: "Three hundred happy pages",
    line1: "300 pages of love and look at you, still moving ahead. Kitni pyari baat hai yeh.",
    line2: "Big dreams are made from tiny honest days. Reading, smiling, helping, trying and caring.",
    line3: "Mumma's bravery is a quiet superpower. Notice it and keep that light with you.",
    action: "Say or write one dream out loud 🎈"
  },
  330: {
    title: "The final stretch begins",
    line1: "You are in the last chapter of this year's journey and it is the most golden one.",
    line2: "Only the bravest little hearts get this far. And you got here by simply being yourself.",
    line3: "Stay curious. Stay warm. The world needs your exact kind of heart.",
    action: "Look at the sky and say thank you 🌤️"
  },
  365: {
    title: "The whole magical year",
    line1: "Mishi you did it. 365 days of joy, hope, courage and love. What a beautiful journey this has been.",
    line2: "Always remember this. You were never ordinary. From the beginning you were special, loved and full of bright possibilities.",
    line3: "And yes, keep looking at Mumma too. Brave hearts can raise brave hearts.",
    action: "Celebrate yourself like a queen 👑"
  }
};

// ─── Message building blocks ─────────────────────────────────
const openers = [
  "Aaj ka little reminder",
  "Sun meri pyaari Mishi",
  "Aaj ki warm baat",
  "Hello sunshine girl",
  "Meri sweet champion",
  "Today's tiny truth",
  "Ek pyara sa note",
  "Listen little star",
  "Seedha dil se",
  "Aaj sirf tumhare liye"
];

const traitLines = [
  "your smile can make an ordinary day feel festive.",
  "you bring softness and light wherever you go.",
  "your heart is full of sweetness and quiet strength.",
  "you notice little things and that is a beautiful gift.",
  "you are learning and growing in your own lovely rhythm.",
  "you have a spark that cannot be copied by anyone.",
  "your kindness is one of your brightest superpowers.",
  "you are stronger than many big people even know.",
  "your curiosity makes the world more interesting.",
  "you have a way of making everyone around you feel seen.",
  "your laugh is one of the best sounds in the world.",
  "you try even when things feel hard and that is everything."
];

const courageLines = [
  "Bravery is not only loud. Sometimes bravery is trying again.",
  "Strong hearts can be gentle and still powerful.",
  "Every time you keep going, your confidence grows a little more.",
  "Courage starts small and becomes mighty with practice.",
  "You do not need to rush. Slow growth is still beautiful growth.",
  "Trying with honesty is already a kind of winning.",
  "A bright future is built from patient little steps.",
  "Even on confusing days, you can stay kind and brave.",
  "The children who try the hardest are the ones who grow the most.",
  "It is okay to feel unsure. Brave people feel unsure all the time and keep going anyway.",
  "Your efforts are never wasted. Every try teaches you something.",
  "Being yourself completely is one of the rarest kinds of courage."
];

const momLines = [
  "And when you look at Mumma, see how brave love can be. You carry that same brave sparkle too.",
  "Mumma shows you that real strength can be soft, caring and steady. That is something wonderful to learn from.",
  "Aaj Mumma ko dekho and remember this. Brave people keep loving even on hard days.",
  "The way Mumma stands strong with love is a beautiful example for your own heart.",
  "You can learn so much from Mumma's courage, patience and warmth.",
  "One day people may look at you the same way with pride because brave children grow into brave people.",
  "Mumma ki himmat is a quiet superpower. Notice it and keep that light with you.",
  "Strong girls often begin by watching strong women with loving hearts.",
  "The love Mumma gives you is the kind that stays forever. Carry it wherever you go.",
  "Mumma's everyday bravery is teaching you more than any book ever could.",
  "When you see Mumma try again after a hard day, know that you have that same spirit in you.",
  "The strength you see in Mumma is already growing quietly inside you too."
];

const dreamLines = [
  "You can dream big and still stay kind.",
  "Your future is waiting for your sparkle, your effort and your heart.",
  "The world always needs children who are bright and compassionate.",
  "One day you may help, teach, build or heal in your own beautiful way.",
  "Keep your wonder alive because it will guide you to amazing places.",
  "Your imagination is not silly. It is one of your gifts.",
  "There is so much lovely strength hidden inside your little everyday moments.",
  "You are becoming someone beautiful from the inside out.",
  "Dream in colours and then go make one tiny piece of it real.",
  "The things that make you different will one day be the things that make you shine."
];

const actionLines = [
  "Smile at one person today 😊",
  "Say one nice thing to yourself 💗",
  "Give Mumma one warm hug 🤗",
  "Try one thing even if it feels hard 🌈",
  "Help someone in one small way 🌼",
  "Draw a heart and keep it near you ❤️",
  "Say thank you with your brightest voice 🌟",
  "Stand tall and breathe like a hero 🦸",
  "Read one line with full confidence 📚",
  "Keep one happy thought in your pocket 🎀",
  "Say I am brave and kind ✨",
  "Look in the mirror and smile at yourself 🪞",
  "Write your name in your prettiest handwriting ✏️",
  "Pick one colour that feels happy today and use it 🎨",
  "Tell Mumma one thing you love about her 💐",
  "Sing one line of any song out loud 🎶",
  "Take 3 deep breaths and notice how calm you feel 🌬️",
  "Close your eyes and think of your favourite place 🏡",
  "Say today is going to be a good day and mean it ☀️",
  "Do something that makes you laugh 😂"
];

// ─── Cookie helpers ───────────────────────────────────────────
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return decodeURIComponent(parts.pop().split(";").shift());
  return null;
}

function setCookie(name, value, days = 400) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
}

function eraseCookie(name) {
  document.cookie = `${name}=; Max-Age=0; path=/`;
}

// ─── Journey date helpers ────────────────────────────────────
function getStartDate() {
  const raw = getCookie("mishi_start_date");
  return raw ? new Date(raw) : null;
}

function daysSinceStart(startDate) {
  if (!startDate) return 0;
  const now = new Date();
  const diff = now - startDate;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function unlockedDays() {
  const start = getStartDate();
  if (!start) return 0;
  return Math.min(TOTAL_DAYS, Math.max(1, daysSinceStart(start) + 1));
}

// ─── Reveal type for a given day ─────────────────────────────
function revealTypeForDay(day) {
  return revealTypes[(day - 1) % revealTypes.length];
}

// ─── Ordinal label helper ─────────────────────────────────────
function niceOrdinal(day) {
  const v = day % 100;
  if (v >= 11 && v <= 13) return `${day}th`;
  switch (day % 10) {
    case 1: return `${day}st`;
    case 2: return `${day}nd`;
    case 3: return `${day}rd`;
    default: return `${day}th`;
  }
}

// ─── Special chip label per day ───────────────────────────────
function specialLabel(day) {
  if (day === 1)   return "Fresh start";
  if (day === 7)   return "Week one glow";
  if (day === 14)  return "Two week sparkle";
  if (day === 21)  return "Habit magic";
  if (day === 30)  return "One month milestone";
  if (day === 100) return "Century of smiles";
  if (day === 200) return "200 golden days";
  if (day === 300) return "300 happy pages";
  if (day === 365) return "Grand finale";
  if (day % 50 === 0) return "Milestone magic";
  if (day % 10 === 0) return "Golden checkpoint";
  return "Daily sparkle";
}

// ─── Build generated message for any non-special day ─────────
function buildGeneratedMessage(day) {
  const opener     = openers[(day - 1) % openers.length];
  const trait      = traitLines[(day + 1) % traitLines.length];
  const courage    = courageLines[(day + 2) % courageLines.length];
  const mom        = momLines[(day + 3) % momLines.length];
  const dream      = dreamLines[(day + 4) % dreamLines.length];
  const action     = actionLines[(day + 5) % actionLines.length];

  return {
    title:  `${opener}`,
    line1:  `Mishi, ${trait.charAt(0).toUpperCase() + trait.slice(1)}`,
    line2:  `${courage} ${mom}`,
    line3:  `${dream} Bas yaad rakhna, your little heart is doing better than you know.`,
    action: action
  };
}

function messageForDay(day) {
  return specialMessages[day] || buildGeneratedMessage(day);
}

// ─── Build reveal prop HTML per type ─────────────────────────
function buildRevealProp(typeId) {
  switch (typeId) {
    case "scroll":
      return `<div class="reveal-prop paper-roll"></div>`;
    case "envelope":
      return `<div class="reveal-prop envelope-back"></div>
              <div class="reveal-prop envelope-flap"></div>`;
    case "curtain":
      return `<div class="reveal-prop curtain-left"></div>
              <div class="reveal-prop curtain-right"></div>`;
    case "flower":
      return `<div class="reveal-prop flower-wrap">
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
              </div>`;
    case "book":
      return `<div class="reveal-prop book-left"></div>
              <div class="reveal-prop book-right"></div>`;
    case "star":
      return `<div class="reveal-prop star-cover"></div>`;
    case "cloud":
      return `<div class="reveal-prop cloud"></div>`;
    case "gift":
      return `<div class="reveal-prop gift-box"></div>
              <div class="reveal-prop gift-lid"></div>`;
    case "moon":
      return `<div class="reveal-prop moon-cover"></div>`;
    case "scratch":
      return `<div class="reveal-prop scratch-layer"></div>`;
    case "kite":
      return `<div class="reveal-prop kite"></div>`;
    case "snow":
      return `<div class="reveal-prop snow-globe"></div>`;
    case "paper":
      return `<div class="reveal-prop paper-fold"></div>`;
    default:
      return "";
  }
}

// ─── Render the reveal card for a given day ──────────────────
function renderReveal(day, open = false) {
  const type = revealTypeForDay(day);
  const msg  = messageForDay(day);
  const shell = document.getElementById("revealShell");

  shell.innerHTML = `
    <div class="reveal-content reveal-${type.id} ${open ? "open" : ""}" id="activeReveal">
      ${buildRevealProp(type.id)}
      <div class="message-card">
        <h4>${msg.title}</h4>
        <p>${msg.line1}</p>
        <p>${msg.line2}</p>
        <p class="motivation">${msg.line3}</p>
        <div class="mini-action">🌸 ${msg.action}</div>
      </div>
      <span style="position:absolute;inset:auto 1rem 1rem auto;z-index:3;opacity:0.18;font-size:4rem;" aria-hidden="true">✨</span>
      <span style="position:absolute;inset:1rem auto auto 1rem;z-index:3;opacity:0.15;font-size:3.3rem;" aria-hidden="true">💖</span>
    </div>
  `;
}

// ─── Render the 365-day grid ──────────────────────────────────
function renderDaysGrid(unlocked, current) {
  const grid = document.getElementById("daysGrid");
  grid.innerHTML = "";

  for (let day = 1; day <= TOTAL_DAYS; day++) {
    const btn        = document.createElement("button");
    const isUnlocked = day <= unlocked;
    const isCurrent  = day === current;

    btn.className = "day-cell";
    btn.classList.add(isUnlocked ? "unlocked" : "locked");
    if (isCurrent) btn.classList.add("current");

    btn.innerHTML = `
      <span>${day}</span>
      <span class="${isUnlocked ? "tiny-star" : "tiny-lock"}" aria-hidden="true">${isUnlocked ? "✨" : "🔒"}</span>
    `;

    btn.disabled = !isUnlocked;
    btn.setAttribute("aria-label", isUnlocked ? `Open day ${day}` : `Day ${day} is locked`);

    btn.addEventListener("click", () => {
      selectedDay   = day;
      revealOpened  = false;
      updateRevealSection();
      renderDaysGrid(unlockedDays(), selectedDay);
    });

    grid.appendChild(btn);
  }
}

// ─── Update topbar metrics and section labels ─────────────────
function updateMetrics(unlocked, current) {
  const type = revealTypeForDay(current);
  document.getElementById("streakText").textContent    = `${unlocked > 0 ? unlocked : 0} day streak`;
  document.getElementById("unlockedText").textContent  = `${unlocked} unlocked`;
  document.getElementById("currentDayMetric").textContent = current;
  document.getElementById("daysLeftMetric").textContent   = TOTAL_DAYS - current;
  document.getElementById("styleMetric").textContent      = type.label;
  document.getElementById("moodMetric").textContent       = type.mood;
  document.getElementById("dayChip").textContent          = `Day ${current}`;
  document.getElementById("specialChip").textContent      = specialLabel(current);
  document.getElementById("dayIntroText").textContent     =
    `This is the ${niceOrdinal(current)} page of Mishi's journey. Today opens with a ${type.label.toLowerCase()} reveal.`;
}

// ─── Sync the reveal section to selectedDay ───────────────────
function updateRevealSection() {
  const unlocked = unlockedDays();
  if (selectedDay > unlocked) selectedDay = unlocked || 1;
  updateMetrics(unlocked || 1, selectedDay || 1);
  renderReveal(selectedDay || 1, revealOpened);
}

// ─── Full re-render (called on load and after restart) ────────
function renderAll() {
  const start    = getStartDate();
  const unlocked = start ? unlockedDays() : 0;

  if (!start) {
    document.getElementById("welcomeOverlay").classList.remove("hidden");
    selectedDay = 1;
  } else {
    document.getElementById("welcomeOverlay").classList.add("hidden");
    if (selectedDay < 1 || selectedDay > unlocked) selectedDay = unlocked;
  }

  const safeCurrent = Math.max(1, unlocked || 1);
  renderDaysGrid(unlocked, selectedDay || safeCurrent);
  updateMetrics(unlocked || 1, selectedDay || safeCurrent);
  renderReveal(selectedDay || safeCurrent, revealOpened);
}

// ─── Confetti burst ───────────────────────────────────────────
function makeConfetti() {
  const holder = document.getElementById("confetti");
  holder.innerHTML = "";
  const colors = [
    "#ff7aa2", "#7d6bff", "#f8c847",
    "#57a6ff", "#7edcc8", "#ffb37a"
  ];

  for (let i = 0; i < 56; i++) {
    const piece = document.createElement("span");
    piece.className = "piece";
    piece.style.left              = `${Math.random() * 100}%`;
    piece.style.top               = `${-10 - Math.random() * 20}vh`;
    piece.style.background        = colors[i % colors.length];
    piece.style.animationDuration = `${3 + Math.random() * 2.5}s`;
    piece.style.animationDelay    = `${Math.random() * 0.4}s`;
    piece.style.transform         = `rotate(${Math.random() * 360}deg)`;
    holder.appendChild(piece);
  }

  setTimeout(() => { holder.innerHTML = ""; }, 5800);
}

// ─── Sparkle burst at a screen coordinate ─────────────────────
function sparkleBurst(x, y) {
  const icons = ["✨", "💖", "🌟", "⭐", "🎀"];
  for (let i = 0; i < 10; i++) {
    const s = document.createElement("span");
    s.className   = "tiny-spark";
    s.textContent = icons[i % icons.length];
    s.style.left  = `${x + (Math.random() * 100 - 50)}px`;
    s.style.top   = `${y + (Math.random() * 50 - 25)}px`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1700);
  }
}

// ─── Open today's reveal animation ───────────────────────────
function revealToday() {
  revealOpened = true;
  const active = document.getElementById("activeReveal");
  if (active) active.classList.add("open");
  makeConfetti();
  sparkleBurst(window.innerWidth / 2, window.innerHeight / 2);
}

// ─── Theme helpers ────────────────────────────────────────────
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("themeToggle").textContent =
    theme === "dark" ? "☀️" : "🌙";
  setCookie("mishi_theme", theme);
}

function loadTheme() {
  const saved = getCookie("mishi_theme");
  if (saved) {
    setTheme(saved);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }
}

// ─── Start journey (first click on welcome screen) ───────────
function startJourney() {
  const now = new Date();
  setCookie("mishi_start_date", now.toISOString());
  document.getElementById("welcomeOverlay").classList.add("hidden");
  selectedDay  = 1;
  revealOpened = false;
  renderAll();
  makeConfetti();
}

// ─── App state ────────────────────────────────────────────────
let selectedDay  = 1;
let revealOpened = false;

// ─── Event listeners ──────────────────────────────────────────
document.getElementById("startJourneyBtn").addEventListener("click", startJourney);

document.getElementById("jumpTodayBtn").addEventListener("click", () => {
  const unlocked = unlockedDays();
  if (!unlocked) { startJourney(); return; }
  selectedDay  = unlocked;
  revealOpened = false;
  updateRevealSection();
  document.getElementById("todaySection")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("openRevealBtn").addEventListener("click", () => {
  if (!getStartDate()) { startJourney(); return; }
  revealToday();
});

document.getElementById("nextUnlockedBtn").addEventListener("click", () => {
  const unlocked = unlockedDays();
  if (!unlocked) return;
  selectedDay  = selectedDay >= unlocked ? 1 : selectedDay + 1;
  revealOpened = false;
  updateRevealSection();
  renderDaysGrid(unlocked, selectedDay);
});

document.getElementById("restartBtn").addEventListener("click", () => {
  const sure = confirm("Restart Mishi's journey from Day 1? All progress will reset.");
  if (!sure) return;
  eraseCookie("mishi_start_date");
  revealOpened = false;
  selectedDay  = 1;
  renderAll();
});

document.getElementById("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

// ─── Boot ─────────────────────────────────────────────────────
loadTheme();
renderAll();