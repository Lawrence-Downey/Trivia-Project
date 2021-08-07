const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
const questionImage = document.querySelector("#questionImage");

const SCORE_POINTS = 75;
const MAX_QUESTIONS = 10;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let myQuestions = [
  {
    question: "In Which Of The Following Animals Is Respiration Done By Skin?",
    choice1: "Toad",
    choice2: "Frog",
    choice3: "Camel",
    choice4: "Salamander",
    correctAnswer: 2,
    questionImage: "Images/ImageQ1.jpg",
  },
  {
    question: "How Long Does A Sloth Digest Its Food?",
    choice1: "Three Days",
    choice2: "One Week",
    choice3: "One Month",
    choice4: "Two Weeks",
    correctAnswer: 4,
    questionImage: "Images/ImageQ2.jpg",  
  },
  {
    question: "Lemurs Are Only Native To One Country, Which One Is It?",
    choice1: "Madagascar",
    choice2: "Australia",
    choice3: "Brazil",
    choice4: "New Zealand",
    correctAnswer: 1,
    questionImage: "Images/ImageQ3.jpg",
  },
  {
    question: "Which Mammal Has The Most Powerful Bite In The World?",
    choice1: "Lion",
    choice2: "Polar Bear",
    choice3: "Hippopotamus",
    choice4: "Orca",
    correctAnswer: 3,
    questionImage: "Images/ImageQ4.jpg",
  },
  {
    question: "What Bird Can't Move Their Eyeballs?",
    choice1: "Penguin",
    choice2: "Ostrich",
    choice3: "Owl",
    choice4: "Parrot",
    correctAnswer: 3,
    questionImage: "Images/ImageQ5.jpg",
  },
  {
    question: "The Male Of What Species Has Their Testicles Explode After Mating Causing Them To Die?",
    choice1: "Hercules Beetle",
    choice2: "Praying Mantis",
    choice3: "Grey Tailed Squirrel",
    choice4: "Honeybee",
    correctAnswer: 4,
    questionImage: "Images/ImageQ6.jpg", 
  },
  {
    question: "How Many Bones Does A Shark Have?",
    choice1: "0",
    choice2: "34",
    choice3: "87",
    choice4: "78",
    correctAnswer: 1,
    questionImage: "Images/ImageQ7.jpg",
  },
  {
    question: "What Species Has The Largest Eyes In The Animal Kingdom?",
    choice1: "Blue Whale",
    choice2: "Colossal Squid",
    choice3: "Elephant",
    choice4: "Girraffe",
    correctAnswer: 2,
    questionImage: "Images/ImageQ8.jpg",
  },
  {
    question: "A Dog Sweats Through Which Part Of It's Body?",
    choice1: "Paws",
    choice2: "Tongue",
    choice3: "Ears",
    choice4: "Nose",
    correctAnswer: 1,
    questionImage: "Images/ImageQ9.jpg",
  },
  {
    question: "What is the slowest animal in the world?",
    choice1: "Tortoise",
    choice2: "Three-toed Sloth",
    choice3: "Starfish",
    choice4: "Loris",
    correctAnswer: 2,
    questionImage: "Images/ImageQ10.jpg",
  },
  {
    question: "Which of the following animals does not sleep?",
    choice1: "Anteater",
    choice2: "Rattle Snake",
    choice3: "Sea Turtle",
    choice4: "Bullfrog",
    correctAnswer: 4,
    questionImage: "Images/ImageQ11.jpg",
  },
  {
    question: "Which bird's diet consists mostly of bones?",   
    choice1: "Bearded Vulture",
    choice2: "Peregrine Falcon",
    choice3: "Barn Owl",
    choice4: "Egyptian Vulture",
    correctAnswer: 1,
    questionImage: "Images/ImageQ12.jpg",
  },
  {
    question: "How many hearts does an octopus have?",
    choice1: "3",
    choice2: "4",
    choice3: "8",
    choice4: "1",
    correctAnswer: 1,
    questionImage: "Images/ImageQ13.jpg",
  },
  {
    question: "What animal's teeth never stop growing?",
    choice1: "Great White Shark",
    choice2: "Alligator",
    choice3: "Beaver",
    choice4: "American Chipmunk",
    correctAnswer: 3,
    questionImage: "Images/ImageQ14.jpg",
  }       
];

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...myQuestions];
  getNewQuestion();
}


getNewQuestion = () => {
  if(questionCounter >= MAX_QUESTIONS){
    localStorage.setItem("mostRecentScore", score);
    window.location.replace("/endPage.html") 
  }

  questionCounter++
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  questionImage.src = currentQuestion.questionImage;
  
  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex,1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", evt => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = evt.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let applyToClass = selectedAnswer == currentQuestion.correctAnswer ? "correct" : "incorrect";
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