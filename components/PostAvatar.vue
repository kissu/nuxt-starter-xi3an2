<template>
  <aside class="flex-shrink-0">
    <a href="#">
      <span class="sr-only">{{ post.userId }}</span>
      <span
        class="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100"
      >
        <svg
          class="h-full w-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </span>
      <!-- <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              class="h-10 w-10 rounded-full"
            /> -->
    </a>
  </aside>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    default: () => ({}),
  },
});
</script>
