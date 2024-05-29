<template>
  <div class="posts">
    <h1>This is an post list page</h1>
    <PostsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostsList from "@/components/PostList.vue";

export default defineComponent({
  name: "PostsView",
  components: {
    PostsList,
  },
});
</script>
