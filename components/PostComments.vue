<template>
  <section>
    <div v-if="pending">Loading...</div>
    <ul v-else>
      <h3 class="font-semibold mb-3">Comments: [{{ data.length }}]</h3>
      <li class="flex space-x-4 mb-3" v-for="comment in data" :key="comment.id">
        <div>{{ comment.id }}</div>
        <div>{{ comment.body }}</div>
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({
  postId: {
    type: Number,
    required: true,
  },
});
const { pending, data } = useLazyFetch(
  `https://jsonplaceholder.typicode.com/posts/${props.postId}/comments`
);
</script>
