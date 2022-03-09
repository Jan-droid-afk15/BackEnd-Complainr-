<template>
    <b-col>
       <div class="mt-4">
    <h4>Todo List</h4>
    <b-card>
         
            <br>
      
            <b> Name:</b><p>{{ todo.title }}</p>

       
            <br>
            <b-button 
                    @click="deleteTodo()"
                    variant="danger"
                    class="float-left"
                >
                Delete
        
            </b-button>
            <b-row></b-row>

        <b-button :to="{name: 'edit_todo', params:{id:$route.params.id}}" variant="warning">Edit</b-button>
    </b-card>
        <b-button @click="goBack">Back</b-button>
      </div>
    
    </b-col>
</template>

<script>
import axios from '@/config'


export default ({
    name: "SingleTodo",
    components:{
    

    },
    data(){
        return{
            todo:{},
         
        }  
    },

    mounted(){
        this.getData()

    },

    methods: {


        getData(){

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
        deleteTodo() {
            let token = localStorage.getItem('token')
            axios.delete(`http://localhost:3000/todos/${this.$route.params.id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then(response => {
                     console.log(response.data)
                     this.$router.push({
                         name: "todos",
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