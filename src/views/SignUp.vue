<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');

const register = async (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Register Clicked");
    const auth = getAuth();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log("User Registered!");
        const user = userCredential.user;
        router.push("/feed");
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
    }
}
</script>

<template>
    <h2>Register an Account</h2>
    <form>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
        </div>
        <button @click="register">Sign Up</button>
    </form>

</template>

<style scoped>

</style>
