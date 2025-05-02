<script setup lang="ts">
</script>

<template>
    <div class="share-box">
        <div class="share-buttons">
            <slot></slot>  
        </div>
    </div>
</template>

<style scoped>
    .share-box {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .share-buttons {
        display: flex;
        flex: 1;
        flex-direction: row;
        font-size: 1rem;
    }
    .share-buttons > * {
        flex: 1;
        margin-left: 10px;
    }
    .share-buttons > :first-child{
        margin-left: 0px;
    }
</style>
