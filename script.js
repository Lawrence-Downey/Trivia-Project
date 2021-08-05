const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
const questionImage = document.getElementById("questionImage");
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let myQuestions = [
  {
    question: "In Which Of The Following Animals Is Respiration Done By Skin?", 
    images: "C:\Users\coope\OneDrive\TriviaProject\Images",
    choice1: "Toad",
    choice2: "Frog",
    choice3: "Camel",
    choice4: "Salamander",
    correctAnswer: 2,
  },
  {
    question: "How Long Does A Sloth Digest Its Food?",
    images: "C:\Users\coope\OneDrive\TriviaProject\Images",  
    choice1: "Three Days",
    choice2: "One Week",
    choice3: "One Month",
    choice4: "Two Weeks",
  correctAnswer: 4,
  },
  {
    question: "Lemurs Are Only Native To One Country, Which One Is It?",
    images: "C:\Users\coope\OneDrive\TriviaProject\Images",
    choice1: "Madagascar",
    choice2: "Australia",
    choice3: "Brazil",
    choice4: "New Zealand",
    correctAnswer: 1,
  },
  {
    question: "Which Mammal Has The Most Powerful Bite In The World?",
    images: "C:\Users\coope\OneDrive\TriviaProject\Images",
    choice1: "Lion",
    choice2: "Polar Bear",
    choice3: "Hippopotamus",
    choice4: "Orca",
    correctAnswer: 3,
  },
  {
    question: "What Bird Can't Move Their Eyeballs?",
    images: "C:\Users\coope\OneDrive\TriviaProject\Images",
    choice1: "Penguin",
    choice2: "Ostrich",
    choice3: "Owl",
    choice4: "Parrot",
    correctAnswer: 3,
  },
  {
    question: "The Male Of What Species Testicles Explode On Mating And Then Dies?",
    images: "C:\Users\coope\OneDrive\TriviaProject\Images", 
    choice1: "Hercules Beetle",
    choice2: "Praying Mantis",
    choice3: "Grey Tailed Squirrel",
    choice4: "Honeybee",
    correctAnswer: 4,
  },
  {
    question: "How Many Bones Does A Shark Have?",
    images: "C:\Users\coope\OneDrive\TriviaProject\Images",
    choice1: "0",
    choice2: "34",
    choice3: "87",
    choice4: "78",
    correctAnswer: 1,
  },
  {
    question: "What Species Has The Largest Eyes In The Animal Kingdom?",
    images: "C:\Users\coope\OneDrive\TriviaProject\Images",
    choice1: "Blue Whale",
    choice2: "Colossal Squid",
    choice3: "Elephant",
    choice4: "Girraffe",
    correctAnswer: 2,
  },
  {
    question: "A Dog Sweats Through Which Part Of It's Body?",
    images: "C:\Users\coope\OneDrive\TriviaProject\Images",
    choice1: "Paws",
    choice2: "Tongue",
    choice3: "Ears",
    choice4: "Nose",
    correctAnswer: 1,
  },
  {
    question: "What is the slowest animal in the world?",
    images: "C:\Users\coope\OneDrive\TriviaProject\Images",
    choice1: "Tortoise",
    choice2: "Three-toed Sloth",
    choice3: "Starfish",
    choice4: "Loris",
    correctAnswer: 2,
  },
  {
    question: "Which of the following animals does not sleep?",
    images: "C:\Users\coope\OneDrive\TriviaProject\Images",
    choice1: "Anteater",
    choice2: "Rattle Snake",
    choice3: "Sea Turtle",
    choice4: "Bullfrog",
    correctAnswer: 4,
  },
  {
    question: "Which bird's diet consists mostly of bones?",
    images: "C:\Users\coope\OneDrive\TriviaProject\ImagesS",
    choice1: "Bearded Vulture",
    choice2: "Peregrine Falcon",
    choice3: "Barn Owl",
    choice4: "Egyptian Vulture",
    correctAnswer: 1,
  },
  {
    question: "How many hearts does an octopus have?",
    images: "C:\Users\coope\OneDrive\TriviaProject\Images",
    choice1: "3",
    choice2: "4",
    choice3: "8",
    choice4: "1",
    correctAnswer: 1,
  },
  {
    question: "What animal's teeth never stop growing?",
    images: "C:\Users\coope\OneDrive\TriviaProject\Images",
    choice1: "Great White Shark",
    choice2: "Wombat",
    choice3: "Beaver",
    choice4: "American Chipmunk",
    correctAnswer: 3,
  }       
];


startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...myQuestions];
  getNewQuestion();
}

getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/end.html");
  }

  
  questionCounter++
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.slice(0, 10);
  acceptingAnswers = true;
  question.innerText = currentQuestion.question;

};

choices.forEach(choice => {
  choice.addEventListener("click", evt => {
    if(!acceptingAnswers)
    return;

    acceptingAnswers = false;
    const selectedChoice = evt.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let applyToClass = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    if(applyToClass === "correct"){
      incrementScore(SCORE_POINTS);
    };

    selectedChoice.parentElement.classList.add(applyToClass);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(applyToClass);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();


