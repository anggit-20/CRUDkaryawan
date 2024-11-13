
// OBJECT

const siswa1 = {
    
}

const siswa2 = {
    
}

const siswa3 = {
    
}

const siswa4 = {
    
}

const siswa5 = {
   
}

const daftarSiswa = [
    {
        nama: "Rosa",
        jenKel: "P",
        umur: "17",
        wfavorit: "kuning",
        seragam: [`osis`, `identitas`, `wearpack`, `pramuka`, `olahraga`]
    },

    {
        nama: "Ambar",
        jenKel: "L",
        umur: "16",
        wfavorit: "merah",
        seragam: [`osis`, `identitas`, `wearpack`, `pramuka`, `olahraga`]
    },

    {
        nama: "Rizki",
        jenKel: "P",
        umur: "16",
        wfavorit: "ungu",
        seragam: [`osis`, `identitas`, `wearpack`, `pramuka`, `olahraga`]
    },

    {
        nama: "Mila",
        jenKel: "P",
        umur: "18",
        wfavorit: "biru",
        seragam: [`osis`, `identitas`, `wearpack`, `pramuka`, `olahraga`]
    },

    {
        nama: "Bagas",
        jenKel: "L",
        umur: "15",
        wfavorit: "coklat",
        seragam: [`osis`, `identitas`, `wearpack`, `pramuka`, `olahraga`]
    },
]

    let mode = 'tambah'

// arrow function 
const tampilkanSiswa = () => {
    const tblSiswa = document.getElementById("tblSiswa")
    tblSiswa.innerHTML = `<thead> <tr><th scope="col">No</th><th scope="col">Nama</th><th scope="col">Jenis Kelamin</th><th scope="col">Umur</th><th scope="col">Warna Fav</th></tr></thead>`

    for(let index in daftarSiswa){
        console.log(`${parseInt(index) + 1}. ${daftarSiswa[index].nama} dengan jenis kelamin ${daftarSiswa[index].jenKel} dan berumur ${daftarSiswa[index].umur}, menyukai warna ${daftarSiswa[index].wfavorit}`)

        tblSiswa.innerHTML += `<tr><th>${parseInt(index) + 1}</th><td>${daftarSiswa[index].nama}</td><td>${daftarSiswa[index].jenKel}</td><td>${daftarSiswa[index].umur}</td><td>${daftarSiswa[index].wfavorit}</td><td><button type="button" class="btn btn-danger" onclick="hapusSiswa('${daftarSiswa[index].nama}')">Hapus</button></td><td><button type="button" class="btn btn-warning" onclick="editSiswa('${daftarSiswa[index].nama}')">Edit</button></td></tr>`
    }

}

const tambahSiswa = () => {
    const nama = document.getElementById("nama").value 
    const jenKel = document.getElementById("jenKel").value
    const umur = document.getElementById("umur").value 
    const wfavorit = document.getElementById("wFav").value 
   

    const siswaBaru = {
        nama: nama,
        jenKel: jenKel,
        umur: umur,
        wfavorit: wfavorit,
        seragam: [`osis`, `identitas`, `wearpack`, `pramuka`, `olahraga`]
    }

    if(mode == 'tambah'){
        daftarSiswa.push(siswaBaru)
    } else {
        daftarSiswa[mode] = siswaBaru
    }

    document.getElementById("nama").value = ""
    document.getElementById("jenKel").value = ""
    document.getElementById("umur").value = ""
    document.getElementById("wFav").value = ""

     mode = 'tambah'

    tampilkanSiswa()
} 

const cariIndex = (nama) => {
    // tampilkan index jika nama siswa === nama
    for(let i = 0; i < daftarSiswa.length; i++) {
        if(daftarSiswa[i].nama == nama){
            return i
        }
    }
}

const hapusSiswa = (target) => {
    const hapusIndex = cariIndex(target)
    daftarSiswa.splice(hapusIndex, 1)

    tampilkanSiswa()
}

const editSiswa = (target) => {
    const indexEdit = cariIndex(target)

    const siswaDiedit = daftarSiswa[indexEdit]

        document.getElementById("nama").value = siswaDiedit.nama;
        document.getElementById("jenKel").value = siswaDiedit.jenKel;
        document.getElementById("umur").value = siswaDiedit.umur;
        document.getElementById("wFav").value = siswaDiedit.wfavorit;

    mode = indexEdit

    // const namaBaru = document.getElementById("nama").value = siswaDiedit.nama;
    // const jenKelBaru =  document.getElementById("jenKel").value = siswaDiedit.jenKel;
    // const umurBaru = document.getElementById("umur").value = siswaDiedit.umur;
    // const wfavoritBaru = document.getElementById("wFav").value = siswaDiedit.wfavorit;

    // daftarSiswa[indexEdit] = {
    //     nama: namaBaru,
    //     jenKel: jenKelBaru,
    //     umur: umurBaru,
    //     wfavorit: wfavoritBaru
    // }

}

const cancel = (target) => {
    document.getElementById("nama").value = ''
    document.getElementById("jenKel").value = ''
    document.getElementById("umur").value = ''
    document.getElementById("wFav").value = ''

    mode = 'tambah'

}



