var triviaQuestionArray = [{
    question: 'What was the original title of Kurt Sutters motorcycle club family drama?',
    possibleAnswerA:'Reaper Men',
    possibleAnswerB:'Forever Sam Crow',
    possibleAnswerC:'Men of Mayhem',
    possibleAnswerD:'Redwood Originals',
    correctAnswer: 'Forever Sam Crow',
}, {
    question: 'What song is the soundtrack to Jaxs vicious murder of Chris Dunn?',
    possibleAnswerA:'All Along The Watchtower',
    possibleAnswerB:'Bohemian Rhapsody”',
    possibleAnswerC:'What a Wonderful World”',
    possibleAnswerD:'Gimme Shelter”',
    correctAnswer: 'Bohemian Rhapsody',
}, {
    question: 'What does Stephen Kings Bachman accept as partial payment for his cleaner services at Gemmas dads house?',
    possibleAnswerA:'A praying-hands statue',
    possibleAnswerB:'A record player',
    possibleAnswerC:'Porcelain figurines',
    possibleAnswerD:'A Jesus statue',
    correctAnswer:'A praying-hands statue',
}, {
    question: 'When did John Teller die?',
    possibleAnswerA:'1990',
    possibleAnswerB:'1991',
    possibleAnswerC:'1992',
    possibleAnswerD:'1993',
    correctAnswer:'1993',
}, {
    question: 'Just like Kurt Sutter, Tig suffers from pediophobia, a fear of __________.',
    possibleAnswerA:'Feet',
    possibleAnswerB:'Dolls',
    possibleAnswerC:'Clowns',
    possibleAnswerD:'Worms',
    correctAnswer:'Dolls',
}, {
    question: 'Season 3 attracted an average of how many million viewers per week?',
    possibleAnswerA:'1.6 million',
    possibleAnswerB:'4.9 million',
    possibleAnswerC:'3.2 million',
    possibleAnswerD:'2.8 million',
    correctAnswer:'4.9 million',
}, {
    question: 'What is the name of the Sons of Anarchy house band, led by show music supervisor Bob Thiele?',
    possibleAnswerA:'The Forest Rangers',
    possibleAnswerB:'The Revelators',
    possibleAnswerC:'The Preacher Men',
    possibleAnswerD:'The White Buffalo',
    correctAnswer:'The Forest Rangers',
}, {
    question: 'What happens when SAMCRO goes to church?',
    possibleAnswerA:'They go to church',
    possibleAnswerB:'They have a club meeting',
    possibleAnswerC:'They have a party with another SAMCRO chapter',
    possibleAnswerD:'They go on a long group ride',
    correctAnswer:'They have a club meeting',
}, {
    question: 'Who is the leader of the Byz Lats street gang?',
    possibleAnswerA:'Marcus Alvarez',
    possibleAnswerB:'Henry Lin',
    possibleAnswerC:'Nero Padilla',
    possibleAnswerD:'T.O. Cross',
    correctAnswer:'Nero Padilla',
}, {
    question: 'Who is Ron Tullys favorite poet?',
    possibleAnswerA:'Emily Bronte',
    possibleAnswerB:'Jane Austen',
    possibleAnswerC:'Emily Dickenson',
    possibleAnswerD:'Elizabeth Barrett Browning',
    correctAnswer:'Emily Bronte',
}];

var correctAnswerArray = [];
var answerSelect = [];

var correct = 0;
var incorrect = 0;
var outOfTime;
var number = 36;

//making my buttons do something when they get clickity clicked
function addClickListeners() {
    $('#start').click(createTriviaGame);
    $('#finish').click(finishMenu);
    $('#finishAgain').click(createTriviaGame);
    //$('.answer').click(pullInfoFromButton);
}


//Display all questions to page
function createTriviaGame(){
    $('#countDownTimer').show();
    $('#mainContent').show();
    $('#startMenu').hide();
    for(var i = 0; i < triviaQuestionArray.length; i++){
        //creates and appends <h3> of "questions"
        $('<h3>' + (i + 1) + ". " + triviaQuestionArray[i].question + '</h3>').appendTo('#triviaQuestion' + i);


        //creates radio buttons dynamically using jquery AND appends multiple choice possible answers
        $('<input id="answer1" type="radio" class="answer q' + i + '"  name="answer"><span id="ansOption1" + i></span>').html(triviaQuestionArray[i].possibleAnswerA).appendTo('.answerOptions' + i);
        $('<input id="answer2" type="radio" class="answer q' + i + '" name="answer"><span id="ansOption2" + i></span>').html(triviaQuestionArray[i].possibleAnswerB).appendTo('.answerOptions' + i);
        $('<input id="answer3" type="radio" class="answer q' + i + '" name="answer"><span id="ansOption3" + i></span>').html(triviaQuestionArray[i].possibleAnswerC).appendTo('.answerOptions' + i);
        $('<input id="answer4" type="radio" class="answer q' + i + '" name="answer"><span id="ansOption4" + i></span>').html(triviaQuestionArray[i].possibleAnswerD).appendTo('.answerOptions' + i);

        correctAnswerArray.push(triviaQuestionArray[i].correctAnswer);

    }
    console.log(correctAnswerArray);
    $('#finish').show();
    timeIsUp();

    //calls button
    $('.answer').click(pullInfoFromButton);
}

//My timer function--- Understand
function timeIsUp(){
    outOfTime = setTimeout(finishMenu, 36000);
    counter = setInterval(decrement, 1000);
    console.log(number);

}
//my timer fuction part two --- Understand
function decrement(){
    number--;
    $('#countDownTimer').html('Time Remaining: ' + number);
    if (number === 0){
    clearInterval(counter);
    }
}

function finishMenu(){
    answerCount();
    $('#mainContent').hide();
    $('#finish').hide();
    $('#finishAgain').show();

    clearInterval(counter);
    $('#countDownTimer').html("Seconds Unused: " + number - 1);

    $('#correct').html('Correct Answers: ' + correct);
    console.log('correct answers: ' + incorrect);
    $('#incorrect').html('Incorrect Answers: ' + incorrect);
    console.log('incorrect answers: ' + incorrect);

}

function pullInfoFromButton() {
    var answerText = $(this).text();
    console.log(answerText);
    //index
    var questionNumber = $(this).attr('class').slice(-1);
    answerSelect[questionNumber] = answerText;
    console.log(answerSelect);

}

function answerCount() {

    for(var i = 0; i<correctAnswerArray.length; i++){
        if (answerSelect[i] === correctAnswerArray[i]){
            correct++;
        }
    }
    incorrect = correctAnswerArray.length - correct;
}

//starts the trivia game!
$(document).ready(function() {
    addClickListeners();

});
