const nama = [
    "Devyn Ramirez",
    "Harmony Duncan",
    "Clarissa Burgess",
    "Reilly Blanchard",
    "Zion Brooks",
    "Jovanny Mays",
    "Cindy Chase",
    "Kristin Mcdaniel",
    "Macey Sanford",
    "Alfredo Faulkner"
]

const masaKerja = [
    10,
    5,
    8,
    7,
    4,
    10,
    9,
    8,
    7,
    10
]


const daftarKaryawan = [
    {
        nama: "Devyn Ramirez",
        NIK: "1",
        masaKerja: "10",
        gaji: "7.000.000"
    },

    {
        nama: "Harmony Duncan",
        NIK: "2",
        masaKerja: "5",
        gaji: "4.000.000"
    },

    {
        nama: "Clarissa Burgess",
        NIK: "3",
        masaKerja: "8",
        gaji: "7.000.000"
    },

    {
        nama: "Reilly Blanchard",
        NIK: "4",
        masaKerja: "7",
        gaji: "7.000.000"
    },

    {
        nama: "Zion Brooks",
        NIK: "5",
        masaKerja: "4",
        gaji: "4.000.000"
    },

    {
        nama: "Jovanny Mays",
        NIK: "6",
        masaKerja: "10",
        gaji: "7.000.000"
    },

    {
        nama: "Cindy Chase",
        NIK: "7",
        masaKerja: "9",
        gaji: "7.000.000"
    },

    {
        nama: "Kristin Mcdaniel",
        NIK: "8",
        masaKerja: "8",
        gaji: "7.000.000"
    },

    {
        nama: "Macey Sanford",
        NIK: "9",
        masaKerja: "7",
        gaji: "7.000.000"
    },

    {
        nama: "Alfredo Faulkner",
        NIK: "10",
        masaKerja: "10",
        gaji: "7.000.000"
    }

]

let mode = 'tambah'

karyawanJunior = []
karyawanSenior = []

for(let i = 0; i < nama.length; i++) {
    // mencari masa kerja dengan index ke-i jika kurang dari 6 maka 
    if(masaKerja[i]< 6){
        karyawanJunior.push(nama[i]) // akan dimasukkan ke var karyawanJunior dengan (.push), yang
                                        // dimasukkan adalah namanya dengan index ke-i yang sudah dicari
        console.log(`Karyawan ${nama[i]} mendapatkan gaji Rp 4.000.000`)
    } else {
        karyawanSenior.push(nama[i])
        console.log(`Karyawan ${nama[i]} mendapatkan gaji Rp 7.000.000`)  
    }
}

// menampilkan daftar karyawan
const tampilkanKaryawan = () => {
    const tblKaryawan = document.getElementById('tblKaryawan')
    tblKaryawan.innerHTML = `<thead> <tr><th>No</th><th>Nama</th><th>NIK</th><th>Masa Kerja</th><th>Gaji</th><th>Option</th></tr></thead>`
    
    for(let index in daftarKaryawan){
        console.log(`${parseInt(index) + 1}. ${daftarKaryawan[index].nama} dengan NIK ${daftarKaryawan[index].NIK} dan masa kerja ${daftarKaryawan[index].masaKerja} mendapatkan gaji ${daftarKaryawan[index].gaji}`)
        
        tblKaryawan.innerHTML += `<tr><th>${parseInt(index) + 1}</th><td>${daftarKaryawan[index].nama}</td><td>${daftarKaryawan[index].NIK}</td><td>${daftarKaryawan[index].masaKerja}</td><td>${daftarKaryawan[index].gaji}</td><td><button type="button" class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[index].nama}')">Hapus</button></td><td><button type="button" class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[index].nama}')">Edit</button></td></tr>`
    }
}
// selesai

const tambahKaryawan = () => {
    const nama = document.getElementById("nama").value
    const NIK = document.getElementById("nik").value
    const masaKerja = document.getElementById("mKerja").value
    const gaji = document.getElementById("gaji").value
    
    const karyawanBaru = {
        nama: nama,
        NIK: NIK,
        masaKerja: masaKerja,
        gaji: gaji,
    }

    if(mode == 'tambah'){
        daftarKaryawan.push(karyawanBaru)
    } else {
        daftarKaryawan[mode] = karyawanBaru
    }

    document.getElementById("nama").value = ""
    document.getElementById("nik").value = ""
    document.getElementById("mKerja").value = ""
    document.getElementById("gaji").value = ""

     mode = 'tambah'

    // daftarKaryawan.push(karyawanBaru)
    tampilkanKaryawan()
}

const cariIndex = (nama) => {
    // tampilkan index jika nama siswa === nama
    for(let i = 0; i < daftarKaryawan.length; i++) {
        if(daftarKaryawan[i].nama == nama){
            return i
        }
    }
}

const hapusKaryawan = (target) => {
    const hapusIndex = cariIndex(target)
    daftarKaryawan.splice(hapusIndex, 1)

    tampilkanKaryawan()
}

const editKaryawan = (target) => {
    const indexEdit = cariIndex(target)

    const karyawanDiedit = daftarKaryawan[indexEdit]

        document.getElementById("nama").value = karyawanDiedit.nama;
        document.getElementById("nik").value = karyawanDiedit.NIK;
        document.getElementById("mKerja").value = karyawanDiedit.masaKerja;
        document.getElementById("gaji").value = karyawanDiedit.gaji

        mode = indexEdit

    // const namaBaru = document.getElementById("nama").value
    // const nikBaru = document.getElementById("nik").value
    // const masaKerjaBaru = document.getElementById("mKerja").value
    // const gajiBaru = document.getElementById("gaji").value

    // daftarKaryawan[indexEdit] = {
    //     nama: namaBaru,
    //     NIK: nikBaru,
    //     masaKerja: masaKerjaBaru,
    //     gaji: gajiBaru,
    // }
}

const cancel = (target) => {
    document.getElementById("nama").value = ''
    document.getElementById("nik").value = ''
    document.getElementById("mKerja").value = ''
    document.getElementById("gaji").value = ''

    mode = 'tambah'

}




