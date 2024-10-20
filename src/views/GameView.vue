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
import * as ort from "onnxruntime-web";
import {onBeforeMount, onBeforeUnmount, onMounted, ref, useTemplateRef} from "vue";
import {Game} from '@/game/game';

declare global {
  interface Window {
    Q: any;
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
interface SpeechRecognitionErrorEvent extends Event {
  readonly error: Error
  readonly message: string
}

const game = new Game()
const gameScreen = useTemplateRef('gameScreen')
const gameMenu = ref('gameMenu')
const gameMenuVisible = ref(true)
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
let recognitionServiceCheckInterval: any = null
recognition.lang = 'en-US'
recognition.continuous = true
recognition.interimResults = false



const showMenu = () => {
  gameMenuVisible.value = !document.pointerLockElement;
};

function decodeTokenIds(tokenIds: ort.Tensor): string {
  // Dummy function – you'd implement this with a real tokenizer
  return JSON.stringify(tokenIds)
}

onBeforeMount(async () => {
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

  recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
    console.log('Recognition service error:', event.message)
    recognition.start()
  }
})

onBeforeUnmount(() => {
  recognition.stop()
  document.removeEventListener('pointerlockchange', showMenu);
  clearInterval(recognitionServiceCheckInterval);
})

onMounted(() => {
  // TODO: Find out why Typescript does not like vue.js reference as ref.value and mainly how to solve it.
  const gameScreenElement = gameScreen.value as HTMLDivElement
  game.init(gameScreenElement)

  if(game.isReady()) {
    const gameScreenFallback = document.getElementById('game-screen-fallback')
    if(gameScreenFallback) {
      gameScreenFallback.style.display = 'none';
    }
  }

  document.addEventListener('pointerlockchange', showMenu);

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {


      recognition.stop()
      recognition.start()
      console.log("Recognition service restarted")
    }
  });

  recognitionServiceCheckInterval = setInterval(() => {
    checkRecognitionService();
  }, 30000)

  loadModel()
})

async function checkRecognitionService() {
  try {
    recognition.start()
  } catch (e) {
    console.log("Recognition service already started")
  }
}

async function loadModel() {

  console.log("Model loading")
  //
  // const session = await ort.InferenceSession.create('/rpg_game/assets/models/mnist.onnx');
  //
  // // Prepare input data (ensure that the input data matches the model's input requirements)
  // const input = new ort.Tensor('float32', new Float32Array([1, 2, 3, 4]), [2, 2]);
  //
  // // Run the model with the input data
  // const output = await session.run({ input });
  //
  // console.log("Model output:",output);

  // try {
    // Specify the local path to the .wasm file
    // const options = {
    //   executionProviders: ['wasm'],
    //   wasmPaths: '/rpg_game/assets/onnxruntime/'  // Local path to ort-wasm-simd-threaded.wasm
    // };
    // // Load the ONNX T5 model (encoder, decoder, or decoder_with_past)
    // const session = await ort.InferenceSession.create('/rpg_game/assets/models/t5_onnx/encoder_model.onnx', options);
    // console.log("Model loaded");

    // // Prepare input token IDs (you'll need a tokenizer to convert text to token IDs)
    // const input_ids = new ort.Tensor('int64', new BigInt64Array([0, 1, 2, 3, 4]), [1, 5]);
    //
    // // Run the encoder with the input
    // const encoderOutput = await session.run({ input_ids });
    //
    // console.log("Encoder output:", encoderOutput);

    // // Load the decoder model and pass encoder hidden states
    // const decoderSession = await ort.InferenceSession.create('/rpg_game/src/assets/t5_onnx/decoder_model.onnx');
    // const decoderInput = new ort.Tensor('int64', new BigInt64Array([0]), [1, 1]);  // Start token
    // const decoderOutput = await decoderSession.run({
    //   input_ids: decoderInput,  // Start token for decoder
    //   encoder_hidden_states: encoderOutput.last_hidden_state  // Output from encoder
    // });
    //
    // console.log("Decoder output:", decoderOutput);  // You'd convert this output back to text
    //
    // // Optionally: Decode the output token IDs to text (implement or use an API)
    // const decodedText = decodeTokenIds(decoderOutput.logits);
    // console.log("Generated text:", decodedText);
  // } catch (err) {
  //   console.error("Failed to load model or run inference:", err);
  // }

}

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