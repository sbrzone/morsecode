// Enhanced Morse Code Dictionary with better language support
const morseCodeDict = {
    // English Alphabet
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    
    // Numbers
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    
    // Punctuation
    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
    '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
    ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
    '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/'
};

// Enhanced language character mapping
const languageCharMap = {
    // Bengali
    'অ': 'A', 'আ': 'A', 'ই': 'I', 'ঈ': 'I', 'উ': 'U', 'ঊ': 'U', 
    'ঋ': 'RI', 'এ': 'E', 'ঐ': 'OI', 'ও': 'O', 'ঔ': 'OU',
    'ক': 'K', 'খ': 'KH', 'গ': 'G', 'ঘ': 'GH', 'ঙ': 'NG',
    'চ': 'CH', 'ছ': 'CHH', 'জ': 'J', 'ঝ': 'JH', 'ঞ': 'NY',
    'ট': 'T', 'ঠ': 'TH', 'ড': 'D', 'ঢ': 'DH', 'ণ': 'N',
    'ত': 'T', 'থ': 'TH', 'দ': 'D', 'ধ': 'DH', 'ন': 'N',
    'প': 'P', 'ফ': 'PH', 'ব': 'B', 'ভ': 'BH', 'ম': 'M',
    'য': 'J', 'র': 'R', 'ল': 'L', 'শ': 'SH', 'ষ': 'SH', 'স': 'S', 'হ': 'H',
    'া': 'A', 'ি': 'I', 'ী': 'I', 'ু': 'U', 'ূ': 'U', 'ৃ': 'RI', 'ে': 'E', 'ৈ': 'OI', 'ো': 'O', 'ৌ': 'OU',
    
    // Hindi (Devanagari)
    'अ': 'A', 'आ': 'AA', 'इ': 'I', 'ई': 'II', 'उ': 'U', 'ऊ': 'UU',
    'ए': 'E', 'ऐ': 'AI', 'ओ': 'O', 'औ': 'AU',
    'क': 'K', 'ख': 'KH', 'ग': 'G', 'घ': 'GH', 'ङ': 'NG',
    'च': 'CH', 'छ': 'CHH', 'ज': 'J', 'झ': 'JH', 'ञ': 'NY',
    'ट': 'T', 'ठ': 'TH', 'ड': 'D', 'ढ': 'DH', 'ण': 'N',
    'त': 'T', 'थ': 'TH', 'द': 'D', 'ध': 'DH', 'न': 'N',
    'प': 'P', 'फ': 'PH', 'ब': 'B', 'भ': 'BH', 'म': 'M',
    'य': 'Y', 'र': 'R', 'ल': 'L', 'व': 'V',
    'श': 'SH', 'ष': 'SH', 'स': 'S', 'ह': 'H',
    
    // Chinese Pinyin approximations
    '你': 'NI', '好': 'HAO', '世': 'SHI', '界': 'JIE',
    '我': 'WO', '爱': 'AI', '中': 'ZHONG', '国': 'GUO'
};

// Reverse dictionary for Morse to Text
const textFromMorseDict = {};
for (const [key, value] of Object.entries(morseCodeDict)) {
    textFromMorseDict[value] = key;
}

// Switch between converters
function switchConverter(type) {
    // Update toggle buttons
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show/hide sections
    document.querySelectorAll('.converter-section').forEach(section => section.classList.remove('active'));
    document.getElementById(type).classList.add('active');
}

// Convert Text to Morse Code with enhanced language support
function convertToMorse() {
    const textInput = document.getElementById('textInput').value;
    const morseOutput = document.getElementById('morseOutput');
    
    if (!textInput.trim()) {
        morseOutput.textContent = 'Your encoded message will appear here...';
        return;
    }
    
    let morseCode = '';
    
    for (let char of textInput.toUpperCase()) {
        // Check if character is in language map first
        if (languageCharMap[char]) {
            const mappedChar = languageCharMap[char];
            for (let subChar of mappedChar) {
                if (morseCodeDict[subChar]) {
                    morseCode += morseCodeDict[subChar] + ' ';
                }
            }
            morseCode += ' ';
        }
        // Check standard Morse dictionary
        else if (morseCodeDict[char]) {
            morseCode += morseCodeDict[char] + ' ';
        }
        // Handle unknown characters
        else if (char !== ' ') {
            morseCode += `[${char}] `;
        } else {
            morseCode += '/ ';
        }
    }
    
    morseOutput.textContent = morseCode.trim();
}

// Convert Morse Code to Text
function convertToText() {
    const morseInput = document.getElementById('morseInput').value;
    const textOutput = document.getElementById('textOutput');
    
    if (!morseInput.trim()) {
        textOutput.textContent = 'Your decoded text will appear here...';
        return;
    }
    
    let text = '';
    const morseWords = morseInput.split('/');
    
    for (let word of morseWords) {
        const morseChars = word.trim().split(' ');
        for (let morseChar of morseChars) {
            if (morseChar && textFromMorseDict[morseChar]) {
                text += textFromMorseDict[morseChar];
            } else if (morseChar) {
                text += `[${morseChar}]`;
            }
        }
        text += ' ';
    }
    
    textOutput.textContent = text.trim();
}

// Clear functions
function clearText() {
    document.getElementById('textInput').value = '';
    document.getElementById('morseOutput').textContent = 'Your encoded message will appear here...';
}

function clearMorse() {
    document.getElementById('morseInput').value = '';
    document.getElementById('textOutput').textContent = 'Your decoded text will appear here...';
}

// Copy functions without popup alerts
function copyMorseCode() {
    const morseOutput = document.getElementById('morseOutput');
    const text = morseOutput.textContent;
    
    if (!text || text === 'Your encoded message will appear here...') {
        return;
    }
    
    copyToClipboard(text, 'morse');
}

function copyText() {
    const textOutput = document.getElementById('textOutput');
    const text = textOutput.textContent;
    
    if (!text || text === 'Your decoded text will appear here...') {
        return;
    }
    
    copyToClipboard(text, 'text');
}

function copyToClipboard(text, type) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    
    try {
        document.execCommand('copy');
        // No alert - just copy silently
        const btn = type === 'morse' ? document.querySelector('.copy-btn') : document.querySelectorAll('.copy-btn')[1];
        const originalText = btn.textContent;
        btn.textContent = '✅ COPIED!';
        
        setTimeout(() => {
            btn.textContent = originalText;
        }, 1500);
    } catch (err) {
        // Silent fail
    }
    
    document.body.removeChild(tempTextArea);
}

// Initialize
window.onload = function() {
    document.getElementById('textInput').value = '';
    document.getElementById('morseInput').value = '';
};