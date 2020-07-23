let angkaSebelumnya = ''
let operasiHitung = ''
let angkaSekarang = '0'

const numbers = document.querySelectorAll(".angka")
//console.log(numbers)

const angkaMasukan = (angka) => {
	if (angkaSekarang === '0') angkaSekarang = angka
	else angkaSekarang += angka
}

numbers.forEach((angka)=>{
	angka.addEventListener("click", () =>{
		angkaMasukan(event.target.value)
		updateLayar(angkaSekarang)
	})
	//console.log(angka)
})

const layarKalkulator = document.querySelector('.layar-kalkulator')

const updateLayar = (angka) => {
	layarKalkulator.value = angka
}

const fungsi = document.querySelectorAll(".operator")
const masukanFungsi = (operator) => {
	if (operasiHitung === '') angkaSebelumnya = angkaSekarang
	operasiHitung = operator
	angkaSekarang = ''
}

fungsi.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		masukanFungsi(event.target.value)
		//console.log(event.target.value)
	})
})

const samaDengan = document.querySelector('.sama-dengan')

samaDengan.addEventListener('click', () => {
	// console.log("ditekan")
	hitung()
	updateLayar(angkaSekarang)
})

const hitung = () => {
	let hasil = ''
	switch(operasiHitung){
		case "+":
			hasil = parseFloat(angkaSebelumnya) + parseFloat(angkaSekarang)
			break
		case "-":
			hasil = parseFloat(angkaSebelumnya) - parseFloat(angkaSekarang)
			break
		case "*":
			hasil = parseFloat(angkaSebelumnya) * parseFloat(angkaSekarang)
			break
		case "/":
			hasil = parseFloat(angkaSebelumnya) / parseFloat(angkaSekarang)
			break
		default:
			break
	}
	angkaSekarang = hasil
	operasiHitung = ''
}

const resetLayar = () => {
	angkaSebelumnya = ''
	operasiHitung = ''
	angkaSekarang = '0'
}

const hapusSemua = document.querySelector('.hapus-semua')

hapusSemua.addEventListener('click', () => {
	resetLayar()
	updateLayar(angkaSekarang)
})

const hapusSatu = () => {
	angkaSekarang= angkaSekarang.substring(0,angkaSekarang.length-1)
}

const hapus = document.querySelector('.hapus-satu')

hapus.addEventListener('click', () => {
	hapusSatu()
	updateLayar(angkaSekarang)
})

des = (dot) => {
	if (angkaSekarang.includes('.')){
		return
	}
	angkaSekarang += dot
}

const desimal = document.querySelector('.decimal')

desimal.addEventListener('click', (event) => {
	des(event.target.value)
	updateLayar(angkaSekarang)
})

const persen = document.querySelector('.persen')

persen.addEventListener('click', (event) => {
	updateLayar(angkaSekarang /=100)
})
