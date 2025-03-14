<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Menubar from "primevue/menubar";


const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'About me',
        icon: 'pi pi-star'
    },
    {
        label: 'Featured projects',
        icon: 'pi pi-box',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Technical skills',
        icon: 'pi pi-cog'
    },
    {
        label: 'Work experience',
        icon: 'pi pi-briefcase'
    },
    {
        label: 'Download portfolio',
        icon: 'pi pi-download'
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]);

const windowWidth = ref(window.innerWidth);
const menuBarClass = computed(() => {
    return windowWidth.value < 1130 ? 'justify-start' : 'justify-around';
});

const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWindowWidth);
});
</script>
<template>
    <Menubar :model="items" :class="['rounded-none!', menuBarClass]" breakpoint="1130px" />
</template>
<style scoped></style>
