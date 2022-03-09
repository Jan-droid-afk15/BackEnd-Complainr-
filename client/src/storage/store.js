import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config'

Vue.use(Vuex)

export default new Vuex.Store({
 
    state:{
        loggedIn: false,
        registered: false,

    },
    getters:{
    },
    mutations:{
        SET_LOGGED_IN_STATUS(state, loggedIn){
            state.loggedIn = loggedIn
                
        },
    
        SET_REGISTERED_STATUS(state, registered){
        state.registered = registered
   
    }
},

    actions:{
 

        login(context, credentials){
            axios
                .post('/login', {
                email: credentials.email,
                password: credentials.password
                })
                .then(response => {
                    //console.log(response.data.token)

                    //we set the login status to true
                    context.commit('SET_LOGGED_IN_STATUS', true)
                    
                    // set the token to local storage
                    localStorage.setItem('token', response.data.token)
                })
                .catch(error=>{
                console.log(error)
                console.log(error.response)
            })
        },

        register(context, credentials){
            axios
                .post('/register', {
                full_name: credentials.full_name,
                email: credentials.email,
                password: credentials.password
                })
                .then(response =>  {

                    context.commit('SET_REGISTERED_STATUS', true)

                    localStorage.setItem('token', response.data.token)
                    
                })
                .catch(error=>{
                console.log(error)
                console.log(error.response)
            })
        },



        logout(context){
            localStorage.removeItem('token')
            context.commit('SET_LOGGED_IN_STATUS', false)
            
        }
    }
})
