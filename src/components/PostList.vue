<template>
  <div class="content">
    <div class="card data" v-for="post in filteredPosts" :key="post.id">
      <p class="card-id">{{ post.id }}</p>
      <p class="card-title">{{ post.title }}</p>
      <p class="small-desc">
        {{ post.body }}
      </p>
      <p class="name">By {{ post.userName }}</p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "PostList",
  setup() {
    const posts = ref([]);
    const users = ref([]);
    const router = useRouter();
    const routeParams = computed(() => router.currentRoute.value.params);

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

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (response.ok) {
          const data = await response.json();
          users.value = data;
        } else {
          console.error("Failed to fetch users:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    const filteredPosts = computed(() => {
      const postId = Number(routeParams.value.id);
      return posts.value
        .filter((post) => (postId ? post.id === postId : true))
        .map((post) => {
          const user = users.value.find((user) => user.id === post.userId);
          return { ...post, userName: user ? user.name : "Unknown" };
        });
    });

    fetchPosts();
    fetchUsers();

    return { filteredPosts };
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-title {
  color: #262626;
  font-size: 1.5em;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 0.5em;
}

.small-desc {
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5em;
  color: #452c2c;
}

.small-desc {
  font-size: 1em;
}

.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 2em;
  height: 2em;
  overflow: hidden;
  top: 0;
  right: 0;
  background: linear-gradient(135deg, #6293c8, #384c6c);
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.card {
  display: block;
  position: relative;
  max-width: 300px;
  max-height: 320px;
  background-color: #f2f8f9;
  border-radius: 10px;
  padding: 2em 1.2em;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(to bottom, #c3e6ec, #a7d1d9);
  font-family: Arial, Helvetica, sans-serif;
  text-transform: capitalize;
}

.card:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: linear-gradient(135deg, #364a60, #384c6c);
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.35s ease-out;
}

.card:hover:before {
  transform: scale(28);
}

.card:hover .small-desc {
  transition: all 0.5s ease-out;
  color: rgba(255, 255, 255, 0.8);
}

.card:hover .card-title {
  transition: all 0.5s ease-out;
  color: #ffffff;
}

.name {
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5em;
  color: #b88080;
  margin-top: 2em;
  text-align: right;
  font-weight: bold;
}

.card-id {
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5em;
  color: #b88080;
  margin-top: -1rem;
  text-align: left;
  font-weight: bold;
}
</style>
