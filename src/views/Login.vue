<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-dark.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div class="col-md-4 mx-auto pt-3">
      <h4>Login</h4>
        <div class="form-group">
        <label for="">Email</label>
        <input type="text" placeholder="Email Address" class="form-control">
      </div>
        <div class="form-group">
        <label for="">Password</label>
        <input type="text" placeholder="Your password" class="form-control">
      </div>
        <div class="form-group pt-3">
        <button @click="log" class="btn btn-primary btn-block">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { useToast } from 'vue-toastification'

const toast = useToast()

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

  methods: {
    login(){



                       this.axios({
                                method: "post",
                                url: process.env.VUE_APP_URL+'/api/login',
                                data: {
                                 
                                    email: this.email,
                                    // referrer_code: this.referrer_code,
                                    password: this.password
                                },
                                headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Content-type': 'application/json',
                                    'Accept': 'application/json',
                                },
                                
                                })
                                .then( (response) =>{
                                    //handle success

                                    console.log(response)


                                
                                })
                                .catch( (response)=> {

                                    // alert(response);
                                    //handle error
                                    console.log(response);

                                   toast.error('Invalid Credentials');


                                });
    },

    log(){
                alert(window.location.hostname)
    }
  },
}
</script>
