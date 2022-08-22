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
        <input type="text" placeholder="Email Address" class="form-control">
      </div>
        <div class="form-group">
        <label for="">Password</label>
        <input type="text" placeholder="Your password" class="form-control">
      </div>
        <div class="form-group pt-3">
        <button @click="login" class="btn btn-primary btn-block">Login</button>
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
      school_data: '',
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



                       this.axios({
                                method: "get",
                                url: process.env.VUE_APP_URL+'/api/login',
                                params: {
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

                                     toast.success('Login Successful');

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
  
    }
  },

  mounted() {
    this.getSchoolProfile()
  },
}
</script>
