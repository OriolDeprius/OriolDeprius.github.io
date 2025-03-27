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
	<div class="background-container">
        <headerComponent />
        <returnTopComponent @scrollToTop="goTop" />
        <home-view></home-view>
        <about-view></about-view>
        <habilities-view></habilities-view>
        <contact-view></contact-view>
        <footerComponent />
    </div>
</template>

<style>
.background-container {
    background-image: url("@/assets/images/bg-rain.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
}
</style>
