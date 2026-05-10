const STORAGE_KEYS = {
  profile: "userProfile",
  history: "workoutHistory",
  currentWorkoutDraft: "currentWorkoutDraft",
  lastWorkoutSplit: "lastWorkoutSplit",
  lastTrained: "lastTrained",
  fatigue: "fatigue",
  personalRecords: "personalRecords",
  theme: "mentisTheme",
  internalBackup: "mentisInternalBackup",
  lastBackupCreatedAt: "lastBackupCreatedAt",
  lastBackupRestoredAt: "lastBackupRestoredAt",
};

const ACTIVE_SAVE_KEYS = [
  STORAGE_KEYS.profile,
  STORAGE_KEYS.history,
  STORAGE_KEYS.currentWorkoutDraft,
  STORAGE_KEYS.lastWorkoutSplit,
  STORAGE_KEYS.lastTrained,
  STORAGE_KEYS.fatigue,
  STORAGE_KEYS.personalRecords,
  STORAGE_KEYS.theme,
  STORAGE_KEYS.lastBackupRestoredAt,
];

const APP_VERSION = "0.5";
const SAVE_VERSION = APP_VERSION;
const VERSION_NOTES = [
  "🚀 Sistema de recuperação muscular",
  "🧠 Splits inteligentes",
  "💾 Sistema de backup local",
  "🎨 Melhorias no light mode",
  "📱 Barra persistente inferior",
];

const OPTIONS = {
  goal: ["hipertrofia", "força", "emagrecimento", "manutenção"],
  level: ["iniciante", "intermédio", "avançado"],
  defaultLocation: ["ginásio", "casa com halteres", "casa sem equipamento", "máquinas"],
  limitation: ["nenhuma", "ombro", "joelho", "lombar", "outra"],
  weeklyStimulus: ["1x por semana", "2x por semana", "3x por semana"],
  weakPoints: ["peito", "costas", "pernas", "ombros", "braços", "core"],
  todayMuscles: ["peito", "costas", "pernas", "ombros", "braços", "core"],
  trainingMode: ["manual", "push", "pull", "legs", "upper", "lower", "fullbody"],
  duration: ["30 min", "45 min", "60 min", "75+ min"],
  trainingType: ["rápido e intenso", "equilibrado", "completo"],
  lifestyle: ["sedentário", "moderado", "ativo"],
};

const WORKOUT_SPLITS = {
  push: ["peito", "ombros", "braços"],
  pull: ["costas", "braços"],
  legs: ["pernas", "core"],
  upper: ["peito", "costas", "ombros", "braços"],
  lower: ["pernas", "core"],
  fullbody: ["peito", "costas", "pernas", "ombros", "braços", "core"],
};

const SPLIT_LABELS = {
  manual: "Manual",
  push: "Push",
  pull: "Pull",
  legs: "Legs",
  upper: "Upper",
  lower: "Lower",
  fullbody: "Full Body",
};

const SPLIT_SUGGESTIONS = {
  push: "pull",
  pull: "legs",
  legs: "push",
  upper: "lower",
  lower: "upper",
  fullbody: "push",
};

const MUSCLES = ["peito", "costas", "pernas", "ombros", "braços", "core"];

const FATIGUE_BY_TYPE = {
  composto: 3,
  secundario: 2,
  isolamento: 1,
  finalizador: 1,
};

const DAILY_FATIGUE_RECOVERY = 2;

const LEVEL_RANK = {
  iniciante: 1,
  intermédio: 2,
  avançado: 3,
};

const TYPE_ORDER = {
  composto: 1,
  secundario: 2,
  isolamento: 3,
  finalizador: 4,
};

const EXERCISES = [
  { nome: "Supino reto com barra", musculo: "peito", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },
  { nome: "Supino inclinado com halteres", musculo: "peito", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro"], tipo: "secundario" },
  { nome: "Chest press", musculo: "peito", equipamento: "máquinas", nivel: "iniciante", evitar: ["ombro"], tipo: "composto" },
  { nome: "Pec deck", musculo: "peito", equipamento: "máquinas", nivel: "iniciante", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Flexões", musculo: "peito", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: [], tipo: "composto" },
  { nome: "Flexões inclinadas", musculo: "peito", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: [], tipo: "secundario" },
  { nome: "Press com halteres no chão", musculo: "peito", equipamento: "casa com halteres", nivel: "iniciante", evitar: ["ombro"], tipo: "composto" },
  { nome: "Aberturas com halteres", musculo: "peito", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["ombro"], tipo: "isolamento" },

  { nome: "Remada curvada", musculo: "costas", equipamento: "ginásio", nivel: "intermédio", evitar: ["lombar"], tipo: "composto" },
  { nome: "Puxada na frente", musculo: "costas", equipamento: "máquinas", nivel: "iniciante", evitar: [], tipo: "secundario" },
  { nome: "Remada sentada", musculo: "costas", equipamento: "máquinas", nivel: "iniciante", evitar: [], tipo: "secundario" },
  { nome: "Remada unilateral com halter", musculo: "costas", equipamento: "casa com halteres", nivel: "iniciante", evitar: [], tipo: "secundario" },
  { nome: "Pullover com halter", musculo: "costas", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Superman", musculo: "costas", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: ["lombar"], tipo: "finalizador" },
  { nome: "Prone Y raise", musculo: "costas", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Peso morto romeno", musculo: "costas", equipamento: "ginásio", nivel: "avançado", evitar: ["lombar"], tipo: "composto" },

  { nome: "Agachamento livre", musculo: "pernas", equipamento: "ginásio", nivel: "intermédio", evitar: ["joelho", "lombar"], tipo: "composto" },
  { nome: "Leg press", musculo: "pernas", equipamento: "máquinas", nivel: "iniciante", evitar: ["joelho"], tipo: "composto" },
  { nome: "Extensão de pernas", musculo: "pernas", equipamento: "máquinas", nivel: "iniciante", evitar: ["joelho"], tipo: "isolamento" },
  { nome: "Curl femoral", musculo: "pernas", equipamento: "máquinas", nivel: "iniciante", evitar: [], tipo: "isolamento" },
  { nome: "Goblet squat", musculo: "pernas", equipamento: "casa com halteres", nivel: "iniciante", evitar: ["joelho"], tipo: "composto" },
  { nome: "Afundos com halteres", musculo: "pernas", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["joelho"], tipo: "secundario" },
  { nome: "Ponte de glúteos", musculo: "pernas", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: [], tipo: "isolamento" },
  { nome: "Agachamento ao banco", musculo: "pernas", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: ["joelho"], tipo: "composto" },

  { nome: "Press militar", musculo: "ombros", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro", "lombar"], tipo: "composto" },
  { nome: "Elevação lateral", musculo: "ombros", equipamento: "ginásio", nivel: "iniciante", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Shoulder press", musculo: "ombros", equipamento: "máquinas", nivel: "iniciante", evitar: ["ombro"], tipo: "composto" },
  { nome: "Reverse pec deck", musculo: "ombros", equipamento: "máquinas", nivel: "iniciante", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Press com halteres sentado", musculo: "ombros", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },
  { nome: "Elevação lateral com halteres", musculo: "ombros", equipamento: "casa com halteres", nivel: "iniciante", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Pike push-up", musculo: "ombros", equipamento: "casa sem equipamento", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },
  { nome: "Prancha com toque no ombro", musculo: "ombros", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: ["ombro"], tipo: "secundario" },

  { nome: "Curl bíceps com barra", musculo: "braços", equipamento: "ginásio", nivel: "iniciante", evitar: [], tipo: "secundario" },
  { nome: "Tríceps na polia", musculo: "braços", equipamento: "ginásio", nivel: "iniciante", evitar: ["ombro"], tipo: "secundario" },
  { nome: "Curl na máquina", musculo: "braços", equipamento: "máquinas", nivel: "iniciante", evitar: [], tipo: "isolamento" },
  { nome: "Tríceps máquina", musculo: "braços", equipamento: "máquinas", nivel: "iniciante", evitar: ["ombro"], tipo: "secundario" },
  { nome: "Curl alternado com halteres", musculo: "braços", equipamento: "casa com halteres", nivel: "iniciante", evitar: [], tipo: "secundario" },
  { nome: "Tríceps francês com halter", musculo: "braços", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["ombro"], tipo: "secundario" },
  { nome: "Diamante assistida", musculo: "braços", equipamento: "casa sem equipamento", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },
  { nome: "Dips em banco", musculo: "braços", equipamento: "casa sem equipamento", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },

  { nome: "Crunch na polia", musculo: "core", equipamento: "ginásio", nivel: "intermédio", evitar: ["lombar"], tipo: "isolamento" },
  { nome: "Elevação de pernas suspenso", musculo: "core", equipamento: "ginásio", nivel: "avançado", evitar: ["lombar"], tipo: "isolamento" },
  { nome: "Abdominal máquina", musculo: "core", equipamento: "máquinas", nivel: "iniciante", evitar: ["lombar"], tipo: "isolamento" },
  { nome: "Rotação de tronco máquina", musculo: "core", equipamento: "máquinas", nivel: "iniciante", evitar: ["lombar"], tipo: "isolamento" },
  { nome: "Prancha", musculo: "core", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: [], tipo: "composto" },
  { nome: "Dead bug", musculo: "core", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: [], tipo: "isolamento" },
  { nome: "Russian twist com halter", musculo: "core", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["lombar"], tipo: "isolamento" },
  { nome: "Suitcase carry", musculo: "core", equipamento: "casa com halteres", nivel: "intermédio", evitar: [], tipo: "secundario" },

  { nome: "Supino reto com halteres", musculo: "peito", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },
  { nome: "Supino inclinado com barra", musculo: "peito", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },
  { nome: "Supino declinado com barra", musculo: "peito", equipamento: "ginásio", nivel: "avançado", evitar: ["ombro"], tipo: "secundario" },
  { nome: "Dips para peito", musculo: "peito", equipamento: "ginásio", nivel: "avançado", evitar: ["ombro"], tipo: "secundario" },
  { nome: "Crossover na polia alta", musculo: "peito", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Crossover na polia baixa", musculo: "peito", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Chest press inclinada", musculo: "peito", equipamento: "máquinas", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },
  { nome: "Crucifixo na máquina", musculo: "peito", equipamento: "máquinas", nivel: "iniciante", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Chest press rest-pause", musculo: "peito", equipamento: "máquinas", nivel: "intermédio", evitar: ["ombro"], tipo: "finalizador" },
  { nome: "Press plano com halteres", musculo: "peito", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },
  { nome: "Press inclinado com halteres", musculo: "peito", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["ombro"], tipo: "secundario" },
  { nome: "Squeeze press com halteres", musculo: "peito", equipamento: "casa com halteres", nivel: "iniciante", evitar: [], tipo: "secundario" },
  { nome: "Aberturas no chão com halteres", musculo: "peito", equipamento: "casa com halteres", nivel: "iniciante", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Flexões declinadas", musculo: "peito", equipamento: "casa sem equipamento", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },
  { nome: "Flexões com pausa no fundo", musculo: "peito", equipamento: "casa sem equipamento", nivel: "intermédio", evitar: ["ombro"], tipo: "finalizador" },
  { nome: "Push-up drop set", musculo: "peito", equipamento: "casa sem equipamento", nivel: "avançado", evitar: ["ombro"], tipo: "finalizador" },

  { nome: "Peso morto convencional", musculo: "costas", equipamento: "ginásio", nivel: "avançado", evitar: ["lombar"], tipo: "composto" },
  { nome: "Barra fixa pronada", musculo: "costas", equipamento: "ginásio", nivel: "avançado", evitar: ["ombro"], tipo: "composto" },
  { nome: "Remada curvada com barra", musculo: "costas", equipamento: "ginásio", nivel: "intermédio", evitar: ["lombar"], tipo: "composto" },
  { nome: "Remada apoiada no banco", musculo: "costas", equipamento: "ginásio", nivel: "intermédio", evitar: [], tipo: "secundario" },
  { nome: "Face pull", musculo: "costas", equipamento: "ginásio", nivel: "iniciante", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Pullover na polia", musculo: "costas", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Puxada assistida", musculo: "costas", equipamento: "máquinas", nivel: "iniciante", evitar: ["ombro"], tipo: "composto" },
  { nome: "Puxada neutra", musculo: "costas", equipamento: "máquinas", nivel: "iniciante", evitar: [], tipo: "secundario" },
  { nome: "Remada na máquina drop set", musculo: "costas", equipamento: "máquinas", nivel: "intermédio", evitar: [], tipo: "finalizador" },
  { nome: "Remada bilateral com halteres", musculo: "costas", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["lombar"], tipo: "secundario" },
  { nome: "Remada renegade com halteres", musculo: "costas", equipamento: "casa com halteres", nivel: "avançado", evitar: ["lombar", "ombro"], tipo: "composto" },
  { nome: "Reverse fly com halteres", musculo: "costas", equipamento: "casa com halteres", nivel: "iniciante", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Remada invertida debaixo da mesa", musculo: "costas", equipamento: "casa sem equipamento", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },
  { nome: "Puxada com toalha isométrica", musculo: "costas", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: ["ombro"], tipo: "secundario" },
  { nome: "Superman em repetições curtas", musculo: "costas", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: ["lombar"], tipo: "finalizador" },

  { nome: "Agachamento frontal", musculo: "pernas", equipamento: "ginásio", nivel: "avançado", evitar: ["joelho", "lombar"], tipo: "composto" },
  { nome: "Peso morto sumo", musculo: "pernas", equipamento: "ginásio", nivel: "avançado", evitar: ["lombar"], tipo: "composto" },
  { nome: "Hip thrust", musculo: "pernas", equipamento: "ginásio", nivel: "intermédio", evitar: ["lombar"], tipo: "secundario" },
  { nome: "Afundos caminhados", musculo: "pernas", equipamento: "ginásio", nivel: "intermédio", evitar: ["joelho"], tipo: "finalizador" },
  { nome: "Hack squat", musculo: "pernas", equipamento: "máquinas", nivel: "intermédio", evitar: ["joelho"], tipo: "composto" },
  { nome: "Cadeira extensora", musculo: "pernas", equipamento: "máquinas", nivel: "iniciante", evitar: ["joelho"], tipo: "isolamento" },
  { nome: "Curl femoral sentado", musculo: "pernas", equipamento: "máquinas", nivel: "iniciante", evitar: [], tipo: "isolamento" },
  { nome: "Gémeos na máquina", musculo: "pernas", equipamento: "máquinas", nivel: "iniciante", evitar: [], tipo: "isolamento" },
  { nome: "Leg press drop set", musculo: "pernas", equipamento: "máquinas", nivel: "intermédio", evitar: ["joelho"], tipo: "finalizador" },
  { nome: "Agachamento com halteres", musculo: "pernas", equipamento: "casa com halteres", nivel: "iniciante", evitar: ["joelho"], tipo: "composto" },
  { nome: "Bulgarian split squat", musculo: "pernas", equipamento: "casa com halteres", nivel: "avançado", evitar: ["joelho"], tipo: "secundario" },
  { nome: "Step-up com halteres", musculo: "pernas", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["joelho"], tipo: "secundario" },
  { nome: "Ponte de glúteos com halter", musculo: "pernas", equipamento: "casa com halteres", nivel: "iniciante", evitar: [], tipo: "isolamento" },
  { nome: "Goblet squat rest-pause", musculo: "pernas", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["joelho"], tipo: "finalizador" },
  { nome: "Agachamento livre sem carga", musculo: "pernas", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: ["joelho"], tipo: "composto" },
  { nome: "Afundos alternados", musculo: "pernas", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: ["joelho"], tipo: "secundario" },
  { nome: "Wall sit", musculo: "pernas", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: ["joelho"], tipo: "finalizador" },

  { nome: "Push press", musculo: "ombros", equipamento: "ginásio", nivel: "avançado", evitar: ["ombro", "lombar"], tipo: "composto" },
  { nome: "Remada alta com barra", musculo: "ombros", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro"], tipo: "secundario" },
  { nome: "Posterior de ombro na polia", musculo: "ombros", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Lateral raise drop set", musculo: "ombros", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro"], tipo: "finalizador" },
  { nome: "Shoulder press unilateral", musculo: "ombros", equipamento: "máquinas", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },
  { nome: "Elevação lateral máquina", musculo: "ombros", equipamento: "máquinas", nivel: "iniciante", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Shoulder press rest-pause", musculo: "ombros", equipamento: "máquinas", nivel: "intermédio", evitar: ["ombro"], tipo: "finalizador" },
  { nome: "Press Arnold", musculo: "ombros", equipamento: "casa com halteres", nivel: "avançado", evitar: ["ombro"], tipo: "composto" },
  { nome: "Remada alta com halteres", musculo: "ombros", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["ombro"], tipo: "secundario" },
  { nome: "Elevação frontal com halteres", musculo: "ombros", equipamento: "casa com halteres", nivel: "iniciante", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Elevação lateral mecânica", musculo: "ombros", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["ombro"], tipo: "finalizador" },
  { nome: "Y-T-W no chão", musculo: "ombros", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Pike hold", musculo: "ombros", equipamento: "casa sem equipamento", nivel: "intermédio", evitar: ["ombro"], tipo: "finalizador" },

  { nome: "Supino fechado", musculo: "braços", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },
  { nome: "Dips em paralelas", musculo: "braços", equipamento: "ginásio", nivel: "avançado", evitar: ["ombro"], tipo: "composto" },
  { nome: "Chin-up supinado", musculo: "braços", equipamento: "ginásio", nivel: "avançado", evitar: ["ombro"], tipo: "composto" },
  { nome: "Extensão de tríceps acima da cabeça", musculo: "braços", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Curl 21", musculo: "braços", equipamento: "ginásio", nivel: "intermédio", evitar: [], tipo: "finalizador" },
  { nome: "Curl preacher máquina", musculo: "braços", equipamento: "máquinas", nivel: "iniciante", evitar: [], tipo: "isolamento" },
  { nome: "Tríceps corda drop set", musculo: "braços", equipamento: "ginásio", nivel: "intermédio", evitar: ["ombro"], tipo: "finalizador" },
  { nome: "Tríceps máquina rest-pause", musculo: "braços", equipamento: "máquinas", nivel: "intermédio", evitar: ["ombro"], tipo: "finalizador" },
  { nome: "Curl martelo", musculo: "braços", equipamento: "casa com halteres", nivel: "iniciante", evitar: [], tipo: "secundario" },
  { nome: "Curl inclinado com halteres", musculo: "braços", equipamento: "casa com halteres", nivel: "intermédio", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Curl concentrado", musculo: "braços", equipamento: "casa com halteres", nivel: "iniciante", evitar: [], tipo: "isolamento" },
  { nome: "Kickback de tríceps", musculo: "braços", equipamento: "casa com halteres", nivel: "iniciante", evitar: ["ombro"], tipo: "isolamento" },
  { nome: "Curl martelo rest-pause", musculo: "braços", equipamento: "casa com halteres", nivel: "intermédio", evitar: [], tipo: "finalizador" },
  { nome: "Flexões diamante", musculo: "braços", equipamento: "casa sem equipamento", nivel: "intermédio", evitar: ["ombro"], tipo: "composto" },
  { nome: "Flexões fechadas até quase falha", musculo: "braços", equipamento: "casa sem equipamento", nivel: "intermédio", evitar: ["ombro"], tipo: "finalizador" },

  { nome: "Ab wheel", musculo: "core", equipamento: "ginásio", nivel: "avançado", evitar: ["lombar"], tipo: "composto" },
  { nome: "Prancha com carga", musculo: "core", equipamento: "ginásio", nivel: "intermédio", evitar: ["lombar"], tipo: "composto" },
  { nome: "Pallof press", musculo: "core", equipamento: "ginásio", nivel: "iniciante", evitar: [], tipo: "secundario" },
  { nome: "Crunch máquina rest-pause", musculo: "core", equipamento: "máquinas", nivel: "intermédio", evitar: ["lombar"], tipo: "finalizador" },
  { nome: "Pallof press na máquina", musculo: "core", equipamento: "máquinas", nivel: "iniciante", evitar: [], tipo: "secundario" },
  { nome: "Dead bug com halter", musculo: "core", equipamento: "casa com halteres", nivel: "iniciante", evitar: [], tipo: "composto" },
  { nome: "Farmer carry com halteres", musculo: "core", equipamento: "casa com halteres", nivel: "intermédio", evitar: [], tipo: "secundario" },
  { nome: "Carry pesado por tempo", musculo: "core", equipamento: "casa com halteres", nivel: "intermédio", evitar: [], tipo: "finalizador" },
  { nome: "Mountain climbers", musculo: "core", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: ["lombar"], tipo: "secundario" },
  { nome: "Hollow hold", musculo: "core", equipamento: "casa sem equipamento", nivel: "intermédio", evitar: ["lombar"], tipo: "finalizador" },
  { nome: "Prancha lateral", musculo: "core", equipamento: "casa sem equipamento", nivel: "iniciante", evitar: [], tipo: "finalizador" },
  { nome: "Mountain climber rápido", musculo: "core", equipamento: "casa sem equipamento", nivel: "intermédio", evitar: ["lombar"], tipo: "finalizador" },
];

EXERCISES.forEach((exercise) => {
  if (!exercise.tipo) exercise.tipo = getExerciseType(exercise);
  if (!exercise.instructions) exercise.instructions = getExerciseInstructions(exercise);
});

const state = {
  profile: null,
  currentWorkout: null,
  currentExerciseIndex: 0,
  lastWorkoutSplit: null,
  lastTrained: {},
  fatigue: {},
};

document.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  renderAppVersion();
  hydrateOptionGroups();
  hydrateLocationSelect();
  bindEvents();
  loadSplitHistory();
  loadRecoveryState();
  loadProfile();
  restoreWorkoutDraft();
  updateContinueWorkoutButton();
});

function renderAppVersion() {
  const versionLabel = document.querySelector("#appVersionLabel");
  if (!versionLabel) return;
  versionLabel.textContent = `Mentis Fitness v${APP_VERSION}`;
}

function hydrateOptionGroups() {
  document.querySelectorAll("[data-field]").forEach((container) => {
    const field = container.dataset.field;
    const isMulti = container.classList.contains("multi");

    OPTIONS[field].forEach((value) => {
      const button = document.createElement("button");
      button.className = "option-button";
      button.type = "button";
      button.textContent = SPLIT_LABELS[value] || value;
      button.dataset.value = value;
      button.setAttribute("aria-pressed", "false");

      button.addEventListener("click", () => {
        if (!isMulti) {
          container.querySelectorAll(".option-button").forEach((item) => setSelected(item, false));
          setSelected(button, true);
          if (field === "trainingMode") syncMusclesFromTrainingMode(value);
          return;
        }
        setSelected(button, !button.classList.contains("selected"));
        if (field === "todayMuscles") setDefaultOption("trainingMode", "manual");
      });

      container.appendChild(button);
    });
  });
}

function hydrateLocationSelect() {
  const select = document.querySelector("#todayLocation");
  OPTIONS.defaultLocation.forEach((location) => {
    const option = document.createElement("option");
    option.value = location;
    option.textContent = location;
    select.appendChild(option);
  });
}

function loadTheme() {
  const storedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
  applyTheme(storedTheme || (prefersLight ? "light" : "dark"));
}

function toggleTheme() {
  const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
  applyTheme(nextTheme);
  localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
}

function openSettingsModal() {
  renderBackupMetadata();
  document.querySelector("#settingsModal").classList.remove("hidden");
}

function closeSettingsModal() {
  document.querySelector("#settingsModal").classList.add("hidden");
}

function openVersionNotesModal() {
  renderVersionNotes();
  document.querySelector("#versionNotesModal").classList.remove("hidden");
}

function closeVersionNotesModal() {
  document.querySelector("#versionNotesModal").classList.add("hidden");
}

function renderVersionNotes() {
  const list = document.querySelector("#versionNotesList");
  if (!list) return;

  list.innerHTML = VERSION_NOTES.map((note) => `<div class="version-note">${escapeHtml(note)}</div>`).join("");
}

function importSaveData(event) {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const save = JSON.parse(reader.result);
      if (!isValidSave(save)) {
        showToast("Save inválido. Importação cancelada.");
        return;
      }

      if (!window.confirm("Importar save?\n\nOs dados atuais serão substituídos.")) return;

      replaceCurrentSave(save);
      showToast("Save importado. A reiniciar app.");
      window.setTimeout(() => window.location.reload(), 600);
    } catch {
      showToast("Não foi possível ler o ficheiro.");
    }
  });
  reader.readAsText(file);
}

function isValidSave(save) {
  return Boolean(
    save &&
    (save.saveVersion || save.version) &&
    Array.isArray(save.history || save.workoutHistory) &&
    typeof save.settings === "object"
  );
}

function createSavePayload(exportedAt = new Date().toISOString()) {
  if (state.currentWorkout) saveWorkoutDraft();

  return {
    exportedAt,
    saveVersion: SAVE_VERSION,
    appVersion: APP_VERSION,
    profile: readStorage(STORAGE_KEYS.profile, null),
    history: readStorage(STORAGE_KEYS.history, []),
    workoutHistory: readStorage(STORAGE_KEYS.history, []),
    currentWorkoutDraft: readStorage(STORAGE_KEYS.currentWorkoutDraft, null),
    fatigue: readStorage(STORAGE_KEYS.fatigue, createEmptyFatigue()),
    lastWorkoutSplit: readStorage(STORAGE_KEYS.lastWorkoutSplit, null),
    lastTrained: readStorage(STORAGE_KEYS.lastTrained, {}),
    personalRecords: readStorage(STORAGE_KEYS.personalRecords, {}),
    streaks: {
      current: getTrainingStreak(),
      weeklyWorkouts: getWeeklyWorkoutCount(),
    },
    settings: {
      theme: localStorage.getItem(STORAGE_KEYS.theme) || document.body.dataset.theme || "dark",
    },
    lastSplit: readStorage(STORAGE_KEYS.lastWorkoutSplit, null),
  };
}

function getInternalBackup() {
  const save = readStorage(STORAGE_KEYS.internalBackup, null);
  return isValidSave(save) ? save : null;
}

function renderBackupMetadata() {
  const createdLabel = document.querySelector("#lastBackupCreatedLabel");
  const restoredLabel = document.querySelector("#lastBackupRestoredLabel");
  const restoreButton = document.querySelector("#restoreBackupButton");
  const internalBackup = getInternalBackup();

  if (createdLabel) {
    createdLabel.textContent = `Último backup disponível: ${formatBackupDate(internalBackup?.exportedAt)}`;
  }
  if (restoredLabel) {
    restoredLabel.textContent = `Último backup restaurado: ${formatBackupDate(localStorage.getItem(STORAGE_KEYS.lastBackupRestoredAt))}`;
  }
  if (restoreButton) {
    restoreButton.disabled = !internalBackup;
    restoreButton.setAttribute("aria-disabled", String(!internalBackup));
  }
}

function createInternalBackup() {
  const exportedAt = new Date().toISOString();
  writeStorage(STORAGE_KEYS.internalBackup, createSavePayload(exportedAt));
  localStorage.setItem(STORAGE_KEYS.lastBackupCreatedAt, exportedAt);
  renderBackupMetadata();
  showToast("Backup interno criado.");
}

function restoreInternalBackup() {
  const save = getInternalBackup();
  if (!save) {
    showToast("Ainda não existe backup para restaurar.");
    return;
  }

  if (!window.confirm("Restaurar último backup?\n\nOs dados atuais serão substituídos.")) return;

  replaceCurrentSave(save, { preserveInternalBackup: true });
  showToast("Backup restaurado. A reiniciar app.");
  window.setTimeout(() => window.location.reload(), 600);
}

function exportSaveData() {
  const save = createSavePayload();
  const blob = new Blob([JSON.stringify(save, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "mentis-fitness-save.json";
  link.click();
  URL.revokeObjectURL(url);
  showToast("JSON exportado.");
}

function clearActiveSave() {
  ACTIVE_SAVE_KEYS.forEach((key) => localStorage.removeItem(key));
  state.profile = null;
  state.currentWorkout = null;
  state.currentExerciseIndex = 0;
  state.lastWorkoutSplit = null;
  state.lastTrained = {};
  state.fatigue = {};
}

function resetAppData() {
  if (!window.confirm("Reset da app?\n\nOs dados ativos serão apagados. O backup interno fica guardado.")) return;
  clearActiveSave();
  window.location.reload();
}

function replaceCurrentSave(save, options = {}) {
  const restoredAt = new Date().toISOString();
  const history = save.history || save.workoutHistory || [];
  const lastSplit = save.lastWorkoutSplit || save.lastSplit || null;
  const backupSnapshot = options.preserveInternalBackup ? readStorage(STORAGE_KEYS.internalBackup, null) : null;

  clearActiveSave();
  if (backupSnapshot) writeStorage(STORAGE_KEYS.internalBackup, backupSnapshot);
  writeStorage(STORAGE_KEYS.profile, save.profile || null);
  writeStorage(STORAGE_KEYS.history, history);
  if (save.currentWorkoutDraft) {
    writeStorage(STORAGE_KEYS.currentWorkoutDraft, save.currentWorkoutDraft);
  }
  writeStorage(STORAGE_KEYS.fatigue, save.fatigue || createEmptyFatigue());
  writeStorage(STORAGE_KEYS.lastTrained, save.lastTrained || {});
  writeStorage(STORAGE_KEYS.personalRecords, save.personalRecords || {});
  writeStorage(STORAGE_KEYS.lastWorkoutSplit, lastSplit);
  localStorage.setItem(STORAGE_KEYS.lastBackupRestoredAt, restoredAt);
  localStorage.setItem(STORAGE_KEYS.theme, save.settings?.theme === "light" ? "light" : "dark");
}

function applyTheme(theme) {
  const normalizedTheme = theme === "light" ? "light" : "dark";
  document.body.dataset.theme = normalizedTheme;

  const icon = document.querySelector("#themeToggleIcon");
  const button = document.querySelector("#themeToggleButton");
  if (icon) icon.textContent = normalizedTheme === "light" ? "☀️" : "🌙";
  if (button) button.setAttribute("aria-pressed", String(normalizedTheme === "light"));

  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    "content",
    normalizedTheme === "light" ? "#f4f7f4" : "#080b0e"
  );
}

function bindEvents() {
  document.querySelector("#profileForm").addEventListener("submit", saveProfile);
  document.querySelector("#workoutForm").addEventListener("submit", generateWorkout);
  document.querySelector("#themeToggleButton").addEventListener("click", toggleTheme);
  document.querySelector("#settingsButton").addEventListener("click", openSettingsModal);
  document.querySelector("#closeSettingsButton").addEventListener("click", closeSettingsModal);
  document.querySelector("#versionNotesButton").addEventListener("click", openVersionNotesModal);
  document.querySelector("#closeVersionNotesButton").addEventListener("click", closeVersionNotesModal);
  document.querySelector("#createBackupButton").addEventListener("click", createInternalBackup);
  document.querySelector("#restoreBackupButton").addEventListener("click", restoreInternalBackup);
  document.querySelector("#exportDataButton").addEventListener("click", exportSaveData);
  document.querySelector("#importDataButton").addEventListener("click", () => document.querySelector("#importDataInput").click());
  document.querySelector("#importDataInput").addEventListener("change", importSaveData);
  document.querySelector("#resetAppButton").addEventListener("click", resetAppData);
  document.querySelector("#settingsModal").addEventListener("click", (event) => {
    if (event.target.id === "settingsModal") closeSettingsModal();
  });
  document.querySelector("#versionNotesModal").addEventListener("click", (event) => {
    if (event.target.id === "versionNotesModal") closeVersionNotesModal();
  });
  document.querySelector("#startWorkoutButton").addEventListener("click", () => {
    if (!state.profile) {
      showToast("Cria o perfil antes de começar.");
      showScreen("onboardingScreen");
      return;
    }
    prepareWorkoutDefaults();
    showScreen("generatorScreen");
  });
  document.querySelector("#continueWorkoutButton").addEventListener("click", continueWorkout);
  document.querySelector("#navHomeButton").addEventListener("click", goHome);
  document.querySelector("#navTrainingButton").addEventListener("click", goTraining);
  document.querySelector("#navHistoryButton").addEventListener("click", goHistory);
  document.querySelector("#navProfileButton").addEventListener("click", goProfile);
  document.querySelector("#nextExerciseButton").addEventListener("click", nextExercise);
  document.querySelector("#prevExerciseButton").addEventListener("click", previousExercise);
  document.querySelector("#finishWorkoutButton").addEventListener("click", finishWorkout);
  document.querySelector("#workoutHomeButton").addEventListener("click", openExitWorkoutModal);
  document.querySelector("#saveAndLeaveWorkoutButton").addEventListener("click", saveAndLeaveWorkout);
  document.querySelector("#abandonWorkoutButton").addEventListener("click", abandonWorkout);
  document.querySelector("#cancelExitWorkoutButton").addEventListener("click", closeExitWorkoutModal);
  document.querySelector("#closeWorkoutSummaryButton").addEventListener("click", closeWorkoutSummary);
  document.querySelector("#exitWorkoutModal").addEventListener("click", (event) => {
    if (event.target.id === "exitWorkoutModal") closeExitWorkoutModal();
  });

  document.querySelectorAll("[data-target]").forEach((button) => {
    button.addEventListener("click", () => {
      if (
    state.currentWorkout &&
    document.querySelector("#workoutScreen").classList.contains("active") &&
    button.id !== "adjustWorkoutButton"
) {
        openExitWorkoutModal();
        return;
      }
      if (button.id === "adjustWorkoutButton") {
  populateWorkoutForm(state.currentWorkout);
}

showScreen(button.dataset.target);
    });
  });
}
function populateWorkoutForm(workout) {
  if (!workout) return;

  setDefaultOption("trainingMode", workout.trainingMode);
  setDefaultOption("duration", workout.duration);
  setDefaultOption("trainingType", workout.trainingType);

  document
    .querySelectorAll('[data-field="todayMuscles"] .option-button')
    .forEach((button) => {
      const isSelected = workout.muscles?.includes(button.dataset.value);
      setSelected(button, isSelected);
    });

  const locationSelect = document.querySelector("#todayLocation");

  if (locationSelect && workout.location) {
    locationSelect.value = workout.location;
  }
}
function preserveActiveWorkout() {
  if (!state.currentWorkout) return;
  saveWorkoutDraft();
  updateContinueWorkoutButton();
}

function goHome() {
  preserveActiveWorkout();
  updateProfileStatus();
  showScreen(state.profile ? "homeScreen" : "onboardingScreen");
}

function goTraining() {
  if (!state.profile) {
    showToast("Cria o perfil antes de treinar.");
    showScreen("onboardingScreen");
    return;
  }

  preserveActiveWorkout();

  if (state.currentWorkout) {
    showScreen("workoutScreen");
    renderCurrentExercise();
    return;
  }

  prepareWorkoutDefaults();
  showScreen("generatorScreen");
}

function goHistory() {
  preserveActiveWorkout();
  showHistory();
}

function goProfile() {
  preserveActiveWorkout();
  fillProfileForm();
  showScreen("onboardingScreen");
}

function setSelected(button, isSelected) {
  button.classList.toggle("selected", isSelected);
  button.setAttribute("aria-pressed", String(isSelected));
}

function loadProfile() {
  state.profile = readStorage(STORAGE_KEYS.profile, null);

  if (state.profile && !Array.isArray(state.profile.weakPoints)) {
    state.profile.weakPoints = [];
    writeStorage(STORAGE_KEYS.profile, state.profile);
  }

  updateProfileStatus();

  if (state.profile) {
    fillProfileForm();
    prepareWorkoutDefaults();
    showScreen("homeScreen");
  } else {
    setDefaultOption("goal", "hipertrofia");
    setDefaultOption("level", "iniciante");
    setDefaultOption("defaultLocation", "ginásio");
    setDefaultOption("limitation", "nenhuma");
    setDefaultOption("weeklyStimulus", "2x por semana");
    setDefaultOption("lifestyle", "moderado");
    showScreen("onboardingScreen");
  }
}

function loadSplitHistory() {
  state.lastWorkoutSplit = readStorage(STORAGE_KEYS.lastWorkoutSplit, null);
}

function loadRecoveryState() {
  state.lastTrained = readStorage(STORAGE_KEYS.lastTrained, {});
  state.fatigue = applyDailyFatigueRecovery(readStorage(STORAGE_KEYS.fatigue, createEmptyFatigue()));
  writeStorage(STORAGE_KEYS.fatigue, state.fatigue);
}

function saveProfile(event) {
  event.preventDefault();
  const profile = {
    goal: getSingleValue("goal"),
    level: getSingleValue("level"),
    defaultLocation: getSingleValue("defaultLocation"),
    limitation: getSingleValue("limitation"),
    weeklyStimulus: getSingleValue("weeklyStimulus"),
    weakPoints: getMultiValue("weakPoints"),
    weight: getNumberInput("#weight"),
    height: getNumberInput("#height"),
    age: getNumberInput("#age"),
    lifestyle: getSingleValue("lifestyle"),
  };

  const missing = !profile.goal ||
                  !profile.level ||
                  !profile.defaultLocation ||
                  !profile.limitation ||
                  !profile.weeklyStimulus ||
                  !profile.lifestyle;

  if (missing) {
    showToast("Preenche todos os campos do perfil.");
    return;
  }

  state.profile = profile;
  writeStorage(STORAGE_KEYS.profile, profile);
  updateProfileStatus();
  prepareWorkoutDefaults();
  showToast("Perfil guardado. Já podes começar um treino.");
  showScreen("homeScreen");
}

function fillProfileForm() {
  if (!state.profile) return;

  Object.entries(state.profile).forEach(([field, value]) => {
    if (Array.isArray(value)) {
      clearGroup(field);
      value.forEach((item) => setDefaultOption(field, item));
      return;
    }

    if (OPTIONS[field]) {
      setDefaultOption(field, value);
    }
  });

  document.querySelector("#weight").value = state.profile.weight || "";
  document.querySelector("#height").value = state.profile.height || "";
  document.querySelector("#age").value = state.profile.age || "";
  document.querySelector("#todayLocation").value = state.profile.defaultLocation;
}

function generateWorkout(event) {
  event.preventDefault();

  const trainingMode = getSingleValue("trainingMode") || "manual";
  const splitMuscles = WORKOUT_SPLITS[trainingMode];
  const muscles = splitMuscles || getMultiValue("todayMuscles");
  const duration = getSingleValue("duration");
  const trainingType = getSingleValue("trainingType");
  const location = document.querySelector("#todayLocation").value || state.profile.defaultLocation;

  if (!state.profile) {
    showToast("Cria o perfil antes de gerar treinos.");
    showScreen("onboardingScreen");
    return;
  }

  if (!muscles.length || !duration || !trainingType) {
    showToast("Escolhe músculos, tempo e tipo de treino.");
    return;
  }

  const workout = buildWorkout({ muscles, duration, trainingType, location, split: trainingMode });

  if (!workout.exercises.length) {
    showToast("Não encontrei exercícios compatíveis. Ajusta músculos, local ou limitação.");
    return;
  }

  state.currentWorkout = workout;
  state.currentExerciseIndex = 0;
  saveWorkoutDraft();
  updateContinueWorkoutButton();
  showScreen("workoutScreen");
  renderCurrentExercise();
}

function buildWorkout(context) {
  const profile = state.profile;
  const targetCount = getExerciseCount(context.muscles, profile);
  const sets = getSetCount(profile.level, profile.weeklyStimulus);
  const reps = getRepRange(profile.goal);
  const rest = getRestRange(context.trainingType);
  const limitation = profile.limitation === "nenhuma" ? null : profile.limitation;

  let candidates = EXERCISES.filter((exercise) => {
    const matchesMuscle = context.muscles.includes(exercise.musculo);
    const matchesEquipment = exercise.equipamento === context.location || (context.location === "ginásio" && exercise.equipamento === "máquinas");
    const respectsLimitation = !limitation || !exercise.evitar.includes(limitation);
    const respectsLevel = LEVEL_RANK[exercise.nivel] <= LEVEL_RANK[profile.level];
    return matchesMuscle && matchesEquipment && respectsLimitation && respectsLevel;
  });

  // If the exact home type is too restrictive, allow bodyweight work for dumbbell home sessions.
  if (context.location === "casa com halteres") {
    const bodyweightFallback = EXERCISES.filter((exercise) => {
      const respectsLimitation = !limitation || !exercise.evitar.includes(limitation);
      return (
        context.muscles.includes(exercise.musculo) &&
        exercise.equipamento === "casa sem equipamento" &&
        respectsLimitation &&
        LEVEL_RANK[exercise.nivel] <= LEVEL_RANK[profile.level]
      );
    });
    candidates = [...candidates, ...bodyweightFallback];
  }

  const sorted = candidates.sort((a, b) => {
    const aWeak = profile.weakPoints.includes(a.musculo) ? 1 : 0;
    const bWeak = profile.weakPoints.includes(b.musculo) ? 1 : 0;
    return bWeak - aWeak || TYPE_ORDER[a.tipo] - TYPE_ORDER[b.tipo] || a.musculo.localeCompare(b.musculo);
  });

  const selected = buildStructuredSession(sorted, context.muscles, targetCount, profile.weakPoints, WORKOUT_SPLITS[context.split]);
  const estimatedTime = getEstimatedTime(selected, sets, rest);

  return {
    date: new Date().toISOString(),
    muscles: context.muscles,
    duration: context.duration,
    trainingType: context.trainingType,
    split: context.split,
    location: context.location,
    rest,
    estimatedTime,
    exercises: selected.map((exercise) => ({
      ...exercise,
      sets,
      reps,
      rest,
      instructions: exercise.instructions || getExerciseInstructions(exercise),
      performance: Array.from({ length: sets }, () => ({ weight: "", reps: "" })),
    })),
  };
}

function buildStructuredSession(candidates, muscles, targetCount, weakPoints, preserveMuscleOrder = false) {
  const selected = [];
  const usedNames = new Set();
  const orderedMuscles = preserveMuscleOrder
    ? [...muscles]
    : [...muscles].sort((a, b) => {
        return Number(weakPoints.includes(b)) - Number(weakPoints.includes(a));
      });

  const addExercise = (exercise) => {
    if (!exercise || selected.length >= targetCount || usedNames.has(exercise.nome)) return;
    selected.push(exercise);
    usedNames.add(exercise.nome);
  };

  orderedMuscles.forEach((muscle) => {
    ["composto", "secundario", "isolamento"].forEach((type) => {
      addExercise(findExercise(candidates, muscle, type, usedNames));
    });
  });

  ["composto", "secundario", "isolamento", "finalizador"].forEach((type) => {
    orderedMuscles.forEach((muscle) => {
      addExercise(findExercise(candidates, muscle, type, usedNames));
    });
  });

  candidates
    .filter((exercise) => !usedNames.has(exercise.nome))
    .sort((a, b) => TYPE_ORDER[a.tipo] - TYPE_ORDER[b.tipo] || a.musculo.localeCompare(b.musculo))
    .forEach(addExercise);

  return selected.sort((a, b) => {
    return TYPE_ORDER[a.tipo] - TYPE_ORDER[b.tipo] || orderedMuscles.indexOf(a.musculo) - orderedMuscles.indexOf(b.musculo);
  });
}

function findExercise(candidates, muscle, type, usedNames) {
  return candidates.find((exercise) => {
    return exercise.musculo === muscle && exercise.tipo === type && !usedNames.has(exercise.nome);
  });
}

function getExerciseCount(muscles, profile) {
  const muscleCount = muscles.length;

  if (profile.goal === "hipertrofia") {
    if (muscleCount === 1) return profile.level === "iniciante" ? 4 : 5;
    if (muscleCount === 2) return profile.level === "avançado" ? 8 : 6;
    return profile.level === "iniciante" ? 8 : 10;
  }

  if (profile.goal === "força") {
    if (profile.level === "iniciante") return 3;
    if (profile.level === "intermédio") return 4;
    return 6;
  }

  if (profile.goal === "emagrecimento") {
    if (profile.level === "iniciante") return 5;
    if (profile.level === "intermédio") return 6;
    return 8;
  }

  return muscleCount === 1 ? 4 : clamp(muscleCount * 3, 5, 8);
}

function getSetCount(level, weeklyStimulus) {
  const ranges = {
    iniciante: [3, 3],
    intermédio: [3, 4],
    avançado: [4, 5],
  };
  const [min, max] = ranges[level] || ranges.iniciante;
  return weeklyStimulus === "1x por semana" ? max : min;
}

function getExerciseType(exercise) {
  const name = exercise.nome.toLowerCase();

  if (
    name.includes("supino reto") ||
    name.includes("remada curvada") ||
    name.includes("peso morto") ||
    name.includes("agachamento livre") ||
    name.includes("press militar") ||
    name.includes("pike push")
  ) {
    return "composto";
  }

  if (
    name.includes("supino inclinado") ||
    name.includes("chest press") ||
    name.includes("flex") ||
    name.includes("press com halteres") ||
    name.includes("puxada") ||
    name.includes("remada sentada") ||
    name.includes("remada unilateral") ||
    name.includes("leg press") ||
    name.includes("goblet") ||
    name.includes("afundos") ||
    name.includes("shoulder press") ||
    name.includes("dips") ||
    name.includes("suitcase")
  ) {
    return "secundario";
  }

  if (
    name.includes("pec deck") ||
    name.includes("aberturas") ||
    name.includes("pullover") ||
    name.includes("prone y") ||
    name.includes("extens") ||
    name.includes("curl") ||
    name.includes("ponte") ||
    name.includes("eleva") ||
    name.includes("reverse") ||
    name.includes("tríceps") ||
    name.includes("crunch") ||
    name.includes("abdominal") ||
    name.includes("rota")
  ) {
    return "isolamento";
  }

  return "finalizador";
}

function getExerciseInstructions(exercise) {
  const name = exercise.nome.toLowerCase();

  if (name.includes("supino") || name.includes("chest press") || name.includes("press plano") || name.includes("press inclinado")) {
    return "Baixa o peso de forma controlada até perto do peito e empurra sem perder a estabilidade dos ombros.";
  }
  if (name.includes("flex")) {
    return "Mantém o corpo alinhado, desce com controlo e empurra o chão sem deixar a bacia cair.";
  }
  if (name.includes("crossover") || name.includes("pec deck") || name.includes("crucifixo") || name.includes("abertura")) {
    return "Abre os braços com controlo e junta as mãos à frente do peito sem encolher os ombros.";
  }
  if (name.includes("remada")) {
    return "Puxa o peso em direção ao tronco mantendo o peito aberto e as costas estáveis.";
  }
  if (name.includes("puxada") || name.includes("barra fixa") || name.includes("chin-up")) {
    return "Puxa a barra em direção ao peito, mantém o tronco firme e controla a subida.";
  }
  if (name.includes("pullover")) {
    return "Leva o peso atrás da cabeça com controlo e volta a puxar mantendo as costelas estáveis.";
  }
  if (name.includes("peso morto")) {
    return "Mantém as costas direitas, leva a anca para trás e sobe empurrando o chão.";
  }
  if (name.includes("agachamento") || name.includes("squat")) {
    return "Desce controladamente mantendo as costas direitas e sobe empurrando pelo calcanhar.";
  }
  if (name.includes("leg press") || name.includes("hack squat")) {
    return "Desce a plataforma com controlo e empurra pelos pés sem bloquear os joelhos com força.";
  }
  if (name.includes("afundo") || name.includes("bulgarian") || name.includes("step-up")) {
    return "Mantém o tronco estável, desce com controlo e sobe empurrando pela perna da frente.";
  }
  if (name.includes("hip thrust") || name.includes("ponte")) {
    return "Sobe a anca contraindo os glúteos e evita arquear demasiado a lombar.";
  }
  if (name.includes("extens") || name.includes("cadeira extensora")) {
    return "Estende as pernas com controlo e volta devagar sem balançar o corpo.";
  }
  if (name.includes("curl femoral")) {
    return "Dobra os joelhos com controlo e volta devagar mantendo a anca estável.";
  }
  if (name.includes("gémeos") || name.includes("gemeos")) {
    return "Sobe os calcanhares ao máximo e desce devagar até sentir alongar a barriga da perna.";
  }
  if (name.includes("press militar") || name.includes("shoulder press") || name.includes("push press") || name.includes("press arnold")) {
    return "Empurra o peso acima da cabeça mantendo o tronco firme e controla a descida.";
  }
  if (name.includes("elevação lateral") || name.includes("lateral raise") || name.includes("elevação frontal")) {
    return "Levanta os halteres com controlo até à linha dos ombros, sem balançar o tronco.";
  }
  if (name.includes("face pull") || name.includes("reverse") || name.includes("posterior") || name.includes("y-t-w") || name.includes("prone y")) {
    return "Puxa ou levanta com movimento curto e controlado, mantendo os ombros longe das orelhas.";
  }
  if (name.includes("curl")) {
    return "Dobra o cotovelo sem balançar o corpo e desce o peso de forma controlada.";
  }
  if (name.includes("tríceps") || name.includes("tricep") || name.includes("kickback") || name.includes("supino fechado") || name.includes("dips")) {
    return "Estende os braços com controlo, mantém os cotovelos estáveis e evita encolher os ombros.";
  }
  if (name.includes("prancha") || name.includes("hollow") || name.includes("wall sit") || name.includes("pike hold")) {
    return "Mantém a posição firme, respira com controlo e evita perder o alinhamento do corpo.";
  }
  if (name.includes("crunch") || name.includes("abdominal")) {
    return "Sobe o tronco de forma curta e controlada, sem puxar o pescoço.";
  }
  if (name.includes("dead bug") || name.includes("mountain") || name.includes("russian") || name.includes("rotação")) {
    return "Mantém o abdómen firme e move braços ou pernas sem deixar a lombar perder estabilidade.";
  }
  if (name.includes("carry") || name.includes("suitcase") || name.includes("farmer")) {
    return "Caminha com o tronco alto, ombros estáveis e abdómen firme durante todo o percurso.";
  }

  return "Executa o movimento com controlo, mantém boa postura e evita usar balanço.";
}

function getExerciseInstructions(exercise) {
  const name = normalizeInstructionText(exercise.nome);
  const muscle = normalizeInstructionText(exercise.musculo);
  const type = normalizeInstructionText(exercise.tipo || getExerciseType(exercise));

  if (hasInstructionTerm(name, ["remada", "puxada", "barra fixa", "chin-up", "pullover", "face pull"])) {
    return "Puxa controladamente até ao tronco e desce devagar.";
  }
  if (hasInstructionTerm(name, ["supino", "chest press", "press", "flexao", "flexoes", "dips"])) {
    return "Empurra com controlo sem bloquear totalmente os cotovelos.";
  }
  if (hasInstructionTerm(name, ["agachamento", "squat", "leg press", "hack", "afundo", "bulgarian", "step-up"])) {
    return "Controla a descida e sobe mantendo o core firme.";
  }
  if (hasInstructionTerm(name, ["peso morto", "romeno", "sumo", "hip thrust", "ponte"])) {
    return "Leva a anca para trás e sobe contraindo no topo.";
  }
  if (hasInstructionTerm(name, ["curl femoral", "extensao", "extens", "gemeos", "cadeira extensora"])) {
    return "Move devagar e contrai no topo do movimento.";
  }
  if (hasInstructionTerm(name, ["curl", "triceps", "kickback", "frances", "preacher"])) {
    return "Mantém os cotovelos estáveis e controla a descida.";
  }
  if (hasInstructionTerm(name, ["elevacao", "lateral raise", "reverse", "posterior", "y-t-w", "prone y"])) {
    return "Levanta com controlo sem balançar o tronco.";
  }
  if (hasInstructionTerm(name, ["prancha", "crunch", "abdominal", "dead bug", "russian", "mountain", "hollow", "carry", "suitcase", "farmer", "pallof", "ab wheel"])) {
    return "Mantém o abdómen firme e controla todo o movimento.";
  }
  if (type === "isolamento") {
    return "Move devagar e contrai bem no fim do movimento.";
  }
  if (type === "composto") {
    return "Controla a descida e mantém o corpo estável.";
  }
  if (muscle === "costas") {
    return "Puxa com controlo mantendo o peito aberto.";
  }
  if (muscle === "pernas") {
    return "Desce com controlo e sobe mantendo boa postura.";
  }
  if (muscle === "core") {
    return "Mantém o core firme e respira com controlo.";
  }

  return "Executa com controlo e boa postura.";
}

function normalizeInstructionText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function hasInstructionTerm(value, terms) {
  return terms.some((term) => value.includes(normalizeInstructionText(term)));
}

function getEstimatedTime(exercises, sets, rest) {
  const restMinutes = {
    "30-60s": [0.5, 1],
    "60-90s": [1, 1.5],
    "90-120s": [1.5, 2],
  }[rest] || [1, 1.5];
  const workMinutesByType = {
    composto: [2.5, 3],
    secundario: [2, 2.5],
    isolamento: [1.5, 2],
    finalizador: [2, 3],
  };

  const [min, max] = exercises.reduce(
    (total, exercise) => {
      const work = workMinutesByType[exercise.tipo] || workMinutesByType.secundario;
      total[0] += sets * work[0] + Math.max(sets - 1, 0) * restMinutes[0];
      total[1] += sets * work[1] + Math.max(sets - 1, 0) * restMinutes[1];
      return total;
    },
    [6, 8]
  );

  return `${Math.round(min)}-${Math.round(max)} min`;
}

function getRepRange(goal) {
  return {
    hipertrofia: "8-12",
    força: "4-6",
    emagrecimento: "10-15",
    manutenção: "8-12",
  }[goal];
}

function getRestRange(trainingType) {
  return {
    "rápido e intenso": "30-60s",
    equilibrado: "60-90s",
    completo: "90-120s",
  }[trainingType];
}

function renderCurrentExercise() {
  const workout = state.currentWorkout;
  const index = state.currentExerciseIndex;
  const currentExercise = workout.exercises[index];
  const exercise = currentExercise;
  const progress = ((index + 1) / workout.exercises.length) * 100;
  const exerciseInstructions = document.querySelector("#exerciseInstructions");

  document.querySelector("#workoutProgress").textContent = `${index}/${workout.exercises.length} exercícios concluídos`;
  document.querySelector("#progressBar").style.width = `${progress}%`;
  document.querySelector("#exerciseMeta").textContent = `${exercise.musculo} • ${exercise.tipo} • ${exercise.reps} reps • ${exercise.equipamento}`;
  document.querySelector("#workoutTitle").textContent = exercise.nome;
  if (exerciseInstructions) {
    exerciseInstructions.textContent = currentExercise.instructions?.trim() || "Executa com controlo e boa postura.";
    exerciseInstructions.classList.remove("hidden");
  }
  document.querySelector("#restHint").textContent = `Descanso sugerido: ${workout.rest} • Tempo estimado: ${workout.estimatedTime}`;
  renderWorkoutCoaching();

  const setsList = document.querySelector("#setsList");
  setsList.innerHTML = "";

  exercise.performance.forEach((set, setIndex) => {
    const row = document.createElement("div");
    row.className = "set-row";
    row.innerHTML = `
      <strong>${setIndex + 1}</strong>
      <label>Peso
        <input type="number" inputmode="decimal" min="0" step="0.5" value="${escapeHtml(set.weight)}" data-set="${setIndex}" data-kind="weight" placeholder="kg" />
      </label>
      <label>Reps
        <input type="number" inputmode="numeric" min="0" step="1" value="${escapeHtml(set.reps)}" data-set="${setIndex}" data-kind="reps" placeholder="${exercise.reps}" />
      </label>
    `;
    updateSetRowCompletion(row, exercise.performance[setIndex]);
    setsList.appendChild(row);
  });

  setsList.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", (event) => {
      const setIndex = Number(event.target.dataset.set);
      const kind = event.target.dataset.kind;
      exercise.performance[setIndex][kind] = event.target.value;
      updateSetRowCompletion(event.target.closest(".set-row"), exercise.performance[setIndex]);
      saveWorkoutDraft();
      updateContinueWorkoutButton();
      renderWorkoutCoaching();
    });
  });

  document.querySelector("#prevExerciseButton").disabled = index === 0;
  document.querySelector("#prevExerciseButton").style.opacity = index === 0 ? "0.45" : "1";
  document.querySelector("#nextExerciseButton").classList.toggle("hidden", index === workout.exercises.length - 1);
  document.querySelector("#finishWorkoutButton").classList.toggle("hidden", index !== workout.exercises.length - 1);
  saveWorkoutDraft();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function nextExercise() {
  if (state.currentExerciseIndex < state.currentWorkout.exercises.length - 1) {
    state.currentExerciseIndex += 1;
    renderCurrentExercise();
  }
}

function previousExercise() {
  if (state.currentExerciseIndex > 0) {
    state.currentExerciseIndex -= 1;
    renderCurrentExercise();
  }
}

function renderWorkoutCoaching() {
  const workout = state.currentWorkout;
  if (!workout) return;

  const mainExercise = getMainExercise(workout);
  document.querySelector("#workoutIdentity").textContent = getWorkoutDayTitle(workout);
  document.querySelector("#workoutFocus").textContent = `Foco: ${getWorkoutFocus(workout)}`;
  document.querySelector("#workoutGoal").textContent = `Objetivo: ${capitalize(state.profile?.goal || "treino")}`;
  document.querySelector("#workoutEstimatedTime").textContent = workout.estimatedTime || "-- min";
  document.querySelector("#mainExerciseName").textContent = mainExercise?.nome || "Movimento principal";
  document.querySelector("#mainExerciseFocus").textContent = getMainExerciseFocus(mainExercise);
  document.querySelector("#workoutRecoverySummary").innerHTML = getWorkoutRecoveryBadges(workout);
  document.querySelector("#contextCoachMessage").textContent = getContextCoachMessage(workout);
  document.querySelector("#liveCoachMessage").textContent = getLiveCoachMessage(workout);

  const recordMessage = getCurrentRecordMessage(workout.exercises[state.currentExerciseIndex]);
  const recordElement = document.querySelector("#recordCoachMessage");
  recordElement.textContent = recordMessage;
  recordElement.classList.toggle("hidden", !recordMessage);
}

function updateSetRowCompletion(row, set) {
  if (!row) return;
  row.classList.toggle("completed", Boolean(set.weight && set.reps));
}

function finishWorkout() {
  const summary = buildWorkoutSummary(state.currentWorkout);
  const history = readStorage(STORAGE_KEYS.history, []);
  history.unshift(state.currentWorkout);
  writeStorage(STORAGE_KEYS.history, history);
  savePersonalRecords(summary.newRecords);
  updateRecoveryAfterWorkout(state.currentWorkout);
  saveLastWorkoutSplit(state.currentWorkout.split);
  clearWorkoutDraft();
  state.currentWorkout = null;
  state.currentExerciseIndex = 0;
  updateContinueWorkoutButton();
  updateProfileStatus();
  showWorkoutSummary(summary);
  showScreen("homeScreen");
}

function continueWorkout() {
  if (!state.currentWorkout) return;
  showScreen("workoutScreen");
  renderCurrentExercise();
}

function saveLastWorkoutSplit(split) {
  if (!WORKOUT_SPLITS[split]) return;
  state.lastWorkoutSplit = split;
  writeStorage(STORAGE_KEYS.lastWorkoutSplit, split);
  updateProfileStatus();
}

function updateRecoveryAfterWorkout(workout) {
  const today = getTodayKey();
  const lastTrained = { ...state.lastTrained };
  const fatigue = { ...createEmptyFatigue(), ...state.fatigue, _lastUpdated: today };

  workout.muscles.forEach((muscle) => {
    lastTrained[muscle] = today;
  });

  workout.exercises.forEach((exercise) => {
    const muscle = exercise.musculo;
    fatigue[muscle] = (fatigue[muscle] || 0) + (FATIGUE_BY_TYPE[exercise.tipo] || 1);
  });

  state.lastTrained = lastTrained;
  state.fatigue = fatigue;
  writeStorage(STORAGE_KEYS.lastTrained, lastTrained);
  writeStorage(STORAGE_KEYS.fatigue, fatigue);
}

function buildWorkoutSummary(workout) {
  const previousRecords = getExerciseRecords(readStorage(STORAGE_KEYS.history, []));
  const newRecords = getNewRecords(workout, previousRecords);

  return {
    volume: getWorkoutVolume(workout),
    totalSets: workout.exercises.reduce((total, exercise) => total + (Number(exercise.sets) || 0), 0),
    dominantFocus: getDominantFocus(workout),
    estimatedTime: workout.estimatedTime,
    newRecords,
  };
}

function showWorkoutSummary(summary) {
  const content = document.querySelector("#workoutSummaryContent");
  const volumeLines = Object.entries(summary.volume)
    .map(([muscle, sets]) => `${sets} séries ${muscle}`)
    .join("<br>");
  const recordLines = summary.newRecords.length
    ? summary.newRecords.map((record) => `${escapeHtml(record.name)}<br>${record.weight}kg x ${record.reps}`).join("<br><br>")
    : "Sem novo recorde hoje. Boa consistência.";

  document.querySelector("#workoutSummaryTitle").textContent = "Sessão concluída 🔥";
  content.innerHTML = `
    <p><strong>Volume total:</strong><br>${summary.totalSets} séries</p>
    <p><strong>Foco dominante:</strong><br>${capitalize(summary.dominantFocus)}</p>
    <p><strong>Volume:</strong><br>${volumeLines}</p>
    <p><strong>Tempo estimado:</strong><br>${summary.estimatedTime}</p>
    <p><strong>Novo recorde:</strong><br>${recordLines}</p>
  `;
  document.querySelector("#workoutSummaryModal").classList.remove("hidden");
}

function closeWorkoutSummary() {
  document.querySelector("#workoutSummaryModal").classList.add("hidden");
}

function openExitWorkoutModal() {
  if (!state.currentWorkout) {
    showScreen("homeScreen");
    return;
  }

  saveWorkoutDraft();
  document.querySelector("#exitWorkoutModal").classList.remove("hidden");
}

function closeExitWorkoutModal() {
  document.querySelector("#exitWorkoutModal").classList.add("hidden");
}

function saveAndLeaveWorkout() {
  saveWorkoutDraft();
  updateContinueWorkoutButton();
  closeExitWorkoutModal();
  showScreen("homeScreen");
}

function abandonWorkout() {
  clearWorkoutDraft();
  state.currentWorkout = null;
  state.currentExerciseIndex = 0;
  updateContinueWorkoutButton();
  closeExitWorkoutModal();
  showScreen("homeScreen");
}

function restoreWorkoutDraft() {
  const draft = readStorage(STORAGE_KEYS.currentWorkoutDraft, null);
  if (!draft?.currentWorkout?.exercises?.length) return;

  state.currentWorkout = normalizeWorkout(draft.currentWorkout);
  state.currentExerciseIndex = clamp(
    Number(draft.currentExerciseIndex) || 0,
    0,
    state.currentWorkout.exercises.length - 1
  );
}

function normalizeWorkout(workout) {
  workout.exercises.forEach((exercise) => {
    if (!exercise.tipo) exercise.tipo = getExerciseType(exercise);
    if (!exercise.instructions) exercise.instructions = getExerciseInstructions(exercise);
    if (!exercise.rest) exercise.rest = workout.rest;
  });

  if (!workout.estimatedTime) {
    workout.estimatedTime = getEstimatedTime(workout.exercises, workout.exercises[0]?.sets || 3, workout.rest);
  }

  return workout;
}

function saveWorkoutDraft() {
  if (!state.currentWorkout) return;

  writeStorage(STORAGE_KEYS.currentWorkoutDraft, {
    currentWorkout: state.currentWorkout,
    currentExerciseIndex: state.currentExerciseIndex,
  });
}

function clearWorkoutDraft() {
  localStorage.removeItem(STORAGE_KEYS.currentWorkoutDraft);
}

function updateContinueWorkoutButton() {
  const button = document.querySelector("#continueWorkoutButton");
  if (!button) return;
  button.disabled = !state.currentWorkout;
  button.setAttribute("aria-disabled", String(!state.currentWorkout));
}

function showHistory() {
  const history = readStorage(STORAGE_KEYS.history, []);
  const list = document.querySelector("#historyList");
  const details = document.querySelector("#historyDetails");

  list.innerHTML = "";
  details.classList.add("hidden");
  details.innerHTML = "";

  if (!history.length) {
    list.innerHTML = `<p class="empty-state">Ainda não há treinos guardados.</p>`;
  }

  history.forEach((workout, index) => {
    const button = document.createElement("button");
    button.className = "history-item";
    button.type = "button";
    const volume = getWorkoutVolume(workout);
    const volumeSummary = Object.entries(volume)
      .map(([muscle, sets]) => `${sets} séries ${muscle}`)
      .join(" • ");
    button.innerHTML = `
      <small>${getSplitLabel(workout.split || "manual")}</small>
      <strong>${formatDate(workout.date)}</strong>
      <span>${workout.muscles.join(", ")} • ${workout.estimatedTime || workout.duration}</span>
      <em>${volumeSummary}</em>
    `;
    button.addEventListener("click", () => renderHistoryDetails(workout));
    list.appendChild(button);

    if (index === 0) renderHistoryDetails(workout);
  });

  showScreen("historyScreen");
}

function renderHistoryDetails(workout) {
  const details = document.querySelector("#historyDetails");
  details.classList.remove("hidden");
  details.innerHTML = `
    <h3>${formatDate(workout.date)}</h3>
    <p class="profile-line">${workout.muscles.join(", ")} • Tempo estimado: ${workout.estimatedTime || workout.duration} • ${workout.location}</p>
    ${workout.exercises
      .map((exercise) => {
        const sets = exercise.performance
          .map((set, index) => `${index + 1}. ${set.weight || "0"} kg x ${set.reps || "0"} reps`)
          .join("<br>");
        return `<div class="detail-exercise"><strong>${exercise.nome}</strong><p class="profile-line">${sets}</p></div>`;
      })
      .join("")}
  `;
}

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.id === screenId);
  });
  updateBottomNav(screenId);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateBottomNav(screenId) {
  const activeNavByScreen = {
    homeScreen: "navHomeButton",
    generatorScreen: "navTrainingButton",
    workoutScreen: "navTrainingButton",
    historyScreen: "navHistoryButton",
    onboardingScreen: "navProfileButton",
  };
  const activeId = activeNavByScreen[screenId];

  document.querySelectorAll(".bottom-action-bar .nav-button").forEach((button) => {
    const isActive = button.id === activeId;
    button.classList.toggle("active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

function updateProfileStatus() {
  const status = document.querySelector("#profileStatus");
  const summary = document.querySelector("#profileSummary");
  const insights = document.querySelector("#profileInsights");
  const homeTitle = document.querySelector("#homeTitle");

  if (!state.profile) {
    status.textContent = "Sem perfil";
    status.classList.remove("ready");
    insights.innerHTML = "";
    return;
  }

  status.textContent = "Perfil ativo";
  status.classList.add("ready");
  summary.textContent = `${state.profile.goal} • ${state.profile.level} • ${state.profile.defaultLocation}`;
  const suggestedSplit = getSuggestedSplit();
  const recoveryLine = getRecoveryLine();
  const suggestionReason = getSuggestionReason(suggestedSplit);
  const weeklyFrequencyLine = getWeeklyFrequencyLine(suggestedSplit);
  const streak = getTrainingStreak();
  const quickInsight = getQuickInsight();
  const weeklyWorkouts = getWeeklyWorkoutCount();
  const recentRecord = getRecentPersonalRecord();
  homeTitle.textContent = getHomeHeadline(suggestedSplit, streak);
  summary.textContent = getHomeSubline(suggestedSplit, weeklyWorkouts);
  insights.innerHTML = `
    <h3>Mentis hoje</h3>
    <div class="momentum-row">
      <span class="retention-badge">🔥 ${streak || 0} ${streak === 1 ? "treino seguido" : "treinos seguidos"}</span>
      <span class="retention-badge">${weeklyWorkouts}x esta semana</span>
      <span class="retention-badge">${quickInsight}</span>
    </div>
    <div class="insight-grid">
      <div class="insight">
        <strong>Hoje sugerido</strong>
        <span>${suggestedSplit ? getSplitLabel(suggestedSplit) : "Push"}.</span>
      </div>
      <div class="insight">
        <strong>Foco do treinador</strong>
        <span>${suggestionReason}</span>
      </div>
      <div class="insight">
        <strong>Recuperação</strong>
        <span>${recoveryLine}</span>
      </div>
      <div class="insight">
        <strong>Último treino</strong>
        <span>${state.lastWorkoutSplit ? getSplitLabel(state.lastWorkoutSplit) : "vamos começar a tua sequência"}.</span>
      </div>
      <div class="insight">
        <strong>Semana</strong>
        <span>${weeklyFrequencyLine}</span>
      </div>
      <div class="insight">
        <strong>Recorde recente</strong>
        <span>${recentRecord}</span>
      </div>
    </div>
  `;
  document.querySelector("#todayLocation").value = state.profile.defaultLocation;
}

function prepareWorkoutDefaults() {
  if (!state.profile) return;

  clearGroup("todayMuscles");
  const defaultMuscles = state.profile.weakPoints.length ? state.profile.weakPoints.slice(0, 2) : ["peito", "costas"];
  defaultMuscles.forEach((muscle) => setDefaultOption("todayMuscles", muscle));
  const suggestedSplit = getSuggestedSplit();
  setDefaultOption("trainingMode", suggestedSplit || "manual");
  syncMusclesFromTrainingMode(suggestedSplit || "manual");
  setDefaultOption("duration", "45 min");
  setDefaultOption("trainingType", "equilibrado");
  document.querySelector("#todayLocation").value = state.profile.defaultLocation;
}

function syncMusclesFromTrainingMode(mode) {
  const splitMuscles = WORKOUT_SPLITS[mode];
  if (!splitMuscles) return;

  clearGroup("todayMuscles");
  splitMuscles.forEach((muscle) => setDefaultOption("todayMuscles", muscle));
}

function getSuggestedSplit() {
  const fallback = SPLIT_SUGGESTIONS[state.lastWorkoutSplit] || "push";
  const splitScores = Object.keys(WORKOUT_SPLITS).map((split) => {
    return {
      split,
      score: getSplitRecoveryScore(split) + getSplitFrequencyScore(split) + (split === fallback ? 6 : 0),
    };
  });

  return splitScores.sort((a, b) => b.score - a.score)[0]?.split || fallback;
}

function getSplitLabel(split) {
  return SPLIT_LABELS[split] || split;
}

function getWorkoutDayTitle(workout) {
  const label = getSplitLabel(workout.split);
  return workout.split && workout.split !== "manual" ? `${label.toUpperCase()} DAY` : "TREINO DO DIA";
}

function getWorkoutFocus(workout) {
  const mainMuscles = workout.muscles.slice(0, 2).map(capitalize);
  if (workout.split === "push") return "Peito, ombros e tríceps";
  if (workout.split === "pull") return "Costas e bíceps";
  if (workout.split === "legs") return "Pernas e core";
  if (workout.split === "upper") return "Parte superior";
  if (workout.split === "lower") return "Parte inferior";
  if (workout.split === "fullbody") return "Corpo todo";
  return mainMuscles.join(" e ");
}

function getMainExercise(workout) {
  return workout.exercises.find((exercise) => exercise.tipo === "composto") || workout.exercises[0];
}

function getMainExerciseFocus(exercise) {
  if (!exercise) return "Boa execução";
  if (exercise.tipo === "composto") return "Carga progressiva";
  if (exercise.tipo === "secundario") return "Controlo e amplitude";
  return "Contração e técnica";
}

function getContextCoachMessage(workout) {
  const recoveryMessage = getMostRelevantRecoveryMessage(workout);
  const focusMessage = getSplitCoachingMessage(workout.split);
  return recoveryMessage ? `${recoveryMessage} ${focusMessage}` : focusMessage;
}

function getMostRelevantRecoveryMessage(workout) {
  const restingMuscle = MUSCLES.find((muscle) => {
    return getMuscleRecovery(muscle).level === "low" && !workout.muscles.includes(muscle);
  });

  if (restingMuscle) return `${capitalize(restingMuscle)} ainda em recuperação.`;

  const cautiousMuscle = workout.muscles.find((muscle) => getMuscleRecovery(muscle).level === "medium");
  if (cautiousMuscle) return `${capitalize(cautiousMuscle)} pede algum controlo hoje.`;

  return "";
}

function getSplitCoachingMessage(split) {
  return {
    push: "Hoje o foco é empurrar bem e manter ombros estáveis.",
    pull: "Hoje o foco é puxada e densidade dorsal.",
    legs: "Hoje o foco é base forte e controlo do core.",
    upper: "Hoje o foco é equilíbrio entre empurrar e puxar.",
    lower: "Hoje o foco é pernas sólidas e core ativo.",
    fullbody: "Hoje o foco é qualidade geral sem pressa.",
    manual: "Segue o plano com boa técnica e progressão.",
  }[split] || "Segue o plano com boa técnica e progressão.";
}

function getLiveCoachMessage(workout) {
  const completedCount = state.currentExerciseIndex;
  const current = workout.exercises[state.currentExerciseIndex];
  const previous = workout.exercises[state.currentExerciseIndex - 1];
  const next = workout.exercises[state.currentExerciseIndex + 1];

  if (completedCount === 0) {
    return "Começa controlado. A primeira série serve para encontrar o ritmo.";
  }

  if (previous?.tipo === "composto" && current?.tipo !== "composto") {
    return "Exercício composto concluído. Agora o foco passa para controlo e isolamento.";
  }

  if (next?.tipo === "finalizador") {
    return `${formatExerciseCount(completedCount)} concluído${completedCount === 1 ? "" : "s"}. Último bloco: boa técnica até ao fim.`;
  }

  return `${formatExerciseCount(completedCount)} concluído${completedCount === 1 ? "" : "s"}. Bom ritmo 🔥`;
}

function formatExerciseCount(count) {
  return `${count} ${count === 1 ? "exercício" : "exercícios"}`;
}

function getCurrentRecordMessage(exercise) {
  if (!exercise) return "";
  const previousRecords = getExerciseRecords(readStorage(STORAGE_KEYS.history, []));
  const bestSet = getBestSet(exercise);
  const previous = previousRecords[exercise.nome];

  if (!bestSet || !isNewRecord(bestSet, previous)) return "";
  return `Novo recorde: ${exercise.nome} • ${bestSet.weight}kg x ${bestSet.reps}`;
}

function getNewRecords(workout, previousRecords) {
  return workout.exercises
    .map((exercise) => {
      const bestSet = getBestSet(exercise);
      if (!bestSet || !isNewRecord(bestSet, previousRecords[exercise.nome])) return null;
      return {
        name: exercise.nome,
        weight: bestSet.weight,
        reps: bestSet.reps,
      };
    })
    .filter(Boolean);
}

function savePersonalRecords(newRecords) {
  if (!newRecords.length) return;
  const records = readStorage(STORAGE_KEYS.personalRecords, {});

  newRecords.forEach((record) => {
    records[record.name] = {
      weight: record.weight,
      reps: record.reps,
      date: getTodayKey(),
    };
  });

  writeStorage(STORAGE_KEYS.personalRecords, records);
}

function getExerciseRecords(history) {
  const records = {};

  history.forEach((workout) => {
    (workout.exercises || []).forEach((exercise) => {
      const bestSet = getBestSet(exercise);
      if (!bestSet || !isNewRecord(bestSet, records[exercise.nome])) return;
      records[exercise.nome] = bestSet;
    });
  });

  return records;
}

function getBestSet(exercise) {
  return (exercise.performance || []).reduce((best, set) => {
    const weight = Number(set.weight);
    const reps = Number(set.reps);
    if (!weight || !reps) return best;

    const candidate = { weight, reps };
    return isNewRecord(candidate, best) ? candidate : best;
  }, null);
}

function isNewRecord(candidate, previous) {
  if (!candidate) return false;
  if (!previous) return true;
  if (candidate.weight > previous.weight) return true;
  return candidate.weight === previous.weight && candidate.reps > previous.reps;
}

function getWorkoutVolume(workout) {
  return workout.exercises.reduce((volume, exercise) => {
    volume[exercise.musculo] = (volume[exercise.musculo] || 0) + (Number(exercise.sets) || 0);
    return volume;
  }, {});
}

function getDominantFocus(workout) {
  const volume = getWorkoutVolume(workout);
  return Object.entries(volume).sort((a, b) => b[1] - a[1])[0]?.[0] || workout.muscles[0] || "treino";
}

function getSuggestionReason(split) {
  const splitMuscles = WORKOUT_SPLITS[split] || [];
  const fatiguedOutsideSplit = MUSCLES.find((muscle) => {
    const recovery = getMuscleRecovery(muscle);
    return recovery.level === "low" && !splitMuscles.includes(muscle);
  });

  if (fatiguedOutsideSplit) {
    return `${capitalize(fatiguedOutsideSplit)} ainda em recuperação.`;
  }

  const weeklyCounts = getWeeklyMuscleCounts();
  const target = getWeeklyTarget();
  const underTarget = splitMuscles.find((muscle) => (weeklyCounts[muscle] || 0) < target);
  if (underTarget) {
    return `${capitalize(underTarget)} ainda precisa de estímulo esta semana.`;
  }

  return "boa continuidade com a divisão semanal atual.";
}

function getRecoveryLine() {
  return MUSCLES.map((muscle) => {
    const recovery = getMuscleRecovery(muscle);
    return `<span class="recovery-badge ${recovery.level}">${recovery.icon} ${capitalize(muscle)}</span>`;
  }).join("");
}

function getWorkoutRecoveryBadges(workout) {
  return workout.muscles
    .map((muscle) => {
      const recovery = getMuscleRecovery(muscle);
      return `<span class="recovery-badge ${recovery.level}">${recovery.icon} ${capitalize(muscle)}</span>`;
    })
    .join("");
}

function getHomeHeadline(suggestedSplit, streak) {
  if (streak >= 3) return `${streak} treinos na sequência. Mantém o ritmo.`;
  if (suggestedSplit && suggestedSplit !== "manual") return `${getSplitLabel(suggestedSplit)} pronto para dominar.`;
  return "Hoje é dia de evolução 🔥";
}

function getHomeSubline(suggestedSplit, weeklyWorkouts) {
  const label = suggestedSplit ? getSplitLabel(suggestedSplit) : "treino";
  if (weeklyWorkouts === 0) return `Começa a semana com ${label}. Simples, focado, feito.`;
  return `${weeklyWorkouts} ${weeklyWorkouts === 1 ? "sessão feita" : "sessões feitas"} esta semana. Próximo foco: ${label}.`;
}

function getTrainingStreak() {
  const dates = getTrainingDateKeys();
  if (!dates.length) return 0;

  let cursor = dates[0];
  let streak = 1;

  for (let index = 1; index < dates.length; index += 1) {
    const expected = addDays(cursor, -1);
    if (dates[index] !== expected) break;
    streak += 1;
    cursor = dates[index];
  }

  return streak;
}

function getTrainingDateKeys() {
  const history = readStorage(STORAGE_KEYS.history, []);
  return [...new Set(history.map((workout) => toDateKey(workout.date)).filter(Boolean))]
    .sort((a, b) => new Date(`${b}T00:00:00`) - new Date(`${a}T00:00:00`));
}

function getWeeklyWorkoutCount() {
  const history = readStorage(STORAGE_KEYS.history, []);
  const weekStart = getWeekStart(new Date());
  return history.filter((workout) => {
    const workoutDate = new Date(workout.date);
    return !Number.isNaN(workoutDate.getTime()) && workoutDate >= weekStart;
  }).length;
}

function getQuickInsight() {
  const history = readStorage(STORAGE_KEYS.history, []);
  const thisWeekExercises = getExerciseCountForWeek(history, 0);
  const lastWeekExercises = getExerciseCountForWeek(history, 1);
  const weeklyCounts = getWeeklyMuscleCounts();
  const topMuscle = Object.entries(weeklyCounts).sort((a, b) => b[1] - a[1])[0];

  if (thisWeekExercises > lastWeekExercises) {
    return `+${thisWeekExercises - lastWeekExercises} exercícios esta semana`;
  }

  if (topMuscle?.[1] > 0) {
    return `${capitalize(topMuscle[0])} ${topMuscle[1]}x esta semana`;
  }

  return "primeiro treino da semana";
}

function getExerciseCountForWeek(history, weeksAgo) {
  const weekStart = getWeekStart(new Date());
  weekStart.setDate(weekStart.getDate() - weeksAgo * 7);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 7);

  return history.reduce((total, workout) => {
    const workoutDate = new Date(workout.date);
    if (Number.isNaN(workoutDate.getTime()) || workoutDate < weekStart || workoutDate >= weekEnd) return total;
    return total + (workout.exercises?.length || 0);
  }, 0);
}

function getRecentPersonalRecord() {
  const records = readStorage(STORAGE_KEYS.personalRecords, {});
  const latest = Object.entries(records).sort((a, b) => {
    return new Date(b[1].date || 0) - new Date(a[1].date || 0);
  })[0];

  if (!latest) return "ainda sem PR registado.";
  const [name, record] = latest;
  return `${name}: ${record.weight}kg x ${record.reps}.`;
}

function getWeeklyFrequencyLine(split) {
  const target = getWeeklyTarget();
  const counts = getWeeklyMuscleCounts();
  const muscles = (WORKOUT_SPLITS[split] || MUSCLES).slice(0, 4);
  const current = muscles.map((muscle) => `${muscle} ${counts[muscle] || 0}x`).join(", ");
  return `Objetivo: ${target}x/semana<br>Atual: ${current} esta semana`;
}

function getSplitRecoveryScore(split) {
  const muscles = WORKOUT_SPLITS[split] || [];
  if (!muscles.length) return 0;

  const score = muscles.reduce((total, muscle) => {
    const recovery = getMuscleRecovery(muscle);
    if (recovery.level === "high") return total + 4;
    if (recovery.level === "medium") return total + 1;
    return total - 5;
  }, 0);
  return score / muscles.length;
}

function getSplitFrequencyScore(split) {
  const muscles = WORKOUT_SPLITS[split] || [];
  const counts = getWeeklyMuscleCounts();
  const target = getWeeklyTarget();

  const score = muscles.reduce((total, muscle) => {
    return total + Math.max(target - (counts[muscle] || 0), 0);
  }, 0);
  return score / muscles.length;
}

function getMuscleRecovery(muscle) {
  const fatigue = Number(state.fatigue[muscle]) || 0;
  const trainedAt = state.lastTrained[muscle];
  const daysSinceTraining = trainedAt ? getDaysBetween(trainedAt, getTodayKey()) : Number.POSITIVE_INFINITY;

  if (daysSinceTraining <= 1 || fatigue >= 5) {
    return { level: "low", icon: "🔴" };
  }

  if (daysSinceTraining <= 2 || fatigue >= 3) {
    return { level: "medium", icon: "🟡" };
  }

  return { level: "high", icon: "🟢" };
}

function getWeeklyTarget() {
  return Number.parseInt(state.profile?.weeklyStimulus, 10) || 2;
}

function getWeeklyMuscleCounts() {
  const counts = Object.fromEntries(MUSCLES.map((muscle) => [muscle, 0]));
  const history = readStorage(STORAGE_KEYS.history, []);
  const weekStart = getWeekStart(new Date());

  history.forEach((workout) => {
    const workoutDate = new Date(workout.date);
    if (Number.isNaN(workoutDate.getTime()) || workoutDate < weekStart) return;
    new Set(workout.muscles || []).forEach((muscle) => {
      if (counts[muscle] !== undefined) counts[muscle] += 1;
    });
  });

  return counts;
}

function applyDailyFatigueRecovery(storedFatigue) {
  const today = getTodayKey();
  const fatigue = { ...createEmptyFatigue(), ...storedFatigue };
  const lastUpdated = fatigue._lastUpdated || today;
  const daysSinceUpdate = getDaysBetween(lastUpdated, today);

  if (daysSinceUpdate > 0) {
    MUSCLES.forEach((muscle) => {
      fatigue[muscle] = Math.max((Number(fatigue[muscle]) || 0) - daysSinceUpdate * DAILY_FATIGUE_RECOVERY, 0);
    });
  }

  fatigue._lastUpdated = today;
  return fatigue;
}

function createEmptyFatigue() {
  return {
    peito: 0,
    costas: 0,
    pernas: 0,
    ombros: 0,
    braços: 0,
    core: 0,
    _lastUpdated: getTodayKey(),
  };
}

function getTodayKey() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function toDateKey(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function addDays(dateKey, days) {
  const date = new Date(`${dateKey}T00:00:00`);
  date.setDate(date.getDate() + days);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function getDaysBetween(startDate, endDate) {
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;
  return Math.max(Math.floor((end - start) / 86400000), 0);
}

function getWeekStart(date) {
  const start = new Date(date);
  const day = start.getDay() || 7;
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - day + 1);
  return start;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function getSingleValue(field) {
  return document.querySelector(`[data-field="${field}"] .selected`)?.dataset.value || "";
}

function getMultiValue(field) {
  return [...document.querySelectorAll(`[data-field="${field}"] .selected`)].map((button) => button.dataset.value);
}

function getNumberInput(selector) {
  const rawValue = document.querySelector(selector).value.trim();
  return rawValue === "" ? Number.NaN : Number(rawValue);
}

function setDefaultOption(field, value) {
  const container = document.querySelector(`[data-field="${field}"]`);
  if (!container) return;
  if (!container.classList.contains("multi")) clearGroup(field);
  const button = [...container.querySelectorAll(".option-button")].find((item) => item.dataset.value === value);
  if (button) setSelected(button, true);
}

function clearGroup(field) {
  document.querySelectorAll(`[data-field="${field}"] .option-button`).forEach((button) => setSelected(button, false));
}

function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("pt-PT", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

function formatBackupDate(date) {
  if (!date) return "nunca";
  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return "nunca";
  return new Intl.DateTimeFormat("pt-PT", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(parsedDate);
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3200);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[char];
  });
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(() => {
        console.log("Service Worker registado.");
      })
      .catch((error) => {
        console.log("Erro ao registar Service Worker:", error);
      });
  });
}
