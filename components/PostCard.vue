<template>
  <!-- modified from https://tailwindui.com/components/marketing/sections/blog-sections#component-720cf60b960fecb99c45f462f24db2d9 -->
  <article class="rounded border overflow-hidden">
    <header class="flex-shrink-0">
      <NuxtLink
        :to="{
          name: 'post-id',
          params: { id: post.id },
        }"
      >
        <!-- <img
          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
          class="h-48 w-full object-cover"
        /> -->
        image here</NuxtLink
      >
    </header>
    <div class="flex-1 p-6 flex flex-col justify-between">
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
      <footer class="mt-6 flex items-center">
        <PostAvatar :post="post" />
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            <a href="#" class="hover:underline">
              {{ pendingUser ? 'Loading...' : user.name }}
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

<script setup>
const props = defineProps({
  post: {
    type: Object,
    default: () => ({}),
  },
});
const { pendingUser, user } = useUser(props.post.userId);
</script>
