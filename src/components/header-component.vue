<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

const isMenuOpen = ref(false);
const isHeaderVisible = ref(true);
let lastScrollPosition = 0;

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
	const currentScrollPosition = window.scrollY;
	isHeaderVisible.value = currentScrollPosition < lastScrollPosition || currentScrollPosition <= 0;
	lastScrollPosition = currentScrollPosition;
	if(isMenuOpen.value) {
		isMenuOpen.value = false;
	}
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});

</script>

<template>
	<header 
	:class="{
            'translate-y-0': isHeaderVisible,
            '-translate-y-full': !isHeaderVisible,
        }"
	class="fixed w-full bg-slate-200 dark:bg-slate-800 p-4 z-50 transition-transform duration-300 ease-in-out">
		<nav class="flex flex-row justify-between items-center">
			<button
				@click="toggleMenu"
				class="md:hidden px-3 py-2 rounded hover:bg-slate-300 dark:hover:bg-slate-700"
				aria-label="Toggle menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</button>

			<div
				:class="{
					'translate-y-[-20%] opacity-0 pointer-events-none': !isMenuOpen,
					'translate-y-0 opacity-100 pointer-events-auto': isMenuOpen,
				}"
				class="absolute top-18 left-0 w-full bg-slate-200 dark:bg-slate-800 md:static md:flex md:space-x-4 md:justify-center transition-all duration-300 ease-in-out transform md:translate-y-0 md:opacity-100 md:pointer-events-auto"
			>
				<router-link
					to="/"
					class="block px-3 py-2 rounded hover:bg-slate-300 dark:hover:bg-slate-700 text-(--vt-c-text-light-1) dark:text-inherit"
					@click="isMenuOpen = false"
				>
					Home
				</router-link>
				<router-link
					to="/#about"
					class="block px-3 py-2 rounded hover:bg-slate-300 dark:hover:bg-slate-700 text-(--vt-c-text-light-1) dark:text-inherit"
					@click="isMenuOpen = false"
				>
					About me
				</router-link>
				<router-link
					to="/#habilities"
					class="block px-3 py-2 rounded hover:bg-slate-300 dark:hover:bg-slate-700 text-(--vt-c-text-light-1) dark:text-inherit"
					@click="isMenuOpen = false"
				>
					Habilities
				</router-link>
				<router-link
					to="/#contact"
					class="block px-3 py-2 rounded hover:bg-slate-300 dark:hover:bg-slate-700 text-(--vt-c-text-light-1) dark:text-inherit"
					@click="isMenuOpen = false"
				>
					Contact
				</router-link>
			</div>
		</nav>
	</header>
</template>

<style scoped></style>
