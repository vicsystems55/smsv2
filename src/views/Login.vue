<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-dark.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div class="col-md-4 mx-auto">
      
        <div class="form-group">
        <label for="">Email</label>
        <input type="text" class="form-control">
      </div>
        <div class="form-group">
        <label for="">Password</label>
        <input type="text" class="form-control">
      </div>
        <div class="form-group pt-3">
        <button class="btn btn-primary btn-block">Login</button>
      </div>
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
