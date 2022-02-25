console.log(5 > 4)
console.log('ананас' > 'яблоко')
console.log('2' > '12')
console.log(undefined == null)
console.log(undefined === null)
console.log(null == '\n0\n')
console.log(null === +'\n0\n')

function checkAge(age) {
	age = prompt('сколько вам лет?')
	return age > 18 || confirm('Родители разрешили?')
}
checkAge()

function checkAge(age) {
	age = prompt('сколько вам лет?')
	confirm(age > 18 ? 'проходи родной' : 'Родители разрешили?')
}

// alert((6.35).toFixed(1)) // 6.3
// потому что в toFixed в скобках стоит 1, это значит что он будет округлять на 1 цифру после запятой
// чтобы сделать 6.4 нам нужно поступить как в примере ниже

alert(Math.round(6.35 * 10) / 10)

console.log(Math.min(4, -2, 5, 19, -130, 0, 10))
console.log(Math.max(4, -2, 5, 19, -130, 0, 10))

console.log(Math.round(Math.random() * 100))

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let i = 0
while (i < 10) {
	arr[i].toString()
	console.log(arr[i])
	i++
}

let arr1 = [10]
for (let i = 0; i < 10; i++) {
	arr1[i] = Math.random() * 100
	console.log(Math.round(arr1[i]))
}
