<script setup lang="ts">
</script>

<template>
  <header>
    <ul class="navigation">
      <li class="navigation-item">
        <RouterLink class="navigation-link" to="/">Home</RouterLink>
      </li>
      <li class="navigation-item">
        <RouterLink to="/game" class="navigation-link">Game</RouterLink>
      </li>
      <li class="navigation-item">
        <RouterLink to="/about" class="navigation-link">About</RouterLink>
      </li>
    </ul>
  </header>
</template>

<style scoped>
  header {
    background-color: 	#C1E899;
    margin: 0;
    padding: 15px;
    width: 100%;
  }

  .navigation {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .navigation-item {
    display: inline-block;
    margin-right: 15px;
  }

  .navigation-link {
    text-decoration: none;
    color: black;
    font-size: 30px;
  }

</style>
