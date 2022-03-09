<template>
    <b-col>
       <div class="mt-4">
    <h4>Habit Details</h4>
    <b-card>
         
            <br>
      
            <b>Habit Name:</b><p>{{ habit.title }}</p>

            <b>Duration</b> <p>{{ habit.duration }}</p>

            <b>Category:</b> <p>{{habit.category}}</p>

            <b>Reminders:</b> <p>{{ habit.reminders }}</p>

            <b>Frequency:</b> <p>{{ habit.habit_frequency }}</p>
            
            <b>Streak:</b> <p>{{ habit.streak }}</p>

            <b>Significance:</b> <p>{{ habit.significance }}</p>

             <b>User</b> <p>{{ habit.user}}</p>
       
            <br>
            <b-button 
                    @click="deleteHabit()"
                    variant="danger"
                    class="float-left"
                >
                Delete
        
            </b-button>
            <b-row></b-row>

        <b-button :to="{name: 'edit_habit', params:{id:$route.params.id}}" variant="warning">Edit</b-button>
    </b-card>
        <b-button @click="goBack">Back</b-button>
      </div>
    
    </b-col>
</template>

<script>
import axios from '@/config'


export default ({
    name: "Single_Habit",
    components:{
    },
    data(){
        return{
            habit:{},
            user:{},
            habit_log:{}
        }  
    },

    mounted(){
        this.getData()
        this.getUser()
        this.getHabit_log()
    },

    methods: {

             getHabit_log() {
            let token = localStorage.getItem('token')
            axios.get( `/habit_log/${this.$route.params.id}`,
            {
                //authorization access
                headers:{
                    "Authorization" : `Bearer ${token}`
                }
            })
            .then(response =>{
                console.log(response.data)
                this.habit_log = response.data

            })
            .catch(error => console.log(error))
            },


            getUser() {
            let token = localStorage.getItem('token')
            axios.get( `/user/${this.$route.params.id}/habit`,
            {
                //authorization access
                headers:{
                    "Authorization" : `Bearer ${token}`
                }
            })
            .then(response =>{
                console.log(response.data)
                this.user = response.data

            })
            .catch(error => console.log(error))
            },




        getData(){

            let token = localStorage.getItem('token')
            axios
                .get(`/habit/${this.$route.params.id}`,
                {
                    //lets us authorize and allow access
                    headers: {
                        "Authorization" : `Bearer ${token}`
                    }
                }) 
                .then(response =>{
                    console.log(response.data)
                    this.habit = response.data
                })
                .catch(error => {
                    console.log(error)
                    //this.$emit('invalid-token')
                })
        },
        deleteHabit() {
            let token = localStorage.getItem('token')
            axios.delete(`http://localhost:3000/habit/${this.$route.params.id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then(response => {
                     console.log(response.data)
                     this.$router.push({
                         name: "userhabits",
                     })
                 }).catch(error => {
                     console.log(error)
                     console.log(error.response.data.errors)
                 })
        },
        
        goBack() {
        this.$router.go(-1)
    }
    }
})

</script>

<style scoped>

</style>