
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {

                mycheckAnswer();
            }

            else {
                let mygameType = this.getAttribute("data-type");
                myrunGame(mygameType);
            }
        });
    }
    // myrunGame(mygameType);
});

let newlist = [];
let mylist = ['water?', 'a rock?', 'a tree?', 'a fish?', 'fire?'];


function myrunGame(mygameType) {
    let charactor = mygameType;

    //for (let i = 0; i < 5; i++) {


    /* if (mylist[mylist.length - 1] === 'fire?') {
         mylist.pop();
     }
 */
    let counta = mycounter();

    let levela = parseInt(document.getElementById("myscore").innerHTML);

    if (counta === 0) {
        //  document.getElementsByTagName("button").attribute.disable = true;
        mygameover();

    }
    else if (newlist.length === 5 && counta > 0) {
        alert(`Congratulations you have finished the ${charactor} level !!!! `);
        winner(charactor);
        console.log(newlist);
    }
    else {
        let operand = mylist.pop();

        if (charactor === 'Jesus') {
            displayjesusQuestion(charactor, operand);
        } else if (charactor === 'Jona') {
            displayjonaQuestion(charactor, operand);
        }
        else if (charactor === 'Elijah') {
            displayelijahQuestion(charactor, operand);
        }

        else if (charactor === 'Moses') {
            displaymosesQuestion(charactor, operand);
        }
        else {
            alert(`unknown game type:${charactor}`);
            throw `unknown game type:${charactor}. Aborting!!!`;
        }

        mylist.unshift(operand);


    }
}




function mycheckAnswer() {

    let myuserAnswer = document.getElementById("useranswer").value;
    let myAnswer = myworkedoutAnswer();
    let isCorrect = myuserAnswer === myAnswer[1];

    if (isCorrect) {
        alert("That is correct!!!...You Have Good Bible Study Habits!");
        myincreaseScore();
        let ads = myAnswer[2];

        if (newlist.includes(ads) !== true) {
            newlist.unshift(ads);
            console.log(newlist);
        }
        console.log(newlist);


    }
    else {
        alert(`Sorry... you said ${myuserAnswer}.  But the correct answer is ${myAnswer[1]}`);
        myincreaselossAnswer();
        ///mylist.push()

    }


    myrunGame(myAnswer[0]);

}





function myworkedoutAnswer() {

    let charactor = document.getElementById('mycharactor').innerText;
    let operand = document.getElementById('myoperand').innerText;

    if (charactor === 'Jesus' && operand === 'water?') {

        return [charactor, 'walk over it!', operand];
    }
    else if (charactor === 'Jesus' && operand === 'a rock?') {

        return [charactor, 'build a mension on it!', operand];
    }
    else if (charactor === 'Jesus' && operand === 'a tree?') {

        return [charactor, 'curse it!', , operand];
    }
    else if (charactor === 'Jesus' && operand === 'a fish?') {

        return [charactor, 'do a multiplication!', operand];
    }
    else if (charactor === 'Jesus' && operand === 'fire?') {

        return [charactor, "set it on his friends\'s heads!", operand];
    }

    else if (charactor === 'Jona' && operand === 'water?') {

        return [charactor, 'deep dive into it', operand];
    }
    else if (charactor === 'Jona' && operand === 'a rock?') {

        return [charactor, 'sit and wait for a movie to start', operand];
    }
    else if (charactor === 'Jona' && operand === 'a tree?') {

        return [charactor, 'lie down under its shadow', operand];
    }
    else if (charactor === 'Jona' && operand === 'a fish?') {

        return [charactor, 'submarine!', operand];
    }
    else if (charactor === 'Jona' && operand === 'fire?') {

        return [charactor, 'try to burn others those who frustrated him', operand];
    }


    else if (charactor === 'Elijah' && operand === 'water?') {

        return [charactor, 'season it!', operand];
    }
    else if (charactor === 'Elijah' && operand === 'a rock?') {

        return [charactor, 'hide in it', operand];
    }
    else if (charactor === 'Elijah' && operand === 'a tree?') {

        return [charactor, 'overnight stay', operand];
    }
    else if (charactor === 'Elijah' && operand === 'a fish?') {

        return [charactor, 'three year diet', operand];
    }
    else if (charactor === 'Elijah' && operand === 'fire?') {

        return [charactor, 'start a barbacue', operand];
    }

    else if (charactor === 'Moses' && operand === 'water?') {

        return [charactor, 'divide by Two', operand];
    }
    else if (charactor === 'Moses' && operand === 'a rock?') {

        return [charactor, 'strike it', operand];
    }
    else if (charactor === 'Moses' && operand === 'a tree?') {

        return [charactor, 'take of his shoes', operand];
    }
    else if (charactor === 'Moses' && operand === 'a fish?') {

        return [charactor, 'make sure it is not eel before eating', operand];
    }
    else if (charactor === 'Moses' && operand === 'fire?') {

        return [charactor, 'listen attentively', operand];
    }

    else {
        alert(`unimplemented operand ${operand}`);
        throw `unimplemented oprand ${operand}, Aborting!!!`;
    }
}

function myincreaseScore() {

    let previousmyScore = parseInt(document.getElementById("myscore").innerHTML);
    document.getElementById("myscore").innerHTML = previousmyScore + 1;

}

function myincreaselossAnswer() {

    let previousmywrongScore = parseInt(document.getElementById("wrong").innerHTML);

    document.getElementById("wrong").innerHTML = previousmywrongScore + 1;


}


function displayjesusQuestion(charactor, operand) {

    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;

}

function displayjonaQuestion(charactor, operand) {
    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;

}

function displayelijahQuestion(charactor, operand) {
    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;
}

function displaymosesQuestion(charactor, operand) {
    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;
}


function mycounter() {

    let w = parseInt(document.getElementById("wrong").innerHTML);

    let counta = 3 - w;
    document.getElementById("counterspan").innerHTML = counta;
    return counta;

}


function winner(charactor) {
    document.getElementById("gameoverdiv").style.backgroundColor = "green";
    document.getElementById("gameoverdiv").style.color = "yellow";
    document.getElementById("gameoverdiv").innerHTML = "!!!! Congratulations You Have Finished the GAMEl!!! Hit the 'Try Again' buttton  for a different set of questions";

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);

    //const button = document.getElementById("myButton");

    // Disable the button
    //button.disabled = true;
    // bp = this.getAttribute("data-type") === charactor;

    // bp.disabled = true;
}


function mygameover() {
    document.getElementById("gameoverdiv").innerHTML = "...!!GAME OVER!!...     you only get 3 chances...";
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);




}

function mygameoverlevels() {
    document.getElementById("gameoverdiv").innerHTML = "...!!GAME OVER!!...     You need to play same person level and finish before moving on to a different person level...";

}

/*let tryer = document.getElementsByClassName("restart");

tryer.addEventListener("click", tryagain());

*/

function tryagain() {

    location.reload();
}








/*

let mylist = ['water?', 'a rock?', 'a tree?', 'a fish?', 'fire?'];

function myrunGame(mygameType) {
    for (let i = 0; i < 5; ++i) {
        let laste = mylist.pop();
        mycheckAnswer(laste);
        mycounter(i);
        console.log(`${laste}`);
        if (mylist.length === 0) {
            mygameover();
        }
    }
}
function mycheckAnswer(laste) {
    alert(`comming soon is the question function`);
    console.log("I will create the my question function shortly");
}


element.style.backgroundColor = "red";

<button type="button" disabled>Click Me!</button>


*/