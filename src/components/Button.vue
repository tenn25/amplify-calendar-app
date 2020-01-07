<template>
  <button>Buttonコンポーネント</button>
</template>

<style scoped lang="scss">
button {
  height: 48px;
  background-color: white;
  color: blue;
  border: solid 1px blue;
  border-radius: 2px;
  padding: 0 24px;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
}
</style>
