<template>
  <div class="home">
    <div class="text-center">
      <img alt="Vue logo" style="max-height: 120px;" class="text-center" :src="school_data.school_logo">

    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div class="col-md-4 mx-auto pt-3">
      <h4>Login</h4>
        <div class="form-group">
        <label for="">Email</label>
        <input v-model="email" type="text" placeholder="Email Address" class="form-control">
      </div>
        <div class="form-group">
        <label for="">Password</label>
        <div class="d-flex justify-content-start">
          <input v-model="password" type="password" id="password" placeholder="Your password" class="form-control"><span style="margin-left: -50px; cursor: pointer; " @click="togglePassword" class="pt-2 text-primary">show</span>

        </div>
      </div>
        <div class="form-group pt-3">
        <button v-if="loading" class="btn btn-primary btn-block" disabled>just a sec...</button>

        <button v-else @click="login" class="btn btn-primary btn-block">Login</button>
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
      password: '',
      school_data: '',
      loading: false
    }
  },

  methods: {
    getSchoolProfile(){
      
            this.axios({
            method: "get",
            url: process.env.VUE_APP_URL+'/api/school_profile',
            params: {
              
                url: window.location.hostname,

            },
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },
            
            })
            .then( (response) =>{
                //handle success


                this.school_data = response.data

                console.log(response)


            
            })
            .catch( (response)=> {

                // alert(response);
                //handle error
                console.log(response);

            });
    },
    login(){

      this.loading = true



                       this.axios({
                                method: "post",
                                url: process.env.VUE_APP_URL+'/api/login',
                                data: {
                                    url: window.location.hostname,
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

                                    this.loading = false

                                     toast.success('Login Successful');

                                    console.log(response)


                                
                                })
                                .catch( (response)=> {

                                  this.loading = false

                                    // alert(response);
                                    //handle error
                                    console.log(response);

                                   toast.error('Invalid Credentials');


                                });
    },
    togglePassword(){



      var x = document.getElementById('password')

 

      if (x.type == 'password') {
        x.type = 'text' 
      }else{
        x.type = 'password'
      }

      
  
    }
  },

  mounted() {
    this.getSchoolProfile()
  },
}
</script>
