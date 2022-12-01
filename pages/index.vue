<template>
  <div>
    <Header />
    <section id="hero-section">
      <div id="hero-body">
        <div class="flex-center flex-col gap-16">
          <h1 class="head-500" style="max-width: 380px; text-align: center">
            Easy to use tools and software
          </h1>
          <p class="body-500" style="max-width: 420px; text-align: center">
            Use any of my various tools & software or learn from my public code.
          </p>
          <NuxtLink to="coming" class="button"
            ><span>learn more</span></NuxtLink
          >
        </div>
      </div>
    </section>
    <section>
      <div class="card-collection">
        <div class="featured-card">
          <h3 class="head-300">Freelance Developer</h3>
          <br />
          <p style="max-width: 300px">
            Get in contact with me to get simple or complex applications
            developed for you.
          </p>
          <br />
          <NuxtLink to="coming" class="button sm"
            ><span>contact me</span></NuxtLink
          >
        </div>
        <div class="featured-card">
          <h3 class="head-300">EcoBot Discord Bot</h3>
          <br />
          <p style="max-width: 300px">
            A fully featured economy discord bot built with discordeno to make
            scaling the bot easy.
          </p>
          <br />
          <NuxtLink to="coming" class="button sm"
            ><span>learn more</span></NuxtLink
          >
        </div>
        <div class="featured-card">
          <h3 class="head-300">coming soon...</h3>
          <br />
          <p style="max-width: 300px">
            This application is yet to be announced and will be featured here
            soon.
          </p>
          <br />
          <NuxtLink to="coming" class="button sm"
            ><span>learn more</span></NuxtLink
          >
        </div>
        <div class="featured-card">
          <h3 class="head-300">coming soon...</h3>
          <br />
          <p style="max-width: 300px">
            This application is yet to be announced and will be featured here
            soon.
          </p>
          <br />
          <NuxtLink to="coming" class="button sm"
            ><span>learn more</span></NuxtLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "braden — Software & Tools",
  meta: [
    { name: "title", content: "braden — Software & Tools" },
    {
      name: "description",
      content:
        "Use any of my various tools & software or learn from my public code.",
    },
    { name: "twitter:title", content: "braden — Software & Tools" },
    {
      name: "twitter:description",
      content:
        "Use any of my various tools & software or learn from my public code.",
    },
    {
      name: "theme-color",
      content: "#2D0B21",
    },
  ],
});

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
