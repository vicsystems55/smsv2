<template>
  <div class="home">
    <div class="text-center">
          <img alt="Vue logo" style="max-height: 120px;" src="../assets/logo-dark.png">
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div class="col-md-4 mx-auto">
      <div class="form-group">
        <label for="s">Name</label>
        <input v-model="name" id="s" type="text" placeholder="Contact Person Name" class="form-control">
      </div>
            <div class="form-group">
        <label for="sd">School Name</label>
        <input v-model="school_name" id="sd" type="text" placeholder="Enter School Name" class="form-control">
      </div>
        <div class="form-group">
        <label for="">Email</label>
        <input v-model="email" type="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="">Address</label>
        <textarea v-model="address" type="email" placeholder="Address of Institution" class="form-control"></textarea>
      </div>
        <div class="form-group">
        <label for="">Create Password</label>
        <input v-model="password" type="password" class="form-control">
      </div>
        <div class=" ">
          <label for="">School Logo</label>
            <div class="form-group mx-auto text-center">


                  <img 
                onclick="document.getElementById('customFile').click()" 
                id="previewImg2" 
                style=" max-width: 250px; object-fit: contain;" 
                class="shadow border border-primary" 
                src="../assets/logo-dark.png"
                  >


                  

                <div class="text-center d-none">
                    <input @change="previewFile4" ref="file" type="file" id="customFile"  > 
                </div>


            </div> 
        </div>
        <div class="form-group pt-3">
        <button v-if="loading" class="btn btn-primary btn-block" disabled>please wait...</button>
        <button @click="createAccount" class="btn btn-primary btn-block">Create account</button>

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
      loading: false,
      name:'',
      email:'',
      password: '',
      address:'',
      avatar:'',
      school_name: ''
    }
  },

  methods: {
    createAccountyyy(){

                             this.axios({
                                method: "post",
                                url: process.env.VUE_APP_URL+'/api/register',
                                data: {
                                    name: this.name,
                                    // username: this.username,
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

                                    // localStorage.setItem('user_role', response.data.user_data.role)
                                    // localStorage.setItem('user_token', response.data.access_token)
                                    // localStorage.setItem('user_data', JSON.stringify(response.data.user_data))

                                     toast.success('Login Successful');

                                    // if (localStorage.getItem('user_role') == 'user') {

                                    //     alert('welcome')

                                    //     return this.$router.push('/user')
                                        
                                    // }if (localStorage.getItem('user_role') == 'admin') {

                                    //     return this.$router.push('/admin')
                                        
                                    // }

                                    // return this.$router.push('/verify')

                                
                                })
                                .catch( (response)=> {

                                    // alert(response);
                                    //handle error
                                    console.log(response);

                                   toast.error('Invalid Credentials');


                                });

    },

    previewFile4(event){


            console.log(event)

               if(event.target.files.length > 0){
                var src = URL.createObjectURL(event.target.files[0]);


                var preview = document.getElementById("previewImg2");
                preview.src = src;
               
                // preview.style.display = "block";

                 this.avatar = this.$refs.file.files[0];

               
            }

        },

    createAccount(){

      this.loading = true

            let formData = new FormData();
            formData.append('school_logo', this.avatar);
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('address', this.address);
            formData.append('password', this.password);
            formData.append('school_name', this.school_name);



            this.axios({
                url: process.env.VUE_APP_URL + '/api/register',
                method: 'post',
                data: formData,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            .then((response) =>{

              this.loading = false

                // toast.success('Profile picture Updated');

                console.log(response)
            })
            .catch((response) =>{

              this.loading = false

                console.log(response)
            })


        },
  },
}
</script>
