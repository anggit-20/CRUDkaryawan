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

const karyawanJunior = []
const karyawanSenior = []

for(let i = 0; i < nama.length; i++) {
    // mencari masa kerja dengan index ke-i jika kurang dari 6 maka 
    if(masaKerja[i]< 6){
        karyawanJunior.push(nama[i]) // akan dimasukkan ke var karyawanJunior dengan (.push), yang
                                        // dimasukkan adalah namanya dengan index ke-i yang sudah dicari
    } else {
        karyawanSenior.push(nama[i])
    }

}

console.log(`Daftar Karyawan Senior:`)
for(let index in karyawanSenior){
    console.log(`${parseInt(index)+1}. ${karyawanSenior[index]}`)
}

let index = 1 // berisi angka untuk menomori
console.log(`Daftar Karyawan Junior:`)
for(const Karyawan of karyawanJunior){
    console.log(`${index}. ${Karyawan}`);// kata karyawan ini berisi value(namanya)
    index++;
}

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

for(karyawan of karyawanJunior){
    console.log(`Karyawan ${karyawan} mendapatkan gaji Rp 4.000.000`)  
}
for(karyawan of karyawanSenior){
    console.log(`Karyawan ${karyawan} mendapatkan gaji Rp 7.000.000`)  
}

function golongkanKaryawan(){

for(let i = 0; i < nama.length; i++) {
    // mencari masa kerja dengan index ke-i jika kurang dari 6 maka 
    if(masaKerja[i]< 6){
        karyawanJunior.push(nama[i]) // akan dimasukkan ke var karyawanJunior dengan (.push), yang
                                        // dimasukkan adalah namanya dengan index ke-i yang sudah dicari
    } else {
        karyawanSenior.push(nama[i])
    }

}
}

function tampilkanGaji(){
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
}

tampilkanGaji()

console.log(`Daftar golongan karyawan: `)
    golongkanKaryawan()

