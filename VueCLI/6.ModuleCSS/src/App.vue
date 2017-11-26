<template>
<div>
  <h1 :class="[$style.red]">Hi CSS Modules!!!</h1>
  <h1 :class="{[$style.highlight]: highlight}" @click="highlight = !highlight">Hi CSS Modules!!! Part 2</h1>
</div>

</template>

<script>
export default {
  data() {
    return {
      highlight: false
    };
  }
}
</script>

<style module>
  .highlight {
    text-decoration: underline;
  }

  .red {
    color: red;
  }
</style>
