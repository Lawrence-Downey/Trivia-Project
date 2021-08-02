const myQuestions = [
    {
      question: "In Which Of The Following Animals Is Respiration Done By Skin?",
      answers: {
        a: "Toad",
        b: "Frog",
        c: "Camel",
        d: "Salamander"
      },
      correctAnswer: "b"
    },
    {
      question: "How Long Does A Sloth Digest Its Food?",
      answers: {
        a: "Three Days",
        b: "One Week",
        c: "One Month",
        d: "Two Weeks"
      },
      correctAnswer: "d"
    },
    {
      question: "Lemurs Are Only Native To One Country, Which One Is It?",
      answers: {
        a: "Madagascar",
        b: "Australia",
        c: "Brazil",
        d: "New Zealand"
      },
      correctAnswer: "a"
    },
    {
      question: "Which Mammal Has The Most Powerful Bite In The World?",
      answers: {
         a: "Lion",
         b: "Polar Bear",
         c: "Hippopotamus",
         d: "Orca"
      },
      correctAnswer: "c"
    },
    {
      question: "What Bird Can't Move Their Eyeballs?",
      answers: {
         a: "Penguin",
         b: "Ostrich",
         c: "Owl",
         d: "Parrot"
      },
      correctAnswer: "c"
    },
    {
      question: "The Male Of What Species Testicles Explode On Mating And Then Dies?",
      answers: {
         a: "Hercules Beetle",
         b: "Praying Mantis",
         c: "Grey Tailed Squirrel",
         d: "Honeybee"
      },
      correctAnswer: "d"
    },
    {
      question: "How Many Bones Does A Shark Have?",
      answers: {
         a: "0",
         b: "34",
         c: "87",
         d: "78"
      },
      correctAnswer: "a"
    },
    {
      question: "What Species Has The Largest Eyes In The Animal Kingdom?",
      answers: {
         a: "Blue Whale",
         b: "Colossal Squid",
         c: "Elephant",
         d: "Girraffe"
      },
      correctAnswer: "b"
    },
    {
      question: "What Bird Can't Move Their Eyeballs?",
      answers: {
         a: "Penguin",
         b: "Ostrich",
         c: "Owl",
         d: "Parrot"
      },
      correctAnswer: "c"
    },
    {
      question: "A Dog Sweats Through Which Part Of It's Body?",
      answers: {
         a: "Paws",
         b: "Tongue",
         c: "Ears",
         d: "Nose"
      },
      correctAnswer: "a"
    },
      
];
  function buildQuiz(){
      const output = [];

      myQuestions.forEach(
          (currentQuestion, questionNumber) => {
              const answers = [];
              for(letter in currentQuestion.answers){
                  answers.push{
                      `<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter}: ${currentQuestion.answers[letter]}
                      </label>`
                      
                  }
              }
          }
      )
  }