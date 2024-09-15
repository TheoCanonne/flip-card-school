<template>
  <div class="modal" v-bind:class="{ opened }">
    <div class="modal-header">
      <h2>Administration</h2>
      <button class="button" @click="closeModal">X</button>
    </div>
    <div class="modal-body">
      <div class="data-container">
        <label class="data-element" v-for="data in datas" v-bind:class="{ visible: data.visible }">
          <p>{{ data.name }}</p>
          <input type="checkbox" v-model="data.visible" />
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, inject, computed, defineEmits } from "vue";
import { Emitter, EventType } from "mitt";
const props = defineProps({
  datas: Object,
  opened: Boolean,
});
const emit = defineEmits(['close'])


function closeModal() {
  console.log("close");
  emit("close");
}

onMounted(() => {
  console.log(props.data);
});

</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: none;

  &.opened {
    display: block;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
  }

  .data-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    .data-element {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;

      &:not(.visible) {
        background-color: #f0f0f0;
      }

      &.visible {
        background-color: #0569c833;
      }
    }
  }

}
</style>
