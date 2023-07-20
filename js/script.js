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
    image.src = "img/light-on.svg";
  } else {
    console.log("Lights are currently off");
    body.style.backgroundColor = "black";
    image.src = "img/light-off.svg";
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
    image.src = "img/light-off.svg";
    localStorage.setItem("lights", "false");
  } else {
    console.log("Lights are currently off, so we are going to turn them on");
    body.style.backgroundColor = "#F6F6F6";
    body.style.transition = 'background-color 3s ease';
    image.src = "img/light-on.svg";
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
const circle = document.querySelector('.breathing-Circle');
const breathingText = document.querySelector('.breathing-text');

function breatheIn() {

  if (breathingMode == 'Standard') {breatheText = 'Just '} 
  else if (breathingMode == 'Calm') { breatheText = 'Calmly '}
  else if (breathingMode == 'Deep') { breatheText = 'Deep '}
  else if (breathingMode == 'Sleep') { breatheText = 'Sleepy '}
  else {breatheText = ''}

  circle.style.transform = 'scale(1.5)';
  breathingText.textContent = breatheText + 'Breathe In';
  breathingText.style.opacity = '1';
  setTimeout(() => {
      breathingText.style.opacity = '0';
  }, 4000);
  setTimeout(breatheOut, BreatheInTime);
}

function breatheOut() {

  if (breathingMode == 'Standard') {breatheText = 'Just '} 
  else if (breathingMode == 'Calm') { breatheText = 'Calmly '}
  else if (breathingMode == 'Deep') { breatheText = 'Deep '}
  else if (breathingMode == 'Sleep') { breatheText = 'Sleepy '}
  else {breatheText = ''}

  circle.style.transform = 'scale(1)';
  breathingText.textContent = breatheText + 'Breathe Out';
  breathingText.style.opacity = '1';
  setTimeout(() => {
      breathingText.style.opacity = '0';
  }, 3000);
  setTimeout(breatheIn, BreatheOutTime);
}

breatheIn();





 // Breathing mode button event listener
 breathingModeButton.addEventListener('click', function() {
    switch (breathingMode) {
      case 'Standard':
        breathingMode = 'Calm';
        break;
      case 'Calm':
        breathingMode = 'Deep';
        break;
      case 'Deep':
        breathingMode = 'Sleep';
        break;
      case 'Sleep':
        breathingMode = 'Standard';
        break;

    
    }
    breathingModeButton.textContent = breathingMode;
    updateBreathingPattern();
  });

  function updateBreathingPattern() {

    switch (breathingMode) {
      case 'Standard':
        breatheInTime = 5000;
        breatheOutTime = 5000;
        var breathingCircle = document.getElementsByClassName("breathing-Circle");
        circle.style.transition = '5s ease-in, 5s ease-out';

        var image = document.getElementById("circleimage");
        image.src = "img/circle-grey.svg"

        //circle.style.border = '8px solid #727272';
        break;
      case 'Calm':
        breatheInTime = 5000;
        breatheOutTime = 4000;
        var breathingCircle = document.getElementsByClassName("breathing-Circle");
        circle.style.transition = '5s ease-in, 4s ease-out';

        var image = document.getElementById("circleimage");
        image.src = "img/circle-blue.svg"

        //circle.style.border = '8px solid #3C58A3';
        break;
      case 'Deep':
        breatheInTime = 8000;
        breatheOutTime = 6000;
        var breathingCircle = document.getElementsByClassName("breathing-Circle");
        circle.style.transition = '8s ease-in, 6s ease-out';

        var image = document.getElementById("circleimage");
        image.src = "img/circle-purple.svg"

        //circle.style.border = '8px solid #633CA3';
        break;
      case 'Sleep':
        breatheInTime = 6000;
        breatheOutTime = 5000;
        var breathingCircle = document.getElementsByClassName("breathing-Circle");
        circle.style.transition = '6s ease-in, 5s ease-out';

        var image = document.getElementById("circleimage");
        image.src = "img/circle-red.svg"

        //circle.style.border = '8px solid #A33C3C';
        break;

    }
  }


//Load Thoughts JSON
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
    "Breathe deeply, find your calm."
  ]

  var randomIndex = Math.floor(Math.random() * phrases.length);
  var randomText = phrases[randomIndex];

  var phrase = document.getElementById("phrase");
  phrase.innerHTML = randomText;
}


var audioTracks = [
  { name: 'Quiet', src: 'null'}, //0
  { name: 'Rain', src: 'aud/rain.wav '},//1
  { name: 'Waves', src: 'aud/beach.wav'},//2
  { name: 'Forest', src: 'aud/forest.wav'},//3
  { name: 'Campfire', src: 'aud/campfire.wav '},//4
  { name: 'Fan', src: 'aud/fan.wav'}//5
];

var audioIcons = [
  { name: 'Quiet', src: 'img/mute.svg'},//0
  { name: 'Rain', src: 'img/rain.svg'},//1
  { name: 'Waves', src: 'img/waves.svg'},//2
  { name: 'Forest', src: 'img/forest.svg'},//3
  { name: 'Campfire', src: 'img/campfire.svg'},//4
  { name: 'Fan', src: 'img/fan.svg'}//5
];


var currentTrackIndex = 0;
var audio = new Audio(); // Create an Audio object

function cycleIcon() {
  var image = document.getElementById("audioswitch");
  image.src = audioIcons[currentTrackIndex].src;
}

function cycleTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % audioTracks.length;
  // Set the source of the Audio object
  audio.src = audioTracks[currentTrackIndex].src;
  console.log("Playing audio track " + audio.src);
  // Play the audio track with fade-in effect
  audio.loop = true;
  audio.play();
}

function showTrackPopup(songURL) {
  var trackName = audioTracks[songURL].name;
  var trackPopup = document.getElementById('track-popup');
  trackPopup.textContent = trackName;

  trackPopup.style.opacity = "1";

  setTimeout(function() {
    var popup = document.getElementById("popup");
    trackPopup.style.opacity = "0";
  }, 2500); // Hide the popup after 2 seconds
}

function showTracks() {
  var dropdownContent = document.getElementById('dropdown-display');
  dropdownContent.style.display = 'block';
  var breakout = document.getElementById('breakout');
  breakout.style.display = 'block';
}

function specificTrack(songURL) {
  audio.src = audioTracks[songURL].src;
  console.log("Playing audio track " + audio.src);
  audio.loop = true;
  audio.play();

  var image = document.getElementById("audioswitch");
  image.src = audioIcons[songURL].src;

  var dropdownContent = document.getElementById('dropdown-display');
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
  }, 2500); // Hide the popup after 2 seconds
}


document.getElementById("breakout").addEventListener("click", function(){
  var dropdownContent = document.getElementById('dropdown-display');
  dropdownContent.style.display = 'none';

  var breakout = document.getElementById('breakout');
  breakout.style.display = 'none';
});



function helpBreathe() {
  var breatheContent = document.getElementById('app-container');
  breatheContent.style.display = 'none';

  var helpContent = document.getElementById('help-container');
  helpContent.style.display = 'flex';

}

function backButton() {
  var breatheContent = document.getElementById('app-container');
  breatheContent.style.display = 'flex';

  var helpContent = document.getElementById('help-container');
  helpContent.style.display = 'none';

}
