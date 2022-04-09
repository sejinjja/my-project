
<template>
  <div>
    <label>
      <input type="radio" value="write" v-model="mod">
      쓰기
    </label>

    <label>
      <input type="radio" value="read" v-model="mod">
      읽기
    </label>

    <input type="text" v-model="title">
    <input type="text" v-model="contents" v-show="mod === 'write'">
    <button @click="execute">실행</button>
    <div>{{ loaded }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      mod: 'write',
      title: 'test.txt',
      contents: 'contents',

      loaded: '',
    }
  },
  methods: {
    async execute() {
      if (this.mod === 'write') {
        await window.api.writeFile(this.title, this.contents, 'utf8')
      } else {
        this.loaded = await window.api.readFile(this.title, 'utf8')
      }
    }
  }
}
</script>

