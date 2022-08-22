<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-dark.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div class="col-md-6 mx-auto">
      <h1 class="text-center">Account has been created. Please check your email to receive instructions on how to proceed.</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  data() {
    return {
      name:'',
      email:'',
    }
  },
}
</script>
