<template>
  <div class="calculator-container">
    <div class="result">
      <div>Input: {{ inputNum }}</div>
      <div>Result: {{ result }}</div>
    </div>

    <div class="control">
      <div v-for="(btn, index) in buttons" :key="index">
        <button v-if="btn === Number(btn)" @click="handleClick(btn)">{{ btn }}</button>
        <button v-else-if="btn === 0" @click="handleClick(btn)">{{ btn }}</button>
        <button v-else-if="btn === '+'" @click="hendlePlus">{{ btn }}</button>
        <button v-else-if="btn === 'c'" @click="hendleClear">C</button>
        <button v-else-if="btn === '*'" @click="handleMultiply">{{ btn }}</button>
        <button v-else-if="btn === '/'" @click="handleDivide">{{ btn }}</button>
        <button v-else-if="btn === '='" @click="handleEqual">{{ btn }}</button>
        <button v-else-if="btn === '-'" @click="handleMinus">{{ btn }}</button>
        <button v-else-if="btn === 'backspace'" @click="handleBackspace">BS</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalulatorComponent",
  data() {
    return {
      buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "=", "+", "-", "*", "/", "c", "backspace"],
      arr: [],
      result: 0,
      input: "",
    }
  },
  methods: {
    handleClick(value) {
      this.input += String(value)
      this.arr.push(this.input)
    },
    hendlePlus() {
      
      this.result = this.result + Number(this.arr[this.arr.length-1])
      console.log(this.result, this.arr)
    },
    hendleClear() {
      this.input = ""
      this.arr = []
    },
    handleBackspace() {
      this.arr.pop()
    },
    // handleMultiply() {
    //   this.result = this.result *  Number(this.inputNum)
    //   this.inputNum = ""
    // },
    // handleDivide() {
    //   console.log("/")
    // },
    // handleEqual() {
    //   this.result = 
    // },
    // handleMinus() {
    //   this.result -= Number(this.inputNum)
    //   this.inputNum = ""
    // }
    watch: {
      arr(value) {
        console.log(this.arr, value)
      }
    }
  },
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
  background-color: darkslategray;
  border-radius: 0.5rem;
  box-shadow: .1rem 0.1rem .2rem black;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 160px;
  min-height: 240px;
}

.result {
  padding: 0.1rem 0.2rem;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 2rem;
  width: 100%;
}

.control {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

button {
  background-color: lightgray;
  width: 100%;
  height: 100%;
  margin: auto;
  cursor: pointer;
  user-select: none;
  padding: 1rem 1.2rem;
  border: none;
}
</style>