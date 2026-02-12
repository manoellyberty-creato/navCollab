<script setup></script>

<template>
  <div>
    <nav>
      <router-link :to="{ name: 'home' }" class="nav">Home</router-link>
    </nav>

    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>
div{
  background-color: aquamarine;

}
.nav{
  text-decoration: none;
}
</style>
