<script setup>
const route = useRoute();
console.log('route', route.params.id)
const { pendingPost, post } = usePost(route.params.id)

watch(post, (newPost) => {
  console.log('newPost', newPost);
  post.value = newPost;
})
</script>

<template>
  <section>
    <NuxtLink to="/"><button class="mb-2 btn-primary" type="button">Back</button></NuxtLink>
    <div>pendingPost? {{ pendingPost }}</div>

    <div v-if="pendingPost">Loading ...</div>

    <div v-else>
      <article class="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div class="col-span-8 bg-red-600">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg" width="300"
            height="300" />
          <h1 class="mt-3 text-xl font-semibold">{{ post.title }}</h1>
          <p class="mt-2">{{ post.body }}</p>
          <PostComments class="mt-4" :post-id="post.id" />
        </div>
        <aside class="col-span-4 bg-blue-600">
          <PostSidebar />
        </aside>
      </article>
    </div>
  </section>
</template>
