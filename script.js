let currentQuestions=[];
let timer;
let timeLeft=5400;

function startExam(packageNumber){

    document.getElementById("home").style.display="none";
    document.getElementById("exam").style.display="block";

    currentQuestions = questionBank[packageNumber];

    renderQuestions();

    timer=setInterval(()=>{
        timeLeft--;

        let min=Math.floor(timeLeft/60);
        let sec=timeLeft%60;

        document.getElementById("timer").innerHTML=
        `${min}:${sec.toString().padStart(2,"0")}`;

        if(timeLeft<=0){
            finishExam();
        }

    },1000);

}

function renderQuestions(){

    const container=document.getElementById("questionContainer");

    container.innerHTML="";

    currentQuestions.forEach((q,index)=>{

        let html=`
        <div class="question">
        <h3>${index+1}. ${q.question}</h3>
        `;

        q.options.forEach((opt,i)=>{

            html+=`
            <label>
            <input type="radio"
             name="q${index}"
             value="${i}">
            ${opt}
            </label><br>
            `;
        });

        html+="</div>";

        container.innerHTML+=html;

    });
}

function finishExam(){

    clearInterval(timer);

    let total=0;

    let bioCorrect=0;
    let bioTotal=0;

    let fisCorrect=0;
    let fisTotal=0;

    let kimCorrect=0;
    let kimTotal=0;

    currentQuestions.forEach((q,index)=>{

        let ans=document.querySelector(
        `input[name=q${index}]:checked`
        );

        if(q.field==="Biologi") bioTotal++;
        if(q.field==="Fisika") fisTotal++;
        if(q.field==="Kimia") kimTotal++;

        if(ans && Number(ans.value)===q.answer){

            total++;

            if(q.field==="Biologi") bioCorrect++;
            if(q.field==="Fisika") fisCorrect++;
            if(q.field==="Kimia") kimCorrect++;
        }
    });

    let score=(total/currentQuestions.length*100).toFixed(1);

    document.getElementById("exam").style.display="none";

    document.getElementById("result").style.display="block";

    document.getElementById("result").innerHTML=`

    <div class="result-box">

    <h2>Hasil Simulasi</h2>

    <h3>Nilai: ${score}</h3>

    <p>Total Benar: ${total}</p>
    <p>Total Salah: ${40-total}</p>

    <hr>

    <h3>Biologi</h3>
    <p>${(bioCorrect/bioTotal*100).toFixed(1)}%</p>

    <h3>Fisika</h3>
    <p>${(fisCorrect/fisTotal*100).toFixed(1)}%</p>

    <h3>Kimia</h3>
    <p>${(kimCorrect/kimTotal*100).toFixed(1)}%</p>

    </div>
    `;
                      }
