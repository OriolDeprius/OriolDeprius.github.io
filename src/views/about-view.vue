<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section id="about" class="h-screen backdrop-blur-md mt-[2%] container mx-auto" data-aos="zoom-in-up" data-aos-duration="1000">
        <div class="flex flex-col justify-center items-center h-full">
            <h1 class="text-4xl font-bold text-center">About Me</h1>
            <p class="mt-4 text-lg text-center">I am a passionate developer with a love for creating amazing web applications.</p>
            <router-link to="/#contact" class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Contact Me</router-link>
        </div>
    </section>
</template>

<style scoped></style>
