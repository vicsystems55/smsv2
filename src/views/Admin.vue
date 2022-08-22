<template>
  <div class="home">
    <img alt="Vue logo" style="max-height: 230px;" class="text-center" :src="school_data.school_logo">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

        <div class="col-md-6 mx-auto text-center">
      <h1 >Welcome to Admin Page.</h1>
      <h4>{{school_data.school_name}}</h4>
      <p>{{school_data.school_address}}</p>
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
    }
  },

  mounted() {
    this.getSchoolProfile()
  },
}
</script>
