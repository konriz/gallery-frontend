<template>
  <div>
    <form @submit.prevent>
      <div>
        <label for="user-email">Email</label>
        <input id="user-email" type="text" v-model="credentials.username"/>
      </div>
      <div>
        <label for="user-password">Password</label>
        <input id="user-password" type="password" v-model="credentials.password"/>
      </div>
      <div>
        <button @click="login">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CredentialsDTO } from "@/services/authService/CredentialsDTO";
import { AuthService } from "@/services/authService/AuthService";

@Component
export default class LoginView extends Vue {

  private credentials: CredentialsDTO = {username: "", password: ""};

  private async login() {
    if (this.credentials.password.length < 1 || this.credentials.username.length < 1) {
      return alert("Invalid credentials");
    }
    AuthService.login(this.credentials).then(() => alert("User logged in!")).catch(error => alert(error));
  }

}
</script>
