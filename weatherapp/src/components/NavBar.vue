<template>
    <header class="sticky top-0 bg-seccolor shadow-ld">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
            <RouterLink :to="{name: 'home'}">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-cloud-sun text-2xl"></i>
                    <p class="text-2xl">Weather app</p>
                </div>
            </RouterLink>
            <div class="flex gap-3 flex-1 justify-end">
                <p class="text-2xl">Login</p>
                <p class="text-2xl">Register</p>
            </div>
        </nav>
    </header>
</template>

<script setup>
import {RouterLink} from "vue-router";
</script>
