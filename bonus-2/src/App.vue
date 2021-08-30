<template>
  <div id="app">
    
    <Header />
    <Main :discs="discs"/>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
  data() {
    return{
      discs: []
    }
  },
  created() {
    axios.get('http://localhost:8888/php-ajax-dischi/backend/api.php').then((result) => {this.discs = result.data.response})
  }
}
</script>

<style lang="scss">
@import "./style/app.scss"
</style>
