<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const emits = defineEmits(["scrollToTop"]);

function scrollEmit() {
    emits("scrollToTop");
}

function handleScroll() {
    isVisible.value = window.scrollY > 500;
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <div
        class="fixed bottom-4 right-4 duration-300 ease-in-out transform"
        :class="{
            'translate-y-20 pointer-events-none': !isVisible,
            'trnaslate-y-0 pointer-events-auto': isVisible
        }"
    >
        <button @click="scrollEmit" class="bg-blue-500 text-white px-3 py-1 text-xl cursor-pointer font-bold rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
            ↑
        </button>
    </div>
</template>

<style scoped></style>