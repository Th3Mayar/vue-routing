<template>
  <div class="content">
    <table>
      <tr class="header">
        <th>Id</th>
        <th>UserId</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      <tr
        v-for="post in posts"
        :key="post.id"
        class="data"
        @click="viewPostDetail(post.id)"
      >
        <td>{{ post.id }}</td>
        <td>{{ post.userId }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "PostList",
  setup() {
    const posts = ref([]);
    const router = useRouter();

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

    const viewPostDetail = (postId) => {
      router.push({ name: "post", params: { id: postId } });
    };

    // const filteredPost = ref(null);

    fetchPosts();

    return { posts, viewPostDetail };
  },
};
</script>

<style scoped>
.content {
  border-top: 1px solid #000;
  border-right: 1px solid #000;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #fff;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #2c3e50;
  color: #ffff;
}

tr:nth-child(even) {
  background-color: #494949;
}

.header {
  align-items: center;
}

.header th {
  text-align: center;
}

.data {
  align-items: center;
}

.data td {
  text-align: center;
}

/* Responsive */
@media (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
/* End Responsive */
</style>
