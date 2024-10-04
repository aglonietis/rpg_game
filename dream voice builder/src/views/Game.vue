<script setup lang="ts">
  const speechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
  speechRecognition.lang = 'en-US';
  speechRecognition.continuous = true;  // Keep listening even after a result is recognized
  speechRecognition.interimResults = false;  // You can set this to true if you want real-time updates

  speechRecognition.start();

</script>

<template>
  <main>
    <button id="startButton">Start Voice Input</button>
  </main>
</template>



<!--<script>-->
<!--  recognition.onstart = () => {-->
<!--    startButton.textContent = 'Listening...';-->
<!--  };-->

<!--  recognition.onresult = (event) => {-->
<!--    const transcript = event.results[0][0].transcript;-->
<!--    outputDiv.textContent = transcript;-->
<!--  };-->

<!--  recognition.onend = () => {-->
<!--    startButton.textContent = 'Start Voice Input';-->
<!--  };-->

<!--  startButton.addEventListener('click', () => {-->
<!--    recognition.start();-->
<!--  });-->
<!--</script>-->
