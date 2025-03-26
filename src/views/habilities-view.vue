<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section id="habilities" class="container backdrop-blur-md mx-auto mt-[2%]" data-aos="zoom-in-up" data-aos-duration="1000">
        <div class="flex flex-col justify-center items-center h-full">
            <h1 class="text-4xl font-bold text-center">My Habilities</h1>
            <p class="mt-4 text-lg text-center">I am proficient in various technologies and frameworks.</p>
            <p class="mt-4 text-lg text-center">Here are some of the skills I have acquired over the years:</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">HTML</h2>
                <p>Expert in creating semantic and accessible HTML documents.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">CSS</h2>
                <p>Skilled in styling web pages with CSS and frameworks like Tailwind CSS.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">JavaScript</h2>
                <p>Proficient in JavaScript and its frameworks like Vue.js.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Vue.js</h2>
                <p>Experienced in building single-page applications with Vue.js.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Node.js</h2>
                <p>Familiar with backend development using Node.js and Express.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Git</h2>
                <p>Proficient in version control using Git and GitHub.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Responsive Design</h2>
                <p>Skilled in creating responsive and mobile-friendly web applications.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">APIs</h2>
                <p>Experienced in working with RESTful APIs and third-party integrations.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Testing</h2>
                <p>Familiar with testing frameworks like Jest and Cypress.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Deployment</h2>
                <p>Experienced in deploying applications on platforms like Heroku and Vercel.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Agile Methodologies</h2>
                <p>Familiar with Agile methodologies and working in a team environment.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Problem Solving</h2>
                <p>Strong problem-solving skills and ability to work under pressure.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Communication</h2>
                <p>Excellent communication skills and ability to work in a team.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Time Management</h2>
                <p>Strong time management skills and ability to meet deadlines.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Adaptability</h2>
                <p>Ability to adapt to new technologies and frameworks quickly.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Creativity</h2>
                <p>Creative thinker with a passion for design and user experience.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Attention to Detail</h2>
                <p>Strong attention to detail and ability to deliver high-quality work.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Leadership</h2>
                <p>Experience in leading teams and mentoring junior developers.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Project Management</h2>
                <p>Experience in managing projects and working with clients.</p>
            </div>
            <div class="bg-slate-200 p-4 rounded shadow dark:bg-slate-700" data-aos="flip-up">
                <h2 class="text-xl font-bold">Continuous Learning</h2>
                <p>Passionate about continuous learning and staying updated with the latest technologies.</p>
            </div>
        </div>
        <div class="flex justify-center mt-8">
            <router-link to="/#contact" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Contact Me</router-link>
        </div>
    </section>
</template>

<style scoped></style>
