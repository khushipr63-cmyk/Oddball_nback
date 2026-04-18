/********************** 
 * Oddball_Nback *
 **********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Oddball_NBack';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructions1RoutineBegin());
flowScheduler.add(instructions1RoutineEachFrame());
flowScheduler.add(instructions1RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(instructions2RoutineBegin());
flowScheduler.add(instructions2RoutineEachFrame());
flowScheduler.add(instructions2RoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);


flowScheduler.add(practice_endRoutineBegin());
flowScheduler.add(practice_endRoutineEachFrame());
flowScheduler.add(practice_endRoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);


flowScheduler.add(routine_2bendRoutineBegin());
flowScheduler.add(routine_2bendRoutineEachFrame());
flowScheduler.add(routine_2bendRoutineEnd());
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);


flowScheduler.add(routine_3bendRoutineBegin());
flowScheduler.add(routine_3bendRoutineEachFrame());
flowScheduler.add(routine_3bendRoutineEnd());
const trials_5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_5LoopBegin(trials_5LoopScheduler));
flowScheduler.add(trials_5LoopScheduler);
flowScheduler.add(trials_5LoopEnd);


flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions files/conditions.xlsx', 'path': 'conditions files/conditions.xlsx'},
    {'name': 'conditions files/2back_practice.csv', 'path': 'conditions files/2back_practice.csv'},
    {'name': 'conditions files/2back_main.csv', 'path': 'conditions files/2back_main.csv'},
    {'name': 'conditions files/3back_main.csv', 'path': 'conditions files/3back_main.csv'},
    {'name': 'conditions files/4back_main.csv', 'path': 'conditions files/4back_main.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructions1Clock;
var instruction;
var key_resp;
var OddballClock;
var fixation;
var square_stim;
var resp_key;
var ISI;
var instructions2Clock;
var instructions;
var instructions_key;
var practiceClock;
var fix;
var letter_stim;
var response;
var isi_2;
var practice_endClock;
var block_end_text;
var block_end_key;
var routine_2backClock;
var fix_2;
var letter_stim_2;
var response_2;
var isi;
var routine_2bendClock;
var block_end_text_2;
var block_end_key_2;
var routine_3backClock;
var fix_3;
var letter_stim_3;
var response_3;
var isi_3;
var routine_3bendClock;
var block_end_text_3;
var block_end_key_3;
var routine_4backClock;
var fix_4;
var letter_stim_4;
var response_4;
var isi_4;
var thanksClock;
var end_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions1"
  instructions1Clock = new util.Clock();
  instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction',
    text: 'Welcome!\n\nIn this task, you will see a sequence of coloured \nsquares appearing one at a time in the centre of the screen.\n\nThere are two types of squares:\n- BLUE squares appear most of the time\n- RED squares appear some  times\n\nYour task is simple:\n- Press Z when you see a BLUE square\n- Press M when you see a RED square\n\nTry to respond as quickly and accurately as possible.\n\nPress SPACE to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 70.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Oddball"
  OddballClock = new util.Clock();
  fixation = new visual.TextBox({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [4.0, 4.0],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  square_stim = new visual.Rect ({
    win: psychoJS.window, name: 'square_stim', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  resp_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  ISI = new visual.TextBox({
    win: psychoJS.window,
    name: 'ISI',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  // Initialize components for Routine "instructions2"
  instructions2Clock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'Thank you for completing the Oddball task.\n\nThis is followed by a short N-Back task, which is the final task.\n\nA sequence of letters will appear one at a time.\nPress SPACE if the current letter matches the letter 2 letters ago.\nOtherwise, do nothing.\n\nYou will now do a short practice. Press SPACE to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  instructions_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  fix = new visual.TextBox({
    win: psychoJS.window,
    name: 'fix',
    text: '+',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.06,
    lineSpacing: 1.0,
    size: [4.0, 4.0],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  letter_stim = new visual.TextBox({
    win: psychoJS.window,
    name: 'letter_stim',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.07,
    lineSpacing: 1.0,
    size: [50.0, 50.0],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  isi_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'isi_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  // Initialize components for Routine "practice_end"
  practice_endClock = new util.Clock();
  block_end_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'block_end_text',
    text: 'Practice trials are over\n\nPress SPACE when you are ready to continue to main trials.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  block_end_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "routine_2back"
  routine_2backClock = new util.Clock();
  fix_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'fix_2',
    text: '+',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.06,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  letter_stim_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'letter_stim_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.07,
    lineSpacing: 1.0,
    size: [50.0, 50.0],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  response_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  isi = new visual.TextBox({
    win: psychoJS.window,
    name: 'isi',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  // Initialize components for Routine "routine_2bend"
  routine_2bendClock = new util.Clock();
  block_end_text_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'block_end_text_2',
    text: 'In the next block, press SPACE if the current letter matches the letter 3 letters ago.\n\nOtherwise, do nothing.\n\nPress SPACE when you are ready to continue.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  block_end_key_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "routine_3back"
  routine_3backClock = new util.Clock();
  fix_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'fix_3',
    text: '+',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.06,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  letter_stim_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'letter_stim_3',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.07,
    lineSpacing: 1.0,
    size: [50.0, 50.0],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  response_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  isi_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'isi_3',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  // Initialize components for Routine "routine_3bend"
  routine_3bendClock = new util.Clock();
  block_end_text_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'block_end_text_3',
    text: 'In the next block, press SPACE if the current letter matches the letter 4 letters ago.\n\nOtherwise, do nothing.\n\nPress SPACE when you are ready to continue.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  block_end_key_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "routine_4back"
  routine_4backClock = new util.Clock();
  fix_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'fix_4',
    text: '+',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.06,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  letter_stim_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'letter_stim_4',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.07,
    lineSpacing: 1.0,
    size: [50.0, 50.0],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  response_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  isi_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'isi_4',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  end_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Thank you! The experiment is now complete.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var instructions1MaxDurationReached;
var _key_resp_allKeys;
var instructions1MaxDuration;
var instructions1Components;
function instructions1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions1Clock.reset();
    routineTimer.reset();
    instructions1MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('instructions1.started', globalClock.getTime());
    instructions1MaxDuration = null
    // keep track of which components have finished
    instructions1Components = [];
    instructions1Components.push(instruction);
    instructions1Components.push(key_resp);
    
    for (const thisComponent of instructions1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions1' ---
    // get current time
    t = instructions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction* updates
    if (t >= 0.0 && instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction.tStart = t;  // (not accounting for frame time here)
      instruction.frameNStart = frameN;  // exact frame index
      
      instruction.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions1' ---
    for (const thisComponent of instructions1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instructions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions files/conditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(OddballRoutineBegin(snapshot));
      trialsLoopScheduler.add(OddballRoutineEachFrame());
      trialsLoopScheduler.add(OddballRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions files/2back_practice.csv',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(practiceRoutineBegin(snapshot));
      trials_2LoopScheduler.add(practiceRoutineEachFrame());
      trials_2LoopScheduler.add(practiceRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions files/2back_main.csv',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(routine_2backRoutineBegin(snapshot));
      trials_3LoopScheduler.add(routine_2backRoutineEachFrame());
      trials_3LoopScheduler.add(routine_2backRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions files/3back_main.csv',
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_4 of trials_4) {
      snapshot = trials_4.getSnapshot();
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(routine_3backRoutineBegin(snapshot));
      trials_4LoopScheduler.add(routine_3backRoutineEachFrame());
      trials_4LoopScheduler.add(routine_3backRoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_5;
function trials_5LoopBegin(trials_5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions files/4back_main.csv',
      seed: undefined, name: 'trials_5'
    });
    psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
    currentLoop = trials_5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_5 of trials_5) {
      snapshot = trials_5.getSnapshot();
      trials_5LoopScheduler.add(importConditions(snapshot));
      trials_5LoopScheduler.add(routine_4backRoutineBegin(snapshot));
      trials_5LoopScheduler.add(routine_4backRoutineEachFrame());
      trials_5LoopScheduler.add(routine_4backRoutineEnd(snapshot));
      trials_5LoopScheduler.add(trials_5LoopEndIteration(trials_5LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_5LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_5);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_5LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var OddballMaxDurationReached;
var _resp_key_allKeys;
var OddballMaxDuration;
var OddballComponents;
function OddballRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Oddball' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    OddballClock.reset(routineTimer.getTime());
    routineTimer.add(2.500000);
    OddballMaxDurationReached = false;
    // update component parameters for each repeat
    square_stim.setFillColor(new util.Color(square_color));
    square_stim.setLineColor(new util.Color(square_color));
    resp_key.keys = undefined;
    resp_key.rt = undefined;
    _resp_key_allKeys = [];
    psychoJS.experiment.addData('Oddball.started', globalClock.getTime());
    OddballMaxDuration = null
    // keep track of which components have finished
    OddballComponents = [];
    OddballComponents.push(fixation);
    OddballComponents.push(square_stim);
    OddballComponents.push(resp_key);
    OddballComponents.push(ISI);
    
    for (const thisComponent of OddballComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function OddballRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Oddball' ---
    // get current time
    t = OddballClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    
    // *square_stim* updates
    if (t >= 1 && square_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square_stim.tStart = t;  // (not accounting for frame time here)
      square_stim.frameNStart = frameN;  // exact frame index
      
      square_stim.setAutoDraw(true);
    }
    
    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (square_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      square_stim.setAutoDraw(false);
    }
    
    
    // *resp_key* updates
    if (t >= 1 && resp_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_key.tStart = t;  // (not accounting for frame time here)
      resp_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_key.clearEvents(); });
    }
    
    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (resp_key.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      resp_key.status = PsychoJS.Status.FINISHED;
        }
      
    if (resp_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_key.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _resp_key_allKeys = _resp_key_allKeys.concat(theseKeys);
      if (_resp_key_allKeys.length > 0) {
        resp_key.keys = _resp_key_allKeys[0].name;  // just the first key pressed
        resp_key.rt = _resp_key_allKeys[0].rt;
        resp_key.duration = _resp_key_allKeys[0].duration;
        // was this correct?
        if (resp_key.keys == corrAns) {
            resp_key.corr = 1;
        } else {
            resp_key.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *ISI* updates
    if (t >= 0.0 && ISI.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ISI.tStart = t;  // (not accounting for frame time here)
      ISI.frameNStart = frameN;  // exact frame index
      
      ISI.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ISI.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ISI.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of OddballComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function OddballRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Oddball' ---
    for (const thisComponent of OddballComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Oddball.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (resp_key.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         resp_key.corr = 1;  // correct non-response
      } else {
         resp_key.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_key.corr, level);
    }
    psychoJS.experiment.addData('resp_key.keys', resp_key.keys);
    psychoJS.experiment.addData('resp_key.corr', resp_key.corr);
    if (typeof resp_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_key.rt', resp_key.rt);
        psychoJS.experiment.addData('resp_key.duration', resp_key.duration);
        routineTimer.reset();
        }
    
    resp_key.stop();
    if (OddballMaxDurationReached) {
        OddballClock.add(OddballMaxDuration);
    } else {
        OddballClock.add(2.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions2MaxDurationReached;
var _instructions_key_allKeys;
var instructions2MaxDuration;
var instructions2Components;
function instructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions2Clock.reset();
    routineTimer.reset();
    instructions2MaxDurationReached = false;
    // update component parameters for each repeat
    instructions_key.keys = undefined;
    instructions_key.rt = undefined;
    _instructions_key_allKeys = [];
    psychoJS.experiment.addData('instructions2.started', globalClock.getTime());
    instructions2MaxDuration = null
    // keep track of which components have finished
    instructions2Components = [];
    instructions2Components.push(instructions);
    instructions2Components.push(instructions_key);
    
    for (const thisComponent of instructions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions2' ---
    // get current time
    t = instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }
    
    
    // *instructions_key* updates
    if (t >= 0.0 && instructions_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_key.tStart = t;  // (not accounting for frame time here)
      instructions_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructions_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructions_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructions_key.clearEvents(); });
    }
    
    if (instructions_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_key.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_key_allKeys = _instructions_key_allKeys.concat(theseKeys);
      if (_instructions_key_allKeys.length > 0) {
        instructions_key.keys = _instructions_key_allKeys[_instructions_key_allKeys.length - 1].name;  // just the last key pressed
        instructions_key.rt = _instructions_key_allKeys[_instructions_key_allKeys.length - 1].rt;
        instructions_key.duration = _instructions_key_allKeys[_instructions_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions2' ---
    for (const thisComponent of instructions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instructions_key.corr, level);
    }
    psychoJS.experiment.addData('instructions_key.keys', instructions_key.keys);
    if (typeof instructions_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instructions_key.rt', instructions_key.rt);
        psychoJS.experiment.addData('instructions_key.duration', instructions_key.duration);
        routineTimer.reset();
        }
    
    instructions_key.stop();
    // the Routine "instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practiceMaxDurationReached;
var _response_allKeys;
var practiceMaxDuration;
var practiceComponents;
function practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    practiceClock.reset(routineTimer.getTime());
    routineTimer.add(2.500000);
    practiceMaxDurationReached = false;
    // update component parameters for each repeat
    letter_stim.setText(letter);
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    psychoJS.experiment.addData('practice.started', globalClock.getTime());
    practiceMaxDuration = null
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(fix);
    practiceComponents.push(letter_stim);
    practiceComponents.push(response);
    practiceComponents.push(isi_2);
    
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice' ---
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix.setAutoDraw(false);
    }
    
    
    // *letter_stim* updates
    if (t >= 0.55 && letter_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_stim.tStart = t;  // (not accounting for frame time here)
      letter_stim.frameNStart = frameN;  // exact frame index
      
      letter_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.55 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (letter_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      letter_stim.setAutoDraw(false);
    }
    
    
    // *response* updates
    if (t >= 0.5 && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      response.clock.reset();
      response.start();
      response.clearEvents();
    }
    
    frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      response.status = PsychoJS.Status.FINISHED;
        }
      
    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: ['space'], waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[0].name;  // just the first key pressed
        response.rt = _response_allKeys[0].rt;
        response.duration = _response_allKeys[0].duration;
        // was this correct?
        if (response.keys == is_match) {
            response.corr = 1;
        } else {
            response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *isi_2* updates
    if (t >= 0 && isi_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi_2.tStart = t;  // (not accounting for frame time here)
      isi_2.frameNStart = frameN;  // exact frame index
      
      isi_2.setAutoDraw(true);
    }
    
    frameRemains = 0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (isi_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isi_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice' ---
    for (const thisComponent of practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (response.keys === undefined) {
      if (['None','none',undefined].includes(is_match)) {
         response.corr = 1;  // correct non-response
      } else {
         response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response.corr, level);
    }
    psychoJS.experiment.addData('response.keys', response.keys);
    psychoJS.experiment.addData('response.corr', response.corr);
    if (typeof response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response.rt', response.rt);
        psychoJS.experiment.addData('response.duration', response.duration);
        routineTimer.reset();
        }
    
    response.stop();
    if (practiceMaxDurationReached) {
        practiceClock.add(practiceMaxDuration);
    } else {
        practiceClock.add(2.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_endMaxDurationReached;
var _block_end_key_allKeys;
var practice_endMaxDuration;
var practice_endComponents;
function practice_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    practice_endClock.reset();
    routineTimer.reset();
    practice_endMaxDurationReached = false;
    // update component parameters for each repeat
    block_end_key.keys = undefined;
    block_end_key.rt = undefined;
    _block_end_key_allKeys = [];
    psychoJS.experiment.addData('practice_end.started', globalClock.getTime());
    practice_endMaxDuration = null
    // keep track of which components have finished
    practice_endComponents = [];
    practice_endComponents.push(block_end_text);
    practice_endComponents.push(block_end_key);
    
    for (const thisComponent of practice_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_end' ---
    // get current time
    t = practice_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block_end_text* updates
    if (t >= 0.0 && block_end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_end_text.tStart = t;  // (not accounting for frame time here)
      block_end_text.frameNStart = frameN;  // exact frame index
      
      block_end_text.setAutoDraw(true);
    }
    
    
    // *block_end_key* updates
    if (t >= 0.0 && block_end_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_end_key.tStart = t;  // (not accounting for frame time here)
      block_end_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { block_end_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { block_end_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { block_end_key.clearEvents(); });
    }
    
    if (block_end_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = block_end_key.getKeys({keyList: ['space'], waitRelease: false});
      _block_end_key_allKeys = _block_end_key_allKeys.concat(theseKeys);
      if (_block_end_key_allKeys.length > 0) {
        block_end_key.keys = _block_end_key_allKeys[_block_end_key_allKeys.length - 1].name;  // just the last key pressed
        block_end_key.rt = _block_end_key_allKeys[_block_end_key_allKeys.length - 1].rt;
        block_end_key.duration = _block_end_key_allKeys[_block_end_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_end' ---
    for (const thisComponent of practice_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_end.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(block_end_key.corr, level);
    }
    psychoJS.experiment.addData('block_end_key.keys', block_end_key.keys);
    if (typeof block_end_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('block_end_key.rt', block_end_key.rt);
        psychoJS.experiment.addData('block_end_key.duration', block_end_key.duration);
        routineTimer.reset();
        }
    
    block_end_key.stop();
    // the Routine "practice_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var routine_2backMaxDurationReached;
var _response_2_allKeys;
var routine_2backMaxDuration;
var routine_2backComponents;
function routine_2backRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'routine_2back' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routine_2backClock.reset(routineTimer.getTime());
    routineTimer.add(2.500000);
    routine_2backMaxDurationReached = false;
    // update component parameters for each repeat
    letter_stim_2.setText(letter);
    response_2.keys = undefined;
    response_2.rt = undefined;
    _response_2_allKeys = [];
    psychoJS.experiment.addData('routine_2back.started', globalClock.getTime());
    routine_2backMaxDuration = null
    // keep track of which components have finished
    routine_2backComponents = [];
    routine_2backComponents.push(fix_2);
    routine_2backComponents.push(letter_stim_2);
    routine_2backComponents.push(response_2);
    routine_2backComponents.push(isi);
    
    for (const thisComponent of routine_2backComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function routine_2backRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'routine_2back' ---
    // get current time
    t = routine_2backClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_2* updates
    if (t >= 0.0 && fix_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_2.tStart = t;  // (not accounting for frame time here)
      fix_2.frameNStart = frameN;  // exact frame index
      
      fix_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_2.setAutoDraw(false);
    }
    
    
    // *letter_stim_2* updates
    if (t >= 0.5 && letter_stim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_stim_2.tStart = t;  // (not accounting for frame time here)
      letter_stim_2.frameNStart = frameN;  // exact frame index
      
      letter_stim_2.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (letter_stim_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      letter_stim_2.setAutoDraw(false);
    }
    
    
    // *response_2* updates
    if (t >= 0.5 && response_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_2.tStart = t;  // (not accounting for frame time here)
      response_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      response_2.clock.reset();
      response_2.start();
      response_2.clearEvents();
    }
    
    frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (response_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      response_2.status = PsychoJS.Status.FINISHED;
        }
      
    if (response_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_2.getKeys({keyList: ['space'], waitRelease: false});
      _response_2_allKeys = _response_2_allKeys.concat(theseKeys);
      if (_response_2_allKeys.length > 0) {
        response_2.keys = _response_2_allKeys[0].name;  // just the first key pressed
        response_2.rt = _response_2_allKeys[0].rt;
        response_2.duration = _response_2_allKeys[0].duration;
        // was this correct?
        if (response_2.keys == is_match) {
            response_2.corr = 1;
        } else {
            response_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *isi* updates
    if (t >= 2 && isi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi.tStart = t;  // (not accounting for frame time here)
      isi.frameNStart = frameN;  // exact frame index
      
      isi.setAutoDraw(true);
    }
    
    frameRemains = 2 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (isi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isi.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of routine_2backComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_2backRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'routine_2back' ---
    for (const thisComponent of routine_2backComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('routine_2back.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (response_2.keys === undefined) {
      if (['None','none',undefined].includes(is_match)) {
         response_2.corr = 1;  // correct non-response
      } else {
         response_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response_2.corr, level);
    }
    psychoJS.experiment.addData('response_2.keys', response_2.keys);
    psychoJS.experiment.addData('response_2.corr', response_2.corr);
    if (typeof response_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response_2.rt', response_2.rt);
        psychoJS.experiment.addData('response_2.duration', response_2.duration);
        routineTimer.reset();
        }
    
    response_2.stop();
    if (routine_2backMaxDurationReached) {
        routine_2backClock.add(routine_2backMaxDuration);
    } else {
        routine_2backClock.add(2.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var routine_2bendMaxDurationReached;
var _block_end_key_2_allKeys;
var routine_2bendMaxDuration;
var routine_2bendComponents;
function routine_2bendRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'routine_2bend' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routine_2bendClock.reset();
    routineTimer.reset();
    routine_2bendMaxDurationReached = false;
    // update component parameters for each repeat
    block_end_key_2.keys = undefined;
    block_end_key_2.rt = undefined;
    _block_end_key_2_allKeys = [];
    psychoJS.experiment.addData('routine_2bend.started', globalClock.getTime());
    routine_2bendMaxDuration = null
    // keep track of which components have finished
    routine_2bendComponents = [];
    routine_2bendComponents.push(block_end_text_2);
    routine_2bendComponents.push(block_end_key_2);
    
    for (const thisComponent of routine_2bendComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function routine_2bendRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'routine_2bend' ---
    // get current time
    t = routine_2bendClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block_end_text_2* updates
    if (t >= 0.0 && block_end_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_end_text_2.tStart = t;  // (not accounting for frame time here)
      block_end_text_2.frameNStart = frameN;  // exact frame index
      
      block_end_text_2.setAutoDraw(true);
    }
    
    
    // *block_end_key_2* updates
    if (t >= 0.0 && block_end_key_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_end_key_2.tStart = t;  // (not accounting for frame time here)
      block_end_key_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { block_end_key_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { block_end_key_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { block_end_key_2.clearEvents(); });
    }
    
    if (block_end_key_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = block_end_key_2.getKeys({keyList: ['space'], waitRelease: false});
      _block_end_key_2_allKeys = _block_end_key_2_allKeys.concat(theseKeys);
      if (_block_end_key_2_allKeys.length > 0) {
        block_end_key_2.keys = _block_end_key_2_allKeys[_block_end_key_2_allKeys.length - 1].name;  // just the last key pressed
        block_end_key_2.rt = _block_end_key_2_allKeys[_block_end_key_2_allKeys.length - 1].rt;
        block_end_key_2.duration = _block_end_key_2_allKeys[_block_end_key_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of routine_2bendComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_2bendRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'routine_2bend' ---
    for (const thisComponent of routine_2bendComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('routine_2bend.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(block_end_key_2.corr, level);
    }
    psychoJS.experiment.addData('block_end_key_2.keys', block_end_key_2.keys);
    if (typeof block_end_key_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('block_end_key_2.rt', block_end_key_2.rt);
        psychoJS.experiment.addData('block_end_key_2.duration', block_end_key_2.duration);
        routineTimer.reset();
        }
    
    block_end_key_2.stop();
    // the Routine "routine_2bend" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var routine_3backMaxDurationReached;
var _response_3_allKeys;
var routine_3backMaxDuration;
var routine_3backComponents;
function routine_3backRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'routine_3back' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routine_3backClock.reset(routineTimer.getTime());
    routineTimer.add(2.500000);
    routine_3backMaxDurationReached = false;
    // update component parameters for each repeat
    letter_stim_3.setText(letter);
    response_3.keys = undefined;
    response_3.rt = undefined;
    _response_3_allKeys = [];
    psychoJS.experiment.addData('routine_3back.started', globalClock.getTime());
    routine_3backMaxDuration = null
    // keep track of which components have finished
    routine_3backComponents = [];
    routine_3backComponents.push(fix_3);
    routine_3backComponents.push(letter_stim_3);
    routine_3backComponents.push(response_3);
    routine_3backComponents.push(isi_3);
    
    for (const thisComponent of routine_3backComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function routine_3backRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'routine_3back' ---
    // get current time
    t = routine_3backClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_3* updates
    if (t >= 0.0 && fix_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_3.tStart = t;  // (not accounting for frame time here)
      fix_3.frameNStart = frameN;  // exact frame index
      
      fix_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_3.setAutoDraw(false);
    }
    
    
    // *letter_stim_3* updates
    if (t >= 0.5 && letter_stim_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_stim_3.tStart = t;  // (not accounting for frame time here)
      letter_stim_3.frameNStart = frameN;  // exact frame index
      
      letter_stim_3.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (letter_stim_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      letter_stim_3.setAutoDraw(false);
    }
    
    
    // *response_3* updates
    if (t >= 0.5 && response_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_3.tStart = t;  // (not accounting for frame time here)
      response_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      response_3.clock.reset();
      response_3.start();
      response_3.clearEvents();
    }
    
    frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (response_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      response_3.status = PsychoJS.Status.FINISHED;
        }
      
    if (response_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_3.getKeys({keyList: ['space'], waitRelease: false});
      _response_3_allKeys = _response_3_allKeys.concat(theseKeys);
      if (_response_3_allKeys.length > 0) {
        response_3.keys = _response_3_allKeys[0].name;  // just the first key pressed
        response_3.rt = _response_3_allKeys[0].rt;
        response_3.duration = _response_3_allKeys[0].duration;
        // was this correct?
        if (response_3.keys == is_match) {
            response_3.corr = 1;
        } else {
            response_3.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *isi_3* updates
    if (t >= 2 && isi_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi_3.tStart = t;  // (not accounting for frame time here)
      isi_3.frameNStart = frameN;  // exact frame index
      
      isi_3.setAutoDraw(true);
    }
    
    frameRemains = 2 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (isi_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isi_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of routine_3backComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_3backRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'routine_3back' ---
    for (const thisComponent of routine_3backComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('routine_3back.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (response_3.keys === undefined) {
      if (['None','none',undefined].includes(is_match)) {
         response_3.corr = 1;  // correct non-response
      } else {
         response_3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response_3.corr, level);
    }
    psychoJS.experiment.addData('response_3.keys', response_3.keys);
    psychoJS.experiment.addData('response_3.corr', response_3.corr);
    if (typeof response_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response_3.rt', response_3.rt);
        psychoJS.experiment.addData('response_3.duration', response_3.duration);
        routineTimer.reset();
        }
    
    response_3.stop();
    if (routine_3backMaxDurationReached) {
        routine_3backClock.add(routine_3backMaxDuration);
    } else {
        routine_3backClock.add(2.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var routine_3bendMaxDurationReached;
var _block_end_key_3_allKeys;
var routine_3bendMaxDuration;
var routine_3bendComponents;
function routine_3bendRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'routine_3bend' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routine_3bendClock.reset();
    routineTimer.reset();
    routine_3bendMaxDurationReached = false;
    // update component parameters for each repeat
    block_end_key_3.keys = undefined;
    block_end_key_3.rt = undefined;
    _block_end_key_3_allKeys = [];
    psychoJS.experiment.addData('routine_3bend.started', globalClock.getTime());
    routine_3bendMaxDuration = null
    // keep track of which components have finished
    routine_3bendComponents = [];
    routine_3bendComponents.push(block_end_text_3);
    routine_3bendComponents.push(block_end_key_3);
    
    for (const thisComponent of routine_3bendComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function routine_3bendRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'routine_3bend' ---
    // get current time
    t = routine_3bendClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block_end_text_3* updates
    if (t >= 0.0 && block_end_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_end_text_3.tStart = t;  // (not accounting for frame time here)
      block_end_text_3.frameNStart = frameN;  // exact frame index
      
      block_end_text_3.setAutoDraw(true);
    }
    
    
    // *block_end_key_3* updates
    if (t >= 0.0 && block_end_key_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_end_key_3.tStart = t;  // (not accounting for frame time here)
      block_end_key_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { block_end_key_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { block_end_key_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { block_end_key_3.clearEvents(); });
    }
    
    if (block_end_key_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = block_end_key_3.getKeys({keyList: ['space'], waitRelease: false});
      _block_end_key_3_allKeys = _block_end_key_3_allKeys.concat(theseKeys);
      if (_block_end_key_3_allKeys.length > 0) {
        block_end_key_3.keys = _block_end_key_3_allKeys[_block_end_key_3_allKeys.length - 1].name;  // just the last key pressed
        block_end_key_3.rt = _block_end_key_3_allKeys[_block_end_key_3_allKeys.length - 1].rt;
        block_end_key_3.duration = _block_end_key_3_allKeys[_block_end_key_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of routine_3bendComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_3bendRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'routine_3bend' ---
    for (const thisComponent of routine_3bendComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('routine_3bend.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(block_end_key_3.corr, level);
    }
    psychoJS.experiment.addData('block_end_key_3.keys', block_end_key_3.keys);
    if (typeof block_end_key_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('block_end_key_3.rt', block_end_key_3.rt);
        psychoJS.experiment.addData('block_end_key_3.duration', block_end_key_3.duration);
        routineTimer.reset();
        }
    
    block_end_key_3.stop();
    // the Routine "routine_3bend" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var routine_4backMaxDurationReached;
var _response_4_allKeys;
var routine_4backMaxDuration;
var routine_4backComponents;
function routine_4backRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'routine_4back' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routine_4backClock.reset(routineTimer.getTime());
    routineTimer.add(2.500000);
    routine_4backMaxDurationReached = false;
    // update component parameters for each repeat
    letter_stim_4.setText(letter);
    response_4.keys = undefined;
    response_4.rt = undefined;
    _response_4_allKeys = [];
    psychoJS.experiment.addData('routine_4back.started', globalClock.getTime());
    routine_4backMaxDuration = null
    // keep track of which components have finished
    routine_4backComponents = [];
    routine_4backComponents.push(fix_4);
    routine_4backComponents.push(letter_stim_4);
    routine_4backComponents.push(response_4);
    routine_4backComponents.push(isi_4);
    
    for (const thisComponent of routine_4backComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function routine_4backRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'routine_4back' ---
    // get current time
    t = routine_4backClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_4* updates
    if (t >= 0.0 && fix_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_4.tStart = t;  // (not accounting for frame time here)
      fix_4.frameNStart = frameN;  // exact frame index
      
      fix_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_4.setAutoDraw(false);
    }
    
    
    // *letter_stim_4* updates
    if (t >= 0.5 && letter_stim_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter_stim_4.tStart = t;  // (not accounting for frame time here)
      letter_stim_4.frameNStart = frameN;  // exact frame index
      
      letter_stim_4.setAutoDraw(true);
    }
    
    frameRemains = 0.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (letter_stim_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      letter_stim_4.setAutoDraw(false);
    }
    
    
    // *response_4* updates
    if (t >= 0.5 && response_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_4.tStart = t;  // (not accounting for frame time here)
      response_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      response_4.clock.reset();
      response_4.start();
      response_4.clearEvents();
    }
    
    frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (response_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      response_4.status = PsychoJS.Status.FINISHED;
        }
      
    if (response_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_4.getKeys({keyList: ['space'], waitRelease: false});
      _response_4_allKeys = _response_4_allKeys.concat(theseKeys);
      if (_response_4_allKeys.length > 0) {
        response_4.keys = _response_4_allKeys[0].name;  // just the first key pressed
        response_4.rt = _response_4_allKeys[0].rt;
        response_4.duration = _response_4_allKeys[0].duration;
        // was this correct?
        if (response_4.keys == is_match) {
            response_4.corr = 1;
        } else {
            response_4.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *isi_4* updates
    if (t >= 2 && isi_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi_4.tStart = t;  // (not accounting for frame time here)
      isi_4.frameNStart = frameN;  // exact frame index
      
      isi_4.setAutoDraw(true);
    }
    
    frameRemains = 2 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (isi_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isi_4.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of routine_4backComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function routine_4backRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'routine_4back' ---
    for (const thisComponent of routine_4backComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('routine_4back.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (response_4.keys === undefined) {
      if (['None','none',undefined].includes(is_match)) {
         response_4.corr = 1;  // correct non-response
      } else {
         response_4.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response_4.corr, level);
    }
    psychoJS.experiment.addData('response_4.keys', response_4.keys);
    psychoJS.experiment.addData('response_4.corr', response_4.corr);
    if (typeof response_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response_4.rt', response_4.rt);
        psychoJS.experiment.addData('response_4.duration', response_4.duration);
        routineTimer.reset();
        }
    
    response_4.stop();
    if (routine_4backMaxDurationReached) {
        routine_4backClock.add(routine_4backMaxDuration);
    } else {
        routine_4backClock.add(2.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    thanksClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
      }).join('\n');
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
      },
      body: JSON.stringify({
        experimentID: 'XXXXXXXXXXXX', // ★ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ★
        filename: filename,
        data: data,
      }),
    })
    .then(response => response.json())
    .then(data => {
      // Log response and force experiment end
      console.log(data);
      quitPsychoJS();
    });
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(end_text);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    if (thanksMaxDurationReached) {
        thanksClock.add(thanksMaxDuration);
    } else {
        thanksClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
