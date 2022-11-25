<template>
  <header id="header">
    <div class="header-body">
      <div>
        <h1 class="head-400">bradn</h1>
      </div>
      <div class="desktop-side">
        <NuxtLink to="coming" class="button"><span>login</span></NuxtLink>
        <NuxtLink to="coming" class="button"><span>register</span></NuxtLink>
      </div>
      <div class="mobile-side" @click="openMobile"><CiHamburger /></div>
    </div>
    <div id="mobile-drop" style="display: none">
      <a href="" class="drop-item">Test</a>
      <a href="" class="drop-item">Test</a>
      <a href="" class="drop-item">login</a>
      <a href="" class="drop-item">register</a>
    </div>
  </header>
</template>

<script setup>
import CiHamburger from "~icons/ci/hamburger";
const openMobile = () => {
  const mobileMenu = document.getElementById("mobile-drop");

  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
  }
};
</script>
