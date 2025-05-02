<script setup lang="ts">
defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
    <div id="fancybutton" class="fancy-button" @click="$emit('click')">
        <slot></slot>
    </div>
</template>

<style scoped>
    .fancy-button:hover {
        background-color: #FFFFFF;
        border: 2px solid #CCFF00;
        color: #000000;
    }
    .fancy-button {
        background-color: #CCFF00;
        color: #000000;
        flex: 1;
        padding: 10px;
        font-size: 1rem;
        border-radius: 5px;
        border: 2px solid #CCFF00;
    }
</style>
