
let result = ' ';
//to store in local storage
//    let score = {
//             wins : 0,
//             loose : 0,
//             tie: 0            
//         }
// to store in local storage and use of Json.string to convert it into object 
let score =JSON.parse(localStorage.getItem('score'));
if(score===null){
    score={wins:0, loose:0 , tie:0 };
}
function updateScore(){
document.querySelector('.js-score').innerHTML=`wins: ${score.wins} tie: ${score.tie} loose: ${score.loose}`;
}
function play(userChoice) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log('Computer choice is: ' + computerChoice);
    if (userChoice === computerChoice) {
    result = 'It\'s a tie';
    console.log(result);
    score.tie += 1;
    } else if ((userChoice === 'Rock' && computerChoice === 'Scissors') ||(userChoice === 'Paper' && computerChoice === 'Rock') ||(userChoice === 'Scissors' && computerChoice === 'Paper')) {
        result = "user wins";
        console.log(result);
        score.wins += 1;
    } else {
        result = 'Computer wins'
        console.log(result);
        score.loose += 1;
    }
    //use of setItem to set the value just like seteer and geeter and json.stringify uses to convert objects into strings
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector(".js-result").innerHTML=result;
   document.querySelector('.js-choice').innerHTML=`
   You
        <img src="${userChoice}Emoji.jpg" class="icon-image">
        <img src="${computerChoice}Emoji.jpg" class="icon-image">
        computer`;
   updateScore();
// alert(`wins: ${score.wins}, loose: ${score.loose}, tie: ${score.tie}`);
}

updateScore();

