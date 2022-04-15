<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from "./store";

export default {
  name: 'App',
  created() {
    window.ipc.send('init')
    this.$eventBus.$on('onChangeClipboard', (clipBoard) => {
      store.commit('addClipboardList', clipBoard)
    })
  }
}
</script>
