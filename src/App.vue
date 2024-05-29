<template>
  <nav>
    <router-link to="/">
      <div class="menu-item logo-home">
        <Home color="white" :size="30" class="logo-home" />
        <span class="item">Home</span>
      </div>
    </router-link>
    <router-link to="/about">
      <div class="menu-item logo-home">
        <Verified color="white" :size="30" class="about-item" />
        <span class="item">About</span>
      </div>
    </router-link>
    <router-link to="/posts">
      <div class="menu-item logo-home">
        <List color="white" :size="30" class="list-item" />
        <span class="item">Posts</span>
      </div>
    </router-link>
    <router-link to="/social">
      <div class="menu-item logo-home">
        <Heart color="white" :size="30" class="social-item" />
        <span class="item">Social</span>
      </div>
    </router-link>
    <router-link to="/contact">
      <div class="menu-item logo-home">
        <Contact color="white" :size="30" class="contact-item" />
        <span class="item">Social</span>
      </div>
    </router-link>
  </nav>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { Home, Verified, Heart, List, Contact } from "lucide-vue-next";

export default defineComponent({
  name: "PostsView",
  components: {
    Home,
    Verified,
    List,
    Heart,
    Contact,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffff;
}

.item {
  display: none;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.logo-home:hover .item {
  display: flex;
}

nav {
  padding: 30px;
  background-color: #42b983;
  border-radius: 30px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 2px solid #ffff;
}

nav a {
  font-weight: bold;
  color: #ffff;
  gap: 20px;
  width: 80px;
}

nav a.router-link-exact-active {
  color: #193047;
}

body {
  background-color: #193047;
}
</style>
