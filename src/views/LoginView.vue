<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="m-auto" cols="6">
          <b-form-group
            id="input-group-1"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              placeholder="Enter password"
              required
            ></b-form-input>
          </b-form-group>
          <b-button class="m-4" @click="onLogin" variant="primary"
            >Login</b-button
          >
          <b-button class="m-4" @click="onReset" variant="danger"
            >Reset</b-button
          >
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>
            No estás registrado? Subscríbete
            <router-link to="/signin"> aquí</router-link>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["logIn"]),
    onLogin() {
      this.logIn(this.form);
    },
    onReset() {
      this.form.email = "";
      this.form.password = "";
    },
  },
};
</script>
