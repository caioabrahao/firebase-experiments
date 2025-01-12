<script setup>

</script>

<template>
    <h2>Login to your account</h2>
    <form>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
    </form>

</template>

<style scoped>

</style>
