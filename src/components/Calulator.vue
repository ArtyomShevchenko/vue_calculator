<template>
	<div class="calculator-container" :class="themes[calcutatorTheme]">
		<div @click="toggleTheme" class="theme-button"></div>

		<div class="display">
			<div>{{ displayLog() }}</div>
		</div>

		<div class="control">
			<button v-for="(btn, index) in buttons" :key="index" :btn="btn" @click="handleClick(btn)">
				{{ btn }}
			</button>
		</div>
	</div>
</template>

<script>

export default {
	name: "CalulatorComponent",
	data() {
		return {
			buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "=", "+", "-", "*", "/", "c"],
			result: "",
			sign: "",
			num: "",
			displayResult: '',
			temp: 0,
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

				case "c":
					this.result = ""
					this.sign = ""
					this.num = ""
					this.temp = ""
					localStorage.calcutatorResult = ""
					break

				default:
					break
			}

			console.table(
				`result: ${this.result}`,
				`\nsign: ${this.sign}`,
				`\nnum: ${this.num}`,
				`\ntemp: ${this.temp}`,
			)

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
}

.display {
	padding: 0.1rem 0.2rem;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	min-height: 2rem;
	width: 100%;
}

.control {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 0.5rem;
}

button {
	color: inherit;
	width: 100%;
	aspect-ratio: 1/1;
	cursor: pointer;
	user-select: none;
	height: 50px;
	border: none;
	display: flex;
	align-items: center;
	position: relative;
	justify-content: center;
	padding: 0.2rem;
	overflow: hidden;
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
	background-color: lightgray;
	color: #000;
}

.theme button,
.theme .display {
	background-color: #fff;
}

.theme button:active {
	filter: brightness(0.9);
}

/* theme2 style */
.theme2 {
	background-color: blue;
}

.theme2 button,
.theme2 .display {
	background-color: lightskyblue;
	font-style: bold;
	font-family: monospace;
	font-size: 1.5rem;
}

.theme2 button {
	border-radius: 50%;
}


/* theme3 style */
.theme3 {
	background-color: green;
}

.theme3 button,
.theme3 .display {
	background-color: lightgreen;
}

.theme3 button {
	clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}
</style>