<template>
  <section>
    <div v-if="pendingUsers">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="user in users" :key="user.id" class="mb-3">
          <div>{{ user.id }}</div>
          <div>{{ user.username }}</div>
          <div>{{ user.email }}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { pendingUsers, users } = useUser();
</script>

<style lang="scss" scoped></style>
