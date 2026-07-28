// ===================== MORSE CODE DICTIONARY =====================
const morseDict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
    '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
    ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
    '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/'
};

// Reverse dictionary for decoding
const revMorse = {};
for (const [key, value] of Object.entries(morseDict)) {
    revMorse[value] = key;
}

// ===================== LANGUAGE MAPPINGS =====================
const langMaps = {
    bengali: {
        'অ': 'A', 'আ': 'A', 'ই': 'I', 'ঈ': 'I', 'উ': 'U', 'ঊ': 'U',
        'ঋ': 'RI', 'এ': 'E', 'ঐ': 'OI', 'ও': 'O', 'ঔ': 'OU',
        'ক': 'K', 'খ': 'KH', 'গ': 'G', 'ঘ': 'GH', 'ঙ': 'NG',
        'চ': 'CH', 'ছ': 'CHH', 'জ': 'J', 'ঝ': 'JH', 'ঞ': 'NY',
        'ট': 'T', 'ঠ': 'TH', 'ড': 'D', 'ঢ': 'DH', 'ণ': 'N',
        'ত': 'T', 'থ': 'TH', 'দ': 'D', 'ধ': 'DH', 'ন': 'N',
        'প': 'P', 'ফ': 'PH', 'ব': 'B', 'ভ': 'BH', 'ম': 'M',
        'য': 'J', 'র': 'R', 'ল': 'L', 'শ': 'SH', 'ষ': 'SH', 'স': 'S', 'হ': 'H',
        'া': 'A', 'ি': 'I', 'ী': 'I', 'ু': 'U', 'ূ': 'U', 'ৃ': 'RI', 'ে': 'E', 'ৈ': 'OI', 'ো': 'O', 'ৌ': 'OU'
    },
    hindi: {
        'अ': 'A', 'आ': 'AA', 'इ': 'I', 'ई': 'II', 'उ': 'U', 'ऊ': 'UU',
        'ए': 'E', 'ऐ': 'AI', 'ओ': 'O', 'औ': 'AU',
        'क': 'K', 'ख': 'KH', 'ग': 'G', 'घ': 'GH', 'ङ': 'NG',
        'च': 'CH', 'छ': 'CHH', 'ज': 'J', 'झ': 'JH', 'ञ': 'NY',
        'ट': 'T', 'ठ': 'TH', 'ड': 'D', 'ढ': 'DH', 'ण': 'N',
        'त': 'T', 'थ': 'TH', 'द': 'D', 'ध': 'DH', 'न': 'N',
        'प': 'P', 'फ': 'PH', 'ब': 'B', 'भ': 'BH', 'म': 'M',
        'य': 'Y', 'र': 'R', 'ल': 'L', 'व': 'V',
        'श': 'SH', 'ष': 'SH', 'स': 'S', 'ह': 'H'
    },
    arabic: {
        'ا': 'A', 'ب': 'B', 'ت': 'T', 'ث': 'TH', 'ج': 'J', 'ح': 'H',
        'خ': 'KH', 'د': 'D', 'ذ': 'DH', 'ر': 'R', 'ز': 'Z', 'س': 'S',
        'ش': 'SH', 'ص': 'S', 'ض': 'D', 'ط': 'T', 'ظ': 'Z', 'ع': 'A',
        'غ': 'GH', 'ف': 'F', 'ق': 'Q', 'ك': 'K', 'ل': 'L', 'م': 'M',
        'ن': 'N', 'ه': 'H', 'و': 'W', 'ي': 'Y'
    },
    russian: {
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E',
        'Ё': 'YO', 'Ж': 'ZH', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K',
        'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R',
        'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'KH', 'Ц': 'TS',
        'Ч': 'CH', 'Ш': 'SH', 'Щ': 'SHCH', 'Ъ': '', 'Ы': 'Y', 'Ь': '',
        'Э': 'E', 'Ю': 'YU', 'Я': 'YA'
    },
    japanese: {
        'あ': 'A', 'い': 'I', 'う': 'U', 'え': 'E', 'お': 'O',
        'か': 'KA', 'き': 'KI', 'く': 'KU', 'け': 'KE', 'こ': 'KO',
        'さ': 'SA', 'し': 'SHI', 'す': 'SU', 'せ': 'SE', 'そ': 'SO',
        'た': 'TA', 'ち': 'CHI', 'つ': 'TSU', 'て': 'TE', 'と': 'TO',
        'な': 'NA', 'に': 'NI', 'ぬ': 'NU', 'ね': 'NE', 'の': 'NO',
        'は': 'HA', 'ひ': 'HI', 'ふ': 'FU', 'へ': 'HE', 'ほ': 'HO',
        'ま': 'MA', 'み': 'MI', 'む': 'MU', 'め': 'ME', 'も': 'MO',
        'や': 'YA', 'ゆ': 'YU', 'よ': 'YO',
        'ら': 'RA', 'り': 'RI', 'る': 'RU', 'れ': 'RE', 'ろ': 'RO',
        'わ': 'WA', 'を': 'WO', 'ん': 'N'
    },
    korean: {
        'ㄱ': 'G', 'ㄴ': 'N', 'ㄷ': 'D', 'ㄹ': 'R', 'ㅁ': 'M', 'ㅂ': 'B',
        'ㅅ': 'S', 'ㅇ': 'NG', 'ㅈ': 'J', 'ㅊ': 'CH', 'ㅋ': 'K', 'ㅌ': 'T',
        'ㅍ': 'P', 'ㅎ': 'H', 'ㅏ': 'A', 'ㅑ': 'YA', 'ㅓ': 'EO', 'ㅕ': 'YEO',
        'ㅗ': 'O', 'ㅛ': 'YO', 'ㅜ': 'U', 'ㅠ': 'YU', 'ㅡ': 'EU', 'ㅣ': 'I'
    },
    thai: {
        'ก': 'K', 'ข': 'KH', 'ค': 'KH', 'ง': 'NG', 'จ': 'CH', 'ฉ': 'CH',
        'ช': 'CH', 'ซ': 'S', 'ญ': 'Y', 'ด': 'D', 'ต': 'T', 'ถ': 'TH',
        'ท': 'TH', 'น': 'N', 'บ': 'B', 'ป': 'P', 'ผ': 'PH', 'พ': 'PH',
        'ฟ': 'F', 'ม': 'M', 'ย': 'Y', 'ร': 'R', 'ล': 'L', 'ว': 'W',
        'ศ': 'S', 'ษ': 'S', 'ส': 'S', 'ห': 'H', 'อ': 'O', 'ฮ': 'H'
    },
    greek: {
        'Α': 'A', 'Β': 'B', 'Γ': 'G', 'Δ': 'D', 'Ε': 'E', 'Ζ': 'Z',
        'Η': 'I', 'Θ': 'TH', 'Ι': 'I', 'Κ': 'K', 'Λ': 'L', 'Μ': 'M',
        'Ν': 'N', 'Ξ': 'X', 'Ο': 'O', 'Π': 'P', 'Ρ': 'R', 'Σ': 'S',
        'Τ': 'T', 'Υ': 'Y', 'Φ': 'F', 'Χ': 'KH', 'Ψ': 'PS', 'Ω': 'O'
    },
    chinese: {
        '你': 'NI', '好': 'HAO', '世': 'SHI', '界': 'JIE', '我': 'WO',
        '爱': 'AI', '中': 'ZHONG', '国': 'GUO', '大': 'DA', '小': 'XIAO',
        '人': 'REN', '天': 'TIAN', '地': 'DI', '水': 'SHUI', '火': 'HUO',
        '山': 'SHAN', '月': 'YUE', '日': 'RI', '木': 'MU', '金': 'JIN', '土': 'TU'
    }
};

// Build reverse lookup: latin -> {lang: char}
const reverseLangMaps = {};
for (const [lang, map] of Object.entries(langMaps)) {
    for (const [char, latin] of Object.entries(map)) {
        if (!reverseLangMaps[latin]) reverseLangMaps[latin] = {};
        reverseLangMaps[latin][lang] = char;
    }
}

// ===================== STATE =====================
let currentMode = 'encode';
let currentDecodeLang = 'english';
let lastMorseCode = '';
let isPlaying = false;
let playTimeouts = [];
let audioCtx = null;

// ===================== DOM ELEMENTS =====================
const inputEl = document.getElementById('mainInput');
const outputEl = document.getElementById('outputBox');
const modeBadge = document.getElementById('modeBadge');
const langTabs = document.getElementById('langTabs');
const morseCount = document.getElementById('morseCount');
const playBtn = document.getElementById('playBtn');
const copyBtn = document.getElementById('copyBtn');

// ===================== AUDIO =====================
function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
}

function playTone(freq, duration) {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = freq;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
}

// ===================== CORE FUNCTIONS =====================
function isMorseCode(str) {
    const trimmed = str.trim();
    if (!trimmed) return false;
    return /^[\.\-\/\s]+$/.test(trimmed);
}

function detectLanguage(text) {
    for (const [lang, map] of Object.entries(langMaps)) {
        for (const char of text) {
            if (map[char]) return lang;
        }
    }
    return 'english';
}

function textToMorse(text) {
    let morse = '';
    let symbols = 0;
    for (const char of text.toUpperCase()) {
        let mapped = null;
        for (const map of Object.values(langMaps)) {
            if (map[char]) { mapped = map[char]; break; }
        }
        if (mapped) {
            for (const sub of mapped) {
                if (morseDict[sub]) {
                    morse += morseDict[sub] + ' ';
                    symbols++;
                }
            }
            morse += ' ';
        } else if (morseDict[char]) {
            morse += morseDict[char] + ' ';
            symbols++;
        } else if (char === ' ') {
            morse += '/ ';
            symbols++;
        } else {
            morse += `[${char}] `;
        }
    }
    return { result: morse.trim(), symbols };
}

function morseToText(morse) {
    let text = '';
    const words = morse.split('/');
    for (const word of words) {
        const chars = word.trim().split(/\s+/);
        for (const ch of chars) {
            if (!ch) continue;
            const latin = revMorse[ch];
            if (latin) {
                const mapped = reverseLangMaps[latin];
                if (mapped && mapped[currentDecodeLang]) {
                    text += mapped[currentDecodeLang];
                } else {
                    text += latin;
                }
            } else {
                text += `[${ch}]`;
            }
        }
        text += ' ';
    }
    return text.trim();
}

function process() {
    const val = inputEl.value;
    if (!val.trim()) {
        outputEl.textContent = 'Your result will appear here...';
        morseCount.textContent = '0';
        modeBadge.textContent = 'READY';
        modeBadge.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        langTabs.classList.remove('active');
        lastMorseCode = '';
        return;
    }

    if (isMorseCode(val)) {
        currentMode = 'decode';
        modeBadge.textContent = 'DECODING';
        modeBadge.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
        langTabs.classList.add('active');

        const result = morseToText(val);
        outputEl.textContent = result;
        lastMorseCode = val.trim();

        const symbols = val.trim().split(/\s+/).filter(x => x).length;
        morseCount.textContent = symbols;
    } else {
        currentMode = 'encode';
        modeBadge.textContent = 'ENCODING';
        modeBadge.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        langTabs.classList.remove('active');

        const { result, symbols } = textToMorse(val);
        outputEl.textContent = result;
        lastMorseCode = result;

        morseCount.textContent = symbols;
    }
}

// ===================== UI CONTROLS =====================
function setDecodeLang(lang) {
    currentDecodeLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    if (currentMode === 'decode') process();
}

function clearAll() {
    inputEl.value = '';
    process();
    inputEl.focus();
}

function copyOutput() {
    const text = outputEl.textContent;
    if (!text || text === 'Your result will appear here...') return;

    navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = '✅ COPIED!';
        setTimeout(() => copyBtn.textContent = '📋 COPY', 1500);
    }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        copyBtn.textContent = '✅ COPIED!';
        setTimeout(() => copyBtn.textContent = '📋 COPY', 1500);
    });
}

// ===================== PLAY / PAUSE TOGGLE =====================
function toggleMorseAudio() {
    if (isPlaying) {
        isPlaying = false;
        playTimeouts.forEach(clearTimeout);
        playTimeouts = [];
        playBtn.textContent = '🔊 PLAY MORSE AUDIO';
        playBtn.classList.remove('playing');
        return;
    }

    if (!lastMorseCode) return;

    isPlaying = true;
    playBtn.textContent = '⏸️ PAUSE MORSE AUDIO';
    playBtn.classList.add('playing');

    const wpm = 20;
    const dotDuration = 1.2 / wpm;
    const freq = 800;
    let timeOffset = 0;

    for (let i = 0; i < lastMorseCode.length; i++) {
        const char = lastMorseCode[i];

        if (char === '.') {
            const t = setTimeout(() => {
                if (isPlaying) playTone(freq, dotDuration);
            }, timeOffset * 1000);
            playTimeouts.push(t);
            timeOffset += dotDuration * 2;
        } else if (char === '-') {
            const t = setTimeout(() => {
                if (isPlaying) playTone(freq, dotDuration * 3);
            }, timeOffset * 1000);
            playTimeouts.push(t);
            timeOffset += dotDuration * 4;
        } else if (char === ' ') {
            timeOffset += dotDuration * 2;
        } else if (char === '/') {
            timeOffset += dotDuration * 2;
        }
    }

    const finishTimeout = setTimeout(() => {
        if (isPlaying) {
            isPlaying = false;
            playBtn.textContent = '🔊 PLAY MORSE AUDIO';
            playBtn.classList.remove('playing');
        }
    }, timeOffset * 1000 + 200);
    playTimeouts.push(finishTimeout);
}

// ===================== EVENT LISTENERS =====================
inputEl.addEventListener('input', process);

// Initialize
window.onload = function() {
    inputEl.value = '';
    process();
};
