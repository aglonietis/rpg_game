<script setup lang="ts">
import {onBeforeMount, onBeforeUnmount} from "vue";
import {Game} from '@/game/game';
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
  recognition.lang = 'en-US'
  recognition.continuous = true
  recognition.interimResults = false

  onBeforeMount(() => {
    recognition.start()

    recognition.onresult = (event) => {
      if(!event.results[event.results.length - 1].isFinal) {
        console.debug('Transcript has not yet processed')
        return
      }

      const transcript = event.results[event.results.length - 1][0].transcript
      if(!transcript) {
        console.debug('Transcript is empty!')
        return
      }

      console.log("Transcript:", transcript)
    }
  })

  onBeforeUnmount(() => {
    recognition.stop()
  })

  const game = new Game(document.body, window.innerWidth, window.innerHeight)

</script>

<template>
  <main id="game">
    <h1 class="backup-text">
      This is the game!
    </h1>
    <p class="backup-text">
      If you see this screen, the game is either loading or you are one of the unlucky ones and should contact support
    </p>
  </main>
</template>

<style scoped>
  #game {
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: #E6F0DC;
    margin: 0;
    padding: 0;
    align-content: center;
    justify-content: center;
  }

  #game .backup-text {
    align-content: center;
    text-align: center;
  }
</style>