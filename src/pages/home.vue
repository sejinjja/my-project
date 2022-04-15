<template>
  <div class="home">
    <label v-for="clipboardText in clipboardTextList" :key="clipboardText.value" class="clipboard">
      <button
        v-text="clipboardText.value" @click="onClipboardClick(clipboardText.value)"
        class="text"/>
      <qrcode-vue :value="clipboardText.value" class="qr-code"/>
    </label>
  </div>
</template>

<script>
import _ from 'lodash'
import QrcodeVue from 'qrcode.vue'

export default {
  name: 'Home',
  components: {QrcodeVue},
  computed: {
    clipboardTextList() {
      return _.uniqBy(this.$store.getters.clipboardTextList, ({value}) => value)
    }
  },
  methods: {
    onClipboardClick(text) {
      window.clipboardHandler.writeText(text)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  overflow: hidden;
  padding: 10px;
}

.clipboard {
  flex: 1 0 300px;

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-auto-rows: auto;
  grid-row-gap: 10px;

  cursor: pointer;
  transition: background-color .3s;
  background-color: #657854;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;

  &:active {
    background-color: #f12537;
  }

  .text {
    display: inline-flex;
    text-align: left;
    border: 0;
    text-decoration: none;
    white-space: pre-wrap;
    user-select: none;
    overflow: auto;
    background-color: #ffffff;
    border-radius: 5px;

    max-height: 120px;
  }

  .qr-code {
    margin: auto;
  }
}
</style>

