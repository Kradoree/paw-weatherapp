<template>
    <div>
        <Suspense>
            <AsyncPlaceViev/>
            <template #fallback>
                Loading
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import AsyncPlaceViev from '@/components/AsyncPlaceViev.vue';


</script>