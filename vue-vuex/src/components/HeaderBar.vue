<template>
  <header>
    <i class="logo fas fa-pen-square"></i>
    Markdown Editor
    <button class="reset" @click="$emit('reset')">
      <i class="fas fa-recycle"></i>
    </button>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  background: #343832;
  color: #fff;
  padding: 0.5rem 1rem;
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  border-bottom: 2px solid #222;
}

.logo {
  margin-right: 0.5rem;
}

.reset {
  vertical-align: middle;
  border-radius: 50%;
  height: 1.5em;
  width: 1.5em;
  transition: background 200ms ease-in-out;
  background: transparent;
  border: none;
  padding: 0.1em;
  color: #fff;
  font-size: 0.85em;
  float: right;
  margin-bottom: -0.5em; // needed but why??? :/

  &:hover {
    background: #555;
  }
}
</style>
