<template>
  <Head>
    <Title>My custom title here</Title>
    <Meta
      name="description"
      content="my page's dynamic description can go here if :content"
    />
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossorigin="anonymous"
    />
    <Link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
    />
  </Head>
  <nav
    class="
      sticky
      top-0
      z-50
      bg-opacity-90
      backdrop-filter backdrop-blur-xl
      shadow
      py-2
      px-4
      sm:px-6
      lg:px-8
      hidden
      md:block
    "
  >
    <TheNavBar />
  </nav>
  <div class="container mx-auto px-4 mt-2">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body,
html {
  height: 100%;
}
</style>
