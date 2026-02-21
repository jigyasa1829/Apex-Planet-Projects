
const QUESTIONS = [
  { 
    q: "Which language is primarily used for web page structure?", 
    opts: ["CSS","Python","HTML","SQL"], 
    a: 2
 },
  
 { q: "What does CPU stand for?", 
  opts: ["Central Processing Unit","Computer Program Unit","Central Program Unit","Control Processing Unit"], 
  a: 0 
 },
  { 
    q: "Which one is a NoSQL database?", 
    opts: ["MySQL","PostgreSQL","MongoDB","SQLite"], 
    a: 2 
  },
  { 
    q: "Which protocol is used to browse websites?", 
    opts: ["FTP","SMTP","HTTP","SSH"], 
    a: 2 
  },
  { 
    q: "What is Git used for?", 
    opts: ["Designing UI","Version control","Running servers","Database management"], 
    a: 1 
  },
  { 
    q: "Which cloud provider is NOT one of the 'big three'?", 
    opts: ["AWS","Azure","DigitalOcean","Google Cloud"], 
    a: 2 
  },
  { 
    q: "What is the purpose of DNS?", 
    opts: ["Encrypt data","Translate domain to IP","Store files","Compress images"], 
    a: 1 
  },
  { 
    q: "Which of these is a frontend framework?", 
    opts: ["Express.js","Django","React","Flask"], 
    a: 2 
  },
  { 
    q: "What does SQL stand for?",
    opts: ["Structured Query Language","Simple Query Language","Sequential Query Language","Standard Query Logic"], 
    a: 0 
  },
  { 
    q: "Which HTTP status code means 'Not Found'?", 
    opts: ["200","301","404","500"], 
    a: 2 
  }
];

const TOTAL_TIME_SECONDS = 20 * 60; 
let currentIndex = 0;
let answers = Array(QUESTIONS.length).fill(null); 
let timerSeconds = TOTAL_TIME_SECONDS;
let timerInterval = null;
const qNumberEl = document.getElementById('qNumber');
const timerEl = document.getElementById('timer');
const questionTextEl = document.getElementById('questionText');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const restartBtn = document.getElementById('restartBtn');
const answeredEl = document.getElementById('answered');
const remainingEl = document.getElementById('remaining');
const progressFill = document.getElementById('progressFill');
const liveScoreEl = document.getElementById('liveScore');
const totalQs = QUESTIONS.length;
document.getElementById('totalQs').textContent = totalQs;
let chart = null;
const ctx = document.getElementById('resultChart').getContext('2d');

function startQuiz() {
  currentIndex = 0;
  answers = Array(totalQs).fill(null);
  timerSeconds = TOTAL_TIME_SECONDS;
  startTimer();
  renderQuestion();
  updateStats();
  loadPastAttempts();
}

function startTimer(){
  clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(()=>{
    timerSeconds--;
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      finalizeQuiz();
    }
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay(){
  const mm = String(Math.floor(timerSeconds / 60)).padStart(2,'0');
  const ss = String(timerSeconds % 60).padStart(2,'0');
  timerEl.textContent = `${mm}:${ss}`;
}

function renderQuestion(){
  const q = QUESTIONS[currentIndex];
  qNumberEl.textContent = `Q${currentIndex+1}`;
  questionTextEl.textContent = q.q;
  optionsEl.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'option';
    div.textContent = opt;
    if (answers[currentIndex] === i) div.classList.add('selected');
    div.addEventListener('click', ()=> {
      answers[currentIndex] = i;
      [...optionsEl.children].forEach(c => c.classList.remove('selected'));
      div.classList.add('selected');
      updateStats();
    });
    optionsEl.appendChild(div);
  });
  updateProgressUI();
}

function updateProgressUI(){
  const percent = ((currentIndex) / (totalQs - 1)) * 100;
  progressFill.style.width = `${percent}%`;
  answeredEl.textContent = answers.filter(a => a !== null).length;
  remainingEl.textContent = totalQs - answers.filter(a => a !== null).length;
}

function updateStats(){
  const correctCount = answers.reduce((sum, ans, idx) => sum + ((ans !== null && ans === QUESTIONS[idx].a) ? 1 : 0), 0);
  liveScoreEl.textContent = `${correctCount} / ${totalQs}`;
  updateProgressUI();
}

nextBtn.addEventListener('click', ()=>{
  if (currentIndex < totalQs - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    
    currentIndex = totalQs - 1;
  }
});

submitBtn.addEventListener('click', ()=>{
  if (!confirm('Submit quiz now?')) return;
  finalizeQuiz();
});

restartBtn.addEventListener('click', ()=>{
  if (!confirm('Restart quiz? Current answers will be cleared.')) return;
  startQuiz();
});

function finalizeQuiz(){
  clearInterval(timerInterval);
  const correct = answers.reduce((sum, ans, idx) => sum + ((ans !== null && ans === QUESTIONS[idx].a) ? 1 : 0), 0);
  const incorrect = totalQs - correct;
  saveAttempt({score: correct, time: Date.now()});
  showResultChart(correct, incorrect);
  alert(`Quiz finished!\nYour score: ${correct} / ${totalQs}`);
  updateStats();
}

function showResultChart(correct, incorrect){
  const data = [correct, incorrect];
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Correct', 'Incorrect'],
      datasets: [{
        data,
        backgroundColor: ['#10b981', '#ef4444']
      }]
    },
    options: {
      plugins: {legend:{position:'bottom'}}
    }
  });
}

function saveAttempt(record){
  try {
    const key = 'itQuizAttempts';
    const arr = JSON.parse(localStorage.getItem(key)) || [];
    arr.push(record);
    localStorage.setItem(key, JSON.stringify(arr.slice(-10))); 
    loadPastAttempts();
  } catch(e) { console.error(e) }
}

function loadPastAttempts(){
  const key = 'itQuizAttempts';
  const arr = JSON.parse(localStorage.getItem(key)) || [];
  const list = document.getElementById('pastAttempts');
  list.innerHTML = '';
  arr.forEach((r, idx) => {
    const li = document.createElement('li');
    const dt = new Date(r.time);
    li.textContent = `Attempt ${idx+1}: ${r.score} / ${totalQs} — ${dt.toLocaleString()}`;
    list.appendChild(li);
  });
 
  if (arr.length) {
    const last = arr[arr.length - 1];
    const incorrect = totalQs - last.score;
    showResultChart(last.score, incorrect);
  } else {
    if (chart) chart.destroy();
   
    showResultChart(0, totalQs);
  }
}


startQuiz();
