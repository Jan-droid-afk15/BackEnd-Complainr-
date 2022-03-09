<template>
<b-container>
    <b-col>
        <h2>Todos</h2>
        <b-button 
            :to="{name: 'ghabitform'}" 
         
            class="float-right summit-btn"
        >
            Create
        
        </b-button>
        <br>
       
        <b-table striped hover head-variant="dark" responsive :items="todo" :fields="headings">
            <template #cell(title)="data" >
                <router-link class="course-link" :to="{name:'single_todo', params: { id: data.item._id }}">{{data.value}}</router-link>

                <b-row></b-row>
                <br>




            </template>

        </b-table>
    </b-col>
</b-container>
</template>

<script>
import axios from '@/config'


export default ({
    name: "UserTodos",
    components:{

    },
    data(){
        return{
         
            headings: [
                    'title',
           
                ],
           
            todo: []
        }
    },

    mounted(){
        this.getData()
       
    },

    methods: {
        
        getData(){
            let token = localStorage.getItem('token')
            axios
            
                .get('/todo', {
                    
                       headers: {
                        "Authorization" : `Bearer ${token}`
                    }
                })
                .then(response =>{
                    console.log(response.data)
                    this.todo = response.data
                })
                .catch(error => console.log(error))
        },

    }
})

</script>

<style scoped>
.summit-btn{
    background: #4f8fa2;
}
.btn{
    margin-bottom: 10px;
}

.course-link{
    text-decoration: none;
    color: #4f8fa2;
    font-weight: bold;
}


.course-link:active{
    color: red;
}



.course-link:hover{
    color: #b8b0ab;
}


</style>