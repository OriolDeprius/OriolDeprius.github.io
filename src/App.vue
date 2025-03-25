<script setup>
import headerComponent from "./components/header-component.vue";
import footerComponent from "./components/footer-component.vue";
import HomeView from "@/views/home-view.vue";
import AboutView from "@/views/about-view.vue";
import ProjectsView from "@/views/projects-view.vue";
import HabilitiesView from "@/views/habilities-view.vue";
import ContactView from "@/views/contact-view.vue";
</script>

<template>
	<headerComponent />
	<home-view></home-view>
	<about-view></about-view>
	<projects-view></projects-view>
	<habilities-view></habilities-view>
	<contact-view></contact-view>
	<footerComponent />
</template>

<style scoped></style>
