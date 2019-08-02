<template>
  <div>
    <NavBar></NavBar>
    <Search></Search>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/nav/Nav.vue';
import Search from '@/views/home/Search.vue';

@Component({
  components: {
    NavBar,
    Search,
  },
})

class Home extends Vue {

}

export default Home;
</script>

<style scoped lang="scss">

</style>
