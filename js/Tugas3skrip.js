function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;
    

    let hasil = `
    <h2>Hasil Input:</h2>
    <p>Nama: ${nama}</p>
    <p>Pekerjaan: ${pekerjaan}</p>
    <p>Hobby: ${hobby}</p>
    `;

    document.getElementById('hasil').innerHTML = hasil;

    // tugas adalah lengkapi kode berikut dan tampilkan hasilnya ada pada HTML
    // 1. isian nama 
    // 2. isisan pekerjaan
    // 3. isisan Hobby
}