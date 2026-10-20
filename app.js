/**
 * CBT Practice Examination Platform Core Application Logic
 * Configured with a reliable 15-minute persistent timer and robust state management.
 */

// Global Application State Object
const examState = {
  candidateName: "John Doe",
  registrationNumber: "2026CBT001234",
  examTitle: "Nigerian CBT Mock Examination",
  currentSubject: "English",
  currentQuestionIndex: 0,
  answers: {}, // Key: "Subject_QuestionIndex", Value: "A" | "B" | "C" | "D"
  flagged: {}, // Key: "Subject_QuestionIndex", Value: boolean
  totalDurationSeconds: 15 * 60, // Exactly 15 Minutes (900 seconds)
  remainingSeconds: 15 * 60,
  timerInterval: null,
  submitted: false,
  startTime: null,
  endTime: null,
  warnedMilestones: {
    10: false,
    5: false,
    4: false,
    3: false,
    2: false,
    1: false
  }
};

// DOM Elements Cache
const elements = {
  screenWelcome: document.getElementById("screen-welcome"),
  screenExam: document.getElementById("screen-exam"),
  screenResult: document.getElementById("screen-result"),
  screenReview: document.getElementById("screen-review"),

  modalInstructions: document.getElementById("modal-instructions"),
  modalConfirmSubmit: document.getElementById("modal-confirm-submit"),
  modalCalc: document.getElementById("modal-calc"),

  formLogin: document.getElementById("form-login"),
  inputCandidateName: document.getElementById("input-candidate-name"),
  inputRegNum: document.getElementById("input-reg-num"),
  btnBeginExam: document.getElementById("btn-begin-exam"),
  btnCancelInstructions: document.getElementById("btn-cancel-instructions"),

  hdrCandidateReg: document.getElementById("hdr-candidate-reg"),
  timerDisplay: document.getElementById("timer-display"),
  timerBadge: document.getElementById("timer-badge"),
  subjectTabsContainer: document.getElementById("subject-tabs-container"),
  btnOpenCalc: document.getElementById("btn-open-calc"),
  btnCloseCalc: document.getElementById("btn-close-calc"),
  btnSubmitExam: document.getElementById("btn-submit-exam"),

  lblSubjectName: document.getElementById("lbl-subject-name"),
  lblQuestionNumber: document.getElementById("lbl-question-number"),
  badgeQuestionStatus: document.getElementById("badge-question-status"),
  questionText: document.getElementById("question-text"),
  optionsContainer: document.getElementById("options-container"),

  btnPrevQ: document.getElementById("btn-prev-q"),
  btnNextQ: document.getElementById("btn-next-q"),
  btnFlagQ: document.getElementById("btn-flag-q"),
  btnFlagText: document.getElementById("btn-flag-text"),

  sidebarCandidateName: document.getElementById("sidebar-candidate-name"),
  sidebarCandidateReg: document.getElementById("sidebar-candidate-reg"),
  sidebarProgressText: document.getElementById("sidebar-progress-text"),
  sidebarProgressBar: document.getElementById("sidebar-progress-bar"),
  sidebarCountAnswered: document.getElementById("sidebar-count-answered"),
  sidebarCountUnanswered: document.getElementById("sidebar-count-unanswered"),
  sidebarCountFlagged: document.getElementById("sidebar-count-flagged"),
  questionGrid: document.getElementById("question-grid"),

  confirmCountAnswered: document.getElementById("confirm-count-answered"),
  confirmCountUnanswered: document.getElementById("confirm-count-unanswered"),
  confirmCountFlagged: document.getElementById("confirm-count-flagged"),
  confirmUnansweredWarning: document.getElementById("confirm-unanswered-warning"),
  btnCancelSubmit: document.getElementById("btn-cancel-submit"),
  btnFinalSubmit: document.getElementById("btn-final-submit"),

  resCandidateName: document.getElementById("res-candidate-name"),
  resCandidateReg: document.getElementById("res-candidate-reg"),
  resTimeUsed: document.getElementById("res-time-used"),
  resTotalScore: document.getElementById("res-total-score"),
  resPercentage: document.getElementById("res-percentage"),
  resCorrect: document.getElementById("res-correct"),
  resWrong: document.getElementById("res-wrong"),
  resSubjectBreakdown: document.getElementById("res-subject-breakdown"),
  btnReviewAnswers: document.getElementById("btn-review-answers"),
  btnRestartExam: document.getElementById("btn-restart-exam"),

  btnBackToResults: document.getElementById("btn-back-to-results"),
  reviewSubjectTabs: document.getElementById("review-subject-tabs"),
  reviewQuestionsList: document.getElementById("review-questions-list"),

  calcDisplay: document.getElementById("calc-display")
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  setupCalculator();
});

function setupEventListeners() {
  elements.formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    examState.candidateName = elements.inputCandidateName.value.trim() || "John Doe";
    examState.registrationNumber = elements.inputRegNum.value.trim() || "2026CBT001234";
    elements.modalInstructions.classList.remove("hidden");
  });

  elements.btnCancelInstructions.addEventListener("click", () => {
    elements.modalInstructions.classList.add("hidden");
  });

  elements.btnBeginExam.addEventListener("click", () => {
    elements.modalInstructions.classList.add("hidden");
    startExamination();
  });

  elements.btnPrevQ.addEventListener("click", navigatePrevious);
  elements.btnNextQ.addEventListener("click", navigateNext);
  elements.btnFlagQ.addEventListener("click", toggleFlagCurrentQuestion);

  elements.btnSubmitExam.addEventListener("click", openSubmitModal);
  elements.btnCancelSubmit.addEventListener("click", () => {
    elements.modalConfirmSubmit.classList.add("hidden");
  });
  elements.btnFinalSubmit.addEventListener("click", () => {
    elements.modalConfirmSubmit.classList.add("hidden");
    finalizeExamination();
  });

  elements.btnOpenCalc.addEventListener("click", () => {
    elements.modalCalc.classList.toggle("hidden");
  });
  elements.btnCloseCalc.addEventListener("click", () => {
    elements.modalCalc.classList.add("hidden");
  });

  elements.btnReviewAnswers.addEventListener("click", showReviewScreen);
  elements.btnBackToResults.addEventListener("click", () => {
    elements.screenReview.classList.add("hidden");
    elements.screenResult.classList.remove("hidden");
  });
  elements.btnRestartExam.addEventListener("click", () => {
    window.location.reload();
  });

  document.addEventListener("keydown", handleGlobalShortcuts);
}

// Start Examination Flow
function startExamination() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }

  elements.hdrCandidateReg.textContent = `REG: ${examState.registrationNumber}`;
  elements.sidebarCandidateName.textContent = examState.candidateName.toUpperCase();
  elements.sidebarCandidateReg.textContent = examState.registrationNumber;

  elements.screenWelcome.classList.add("hidden");
  elements.screenExam.classList.remove("hidden");

  examState.startTime = new Date();

  renderSubjectTabs();
  loadQuestionView();
  startTimer();
}

// Reliable Countdown Timer Logic (15 Mins)
function startTimer() {
  updateTimerUI();

  if (examState.timerInterval) {
    clearInterval(examState.timerInterval);
  }

  examState.timerInterval = setInterval(() => {
    if (examState.remainingSeconds > 0) {
      examState.remainingSeconds--;
      updateTimerUI();
      checkTimeMilestones(examState.remainingSeconds);
    }

    if (examState.remainingSeconds <= 0) {
      clearInterval(examState.timerInterval);
      examState.remainingSeconds = 0;
      updateTimerUI();
      alert("TIME UP! Your examination will now be automatically submitted.");
      finalizeExamination();
    }
  }, 1000);
}

// Milestone alerts for 10, 5, 4, 3, 2, 1 minutes remaining
function checkTimeMilestones(secondsLeft) {
  const minsLeft = Math.floor(secondsLeft / 60);
  const exactSecs = secondsLeft % 60;

  if (exactSecs === 0 && [10, 5, 4, 3, 2, 1].includes(minsLeft)) {
    if (!examState.warnedMilestones[minsLeft]) {
      examState.warnedMilestones[minsLeft] = true;
      console.warn(`CBT Practice Notice: You have ${minsLeft} minute(s) remaining.`);
    }
  }
}

function updateTimerUI() {
  const hours = Math.floor(examState.remainingSeconds / 3600);
  const minutes = Math.floor((examState.remainingSeconds % 3600) / 60);
  const seconds = examState.remainingSeconds % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  elements.timerDisplay.textContent = formattedTime;

  // Visual Styling Updates
  if (examState.remainingSeconds <= 180) { // <= 3 minutes: Critical pulsing red
    elements.timerBadge.className = "px-3 py-1 text-white font-mono font-bold text-sm rounded border timer-critical flex items-center space-x-2";
  } else if (examState.remainingSeconds <= 300) { // <= 5 minutes: Warning amber
    elements.timerBadge.className = "px-3 py-1 font-mono font-bold text-sm rounded border timer-warning flex items-center space-x-2";
  } else {
    elements.timerBadge.className = "px-3 py-1 bg-slate-900 text-emerald-400 font-mono font-bold text-sm rounded border border-slate-700 flex items-center space-x-2";
  }
}

// Render Subject Tabs
function renderSubjectTabs() {
  elements.subjectTabsContainer.innerHTML = "";
  const subjects = Object.keys(examData);

  subjects.forEach((subject) => {
    const isSelected = subject === examState.currentSubject;
    const btn = document.createElement("button");
    btn.className = `px-4 py-2.5 font-bold uppercase whitespace-nowrap border-b-2 transition duration-150 ${
      isSelected
        ? "bg-blue-800 text-amber-400 border-amber-400"
        : "text-slate-300 hover:bg-blue-800/50 hover:text-white border-transparent"
    }`;
    btn.textContent = subject;
    btn.addEventListener("click", () => {
      examState.currentSubject = subject;
      examState.currentQuestionIndex = 0;
      renderSubjectTabs();
      loadQuestionView();
    });
    elements.subjectTabsContainer.appendChild(btn);
  });
}

// Load Question View
function loadQuestionView() {
  const questions = examData[examState.currentSubject];
  const q = questions[examState.currentQuestionIndex];
  const key = `${examState.currentSubject}_${examState.currentQuestionIndex}`;

  elements.lblSubjectName.textContent = examState.currentSubject;
  elements.lblQuestionNumber.textContent = `Question ${examState.currentQuestionIndex + 1} of ${questions.length}`;
  elements.questionText.innerHTML = `<p>${q.question}</p>`;

  elements.optionsContainer.innerHTML = "";
  const currentAnswer = examState.answers[key];

  Object.entries(q.options).forEach(([optKey, optVal]) => {
    const isSelected = currentAnswer === optKey;
    const row = document.createElement("label");
    row.className = `flex items-center p-3.5 rounded-lg border cursor-pointer transition duration-150 ${
      isSelected
        ? "bg-blue-50 border-blue-600 ring-2 ring-blue-600/30 text-blue-950 font-semibold"
        : "bg-white border-slate-300 hover:bg-slate-50 text-slate-800"
    }`;

    row.innerHTML = `
      <input type="radio" name="cbt-option" value="${optKey}" ${isSelected ? "checked" : ""} class="hidden">
      <span class="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs mr-3 flex-none ${
        isSelected ? "bg-blue-900 text-white" : "bg-slate-200 text-slate-700"
      }">${optKey}</span>
      <span class="text-sm flex-1 leading-snug">${optVal}</span>
    `;

    row.addEventListener("click", () => {
      selectOption(optKey);
    });

    elements.optionsContainer.appendChild(row);
  });

  const isFlagged = Boolean(examState.flagged[key]);
  if (isFlagged) {
    elements.btnFlagQ.className = "px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white border border-amber-600 rounded font-semibold text-xs uppercase flex items-center space-x-1.5 transition";
    elements.btnFlagText.innerHTML = `Flagged <kbd class="hidden sm:inline-block ml-1 opacity-80 font-mono">(R)</kbd>`;
  } else {
    elements.btnFlagQ.className = "px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 rounded font-semibold text-xs uppercase flex items-center space-x-1.5 transition";
    elements.btnFlagText.innerHTML = `Flag for Review <kbd class="hidden sm:inline-block ml-1 opacity-60 font-mono">(R)</kbd>`;
  }

  if (currentAnswer) {
    elements.badgeQuestionStatus.textContent = "Answered";
    elements.badgeQuestionStatus.className = "text-xs px-2.5 py-1 rounded-full font-semibold bg-emerald-100 text-emerald-800";
  } else {
    elements.badgeQuestionStatus.textContent = "Unanswered";
    elements.badgeQuestionStatus.className = "text-xs px-2.5 py-1 rounded-full font-semibold bg-slate-200 text-slate-700";
  }

  renderQuestionGrid();
  updateSidebarStats();
}

function selectOption(optionKey) {
  const key = `${examState.currentSubject}_${examState.currentQuestionIndex}`;
  examState.answers[key] = optionKey;
  loadQuestionView();
}

function toggleFlagCurrentQuestion() {
  const key = `${examState.currentSubject}_${examState.currentQuestionIndex}`;
  examState.flagged[key] = !examState.flagged[key];
  loadQuestionView();
}

function navigateNext() {
  const questions = examData[examState.currentSubject];
  if (examState.currentQuestionIndex < questions.length - 1) {
    examState.currentQuestionIndex++;
    loadQuestionView();
  } else {
    const subjects = Object.keys(examData);
    const currSubIdx = subjects.indexOf(examState.currentSubject);
    if (currSubIdx < subjects.length - 1) {
      examState.currentSubject = subjects[currSubIdx + 1];
      examState.currentQuestionIndex = 0;
      renderSubjectTabs();
      loadQuestionView();
    }
  }
}

function navigatePrevious() {
  if (examState.currentQuestionIndex > 0) {
    examState.currentQuestionIndex--;
    loadQuestionView();
  } else {
    const subjects = Object.keys(examData);
    const currSubIdx = subjects.indexOf(examState.currentSubject);
    if (currSubIdx > 0) {
      examState.currentSubject = subjects[currSubIdx - 1];
      examState.currentQuestionIndex = examData[examState.currentSubject].length - 1;
      renderSubjectTabs();
      loadQuestionView();
    }
  }
}

function renderQuestionGrid() {
  elements.questionGrid.innerHTML = "";
  const questions = examData[examState.currentSubject];

  questions.forEach((_, idx) => {
    const key = `${examState.currentSubject}_${idx}`;
    const isAnswered = Boolean(examState.answers[key]);
    const isCurrent = idx === examState.currentQuestionIndex;
    const isFlagged = Boolean(examState.flagged[key]);

    const btn = document.createElement("button");
    btn.textContent = idx + 1;

    let bgClasses = "bg-slate-200 text-slate-700 hover:bg-slate-300 border-slate-300";
    if (isCurrent) {
      bgClasses = "bg-blue-600 text-white font-bold ring-2 ring-blue-400 border-blue-600 z-10";
    } else if (isFlagged) {
      bgClasses = "bg-amber-400 text-slate-900 font-bold border-amber-500";
    } else if (isAnswered) {
      bgClasses = "bg-emerald-600 text-white font-semibold border-emerald-700";
    }

    btn.className = `h-8 rounded text-xs border flex items-center justify-center transition duration-100 ${bgClasses}`;

    btn.addEventListener("click", () => {
      examState.currentQuestionIndex = idx;
      loadQuestionView();
    });

    elements.questionGrid.appendChild(btn);
  });
}

function updateSidebarStats() {
  const currentQuestions = examData[examState.currentSubject];
  let answeredCount = 0;
  let flaggedCount = 0;

  currentQuestions.forEach((_, idx) => {
    const key = `${examState.currentSubject}_${idx}`;
    if (examState.answers[key]) answeredCount++;
    if (examState.flagged[key]) flaggedCount++;
  });

  const total = currentQuestions.length;
  const unansweredCount = total - answeredCount;

  elements.sidebarProgressText.textContent = `${answeredCount} / ${total}`;
  elements.sidebarProgressBar.style.width = `${(answeredCount / total) * 100}%`;

  elements.sidebarCountAnswered.textContent = answeredCount;
  elements.sidebarCountUnanswered.textContent = unansweredCount;
  elements.sidebarCountFlagged.textContent = flaggedCount;
}

function calculateGlobalTotals() {
  let totalQuestions = 0;
  let totalAnswered = 0;
  let totalFlagged = 0;

  Object.keys(examData).forEach((subject) => {
    examData[subject].forEach((_, idx) => {
      totalQuestions++;
      const key = `${subject}_${idx}`;
      if (examState.answers[key]) totalAnswered++;
      if (examState.flagged[key]) totalFlagged++;
    });
  });

  return {
    totalQuestions,
    totalAnswered,
    totalUnanswered: totalQuestions - totalAnswered,
    totalFlagged
  };
}

function openSubmitModal() {
  const totals = calculateGlobalTotals();

  elements.confirmCountAnswered.textContent = totals.totalAnswered;
  elements.confirmCountUnanswered.textContent = totals.totalUnanswered;
  elements.confirmCountFlagged.textContent = totals.totalFlagged;

  if (totals.totalUnanswered > 0) {
    elements.confirmUnansweredWarning.classList.remove("hidden");
  } else {
    elements.confirmUnansweredWarning.classList.add("hidden");
  }

  elements.modalConfirmSubmit.classList.remove("hidden");
}

function finalizeExamination() {
  if (examState.submitted) return;
  examState.submitted = true;
  examState.endTime = new Date();

  if (examState.timerInterval) {
    clearInterval(examState.timerInterval);
  }

  elements.screenExam.classList.add("hidden");
  elements.modalConfirmSubmit.classList.add("hidden");
  elements.modalCalc.classList.add("hidden");

  let grandTotalQuestions = 0;
  let grandCorrectCount = 0;
  const subjectScores = {};

  Object.keys(examData).forEach((subject) => {
    let subCorrect = 0;
    const subQuestions = examData[subject];

    subQuestions.forEach((q, idx) => {
      grandTotalQuestions++;
      const key = `${subject}_${idx}`;
      const userAns = examState.answers[key];

      if (userAns === q.answer) {
        subCorrect++;
      }
    });

    subjectScores[subject] = {
      correct: subCorrect,
      total: subQuestions.length
    };

    grandCorrectCount += subCorrect;
  });

  const timeUsedSeconds = Math.max(0, examState.totalDurationSeconds - examState.remainingSeconds);
  const hrs = Math.floor(timeUsedSeconds / 3600);
  const mins = Math.floor((timeUsedSeconds % 3600) / 60);
  const secs = timeUsedSeconds % 60;
  const formattedTimeUsed = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  elements.resCandidateName.textContent = examState.candidateName.toUpperCase();
  elements.resCandidateReg.textContent = examState.registrationNumber;
  elements.resTimeUsed.textContent = formattedTimeUsed;

  elements.resTotalScore.textContent = `${grandCorrectCount} / ${grandTotalQuestions}`;
  const percentage = Math.round((grandCorrectCount / grandTotalQuestions) * 100);
  elements.resPercentage.textContent = `${percentage}%`;
  elements.resCorrect.textContent = grandCorrectCount;
  elements.resWrong.textContent = grandTotalQuestions - grandCorrectCount;

  elements.resSubjectBreakdown.innerHTML = "";
  Object.keys(subjectScores).forEach((sub) => {
    const data = subjectScores[sub];
    const tr = document.createElement("tr");
    tr.className = "hover:bg-slate-50 font-medium";
    tr.innerHTML = `
      <td class="p-3 font-semibold text-slate-800">${sub}</td>
      <td class="p-3 text-center text-slate-600">${data.total}</td>
      <td class="p-3 text-center text-emerald-700 font-bold">${data.correct}</td>
      <td class="p-3 text-center font-mono font-bold text-blue-900">${data.correct} / ${data.total}</td>
    `;
    elements.resSubjectBreakdown.appendChild(tr);
  });

  elements.screenResult.classList.remove("hidden");
}

function showReviewScreen() {
  elements.screenResult.classList.add("hidden");
  elements.screenReview.classList.remove("hidden");

  elements.reviewSubjectTabs.innerHTML = "";
  const subjects = Object.keys(examData);

  subjects.forEach((sub, idx) => {
    const btn = document.createElement("button");
    btn.className = `px-3 py-1.5 rounded text-xs font-bold uppercase transition ${
      idx === 0 ? "bg-blue-900 text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
    }`;
    btn.textContent = sub;
    btn.addEventListener("click", (e) => {
      document.querySelectorAll("#review-subject-tabs button").forEach(b => {
        b.className = "px-3 py-1.5 rounded text-xs font-bold uppercase bg-slate-200 text-slate-700 hover:bg-slate-300";
      });
      e.target.className = "px-3 py-1.5 rounded text-xs font-bold uppercase bg-blue-900 text-white";
      renderReviewQuestions(sub);
    });
    elements.reviewSubjectTabs.appendChild(btn);
  });

  renderReviewQuestions(subjects[0]);
}

function renderReviewQuestions(subject) {
  elements.reviewQuestionsList.innerHTML = "";
  const questions = examData[subject];

  questions.forEach((q, idx) => {
    const key = `${subject}_${idx}`;
    const userAns = examState.answers[key];
    const isCorrect = userAns === q.answer;
    const isUnanswered = !userAns;

    const card = document.createElement("div");
    card.className = "bg-white p-5 rounded-lg border border-slate-300 shadow-sm space-y-3";

    let statusBadge = "";
    if (isUnanswered) {
      statusBadge = `<span class="px-2.5 py-1 bg-slate-200 text-slate-700 rounded-full font-bold text-xs"><i class="fa-solid fa-minus mr-1"></i>Unanswered</span>`;
    } else if (isCorrect) {
      statusBadge = `<span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold text-xs"><i class="fa-solid fa-check mr-1"></i>Correct</span>`;
    } else {
      statusBadge = `<span class="px-2.5 py-1 bg-rose-100 text-rose-800 rounded-full font-bold text-xs"><i class="fa-solid fa-xmark mr-1"></i>Incorrect</span>`;
    }

    let optionsHtml = "";
    Object.entries(q.options).forEach(([optKey, optVal]) => {
      let optionStyle = "bg-slate-50 border-slate-200 text-slate-700";

      if (optKey === q.answer) {
        optionStyle = "bg-emerald-50 border-emerald-500 font-bold text-emerald-950 ring-1 ring-emerald-500";
      } else if (optKey === userAns && !isCorrect) {
        optionStyle = "bg-rose-50 border-rose-400 font-semibold text-rose-950";
      }

      optionsHtml += `
        <div class="p-3 rounded border text-xs flex items-center ${optionStyle}">
          <span class="w-6 h-6 rounded-full flex items-center justify-center border mr-2 font-bold flex-none">${optKey}</span>
          <span class="flex-1">${optVal}</span>
          ${optKey === q.answer ? '<i class="fa-solid fa-circle-check text-emerald-600 text-sm ml-2"></i>' : ''}
          ${optKey === userAns && !isCorrect ? '<i class="fa-solid fa-circle-xmark text-rose-600 text-sm ml-2"></i>' : ''}
        </div>
      `;
    });

    card.innerHTML = `
      <div class="flex justify-between items-center border-b border-slate-200 pb-2">
        <span class="font-bold text-xs text-blue-900">${subject} - Question ${idx + 1}</span>
        ${statusBadge}
      </div>
      <div class="text-sm font-medium text-slate-800">${q.question}</div>
      <div class="space-y-2 pt-1">${optionsHtml}</div>
    `;

    elements.reviewQuestionsList.appendChild(card);
  });
}

function handleGlobalShortcuts(e) {
  if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
    return;
  }
  if (elements.screenExam.classList.contains("hidden")) return;

  const key = e.key.toUpperCase();
  if (["A", "B", "C", "D"].includes(key)) {
    selectOption(key);
  } else if (key === "N") {
    navigateNext();
  } else if (key === "P") {
    navigatePrevious();
  } else if (key === "R") {
    toggleFlagCurrentQuestion();
  } else if (key === "S") {
    openSubmitModal();
  }
}

function setupCalculator() {
  let displayValue = "0";

  const updateDisplay = () => {
    elements.calcDisplay.textContent = displayValue;
  };

  document.querySelectorAll(".calc-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;
      const val = btn.dataset.val;

      if (action === "num") {
        if (displayValue === "0" && val !== ".") {
          displayValue = val;
        } else {
          displayValue += val;
        }
      } else if (action === "op") {
        const lastChar = displayValue.slice(-1);
        if (["+", "-", "*", "/"].includes(lastChar)) {
          displayValue = displayValue.slice(0, -1) + val;
        } else {
          displayValue += val;
        }
      } else if (action === "clear") {
        displayValue = "0";
      } else if (action === "backspace") {
        displayValue = displayValue.length > 1 ? displayValue.slice(0, -1) : "0";
      } else if (action === "sqrt") {
        try {
          displayValue = String(Math.sqrt(eval(displayValue)));
        } catch {
          displayValue = "Error";
        }
      } else if (action === "percent") {
        try {
          displayValue = String(eval(displayValue) / 100);
        } catch {
          displayValue = "Error";
        }
      } else if (action === "equals") {
        try {
          displayValue = String(eval(displayValue));
        } catch {
          displayValue = "Error";
        }
      }

      updateDisplay();
    });
  });
}