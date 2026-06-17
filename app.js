const PROGRESS_KEY = 'qa_progress_v1';
const THEME_KEY = 'qa_theme';

const state = {
  category: 'all',
  search: '',
  mode: 'list',
  quizQueue: [],
  quizIndex: 0,
  quizShowAnswer: false,
  onlyReview: false,
};

let progress = loadProgress();

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function appendMultiline(container, text, className) {
  const p = document.createElement('p');
  p.className = className;
  const lines = text.split('\n');
  lines.forEach((line, i) => {
    p.appendChild(document.createTextNode(line));
    if (i < lines.length - 1) p.appendChild(document.createElement('br'));
  });
  container.appendChild(p);
}

function filteredData() {
  return QA_DATA.filter((q) => {
    if (state.category !== 'all' && q.category !== state.category) return false;
    if (state.search) {
      const s = state.search.toLowerCase();
      if (!q.question.toLowerCase().includes(s) && !q.answer.toLowerCase().includes(s)) return false;
    }
    return true;
  });
}

function renderCategoryTabs() {
  const wrap = document.getElementById('categoryTabs');
  const counts = {};
  QA_DATA.forEach((q) => (counts[q.category] = (counts[q.category] || 0) + 1));
  const buttons = [{ key: 'all', label: `Tümü (${QA_DATA.length})` }].concat(
    Object.keys(CATEGORIES).map((key) => ({
      key,
      label: `${CATEGORIES[key].short} (${counts[key] || 0})`,
    }))
  );
  wrap.innerHTML = '';
  buttons.forEach((b) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (b.key === state.category ? ' active' : '');
    btn.textContent = b.label;
    btn.dataset.key = b.key;
    btn.addEventListener('click', () => {
      state.category = b.key;
      [...wrap.children].forEach((c) => c.classList.toggle('active', c.dataset.key === b.key));
      renderList();
      if (state.mode === 'quiz') startQuiz();
    });
    wrap.appendChild(btn);
  });
}

function renderList() {
  const list = filteredData();
  const container = document.getElementById('questionList');
  container.innerHTML = '';
  document.getElementById('resultCount').textContent = `${list.length} soru`;

  if (list.length === 0) {
    container.innerHTML = '<p class="empty-state">Aramanızla eşleşen soru bulunamadı.</p>';
    return;
  }

  list.forEach((q) => {
    const card = document.createElement('div');
    card.className = 'q-card';

    const head = document.createElement('button');
    head.className = 'q-card-head';
    head.setAttribute('aria-expanded', 'false');

    const badge = document.createElement('span');
    badge.className = `badge badge-${q.category}`;
    badge.textContent = CATEGORIES[q.category].short;

    const num = document.createElement('span');
    num.className = 'q-number';
    num.textContent = `#${q.number}`;

    const qText = document.createElement('span');
    qText.className = 'q-text';
    qText.textContent = q.question;

    head.appendChild(badge);
    head.appendChild(num);
    head.appendChild(qText);

    const status = progress[q.id];
    if (status) {
      const dot = document.createElement('span');
      dot.className = `status-dot status-${status}`;
      dot.title = status === 'bilindi' ? 'Bildim' : 'Tekrar et';
      head.appendChild(dot);
    }

    const chevron = document.createElement('span');
    chevron.className = 'chevron';
    chevron.textContent = '▾';
    head.appendChild(chevron);

    const body = document.createElement('div');
    body.className = 'q-card-body hidden';
    appendMultiline(body, q.answer, 'answer-text');

    head.addEventListener('click', () => {
      const expanded = head.getAttribute('aria-expanded') === 'true';
      head.setAttribute('aria-expanded', String(!expanded));
      body.classList.toggle('hidden', expanded);
      card.classList.toggle('open', !expanded);
    });

    card.appendChild(head);
    card.appendChild(body);
    container.appendChild(card);
  });
}

function startQuiz() {
  let pool = filteredData();
  if (state.onlyReview) {
    pool = pool.filter((q) => progress[q.id] === 'tekrar' || !progress[q.id]);
  }
  state.quizQueue = shuffle(pool.map((q) => q.id));
  state.quizIndex = 0;
  state.quizShowAnswer = false;
  renderQuiz();
}

function renderQuiz() {
  const wrap = document.getElementById('quizCardWrap');
  wrap.innerHTML = '';
  updateQuizStats();

  if (state.quizQueue.length === 0) {
    wrap.innerHTML = '<p class="empty-state">Bu filtreyle gösterilecek soru yok.</p>';
    return;
  }

  if (state.quizIndex >= state.quizQueue.length) {
    renderQuizSummary(wrap);
    return;
  }

  const q = QA_DATA.find((x) => x.id === state.quizQueue[state.quizIndex]);

  const card = document.createElement('div');
  card.className = 'quiz-card';

  const progressEl = document.createElement('div');
  progressEl.className = 'quiz-progress';
  progressEl.textContent = `Soru ${state.quizIndex + 1} / ${state.quizQueue.length}`;

  const badge = document.createElement('span');
  badge.className = `badge badge-${q.category}`;
  badge.style.alignSelf = 'flex-start';
  badge.textContent = CATEGORIES[q.category].short;

  const questionEl = document.createElement('h2');
  questionEl.className = 'quiz-question';
  questionEl.textContent = q.question;

  const answerEl = document.createElement('div');
  answerEl.className = 'quiz-answer hidden';
  appendMultiline(answerEl, q.answer, 'answer-text');

  const actions = document.createElement('div');
  actions.className = 'quiz-actions';

  if (!state.quizShowAnswer) {
    const showBtn = document.createElement('button');
    showBtn.className = 'btn-primary';
    showBtn.textContent = 'Cevabı Göster';
    showBtn.addEventListener('click', () => {
      state.quizShowAnswer = true;
      renderQuiz();
    });
    actions.appendChild(showBtn);
  } else {
    answerEl.classList.remove('hidden');

    const knewBtn = document.createElement('button');
    knewBtn.className = 'btn-success';
    knewBtn.textContent = '✓ Bildim';
    knewBtn.addEventListener('click', () => answerQuestion(q.id, 'bilindi'));

    const reviewBtn = document.createElement('button');
    reviewBtn.className = 'btn-warning';
    reviewBtn.textContent = '↻ Tekrar Et';
    reviewBtn.addEventListener('click', () => answerQuestion(q.id, 'tekrar'));

    actions.appendChild(knewBtn);
    actions.appendChild(reviewBtn);
  }

  card.appendChild(progressEl);
  card.appendChild(badge);
  card.appendChild(questionEl);
  card.appendChild(answerEl);
  card.appendChild(actions);
  wrap.appendChild(card);
}

function answerQuestion(id, status) {
  progress[id] = status;
  saveProgress();
  state.quizIndex++;
  state.quizShowAnswer = false;
  renderQuiz();
}

function renderQuizSummary(wrap) {
  const total = state.quizQueue.length;
  const known = state.quizQueue.filter((id) => progress[id] === 'bilindi').length;
  const review = total - known;

  const summary = document.createElement('div');
  summary.className = 'quiz-summary';

  const h2 = document.createElement('h2');
  h2.textContent = 'Tamamlandı 🎉';

  const p = document.createElement('p');
  p.innerHTML = `${total} sorudan <strong>${known}</strong> tanesini bildiniz, <strong>${review}</strong> tanesini tekrar etmeniz gerekiyor.`;

  const restartBtn = document.createElement('button');
  restartBtn.className = 'btn-primary';
  restartBtn.textContent = 'Yeniden Başla';
  restartBtn.addEventListener('click', startQuiz);

  summary.appendChild(h2);
  summary.appendChild(p);
  summary.appendChild(restartBtn);
  wrap.appendChild(summary);
}

function updateQuizStats() {
  const el = document.getElementById('quizStats');
  const allIds = QA_DATA.map((q) => q.id);
  const known = allIds.filter((id) => progress[id] === 'bilindi').length;
  const review = allIds.filter((id) => progress[id] === 'tekrar').length;
  el.textContent = `Genel: ✓ ${known} bilindi · ↻ ${review} tekrar · ${QA_DATA.length - known - review} çalışılmadı`;
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  document.getElementById('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  setTheme(isDark ? 'light' : 'dark');
}

function bindEvents() {
  document.getElementById('searchInput').addEventListener('input', (e) => {
    state.search = e.target.value;
    renderList();
  });

  document.querySelectorAll('.mode-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.mode = btn.dataset.mode;
      document.querySelectorAll('.mode-btn').forEach((b) => b.classList.toggle('active', b === btn));
      document.getElementById('listView').classList.toggle('hidden', state.mode !== 'list');
      document.getElementById('quizView').classList.toggle('hidden', state.mode !== 'quiz');
      if (state.mode === 'quiz' && state.quizQueue.length === 0) startQuiz();
    });
  });

  document.getElementById('restartQuiz').addEventListener('click', startQuiz);

  document.getElementById('onlyReviewToggle').addEventListener('change', (e) => {
    state.onlyReview = e.target.checked;
    startQuiz();
  });

  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
}

function initTheme() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem(THEME_KEY) || (prefersDark ? 'dark' : 'light');
  setTheme(saved);
}

function init() {
  initTheme();
  renderCategoryTabs();
  bindEvents();
  renderList();
  document.getElementById('totalCount').textContent = QA_DATA.length;
}

document.addEventListener('DOMContentLoaded', init);
