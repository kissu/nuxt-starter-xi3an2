<template>
  <div v-if="pendingPosts">Loading ...</div>
  <div v-else>
    <PostCard v-for="post in posts" :key="post.id" :post="post" class="mb-3" />
  </div>
</template>

<script setup>
const { pendingPosts, posts } = usePost();
</script>
