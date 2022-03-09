<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Edit habit</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <b-form>
          <b-form-group
            label="Name"
            label-for="input-name"
            description="What Good Habit are you trying to track?"
          >
            <b-form-input
              v-model="form.title"
              type="text"
              placeholder="Name"
              required
            ></b-form-input>
          </b-form-group> </b-form
      ></b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <b-form>
          <b-form-group
            label="Duration"
            label-for="input-duration"
         
          >
            <b-form-input
              v-model="form.duration"
              type="text"
              placeholder="Duration"
            ></b-form-input>
          </b-form-group>
        </b-form>
      </b-col>
      
    </b-row>
 <br>
    <b-row>
      <p>Reminder</p>
        <b-form-checkbox
        id="reminder-input"
        v-model="form.reminders"
        value="yes"
        unchecked-value="no"
        >
        </b-form-checkbox>
        {{reminder}}
    </b-row>
            <b-row>
      <b-col cols="6">
        <b-form-select v-model="form.habit_frequency" :habit_frequency="habit_frequency">
           <template #first>
        <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
      </template>

          <b-form-select-option value="Daily">Daily</b-form-select-option>
          <b-form-select-option value="Weekly">Weekly</b-form-select-option>
          <b-form-select-option value="Monthly">Monthly</b-form-select-option>
        </b-form-select>
      </b-col>
    </b-row>
   
       <b-row>
        <b-col cols="1">
    
        </b-col>
    </b-row>
     
     <b-row>
      <b-col cols="6">
        <b-form>
          <b-form-group
            label="Significance"
            label-for="significance_input"
         
          >
            <b-form-input
              v-model="form.significance"
              type="text"
              placeholder="significance"
            ></b-form-input>
          </b-form-group>
        </b-form>
      </b-col>
      
    </b-row>
      <b-row>
    <b-row>
      <b-col cols="6">
        <b-form-select v-model="form.category" :category="category">
           <template #first>
        <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
      </template>
          <b-form-select-option value="620f880cdd9e515a227a5bba">Fitness</b-form-select-option>
          <b-form-select-option value="620f880cdd9e515a227a5bbb">Wellness</b-form-select-option>
          <b-form-select-option value="620f8901dd9e515a227a5bbe">Skills</b-form-select-option>
          <b-form-select-option value="620f9059e3db1ea973242170">Education</b-form-select-option>
        </b-form-select>
      </b-col>
    </b-row>
      
    </b-row>
  <b-row>
      <b-col cols="6">
        <b-form>
          <b-form-group
            label="Streak"
            label-for="streak-input"
            
          >
            <b-form-input
              v-model.number="form.streak"
              type="number"
              placeholder="Streak"
              required
            ></b-form-input>
          </b-form-group> </b-form
      ></b-col>
    </b-row>
    <b-row>
        <b-col class="padding">
            <button @click="submitForm()">Submit</button>
            <b-button @click="cancel()">Cancel</b-button>
        </b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from '@/config'
export default {
  name: "GHabitForm",
  components: {},
  data() {
    return {
       
      form: {
        title: "",
        duration: "",
        reminders: false,
        habit_frequency:[],
        significance:"",
        category:[],
        streak:"",
     
        },
    }
  },

    mounted(){
        this.getData()
    },

    methods:{
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
                    
                    this.form.title = response.data.title
                    this.form.duration = response.data.duration
                    this.form.reminders = response.data.reminders
                    this.form.habit_frequency = response.data.habit_frequency
                    this.form.significance = response.data.significance
                    this.form.category = response.data.category
                    this.form.streak = response.data.streak
                })
                .catch(error => {
                    console.log(error)
                    //this.$emit('invalid-token')
                })
        },

        submitForm(){
            let token = localStorage.getItem('token')

            axios
            // .post('http://festivals-api.herokuapp.com/api/festivals', {
            //     title: this.form.title,
            //     description: this.form.description,
            //     city: this.form.city,
            //     start_date: this.form.start_date,
            //     end_date: this.form.end_date,
            // },{

            .put(`/habit/edit/${this.$route.params.id}`, this.form,{
                headers: {
                        "Authorization" : `Bearer ${token}`
                }
            })

            .then(response => {
                console.log(response.data)
                this.$router.push({
                    name: "userhabits",
                    params:{
                        id: this.$router.params.id
                    }
                })
            })
            .catch(error => {
                console.log(error)
                console.log(error.response.data)
            })
                
        },
        cancel(){
            //returns the user to the previous page
            this.$router.go(-1)
        }   
    }
}
</script>

<style scoped>

</style>
