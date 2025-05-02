<script setup lang="ts">
defineProps<{
  name: string
}>()
const model = defineModel({default: ''})
defineEmits<{
  (e: 'changed', game: string): void
}>()
</script>

<template>
    <div class="titled-input">
        <h2>{{ name }}</h2>
        <input v-model="model" @change="$emit('changed', model)" type="text" />
    </div>
</template>

<style scoped>
    .titled-input {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .titled-input input{
        display: flex;
        flex: 1;
        flex-direction: row;
        padding: 10px;
        font-size: 1rem;
    }
</style>
