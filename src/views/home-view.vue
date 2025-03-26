<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
	<section id="home" class="h-screen border container mx-auto" data-aos="zoom-in" data-aos-duration="2000">
        <div class="flex flex-col justify-center items-center h-full">
            <h1 class="text-4xl font-bold text-center">Welcome to My Portfolio</h1>
            <p class="mt-4 text-lg text-center">I am a full stack developer with a love for creating amazing web applications.</p>
            <router-link to="/#about" class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More About Me!</router-link>
        </div>
    </section>
</template>

<style scoped></style>
