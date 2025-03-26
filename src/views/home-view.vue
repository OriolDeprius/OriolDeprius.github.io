<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
	<section id="home" class="backdrop-blur-md h-screen container pt-10 mx-auto sm:pt-0" data-aos="zoom-in" data-aos-duration="2000">
        <div class="flex flex-col justify-center content-center items-center h-full lg:flex-row">
            <div class="flex flex-col justify-center items-center w-full lg:w-3/5 lg:overflow-visible lg:ml-20 2xl:ml-35">
                <div class="w-full lg:overflow-visible">
                    <svg class="w-full lg:overflow-visible">
                        <text x="50%" y="50%" dy=".35em" text-anchor="middle" class="text-5xl sm:text-7xl md:text-8xl 2xl:text-9xl">
                            Oriol Deprius
                        </text>
                    </svg>
                </div>
                <p class="text-lg text-center lg:mt-15 lg:text-2xl">I am a full stack developer with a love<br>for creating amazing web applications.</p>
            </div>
            <div class="flex flex-col w-full justify-center items-center mt-5 sm:mt-8 lg:w-2/5 lg:mt-0">
                <img src="@/assets/images/oriol.jpg" alt="Profile Picture" class="rounded-full shadow-lg shadow-slate-500 w-50 sm:w-70"/>
                <router-link to="/#about" class="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 sm:mt-8">Learn More About Me!</router-link>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");

svg {
	font-family: "Russo One", sans-serif;
	width: 100%; height: 100%;
}
svg text {
	animation: stroke 6s infinite alternate;
	stroke-width: 2;
	stroke: #ffffff;
}
@keyframes stroke {
	0%   {
		fill: rgba(43,127,255,0); stroke: rgb(255, 255, 255);
		stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
	}
	70%  {fill: rgba(43,127,255,0); stroke: rgb(176, 176, 176); }
	80%  {fill: rgba(43,127,255,0); stroke: rgb(97, 97, 97); stroke-width: 3; }
	100% {
		fill: rgb(0, 51, 127); stroke: rgb(0, 0, 0);
		stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
	}
}


</style>
