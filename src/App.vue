<script setup>
import headerComponent from "./components/header-component.vue";
import footerComponent from "./components/footer-component.vue";
import HomeView from "@/views/home-view.vue";
import AboutView from "@/views/about-view.vue";
import HabilitiesView from "@/views/habilities-view.vue";
import ContactView from "@/views/contact-view.vue";
import returnTopComponent from "./components/return-top-component.vue";

function goTop() {
	const element = document.getElementById("app");
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
}


</script>

<template>
	 <div class="app-container">
        <div class="background"></div>
        <div class="content">
            <headerComponent />
            <returnTopComponent @scrollToTop="goTop" />
            <home-view></home-view>
            <about-view></about-view>
            <habilities-view></habilities-view>
            <contact-view></contact-view>
            <footerComponent />
        </div>
    </div>
</template>

<style>
.app-container {
    position: relative;
    overflow: hidden;
}

.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/images/bg-rain.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1; /* Asegura que el fondo esté detrás del contenido */
}

.content {
    position: relative;
    z-index: 1; /* Asegura que el contenido esté encima del fondo */
}
</style>
