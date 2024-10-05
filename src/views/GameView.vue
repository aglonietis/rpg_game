<template>
  <dialog ref="gameMenu" class="game-menu" :open="gameMenuVisible" @click="game.focus()">
    <div class="instructions">
      <p style="font-size:36px">
        Click to play
      </p>
      <p>
        Move: WASD<br/>
        Jump: SPACE<br/>
        Look: MOUSE
      </p>
      <RouterLink to="/" class="quit-link" @click="$event.stopPropagation()">Quit</RouterLink>
    </div>
  </dialog>
  <main class="game-screen" ref="gameScreen"/>
  <div class="game-screen-fallback" id="game-screen-fallback">
    <h1 class="backup-text">
      This is the game!
    </h1>
    <p class="backup-text">
      If you see this screen, the game is either loading or you are one of the unlucky ones and should contact support
    </p>
  </div>
</template>

<script setup lang="ts">
// Extend the global Window interface
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
    mozSpeechRecognition: any;
    msSpeechRecognition: any;
  }
}
interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number
  readonly results: SpeechRecognitionResultList
}


import {onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref, useTemplateRef} from "vue";
import {Game} from '@/game/game';

const game = new Game()
const gameScreen = useTemplateRef('gameScreen')
const gameMenu = ref('gameMenu')
const gameMenuVisible = ref(true)
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
recognition.lang = 'en-US'
recognition.continuous = true
recognition.interimResults = false


const showMenu = () => {
  if (document.pointerLockElement) {
    gameMenuVisible.value = false
  } else {
    gameMenuVisible.value = true
  }
};

onBeforeMount(() => {
  recognition.start()

  recognition.onresult = (event: SpeechRecognitionEvent) => {
    if(!event.results[event.results.length - 1].isFinal) {
      console.debug('Transcript has not yet processed')
      return
    }

    const transcript = event.results[event.results.length - 1][0].transcript
    if(!transcript) {
      console.debug('Transcript is empty!')
      return
    }

    game.processTextInput(transcript)
  }
})

onBeforeUnmount(() => {
  recognition.stop()
  document.removeEventListener('pointerlockchange', showMenu);
})

onMounted(() => {
  // TODO: Find out why Typescript does not like vue.js reference as ref.value and mainly how to solve it.
  const gameScreenArea = gameScreen.value.getBoundingClientRect()

  game.init(gameScreen.value, gameScreenArea.width, gameScreenArea.height)

  if(game.isReady()) {
    const gameScreenFallback = document.getElementById('game-screen-fallback')
    if(gameScreenFallback) {
      gameScreenFallback.style.display = 'none';
    }
  }

  document.addEventListener('pointerlockchange', showMenu);
})

</script>

<style scoped>
  .game-screen, .game-screen-fallback {
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: #E6F0DC;
    margin: 0;
    padding: 0;
    align-content: center;
    justify-content: center;
  }

  .game-screen-fallback {
    position: fixed;
  }

  .game-screen .backup-text, .game-screen-fallback .backup-text {
    align-content: center;
    text-align: center;
  }

  .game-menu {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    border: none;
  }

  .instructions {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    font-size: 18px;
    color: white;
    cursor: pointer;
  }

  .instructions .quit-link {
    color: red;
    font-size: 24px;
    text-decoration: none;
  }


</style>