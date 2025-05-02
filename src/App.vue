<script setup lang="ts">
import { ref } from 'vue'
import { StaticAppRepository } from '@/data/StaticAppRepository.ts'
import { AppUrlUseCase } from '@/usecases/AppUrlUseCase.ts'
import { ReadFragmentUseCase } from '@/usecases/ReadFragmentUseCase.ts'

import GameSelector from './components/GameSelector.vue'
import TitledInput from './components/TitledInput.vue'
import FancyButton from './components/FancyButton.vue'
import ButtonRow from './components/ButtonRow.vue'
import Spacer from './components/Spacer.vue'

const repo = new StaticAppRepository();
const apps = repo.getApps();
const games = apps.map(app => app.name);

const selectedGame = ref(ReadFragmentUseCase.getConfig('game') ?? "");
const hostname = ref(ReadFragmentUseCase.getConfig("host") ?? "localhost");
const port = ref(ReadFragmentUseCase.getConfig("port") ?? "8080");

function startGame() {
  console.log('Starting game' + selectedGame.value);
    const app = apps.find(app => app.name === selectedGame.value);
    if (app === undefined) {
        console.error('Game not found');
        return;
    }
    const appUrl = AppUrlUseCase.getAppUrl(app, hostname.value, port.value);
    console.log('App URL: ' + appUrl);
    window.open(appUrl, '_self');
}

function shareSteam() {
    const app = apps.find(app => app.name === selectedGame.value);
    if (app === undefined) {
        console.error('Game not found');
        return;
    }
    const appUrl = AppUrlUseCase.getAppUrl(app, hostname.value, port.value);
    console.log('App URL: ' + appUrl);
    navigator.clipboard.writeText(appUrl);
}

function shareLink() {
  let appUrl = window.location.href.split('#')[0];
  appUrl += '#game=' + selectedGame.value;
  appUrl += '&host=' + hostname.value;
  appUrl += '&port=' + port.value;

  console.log('App URL: ' + appUrl);
  navigator.clipboard.writeText(appUrl);
}
    

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <GameSelector :games="games" v-model="selectedGame"/>
    <TitledInput name="Server Hostname" v-model="hostname" />
    <TitledInput name="Server Port" v-model="port"/>
    <Spacer />
    <FancyButton @click="startGame">
      Start Game
    </FancyButton>
    <Spacer />
    <h2>Share a link!</h2>
    <ButtonRow>
      <FancyButton @click="shareSteam">
        steam://
      </FancyButton>
      <FancyButton @click="shareLink">
        https://
      </FancyButton>
    </ButtonRow>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
