<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-dark.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

        <div class="col-md-6 mx-auto">
      <h1 class="text-center">Welcome to Admin Page.</h1>
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
      school_data: '',
    }
  },

  methods: {
    getSchoolProfile(){
      
                       this.axios({
                                method: "get",
                                url: process.env.VUE_APP_URL+'/api/school_profile',
                                data: {
                                 
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
    }
  },
}
</script>
