<template>
  <div class="status">
    <i class="fas fa-bolt"></i>
    <strong>{{ stats.words || 0 }}</strong> words &nbsp;
    <strong>{{ stats.lines || 0 }}</strong> lines
  </div>
</template>

<script>
export default {
  name: "StatusBar",
  props: {
    stats: { type: Object }
  }
};
</script>

<style scoped>
.status {
  background: #248;
  padding: 0.25rem 1rem;
  text-align: right;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
}

.fas {
  margin-right: 0.5rem;
}
</style>
