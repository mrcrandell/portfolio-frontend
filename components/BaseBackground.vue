<template>
  <div class="base-background">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-background {
  &:before,
  &:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    content: '\020';
    width: 100%;
    height: 100%;
  }
  &:before {
    background: $mostly-black;
    mix-blend-mode: multiply;
    opacity: 0.5;
    z-index: 2;
  }
  &:after {
    background: $sanmarino;
    opacity: 0.5;
    z-index: 3;
    mix-blend-mode: hard-light;
  }
  :deep(img) {
    height: auto;
    left: 50%;
    max-width: 1000%;
    min-height: 100%;
    min-width: 100vw;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: auto;
    z-index: 1;
    height: 100%;
    left: 0;
    object-fit: cover;
    top: 0;
    transform: none;
    width: 100%;
  }
}
</style>