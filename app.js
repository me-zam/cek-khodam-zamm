document.getElementById('khodamform').addEventListener('submit', function(e){
    e.preventDefault();

    const nama = document.getElementById('namalengkap').value;
    const khodam = generatekhodam(nama);
    document.getElementById('hasil').innerHTML = `<p>Khodam anda ${nama} adalah ${khodam}</p>`;
    document.getElementById('namaLengkap').value = "";
})

function generatekhodam(nama){
    const khodams = [
        'Buaya darat &#x1F4A9;',
        'Raja Iblis &#x1F480;',
        'Tukang Kentut &#x1F639;',
        'Elang Papua &#x1F480;',
        'Bocil ingusan &#x1F4A9;',
        'Roh Jahat &#x1F480;',
        'Ayam Jantan &#x1F639;',
        'Roger Sumatera &#x1F639;',
        'Biawak Jawa &#x1F480;',
        'Makhluk Hytam &#x1F480;',
        'Anomali &#x1F480;',
        'Orang Ganteng &#x1F480;',
        'Tunggu Kiris &#x1F480;',
        'Leviathan &#x1F480;',
        'Wibu Nolep &#x1F4A9;',
        'Iblis Keren &#x1F480;',
        'Ksatria Sigma &#x1F917;',
        'Pangeran Kegelapan &#x1F480;',
        'Si Imut &#x1F917;',
        'Monyet Biru &#x1F639;',
        'Kucing Mewing &#x1F917;;'
    ];

    const index = nama.length % khodams.length;
    return khodams[index];
}