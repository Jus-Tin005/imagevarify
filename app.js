const  database = [
        {
                question: "Choose Traffic  Light ?",
                a:"./l15img/img/airport.jpg",
                b:"./l15img/img/ambulance.jpg",
                c:"./l15img/img/mountain.jpg",
                d:"./l15img/img/traffic.jpg",
                correctAnswer:"a"
        },
        {
                question: "Choose Mountain ?",
                b:"./l15img/img/ambulance.jpg",
                a:"./l15img/img/airport.jpg",
                c:"./l15img/img/mountain.jpg",
                d:"./l15img/img/traffic.jpg",
                correctAnswer:"b"
        },
        {
                question: "Choose Ambulance Truck ?",
                c:"./l15img/img/mountain.jpg",
                a:"./l15img/img/airport.jpg",
                b:"./l15img/img/ambulance.jpg",
                d:"./l15img/img/traffic.jpg",
                correctAnswer:"c"
        },
        {
                question: "Choose Airport ?",
                d:"./l15img/img/traffic.jpg",
                a:"./l15img/img/airport.jpg",
                b:"./l15img/img/ambulance.jpg",
                c:"./l15img/img/mountain.jpg",
                correctAnswer:"d"
        }


];

// console.log(database);
// console.log(database[0]);
// console.log(database[0].a);
// console.log(database[0].b);
// console.log(database[0].c);
// console.log(database[0].d);


const getContainer =  document.querySelector(".container"),
         getQuestion = document.querySelector(".question"),
         getAnswers = document.querySelectorAll(".answer");


const geta_img = document.getElementById("a_img"),
         getb_img = document.getElementById("b_img"),
         getc_img = document.getElementById("c_img"),
         getd_img = document.getElementById("d_img"),
         getBtn = document.querySelector(".btn");


         let currentIdx = 0;
         let score = 0;

         startQuestion();




function startQuestion(){

        removeSelects();

        const currentQuestion = database[currentIdx];
        // console.log(currentQuestion);


      /*   getQuestion.textContent = database[0].question;
        geta_img.src = database[0].a;
        getb_img.src = database[0].b;
        getc_img.src = database[0].c;
        getd_img.src = database[0].d; */


        getQuestion.textContent = currentQuestion.question;
        geta_img.src = currentQuestion.a;
        getb_img.src = currentQuestion.b;
        getc_img.src = currentQuestion.c;
        getd_img.src = currentQuestion.d;
}


function getSingleAnswer(){
        let answer;
        // console.log(answer);

        // console.log(getAnswers);

        getAnswers.forEach(function(getAnswer){
                // console.log(getAnswer);
                // console.log(getAnswer.id);

                if(getAnswer.checked){
                        // console.log(getAnswer.id);
                        answer = getAnswer.id;
                }
        });

        // console.log(answer);
        return answer;
}

// getSingleAnswer();


getBtn.addEventListener('click',function(){
        // console.log("heeee");

        const secondAnswer =  getSingleAnswer();
        // console.log(secondAnswer);

        if(secondAnswer){
                //   console.log(secondAnswer);

                if(secondAnswer === database[currentIdx].correctAnswer){
                        score++;   // need increment
                }

                currentIdx++;
                // console.log(currentIdx);

                if(currentIdx < database.length){
                        startQuestion();
                }else{
                        // console.log(score);

                        getContainer.innerHTML = `
                        <h3>Total Score : ${score*25}</h3>
                        <h4>You answered correctly at ${score} / ${database.length} question.</h4>

                        <!--<button type="button" class="btn" ondblclick="location.reload()">Click to Reload</button>-->

                        <button type="button" class="btn" onclick="doubleClick()">Double Click to Reload</button>

                        `;
                }


        }else{
                window.alert("Choose One Answer !");
        }
});


function removeSelects(){
        getAnswers.forEach(function(getAnswer){
                return getAnswer.checked = false;
        });
}



let clickTimes = 0;

function doubleClick(){
        // console.log("hey");

        // console.log(clickTimes);

        if(clickTimes === 0){
                // clickTimes = new Date().getTime();
                clickTimes = Date.now();
                // console.log(clickTimes);
        }else{
                // if( (new Date().getTime() - clickTimes) < 500) {
                        if( ( Date.now() - clickTimes) < 500) {
                        // console.log("heppp");
                        location.reload();
                        clickTimes = 0;
                }else {
                        // clickTimes = new Date().getTime();
                        clickTimes = Date.now();
                }
        }
}