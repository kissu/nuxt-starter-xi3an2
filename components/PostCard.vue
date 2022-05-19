<script setup>
const props = defineProps({
  post: {
    type: Object,
    default: () => ({}),
  },
});
const nameOrLoading = () => computed(() => {
  return pendingUser ? 'Loading...' : user.name
})
const { pendingUser, user } = await useUser(props.post.userId);
</script>


<template>
  <!-- modified from https://tailwindui.com/components/marketing/sections/blog-sections#component-720cf60b960fecb99c45f462f24db2d9 -->
  <article class="overflow-hidden border rounded">
    <header class="flex-shrink-0">
      <NuxtLink
        :to="{
          name: 'post-id',
          params: { id: post.id },
        }"
      >
        <!-- <img
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
          class="object-cover w-full h-48"
        /> -->
        image here</NuxtLink
      >
    </header>
    <div class="flex flex-col justify-between flex-1 p-6">
      <div class="flex-1">
        <div class="text-xl font-semibold text-gray-900">
          <NuxtLink
            :to="{
              name: 'post-id',
              params: { id: post.id },
            }"
            >{{ post.title }}</NuxtLink
          >
        </div>
      </div>
      <footer class="flex items-center mt-6">
        <PostAvatar :post="post" />
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            <a href="#" class="hover:underline">
              {{ nameOrLoading }}
            </a>
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <!-- <time :datetime="post.datetime">
              {{ post.date }}
            </time> -->
            mar 4, 2019
            <span aria-hidden="true">&middot;</span>
            <span>misc</span>
          </div>
        </div>
      </footer>
    </div>
  </article>
</template>
