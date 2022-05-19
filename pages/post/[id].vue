<template>
  <section>
    <NuxtLink to="/"
      ><button class="btn-primary mb-2" type="button">Back</button></NuxtLink
    >
    <div v-if="pendingPost">Loading ...</div>
    <div v-else>
      <article class="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div class="col-span-8 bg-red-600">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
            width="300"
            height="300"
          />
          <h1 class="text-xl font-semibold mt-3">{{ post.title }}</h1>
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

<script setup>
const route = useRoute();
const { pendingPost, post } = usePost(route.params.id);
</script>
