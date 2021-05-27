<template>
  <div>
    <form @submit.prevent>
      <div>
        <label for="user-email">Email</label>
        <input id="user-email" type="text" v-model="newUserDto.email"/>
      </div>
      <div>
        <label for="user-password">Password</label>
        <input id="user-password" type="password" v-model="newUserDto.password"/>
      </div>
      <div>
        <label for="user-password-repeat">Retype password</label>
        <input id="user-password-repeat" type="password" v-model="newUserDto.repeatPassword"/>
      </div>
      <div>
        <button @click="register">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NewUserDto } from "@/services/registerService/NewUserDto";
import { RegisterService } from "@/services/registerService/RegisterService";

@Component
export default class RegisterUserView extends Vue {

  private newUserDto: NewUserDto = {email: "", password: "", repeatPassword: ""};

  private register() {
    if (this.newUserDto.password !== this.newUserDto.repeatPassword) {
      return alert("Passwords do not match.");
    }
    RegisterService.registerUser(this.newUserDto).then(() => alert("User created!")).catch(error => alert(error));
  }

}
</script>
