<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Break a Bad Habit</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <b-form>
          <b-form-group
            label="Name"
            label-for="input-name"
            description="What Bad Habit are you trying to Break?"
          >
            <b-form-input
              v-model="form.name"
              type="text"
              placeholder="Name"
              required
            ></b-form-input>
          </b-form-group> </b-form
      ></b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <label for="habit-datepicker">Choose a date</label>
        <b-form-datepicker
          id="habit-datepicker"
          v-model="value"
          class="mb-2"
        ></b-form-datepicker>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="padding">
        <button>Submit</button>
        <p>Dummy button doesnt do anything no backend</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "BHabitForm",
  components: {},
  data() {
    return {
      form: {},
      value: "",
    };
  },
};
</script>

<style scoped>
.padding {
  padding: 50px;
}
</style>