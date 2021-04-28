const quizContainer = document.querySelector('#quiz')
const resutsContainer = document.querySelector('#resuts')
const submitContainer = document.querySelector('#submit')


const myQuestions = [
    {
      question: "What do you call a deer with no eyes??",
      answers: {
        a: "Blind deer",
        b: "No eye-deer",
        c: "Deer in the dark"
      },
      correctAnswer: "b"
    },
    {
      question: "What do you call a fish with no eyes?",
      answers: {
        a: "Blind fish",
        b: "Eye don't see fish",
        c: "Fsh"
      },
      correctAnswer: "c"
    },
    {
      question: "What do you call a deer with no eyes and no legs?",
      answers: {
        a: "Blind legless deer",
        b: "Deer in the dark",
        c: "Still no eye-deer",
        d: "Oh dear"
      },
      correctAnswer: "c"
    },
    {
        question: "What do you call an acid with an attitude?",
        answers: {
          a: "Sour acid",
          b: "A mean-o-acid",
          c: "Bitter"
        },
        correctAnswer: "b"
      },
      {
        question: "What do you call a cow in an earthquake?",
        answers: {
          a: "Milkshake!",
          b: "Shaken, not stirred",
          c: "Shaky steak"
        },
        correctAnswer: "a"
      },
      {
        question: "What do you call a pony with a cough?",
        answers: {
          a: "Sick pony",
          b: "Horsemeat",
          c: "A little horse"
        },
        correctAnswer: "c"
      },
      {
        question: "What do you call a deer with no eyes and no legs who can't fuck?",
        answers: {
          a: "Still no fucking eye-deer",
          b: "One very unfortunate deer",
          c: "Blind, legless and incompetent deer"
        },
        correctAnswer: "a"
      }
  ];
  


function showQuestions(questions, quizContainer) {
    let output = [];
    let answers;

    for(let i = 0; i < questions.length; i++) {
        answers = [];

        for(letter in questions[i].answers) {
            answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                + '</label>'
            );
        }
        output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
    }
    quizContainer.innerHTML = output.join('');
}


function showResults() {}

theQuiz();

submitButton.addEventListener('click', showResults);







































// function doSomething() {
//     document.querySelector('#a1').innerHTML = 'Nei, prøv igjen :)';
//     document.querySelector('#a2').innerHTML = 'Nei, prøv igjen :)';
//     document.querySelector('#a3').innerHTML = 'Nei, prøv igjen :)';
//     document.querySelector('#a4').innerHTML = 'Nei, prøv igjen :)';
//     document.querySelector('#a5').innerHTML = 'Nei, prøv igjen :)';
//     document.querySelector('#a6').innerHTML = 'Nei, prøv igjen :)';

// }