<template>
  <div>
    <h1>All Posts</h1>
    <PostListAll :posts="posts" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import PostListAll from "@/components/PostListAll.vue";

export default {
  name: "PostsView",
  components: {
    PostListAll,
  },
  setup() {
    const posts = ref([]);

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (response.ok) {
          const data = await response.json();
          posts.value = data;
        } else {
          console.error("Failed to fetch posts:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    onMounted(fetchPosts);

    return {
      posts,
    };
  },
};
</script>
