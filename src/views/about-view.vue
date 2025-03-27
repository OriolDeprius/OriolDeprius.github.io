<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section id="about" class="backdrop-blur-md mt-[2%] container flex justify-center content-center mx-auto xl:h-screen" data-aos="zoom-in-up" data-aos-duration="1000">
        <div class="flex flex-col justify-center items-center pt-6 xl:p-0">
            <div class="border w-[90%] mt-[2%]"></div>
            <h1 class="text-4xl font-bold text-center">About Me</h1>
            <div class="border w-[90%] mb-[2%]"></div>
            <div class="w-[90%] sm:w-[70%] md:w-[50%]">
                <p class="mt-4 text-md text-center lg:text-xl">I’m a passionate <b>Web Developer</b> who loves crafting <b>interactive and intuitive web applications</b>. My journey started with curiosity about how websites work, and now I specialize in <b>Vue.js, Laravel, and modern web frameworks.</b></p>
                <p class="mt-4 text-md text-center lg:text-xl">🚀 I enjoy solving complex problems, building dynamic UIs, and optimizing performance for the best user experience. Whether it’s a <b>business app or a personal project</b>, I focus on <b>clean code and scalable solutions.</b></p>
                <p class="mt-4 text-md text-center lg:text-xl">🎓 <b>Education:</b><br>
                I completed my studies in <b>Web Application Development</b>, where I honed my skills in <b>frontend, backend, and database management.</b> I’m always eager to learn and stay up to date with the latest technologies.</p>
                <p class="mt-4 text-md text-center lg:text-xl">🛠️ <b>My Toolkit:</b> Vue.js, PrimeVue, Tailwind CSS, Laravel, Livewire, Git...</p>
                <p class="mt-4 text-md text-center lg:text-xl">💡 When I’m not coding, I love exploring new technologies, gaming, and learning about UI/UX trends.</p>
            </div>
            <a href="/cv.pdf" download="Oriol_Deprius_CV.pdf" class="mt-8 text-blue-500 font-bold underline text-md text-center lg:text-xl">Download my CV</a>
            <router-link to="/#contact" class="mt-6 mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Contact Me</router-link>
        </div>
    </section>
</template>

<style scoped></style>
