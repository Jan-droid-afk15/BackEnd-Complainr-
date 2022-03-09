<template>
<div v-if="!loggedIn">  
  <b-container>
    <b-row>
      <b-col cols="6">
        <h2>Login</h2>
        <b-col cols="6">
          <b-form>
            <b-form-group label="Email" label-for="input-email">
              <b-form-input
                v-model="form.email"
                type="email"
                placeholder="Email"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-col>
        <b-col cols="6">
          <b-form>
            <b-form-group label="Password" label-for="input-password">
              <b-form-input
                v-model="form.password"
                type="password"
                placeholder="Password"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-col>
        <b-col align-v="stretch">
          <button @click="login(form)">Login</button>
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</div>
</template> 
<script>
import {mapActions, mapState } from 'vuex'
 

export default {
  name: "Login",
  components:{
  
  },
    data(){
    return {
      //creates a form object. it's form.email cuz of the fact that its an object
      form:{
        email: "",
        password: ""
      }
    }
  },
  computed:{
    ...mapState(['loggedIn'])
    
  },
  methods:{

    //takes the login from the store and slaps it in here
    ...mapActions(['login']),
    

    // login(){

    //   //takes in the form and DISPATCHES it. takes in two params, first is name of action and second is what you want to give it
    //   this.$store.dispatch('login',this.form)

      
    // }
  }
};


</script>
<style scoped>

.card {
    border: none;
    border-top: 5px solid  #b8b0ab ;
    background: #4f8fa2;
    color: white
}

p {
    font-weight: 600;
    font-size: 15px
}

.fab {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: #4d4c4b;
    height: 40px;
    width: 90px
}

.fab:hover {
    cursor: pointer
}

.fa-twitter {
    color: #56ABEC
}

.fa-facebook {
    color: #1775F1
}

.fa-google {
    color: #CB5048
}

.division {
    float: none;
    position: relative;
    margin: 30px auto 20px;
    text-align: center;
    width: 100%;
    box-sizing: border-box
}

.division .line {
    border-top: 1.5px solid #57557A;
    ;
    position: absolute;
    top: 13px;
    width: 85%
}

.line.l {
    left: 52px
}

.line.r {
    right: 45px
}

.division span {
    font-weight: 600;
    font-size: 14px
}

.myform {
    padding: 0 25px 0 33px
}

.form-control {
    border: 1px solid #57557A;
    border-radius: 3px;
    background: white;
    margin-bottom: 20px;
    letter-spacing: 1px
}

.form-control:focus {
    border: 1px solid #57557A;
    border-radius: 3px;
    box-shadow: none;
    background: #212042;
    color: #fff;
    letter-spacing: 1px
}

.bn {
    text-decoration: underline
}

.bn:hover {
    cursor: pointer;

    
}

.form-check-input {
    margin-top: 8px !important
}

.btn-primary {
    background:#4d4c4b;
    border: none;
    border-radius: 50px
}

.btn-primary:focus {
    box-shadow: none;
    border: none;
   
}

small {
    color: white;
}

.far.fa-user {
    font-size: 13px
}

@media(min-width: 767px) {
    .bn {
        text-align: right
    }
}

@media(max-width: 767px) {
    .form-check {
        text-align: center
    }

    .bn {
        text-align: center;
        align-items: center
    }
}

@media(max-width: 450px) {
    .fab {
        width: 100%;
        height: 100%
    }

    .division .line {
        width: 50%
    }
}
</style>