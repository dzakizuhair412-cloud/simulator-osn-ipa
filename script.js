// 1. Inisialisasi variabel untuk menyimpan paket yang dipilih
let currentPaket = null;

// 2. Fungsi yang dijalankan saat sebuah paket dipilih
function pilihPaket(nomorPaket) {
    currentPaket = nomorPaket;
    console.log("Paket yang dipilih: " + currentPaket);
    
    // Di sini Anda bisa menambahkan fungsi untuk memuat soal, contoh:
    // muatSoal(currentPaket);
    
    // Opsional: Menandai tombol yang sedang aktif/dipilih secara visual
    tampilkanTombolAktif(nomorPaket);
}

// 3. Menghubungkan fungsi ke tombol-tombol di HTML (Event Listener)
// Pastikan ID atau Class tombol di HTML sesuai
document.querySelectorAll('.btn-paket').forEach((tombol, indeks) => {
    tombol.addEventListener('click', () => {
        // Indeks dimulai dari 0, jadi paket 1 adalah indeks 0 + 1
        pilihPaket(indeks + 1);
    });
});
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const answer = selected ? selected.value : "";

    if (q.subject === "Biologi") bio.t++;
    if (q.subject === "Fisika") fis.t++;
    if (q.subject === "Kimia") kim.t++;

    if (answer === q.correct) {
      score++;

      if (q.subject === "Biologi") bio.c++;
      if (q.subject === "Fisika") fis.c++;
      if (q.subject === "Kimia") kim.c++;
    }
  });

  const result = document.getElementById("result");

  result.innerHTML = `
    <h2>Hasil Quiz</h2>
    <p>Skor: ${score} / 20</p>
    <p>Biologi: ${bio.c}/${bio.t} (${Math.round(bio.c/bio.t*100)}%)</p>
    <p>Fisika: ${fis.c}/${fis.t} (${Math.round(fis.c/fis.t*100)}%)</p>
    <p>Kimia: ${kim.c}/${kim.t} (${Math.round(kim.c/kim.t*100)}%)</p>
  `;
}    currentQuestions.forEach((q,index)=>{

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
