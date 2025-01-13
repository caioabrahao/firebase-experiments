<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const user = ref(null);

onMounted(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            user.value = currentUser.displayName || currentUser.email; // Use displayName if available, otherwise use email
        } else {
            user.value = null;
        }
    });
});
</script>

<template>
    <p>Logged As: {{ user }}</p>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/feed">Feed</router-link> |
        <router-link to="/signup">SignUp</router-link> |
        <router-link to="/login">Login</router-link>
    </nav>
    <RouterView />
</template>

<style scoped>

</style>
