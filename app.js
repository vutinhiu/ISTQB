// ============================================================
// ISTQB Quiz App - Final v10
// Features: Random/Exam/Review, EN-VI Toggle, No Shuffle in Exam+Review mode
// ============================================================

let currentQuestions = [];
let currentIndex = 0;
let correctCount = 0;
let totalQuiz = 0;
let answered = false;
let currentMode = 'random'; // 'random' | 'exam' | 'review'
let currentExamNum = null;
let currentLang = 'en';
const QUESTIONS_PER_EXAM = 10;

// Load wrong questions from localStorage
let wrongQuestions = JSON.parse(localStorage.getItem('wrongQuestions') || '[]');

// Shuffle array helper
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// UI helpers
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function safeSetText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// ===========================
// Language Toggle
// ===========================
function toggleLang() {
  currentLang = currentLang === 'en' ? 'vi' : 'en';
  updateLangButton();
  refreshQuestion();
}
function updateLangButton() {
  const btn = document.getElementById('btn-lang');
  if (!btn) return;
  btn.textContent = currentLang === 'vi' ? '🇬🇧 English' : '🇻🇳 Tiếng Việt';
}

function getQuestion(q) {
  return currentLang === 'vi' && q.question_vi ? q.question_vi : q.question;
}
function getOptions(q) {
  const optsObj = (currentLang === 'vi' && q.options_vi) ? q.options_vi : q.options;
  return Object.entries(optsObj).map(([k, v]) => `${k}. ${v}`);
}
function getExplanation(q) {
  return (currentLang === 'vi' && q.explanation_vi) ? q.explanation_vi : (q.explanation || `Đáp án đúng: ${q.answer}`);
}

// ===========================
// Tab Switcher
// ===========================
function switchTab(el, tab) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
}

// ===========================
// Init Exam Grid
// ===========================
function initExamGrid() {
  const totalExams = Math.ceil(questions.length / QUESTIONS_PER_EXAM);
  const grid = document.getElementById('exam-grid');
  if (!grid) return;
  grid.innerHTML = '';
  for (let i = 1; i <= totalExams; i++) {
    const from = (i - 1) * QUESTIONS_PER_EXAM + 1;
    const to = Math.min(i * QUESTIONS_PER_EXAM, questions.length);
    const bestScore = localStorage.getItem(`exam_best_${i}`);
    const badge = bestScore
      ? `<span class="exam-badge done">${bestScore}%</span>`
      : `<span class="exam-badge new">Mới</span>`;
    const btn = document.createElement('button');
    btn.className = 'btn-exam';
    btn.innerHTML = `
      <div class="exam-top"><span class="exam-num">Đề ${i}</span>${badge}</div>
      <div class="exam-range">Câu ${from} – ${to}</div>`;
    btn.onclick = () => startQuiz('exam', i);
    grid.appendChild(btn);
  }
}

// ===========================
// Start Quiz
// ===========================
function startQuiz(mode, value) {
  currentMode = mode;
  currentIndex = 0;
  correctCount = 0;
  currentLang = 'en';

  if (mode === 'random') {
    currentQuestions = shuffleArray(questions).slice(0, value);
    totalQuiz = value;
    document.getElementById('quiz-mode-label').textContent = `🔀 ${value} câu ngẫu nhiên`;
  } else if (mode === 'exam') {
    currentExamNum = value;
    const from = (value - 1) * QUESTIONS_PER_EXAM;
    const to = value * QUESTIONS_PER_EXAM;
    currentQuestions = questions.slice(from, to);
    totalQuiz = currentQuestions.length;
    document.getElementById('quiz-mode-label').textContent = `📋 Đề ${value}`;
  } else if (mode === 'review') {
    if (wrongQuestions.length === 0) {
      alert('Bạn chưa có câu sai nào để ôn tập!');
      return;
    }
    currentQuestions = shuffleArray([...wrongQuestions]);
    totalQuiz = currentQuestions.length;
    document.getElementById('quiz-mode-label').textContent = `🔁 Ôn tập sai (${totalQuiz} câu)`;
  }

  updateLangButton();
  showScreen('screen-quiz');
  loadQuestion();
}

// ===========================
// Load Question
// ===========================
function loadQuestion() {
  answered = false;
  const q = currentQuestions[currentIndex];
  if (!q) { showResult(); return; }

  const progress = (currentIndex / totalQuiz) * 100;
  safeSetText('q-current', currentIndex + 1);
  safeSetText('q-total', totalQuiz);
  safeSetText('q-number', `Câu ${currentIndex + 1}`);
  safeSetText('q-text', getQuestion(q));
  safeSetText('score-live', correctCount);

  const progressFill = document.getElementById('progress-fill');
  if (progressFill) progressFill.style.width = progress + '%';

  const expBox = document.getElementById('explanation-box');
  expBox.style.display = 'none';

  renderOptions(q);

  // Animation fade-in cho câu hỏi
  const qText = document.getElementById('q-text');
  qText.classList.add('fade-in');
  setTimeout(() => qText.classList.remove('fade-in'), 400);
}

function renderOptions(q) {
  const optList = document.getElementById('options-list');
  optList.innerHTML = '';

  // Giữ thứ tự hiển thị ổn định: chỉ random ở random mode và chỉ khi load lần đầu
  if (!q.shuffledOptions) {
    const opts = getOptions(q);
    q.shuffledOptions = (currentMode === 'random') ? shuffleArray(opts) : opts;
  }

  q.shuffledOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'btn-option-quiz fade-in';
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(btn, opt, q.answer, getExplanation(q));
    optList.appendChild(btn);
  });
}

function refreshQuestion() {
  const q = currentQuestions[currentIndex];
  if (!q) return;

  safeSetText('q-text', getQuestion(q));

  // Update các options dựa trên thứ tự đã lưu, chỉ đổi text theo ngôn ngữ
  const optList = document.getElementById('options-list');
  const textObj = (currentLang === 'vi' && q.options_vi) ? q.options_vi : q.options;

  if (!answered) {
    optList.innerHTML = '';
    q.shuffledOptions.forEach(opt => {
      const key = opt.charAt(0); // A/B/C/D
      const newText = `${key}. ${textObj[key]}`;
      const btn = document.createElement('button');
      btn.className = 'btn-option-quiz';
      btn.textContent = newText;
      btn.onclick = () => selectAnswer(btn, newText, q.answer, getExplanation(q));
      optList.appendChild(btn);
    });
  } else {
    // Nếu đã trả lời → chỉ update text
    const buttons = optList.querySelectorAll('.btn-option-quiz');
    buttons.forEach(btn => {
      const key = btn.textContent.trim().charAt(0);
      btn.textContent = `${key}. ${textObj[key]}`;
    });
    safeSetText('exp-text', getExplanation(q));
  }
}

// ===========================
// Select Answer
// ===========================
function selectAnswer(btn, selected, correctKey, explanation) {
  if (answered) return;
  answered = true;
  const q = currentQuestions[currentIndex];
  const isCorrect = selected.trim().startsWith(correctKey.trim());

  document.querySelectorAll('.btn-option-quiz').forEach(b => {
    const bCorrect = b.textContent.trim().startsWith(correctKey);
    if (bCorrect) b.classList.add('correct');
    else b.classList.add('wrong-dim');
    b.disabled = true;
  });

  if (isCorrect) {
    btn.classList.add('correct');
    correctCount++;
    if (currentMode === 'review') {
      wrongQuestions = wrongQuestions.filter(item => item.id !== q.id);
      localStorage.setItem('wrongQuestions', JSON.stringify(wrongQuestions));
    }
  } else {
    btn.classList.add('wrong', 'shake');
    setTimeout(() => btn.classList.remove('shake'), 400);
    if (!wrongQuestions.find(item => item.id === q.id)) {
      wrongQuestions.push(q);
      localStorage.setItem('wrongQuestions', JSON.stringify(wrongQuestions));
    }
  }

  const expBox = document.getElementById('explanation-box');
  safeSetText('exp-icon', isCorrect ? '✅ Chính xác!' : '❌ Sai rồi!');
  safeSetText('exp-text', explanation);
  expBox.className = 'explanation-box ' + (isCorrect ? 'correct' : 'wrong');
  expBox.style.display = 'flex';
  updateReviewUI();
}

// ===========================
// Next & Result
// ===========================
function nextQuestion() {
  currentIndex++;
  currentIndex >= totalQuiz ? showResult() : loadQuestion();
}

function showResult() {
  const pct = Math.round((correctCount / totalQuiz) * 100);
  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚';
  const msg = pct >= 80 ? 'Xuất sắc!' : pct >= 60 ? 'Khá tốt!' : 'Cần ôn thêm!';
  safeSetText('result-mode', currentMode === 'review' ? '🔁 Ôn tập sai' :
    currentMode === 'exam' ? `📋 Đề ${currentExamNum}` : `🔀 ${totalQuiz} câu`);
  safeSetText('result-emoji', emoji);
  safeSetText('result-score', pct + '%');
  safeSetText('result-detail', `${correctCount}/${totalQuiz} câu đúng`);
  safeSetText('result-message', msg);

  if (currentMode === 'exam' && currentExamNum) {
    const prev = parseInt(localStorage.getItem(`exam_best_${currentExamNum}`) || '0');
    if (pct > prev) localStorage.setItem(`exam_best_${currentExamNum}`, pct);
  }

  const prevBest = parseInt(localStorage.getItem('bestScore') || '0');
  if (pct > prevBest) localStorage.setItem('bestScore', pct);
  localStorage.setItem('totalAnswered',
    parseInt(localStorage.getItem('totalAnswered') || '0') + totalQuiz);

  showScreen('screen-result');
}

// ===========================
// Review logic
// ===========================
function startReview() {
  if (wrongQuestions.length === 0) {
    alert('Bạn chưa có câu nào để ôn tập!');
    return;
  }
  startQuiz('review');
}
function clearWrongQuestions() {
  if (confirm('Xóa toàn bộ danh sách ôn tập?')) {
    wrongQuestions = [];
    localStorage.removeItem('wrongQuestions');
    updateReviewUI();
  }
}
function updateReviewUI() {
  const countEl = document.getElementById('review-count');
  if (!countEl) return;
  if (wrongQuestions.length === 0) {
    countEl.textContent = 'Bạn chưa có câu nào trong danh sách ôn tập';
  } else {
    countEl.textContent = `Hiện có ${wrongQuestions.length} câu trong danh sách ôn tập`;
  }
}

// ===========================
// Navigation + Stats
// ===========================
function retryQuiz() { startQuiz(currentMode, currentExamNum || totalQuiz); }
function goHome() {
  showScreen('screen-home');
  updateStats();
  initExamGrid();
  updateReviewUI();
}
function updateStats() {
  safeSetText('total-answered', localStorage.getItem('totalAnswered') || 0);
  safeSetText('best-score', (localStorage.getItem('bestScore') || 0) + '%');
}

// ===========================
// Init App
// ===========================
updateStats();
initExamGrid();
updateReviewUI();
