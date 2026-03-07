<script setup></script>

<template>
  <ul class="stats">
    <li class="stat">
      <div class="stat-name">Влажность</div>
      <div class="stat-value">90%</div>
    </li>
  </ul>
</template>

<style scoped>
  .stats {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .stat {
    font-size: 28px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
  .stat-name {
    font-weight: 700;
  }
  .stat-value {
    font-weight: 500;
  }
</style>
