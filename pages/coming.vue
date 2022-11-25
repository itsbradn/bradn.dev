<template>
  <div>
    <Header />
    <section id="hero-section">
      <div id="hero-body">
        <div class="flex-center flex-col gap-16">
          <h1 class="head-500" style="max-width: 380px; text-align: center">
            Under Construction
          </h1>
          <p class="body-500" style="max-width: 420px; text-align: center">
            This page is still being worked on. Please go back to the home for
            now!
          </p>
          <NuxtLink to="/" class="button"><span>go home</span></NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
onMounted(() => {
  const header = document.getElementById("header");
  const heroBody = document.getElementById("hero-body");
  heroBody.style.paddingTop = header.clientHeight + "px";
  heroBody.style.height = `calc(90vh - ${header.clientHeight}px)`;

  document.querySelectorAll(".button").forEach((v) => {
    v.onmousemove = (e) => {
      const x = e.pageX - e.target.offsetLeft;
      const y = e.pageY - e.target.offsetTop;

      e.target.style.setProperty("--x", `${x}px`);
      e.target.style.setProperty("--y", `${y}px`);
    };
  });
});
</script>
