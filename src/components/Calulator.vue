<template>
	<div class="calculator-container" :class="themes[calcutatorTheme]">
		<div @click="toggleTheme" class="theme-button"></div>

		<div class="display">
			<div>{{ displayLog() }}</div>
		</div>

		<div class="control">
			<button v-for="(buttonKey, index) in buttons" :key="index" :buttonKey="buttonKey"
				@click="handleClick(buttonKey)" :class="{
					'number': Number(buttonKey) || buttonKey == '0',
					'key-equal': buttonKey == '=',
					'sign-plus': buttonKey == '+',
					'sign-minus': buttonKey == '-',
					'sign-umoj': buttonKey == '*',
					'sign-del': buttonKey == '/',
					'sign-pers': buttonKey == '%',
					'sign-c': buttonKey == 'c',
					'sign-ac': buttonKey == 'ac',
					'sign-dot': buttonKey == '.',
				}">
				{{ buttonKey }}
			</button>
		</div>
	</div>
</template>

<script>

export default {
	name: "CalulatorComponent",
	data() {
		return {
			buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', "=", "+", "-", "*", "/", "ac", "%", "c"],
			result: "",
			sign: "",
			num: "",
			displayResult: '',
			temp: "",
			themes: ["theme", "theme2", "theme3"],
			calcutatorTheme: 0,
		}
	},
	methods: {
		handleClick(key) {

			switch (key) {
				case Number(key):
					if (!this.result || !this.sign) {
						this.result += key
					} else {
						this.num += key
					}
					break

				case "0":
					if (!this.result || !this.sign) {
						this.result += key
					} else {
						this.num += key
					}
					break

				case '+':
					this.sign = "+"
					this.result = Number(this.result) + Number(this.num)

					this.num = ""
					this.temp = ""
					break

				case '-':
					this.sign = "-"
					this.result = Number(this.result) - Number(this.num)

					this.num = ""
					this.temp = ""
					break

				case '*':
					this.sign = "*"
					if (this.num) {
						this.result = Number(this.result) * Number(this.num)
					}

					this.num = ""
					this.temp = ""
					break

				case '/':
					this.sign = "/"
					if (this.num) {
						this.result = Number(this.result) / Number(this.num)
					}

					this.num = ""
					this.temp = ""
					break

				case "=":
					if (this.sign === "+") {
						if (this.temp) {
							this.result = Number(this.result) + Number(this.temp)
						} else {
							this.result = Number(this.result) + Number(this.num)
						}
					}

					if (this.sign === "-") {
						if (this.temp) {
							this.result = Number(this.result) - Number(this.temp)
						} else {
							this.result = Number(this.result) - Number(this.num)
						}
					}

					if (this.sign === "*") {
						if (this.temp) {
							this.result = Number(this.result) * Number(this.temp)
						} else {
							this.result = Number(this.result) * Number(this.num)
						}
					}

					if (this.sign === "/") {
						if (this.temp) {
							this.result = Number(this.result) / Number(this.temp)
						} else {
							if (this.num == 0 || this.result == 0) {
								return
							} else {
								this.result = Number(this.result) / Number(this.num)
							}
						}
					}

					if (this.num) {
						this.temp = this.num
						this.num = ""
					}
					break

				case "%":
					// Steps:
					// calculate percentage: 200 + 5% = ?

					// calculate one percentage
					// 200 / 100 = 2

					// next:
					// 2 * 5 = 10

					// next
					// 200 + 10 = 210 

					if (this.sign === "+") {
						if (this.temp) {
							const percentage = Number(this.result) / 100 * Number(this.temp)
							this.result = Number(this.result) + percentage
						} else {
							const percentage = Number(this.result) / 100 * Number(this.num)
							this.result = Number(this.result) + percentage
						}
					}

					if (this.sign === "-") {
						if (this.temp) {
							const percentage = Number(this.result) / 100 * Number(this.temp)
							this.result = Number(this.result) - percentage
						} else {
							const percentage = Number(this.result) / 100 * Number(this.num)
							this.result = Number(this.result) - percentage
						}
					}

					if (this.num) {
						this.temp = this.num
						this.num = ""
					}
					break

				case "ac":
					this.result = ""
					this.sign = ""
					this.num = ""
					this.temp = ""
					localStorage.calcutatorResult = ""
					break

				case "c":
					if (this.num) {
						this.num = this.num.substring(0, this.num.length - 1)
					} else if (this.temp) {
						this.temp = this.temp.substring(0, this.temp.length - 1)
					} else {
						this.result = this.result.substring(0, this.result.length - 1)
					}
					break
				default:
					break
			}
		},
		toggleTheme() {
			if (this.calcutatorTheme >= this.themes.length - 1) {
				this.calcutatorTheme = 0
				localStorage.calcutatorTheme = this.calcutatorTheme
			} else {
				this.calcutatorTheme = Number(this.calcutatorTheme) + 1
				localStorage.calcutatorTheme = this.calcutatorTheme
			}
		},
		displayLog() {
			return this.result + this.sign + (this.num ? this.num : this.temp);
		}
	},
	mounted() {
		if (localStorage.calcutatorTheme) {
			this.calcutatorTheme = localStorage.calcutatorTheme
		}

		if (localStorage.calcutatorResult) {
			this.result = localStorage.calcutatorResult
		}
	},
	watch: {
		result(result) {
			localStorage.calcutatorResult = result
		}
	}
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.calculator-container {
	padding: 1rem;
	padding-top: 3rem;
	border-radius: 0.5rem;
	box-shadow: .1rem 0.1rem .2rem black;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	min-width: 160px;
	min-height: 240px;
	position: relative;
	/* overflow: hidden; */
	transition: all .2s;
	font-family: monospace;
}

.display {
	padding: 0.5rem 0.2rem;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	overflow: hidden;
	min-height: 3rem;
	font-size: 2rem;
}

button {
	color: inherit;
	width: 100%;
	height: 100%;
	cursor: pointer;
	user-select: none;
	border: none;
	display: flex;
	align-items: center;
	position: relative;
	justify-content: center;
	padding: 0.5rem;
	font-size: 2rem;
	overflow: hidden;
	background-color: rgba(255, 255, 255, 0.6);
}

.theme-button {
	width: 2rem;
	height: 3rem;
	cursor: pointer;
	position: absolute;
	top: -1rem;
	left: 1rem;
	display: flex;
	align-items: center;
	background-color: red;
	z-index: 1;
	border-radius: 0.2rem;
	user-select: none;
	transition: all .2s;
	z-index: 1;
}

.theme-button:active {
	transform: translateY(0.5rem);
	filter: brightness(0.9);
}

/* theme */
/* theme0 style */
.theme {
	background-color: gray;
}

/* theme2 style */
.theme2 {
	background-color: blue;
}

/* theme3 style */
.theme3 {
	background-color: green;
}

/* button color*/
.control {
  display: grid; 
  grid-template-columns: repeat(4, 1fr); 
  grid-template-rows: auto; 
  gap: 0.5rem; 
  grid-template-areas: 
"	.	.	.	plus"
"	.	.	.	minus"
"	.	.	.	umnoj"
"dot	.	perc	del"
"ac	c	equal	equal"; 
}
.number {
	background-color: rgba(255, 255, 255, 0.9);
}
.key-equal {grid-area: equal}
.sign-plus {grid-area: plus}
.sign-minus {grid-area: minus}
.sign-umoj {grid-area: umnoj}
.sign-del {grid-area: del}
.sign-dot {grid-area: dot}
.sign-pers {grid-area: perc}
.sign-c {
	grid-area: c;
	background-color: orange;
	color: white;
}
.sign-ac {
	grid-area: ac;
	background-color: red;
	color: white;
}
</style>