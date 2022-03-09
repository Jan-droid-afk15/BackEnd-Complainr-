<template>
  <div v-if="loggedIn" >
    <Calendar/>

         <ul class="list-group">
                <li class="list-group-item">Name: {{ user.full_name }}</li>  
              <li class="list-group-item">Email: {{ user.email }}</li>
                   <li class="list-group-item">Habits: {{ user.habit }}</li>
                       <li class="list-group-item">Todos: {{ user.todos }}</li>
            </ul>
  </div>
</template>

<script>
import {mapActions, mapState } from 'vuex'
import Calendar from '@/components/Calendar';
import axios from '@/config'
import VueJwtDecode from "vue-jwt-decode";

export default {
 name: "Profile",
  components: {
    Calendar 
  },
    data(){
        return{
            user:{},
            habit:[],
            todo:{},
         
        }
  },
  mounted(){
    this.getData()
     this.getTodoData()
  },
    computed:{
    ...mapState(['loggedIn'])
  },
    methods:{
      
      ...mapActions(['login']),

      getUserDetails() {
      let token = localStorage.getItem("token");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
      
      }
    },

      created() {
        this.getUserDetails();
    },
        
      getData(){

            let token = localStorage.getItem('token')
            axios
                .get(`/user/${this.$route.params.id}/habit`,
                {
                    //lets us authorize and allow access
                    headers: {
                        "Authorization" : `Bearer ${token}`
                    }
                }) 
                .then(response =>{
                    console.log(response.data)
                    this.user.habit = response.data
                })
                .catch(error => {
                    console.log(error)
                    this.$emit('invalid-token')
                })
        },
        
        getTodoData(){

            let token = localStorage.getItem('token')
            axios
                .get(`/todo/${this.$route.params.id}`,
                {
                    //lets us authorize and allow access
                    headers: {
                        "Authorization" : `Bearer ${token}`
                    }
                }) 
                .then(response =>{
                    console.log(response.data)
                    this.todo = response.data
                })
                .catch(error => {
                    console.log(error)
                    //this.$emit('invalid-token')
                })
        },
}
</script>

<style>

</style>