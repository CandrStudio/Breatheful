//Global Variables
var breathingMode = 'Standard';
var BreatheInTime = 5000;
var BreatheOutTime = 4000;


// Check Light Status
if (localStorage.getItem('lights') === null) {
  console.log("Couldn't find the lights so we defaulted to off.")
  localStorage.setItem('lights', 'false');
}

window.onload = function() {
  checkLights();
  console.log("Checked and the lights are " + localStorage.getItem('lights'));
};

function checkLights() {
  var body = document.body;
  var image = document.getElementById("lightswitch");
  var lights = localStorage.getItem('lights');

  if (lights === 'true') {
    console.log("Lights are currently on");
    body.style.backgroundColor = "#F6F6F6";
    image.src = "img/ui-icon/light-on.svg";
  } else {
    console.log("Lights are currently off");
    body.style.backgroundColor = "black";
    image.src = "img/ui-icon/light-off.svg";
  }
}



function toggleLights() {
  var body = document.body;
  var image = document.getElementById("lightswitch");
  var lights = localStorage.getItem('lights');

  console.log("Running toggleLights function...");

  if (lights === 'true') {
    console.log("Lights are currently on, so we are going to turn them off");
    body.style.backgroundColor = "black";
    body.style.transition = 'background-color 3s ease';
    image.src = "img/ui-icon/light-off.svg";
    localStorage.setItem("lights", "false");
  } else {
    console.log("Lights are currently off, so we are going to turn them on");
    body.style.backgroundColor = "#F6F6F6";
    body.style.transition = 'background-color 3s ease';
    image.src = "img/ui-icon/light-on.svg";
    localStorage.setItem("lights", "true");
  }
}
//Launch and Breathe Windows
window.addEventListener('load', function() {
    // Show loading screen for 2.5 seconds
    setTimeout(function() {
      var loadingScreen = document.getElementById('loading-screen');
      loadingScreen.style.opacity = '0';
  
      // Hide loading screen and show app container
      setTimeout(function() {
        loadingScreen.style.display = 'none';
        var appContainer = document.getElementById('app-container');
        appContainer.style.opacity = '1';
      }, 500);
    }, 2500);})
  


//Breathing Circle Animation
const circle = document.querySelector('#breathing-circle');
const breathingText = document.querySelector('.breathing-text');

function breatheIn() {

  if (breathingMode == 'Standard') {
    breatheText = 'Just ';    
    BreatheInTime = 5000;} 
  else if (breathingMode == 'Calm') { 
    breatheText = 'Calmly ';
    BreatheInTime = 5000;}
  else if (breathingMode == 'Deep') { 
    breatheText = 'Deep ';
    BreatheInTime = 5000;}
  else if (breathingMode == 'Sleep') { 
    breatheText = 'Sleepy ';
    BreatheInTime = 5000;}
  else if (breathingMode == 'Zen') { 
    breatheText = 'Zen '
    BreatheInTime = 10000;}
  else {breatheText = ''}

  circle.style.transform = 'scale(1.5)';
  breathingText.textContent = breatheText + 'Breathe In';
  breathingText.style.opacity = '1';

  setTimeout(() => {
      breathingText.style.opacity = '0';
  }, BreatheInTime);
  setTimeout(breatheOut, BreatheInTime);
}

function breatheOut() {

  if (breathingMode == 'Standard') {
    breatheText = 'Just ';
    BreatheOutTime = 5000;} 
  else if (breathingMode == 'Calm') { 
    breatheText = 'Calmly ';
    BreatheOutTime = 5000;}
  else if (breathingMode == 'Deep') { 
    breatheText = 'Deep ';
    BreatheOutTime = 5000;}
  else if (breathingMode == 'Sleep') { 
    breatheText = 'Sleepy ';
    BreatheOutTime = 5000;}
  else if (breathingMode == 'Zen') { 
    breatheText = 'Zen ';
    BreatheOutTime = 10000;}
  else {breatheText = ''}

  circle.style.transform = 'scale(1)';
  breathingText.textContent = breatheText + 'Breathe Out';
  breathingText.style.opacity = '1';

  setTimeout(() => {
      breathingText.style.opacity = '0';
  }, BreatheOutTime);
  setTimeout(breatheIn, BreatheOutTime);
}

breatheIn();

var breatheIcons = [
  { name: 'Standard', src: 'img/breathe-icon/standard.svg', option: 0},//0
  { name: 'Calm', src: 'img/breathe-icon/calm.svg', option: 1},//1
  { name: 'Deep', src: 'img/breathe-icon/deep.svg', option: 2},//2
  { name: 'Sleep', src: 'img/breathe-icon/sleep.svg', option: 3},//3
  { name: 'Zen', src: 'img/breathe-icon/zen.svg', option: 4},//4
];

//Audio Track Selection
function specificBreathing(breatheOption) {
  console.log("Running specificBreathing function with option")
  var image = document.getElementById("breatheswitch");
  image.src = breatheIcons[breatheOption].src;



  option = breatheIcons[breatheOption].option;
  if (option === 0){
    breatheInTime = 5000;
    breatheOutTime = 5000;
    breathingMode = "Standard";
    
    circle.style.transition = '5s ease-in, 5s ease-out';

    var image = document.getElementById("circleimage");
    image.src = "img/breathe-circle/circle-grey.svg"
  } else if (option === 1){
    breatheInTime = 6000;
    breatheOutTime = 4000;
    breathingMode = "Calm";

    circle.style.transition = '6s ease-in, 4s ease-out';

    var image = document.getElementById("circleimage");
    image.src = "img/breathe-circle/circle-blue.svg"
  } else if (option === 2) {
    breatheInTime = 8000;
    breatheOutTime = 4000;
    breathingMode = "Deep";

    circle.style.transition = '8s ease-in, 4s ease-out';

    var image = document.getElementById("circleimage");
    image.src = "img/breathe-circle/circle-purple.svg"
  } else if (option === 3){
    breatheInTime = 6000;
    breatheOutTime = 5000;
    breathingMode = "Sleep";

    circle.style.transition = '6s ease-in, 5s ease-out';

    var image = document.getElementById("circleimage");
    image.src = "img/breathe-circle/circle-red.svg"
  } else if (option === 4){
    breatheInTime = 10000;
    breatheOutTime = 10000;
    breathingMode = "Zen";

    circle.style.transition = '10s ease-in, 10s ease-out';

    var image = document.getElementById("circleimage");
    image.src = "img/breathe-circle/circle-green.svg"
  }

  var dropdownContent = document.getElementById('dropdown-display-audio');
  dropdownContent.style.display = 'none';

  var breakout = document.getElementById('breakout');
  breakout.style.display = 'none';

  var trackName = breatheIcons[breatheOption].name;
  var trackPopup = document.getElementById('track-popup');
  trackPopup.textContent = trackName + " Breathing"

  trackPopup.style.opacity = "1";


  var image = document.getElementById("breatheswitch");
  image.name = breatheIcons[breatheOption].name;

  var dropdownContent = document.getElementById('dropdown-display-breathe');
  dropdownContent.style.display = 'none';

  var breakout = document.getElementById('breakout');
  breakout.style.display = 'none';


  setTimeout(function() {
    var popup = document.getElementById("popup");
    trackPopup.style.opacity = "0";
  }, 2500); // Hide the popup after 2.5 seconds
}


function showBreathes() {
  var dropdownContentBreathe = document.getElementById('dropdown-display-breathe');
  dropdownContentBreathe.style.display = 'flex';

  var dropdownContentAudio = document.getElementById('dropdown-display-audio');
  dropdownContentAudio.style.display = 'none';

  var breakout = document.getElementById('breakout');
  breakout.style.display = 'block';
}




//Audio JSON
var audioTracks = [
  { name: 'Quiet', src: 'null'}, //0
  { name: 'Rain', src: 'aud/rain.mp3'},//1
  { name: 'Waves', src: 'aud/waves.mp3'},//2
  { name: 'Forest', src: 'aud/forest.mp3'},//3
  { name: 'Campfire', src: 'aud/campfire.mp3'},//4
  { name: 'Fan', src: 'aud/fan.mp3'},//5
  { name: 'Gentle Piano', src: 'aud/piano.mp3'},//4
  { name: 'Purring Cat', src: 'aud/cat.mp3'}//5
];

var audioIcons = [
  { name: 'Quiet', src: 'img/audio-icon/mute.svg'},//0
  { name: 'Rain', src: 'img/audio-icon/rain.svg'},//1
  { name: 'Waves', src: 'img/audio-icon/waves.svg'},//2
  { name: 'Forest', src: 'img/audio-icon/forest.svg'},//3
  { name: 'Campfire', src: 'img/audio-icon/campfire.svg'},//4
  { name: 'Fan', src: 'img/audio-icon/fan.svg'},//5
  { name: 'Piano', src: 'img/audio-icon/piano.svg'},//6
  { name: 'Cat', src: 'img/audio-icon/cat.svg'}//7
];

//Audio Variables
var currentTrackIndex = 0;
var audio = new Audio(); // Create an Audio object

//Show Audio Track Options
function showTracks() {
  var dropdownContentBreathe = document.getElementById('dropdown-display-breathe');
  dropdownContentBreathe.style.display = 'none';

  var dropdownContentAudio = document.getElementById('dropdown-display-audio');
  dropdownContentAudio.style.display = 'flex';

  var breakout = document.getElementById('breakout');
  breakout.style.display = 'block';
}

//Audio Track Selection
function specificTrack(songURL) {
  audio.src = audioTracks[songURL].src;
  console.log("Playing audio track " + audio.src);
  audio.loop = true;
  audio.play();

  var image = document.getElementById("audioswitch");
  image.src = audioIcons[songURL].src;

  var dropdownContent = document.getElementById('dropdown-display-audio');
  dropdownContent.style.display = 'none';

  var breakout = document.getElementById('breakout');
  breakout.style.display = 'none';

  var trackName = audioTracks[songURL].name;
  var trackPopup = document.getElementById('track-popup');
  trackPopup.textContent = trackName;

  trackPopup.style.opacity = "1";

  setTimeout(function() {
    var popup = document.getElementById("popup");
    trackPopup.style.opacity = "0";
  }, 2500); // Hide the popup after 2.5 seconds
}




//Create Breakout Button
document.getElementById("breakout").addEventListener("click", function(){
  var dropdownContentAudio = document.getElementById('dropdown-display-audio');
  dropdownContentAudio.style.display = 'none';

  var dropdownContentBreathe = document.getElementById('dropdown-display-breathe');
  dropdownContentBreathe.style.display = 'none';

  var breakout = document.getElementById('breakout');
  breakout.style.display = 'none';
});




//Display Help Informational Page
function helpBreathe() {
  var breatheContent = document.getElementById('app-container');
  breatheContent.style.display = 'none';

  var helpContent = document.getElementById('help-container');
  helpContent.style.display = 'flex';

}

//Hide Help Informational Page
function backButton() {
  var breatheContent = document.getElementById('app-container');
  breatheContent.style.display = 'flex';

  var helpContent = document.getElementById('help-container');
  helpContent.style.display = 'none';

}




//Load Phrase JSON
window.addEventListener('load', function() {
  randomPhrase()
});

function randomPhrase() {
  var phrases = [
    "Breathe in peace, exhale stress.",
    "Stillness leads to inner peace.",
    "Live and feel this moment.",
    "Mindfulness is freedom's path.",
    "Release past, embrace now.",
    "Accept what is, let go.",
    "Calmness is your superpower.",
    "Every breath rebalances you.",
    "Silence carries answers.",
    "Peace begins within.",
    "Embrace life in stillness.",
    "Seek balance, not perfection.",
    "Emotions are fleeting visitors.",
    "Inhale future, exhale past.",
    "Peace amid the storm.",
    "Let worries flow away.",
    "Mindful living is a journey.",
    "Bring your own sunshine.",
    "Be still, listen to world.",
    "Silence speaks volumes.",
    "Inner peace is self-control.",
    "Simplicity is sophistication.",
    "Find peace in yourself.",
    "Quieter minds hear more.",
    "Peace is accepting life.",
    "Adjust your sails.",
    "Find peace within.",
    "Let go of weak thoughts.",
    "Trust life's timing.",
    "Gratitude is enough.",
    "Inhale courage, exhale fear.",
    "Smile, breathe, go slowly.",
    "Happiness is a choice.",
    "Be here now.",
    "Silence is strength.",
    "You are the ocean.",
    "Realize your inner power.",
    "Present moment is all.",
    "Mind shapes your being.",
    "Breathe, anchor yourself.",
    "Return to present with breath.",
    "Relaxed body, inner peace.",
    "Silence the mind, heal soul.",
    "Don't dwell on yesterday.",
    "Calm mind, ultimate weapon.",
    "Meditation isn't controlling thoughts.",
    "Nourish yourself with silence.",
    "Embrace tranquility within.",
    "Harmony resides within you.",
    "Nature mirrors calmness.",
    "Just be present.",
    "Find joy in simplicity.",
    "You are enough.",
    "Embrace the journey.",
    "Calm is a super power.",
    "Breathe, you're alive.",
    "Flow with life.",
    "Your peace, your power.",
    "Witness life unfolding.",
    "Inhale peace, exhale chaos.",
    "Find beauty in stillness.",
    "Serenity in each breath.",
    "Be water, my friend.",
    "Dwell in possibility.",
    "Awaken to the moment.",
    "Soften into this moment.",
    "Rest in awareness.",
    "Let go, and grow.",
    "Exhale doubt, inhale courage.",
    "Feel, don't think.",
    "Your path is sacred.",
    "Patience fosters growth.",
    "Life flows like a river.",
    "Savor each moment.",
    "Calm amidst the chaos.",
    "Acceptance is freedom.",
    "Gratitude fuels happiness.",
    "Seek wisdom in silence.",
    "Peaceful heart, peaceful life.",
    "Balance is key.",
    "Your journey, your pace.",
    "Breathe out, release.",
    "Believe in your strength.",
    "Trust your inner wisdom.",
    "Compassion starts within.",
    "Live in gratitude.",
    "Inner peace, outer strength.",
    "Gentle is powerful.",
    "Be present, be free.",
    "Focus on now.",
    "Breathe in, let go.",
    "Calm mind, calm life.",
    "Feel life's rhythm.",
    "Surrender to serenity.",
    "One breath at a time.",
    "Listen to your heart.",
    "Relax and breathe, find peace.",
    "Mindfulness brings inner tranquility.",
    "Take a deep breath, release tension.",
    "Silence the mind, embrace serenity.",
    "Breathe in calm, exhale stress.",
    "Meditate to quiet the mind.",
    "Inhale clarity, exhale distractions.",
    "Find stillness in the present moment.",
    "Focus on your breath, find balance.",
    "Let go of worries with each exhale.",
    "Create space for calmness within.",
    "Connect with your breath, find peace.",
    "Breathe deeply, let go of anxiety.",
    "Meditation calms the racing thoughts.",
    "Inhale positivity, exhale negativity.",
    "Embrace the power of deep breaths.",
    "Find solace in the rhythm of breathing.",
    "Quiet the mind, awaken inner stillness.",
    "Breathe in energy, exhale fatigue.",
    "Let your breath anchor your presence.",
    "Calm your mind through steady breaths.",
    "Meditation opens the door to serenity.",
    "Inhale peace, exhale restlessness.",
    "Find refuge in the breath's gentle flow.",
    "Release tension with every exhale.",
    "Breathe deeply, invite tranquility.",
    "Meditate to find inner harmony.",
    "Inhale calmness, exhale agitation.",
    "Connect with your breath, find peace.",
    "Release stress with each conscious breath.",
    "Breathe in calmness, exhale anxiety.",
    "Meditation soothes the restless soul.",
    "Inhale serenity, exhale worries.",
    "Find solace in mindful exhales.",
    "Center yourself through rhythmic breathing.",
    "Inner peace resides in mindful stillness.",
    "Harness the power of focused breath.",
    "Embrace the calmness within you.",
    "Meditation is a gateway to serenity.",
    "Inhale peace, exhale chaos.",
    "Be present in the soothing breaths.",
    "Find harmony through mindful inhalation.",
    "Calmness lies within each deep breath.",
    "Meditate to restore balance within.",
    "Breathe deeply, find your calm.",
    "Still your mind, unlock tranquility.",
    "Let each breath guide you home.",
    "Breathe in, let stress out.",
    "Meditation soothes the restless soul.",
    "Inhale tranquility, exhale worries.",
    "Peaceful silence whispers inner calm.",
    "Breathe in, let stress out.",
    "Meditation soothes the restless soul.",
    "Find solace in mindful exhales.",
    "Center yourself through rhythmic breathing.",
    "Inner peace resides in mindful stillness.",
    "Harness the power of focused breath.",
    "Embrace the calmness within you.",
    "Meditation is a gateway to serenity.",
    "Inhale peace, exhale chaos.",
    "Be present in the soothing breaths.",
    "Find harmony through mindful inhalation.",
    "Calmness lies within each deep breath.",
    "Meditate to restore balance within.",
    "Breathe deeply, find your calm.",
    "Still your mind, unlock tranquility.",
    "Let each breath guide you home.",
    "Breathe in, let stress out.",
    "Meditation soothes the restless soul.",
    "Inhale tranquility, exhale worries.",
    "Peaceful silence whispers inner calm.",
    "Breathe in, let stress out.",
    "Meditation soothes the restless soul.",
    "Find solace in mindful exhales.",
    "Center yourself through rhythmic breathing.",
    "Inner peace resides in mindful stillness.",
    "Harness the power of focused breath.",
    "Embrace the calmness within you.",
    "Meditation is a gateway to serenity.",
    "Inhale peace, exhale chaos.",
    "Be present in the soothing breaths.",
    "Find harmony through mindful inhalation.",
    "Calmness lies within each deep breath.",
    "Meditate to restore balance within.",
    "Breathe deeply, find your calm.",
    "Still your mind, unlock tranquility.",
    "Let each breath guide you home.",
    "Breathe in, let stress out.",
    "Meditation soothes the restless soul.",
    "Inhale tranquility, exhale worries.",
    "Peaceful silence whispers inner calm.",
    "Breathe in, let stress out.",
    "Meditation soothes the restless soul.",
    "Find solace in mindful exhales.",
    "Center yourself through rhythmic breathing.",
    "Inner peace resides in mindful stillness.",
    "Harness the power of focused breath.",
    "Embrace the calmness within you.",
    "Meditation is a gateway to serenity.",
    "Inhale peace, exhale chaos.",
    "Be present in the soothing breaths.",
    "Find harmony through mindful inhalation.",
    "Calmness lies within each deep breath.",
    "Meditate to restore balance within.",
    "Breathe deeply, find your calm.",
    "Pause and reconnect within.",
    "Inhale love, exhale fear.",
    "Let gratitude fill your heart.",
    "Every moment is a gift.",
    "Discover peace in simplicity.",
    "Stillness is the gateway to insight.",
    "Peaceful mind, joyful heart.",
    "Breathe out negativity, breathe in positivity.",
    "Meditation is self-discovery.",
    "Find solace in nature's embrace.",
    "Calmness anchors you to the present.",
    "Be kind to yourself always.",
    "The present moment is all there is.",
    "Stillness is the language of the soul.",
    "Embrace change with an open heart.",
    "Quiet the mind, hear your soul.",
    "Find beauty in the present chaos.",
    "Compassion heals both giver and receiver.",
    "Let go of judgment, embrace acceptance.",
    "Serenity shines from within.",
    "Breathe deeply, find your center.",
    "The journey within is infinite.",
    "Happiness lies in small moments.",
    "Embrace uncertainty with courage.",
    "Calmness nurtures creativity.",
    "Your breath is your anchor.",
    "Meditation is a path to wholeness.",
    "Inhale possibilities, exhale limitations.",
    "Connect with the energy of life.",
    "Peace begins with a smile.",
    "Trust the process of life.",
    "Stillness is the rhythm of the universe.",
    "Embrace the power of now.",
    "Let your breath guide your thoughts.",
    "Acceptance is the key to serenity.",
    "Breathe in energy, breathe out doubt.",
    "Meditation is food for the soul.",
    "Inner peace blooms like a flower.",
    "Release attachments, find freedom.",
    "Calmness is a state of grace.",
    "Inhale presence, exhale distractions.",
    "Let love and compassion be your compass.",
    "Quiet your mind, hear your intuition.",
    "Simplicity is the essence of life.",
    "Breathe deeply, invite peace.",
    "The universe is within you.",
    "Meditation is a sanctuary for the mind.",
    "Inhale courage, exhale doubt.",
    "Peace is found in the present.",
    "Find your sanctuary in stillness.",
    "Embrace impermanence with grace.",
    "Let go of the need to control.",
    "Calmness is the dance of the soul.",
    "Breathe in joy, breathe out gratitude.",
    "Meditation is a journey inward.",
    "Inhale strength, exhale weakness.",
    "Find wisdom in the silence.",
    "Trust in the unfolding of life.",
    "Embrace the beauty of the unknown.",
    "Breathe deeply, release tension.",
    "Meditation is the art of letting go.",
    "Inhale balance, exhale chaos.",
    "Peace resides in your heart.",
    "Let your breath carry you home.",
    "Discover peace through self-awareness.",
    "Calmness is the song of the soul.",
    "Breathe in stillness, exhale restlessness.",
    "Meditation opens the door to serenity.",
    "Inhale clarity, exhale confusion.",
    "Surrender to the flow of life.",
    "Embrace each moment as it is.",
    "Breathe deeply, find your peace.",
    "Meditation is a meeting with yourself.",
    "Inhale compassion, exhale judgment.",
    "Seek stillness amidst the noise.",
    "Quiet the mind, find your truth.",
    "Embrace the silence between thoughts.",
    "Breathe in patience, breathe out tension.",
    "Meditation is the language of the soul.",
    "Inhale acceptance, exhale resistance.",
    "Find harmony in the present moment.",
    "Release the past, embrace the now.",
    "Calmness is the dance of life.",
    "Breathe in the beauty of existence.",
    "Meditation is a journey of self-discovery.",
    "Inhale gratitude, exhale complaints.",
    "Let go of the need to be busy.",
    "Embrace the stillness of the night.",
    "Breathe deeply, find your center.",
    "Meditation is the key to inner peace.",
    "Inhale hope, exhale despair.",
    "Discover yourself in the present.",
    "Trust in the wisdom of life.",
    "Embrace the power of silence.",
    "Breathe in the light, exhale darkness.",
    "Meditation is the art of being.",
    "Inhale forgiveness, exhale resentment.",
    "Find peace in the present chaos.",
    "Let your breath be your guide.",
    "Calmness is the gateway to bliss.",
    "Breathe in awareness, breathe out distraction.",
    "Meditation is the path to freedom.",
    "Inhale strength, exhale fear.",
    "Embrace the silence within.",
    "Breathe deeply, find your peace."
  ]

  //Randomize Index and Select Phrase
  var randomIndex01 = Math.floor(Math.random() * phrases.length);
  var randomIndex02 = Math.floor(Math.random() * phrases.length);
  var randomText01 = phrases[randomIndex01];
  var randomText02 = phrases[randomIndex02];

  //Launch Page
  var launchphrase = document.getElementById("launch-phrase");
  launchphrase.innerHTML = randomText01;

  //Breathing Page
  var breathephrase = document.getElementById("breathe-phrase");
  breathephrase.innerHTML = randomText02;
}
