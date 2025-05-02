<script setup lang="ts">
defineProps<{
  games: string[]
}>()
const selectedGame = defineModel({default: ''})
defineEmits<{
  (e: 'game-selected', game: string): void
}>()
</script>

<template>
    <div class="game-selector">
        <h2>Select Game</h2>
        <div class="game-selector-dropdown">
        <select v-model="selectedGame" @change="$emit('game-selected', selectedGame)">
            <option disabled value="">Please select a game</option>
            <option v-for="game in games" :key=game :value=game>{{ game }}</option>
        </select>
        </div>
    </div>
</template>

<style scoped>
    .game-selector {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .game-selector-dropdown {
        display: flex;
        flex: 1;
        flex-direction: row;
    }

    select {
        flex-grow: 1;
        padding: 10px;
        font-size: 1rem;
    }
</style>
