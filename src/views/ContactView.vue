<template>
  <div class="contact">
    <h1>Contact</h1>
    <p>This is an contact page</p>
    <section>
      <Form />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from "@/components/Form.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Form,
  },
});
</script>

<style>
.contact {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
section {
  width: min-content;
}
</style>
