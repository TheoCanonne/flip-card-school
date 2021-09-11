<template>
  <div class="card" v-bind:class="{ flipped: isFlipped }">
    <div class="card-inner">
      <div class="card-front shadowed">
        <span>{{ name }}</span>
        <button @click="toggleFlip">
          <svg
            width="86"
            height="123"
            viewBox="0 0 86 123"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1633 103.704H70.1041L64.2605 111.571C63.4141 112.719 62.9386 114.277 62.9386 115.901C62.9386 117.525 63.4141 119.082 64.2605 120.23C65.107 121.379 66.255 122.024 67.452 122.024C68.6491 122.024 69.7971 121.379 70.6435 120.23L84.1287 101.936C84.55 101.369 84.8844 100.694 85.1126 99.9514C85.3408 99.2083 85.4583 98.4112 85.4583 97.6062C85.4583 96.8011 85.3408 96.0041 85.1126 95.2609C84.8844 94.5178 84.55 93.8434 84.1287 93.2765L70.6435 74.9819C70.2256 74.4104 69.7285 73.9567 69.1807 73.6471C68.6329 73.3375 68.0454 73.1781 67.452 73.1781C66.8586 73.1781 66.2711 73.3375 65.7233 73.6471C65.1756 73.9567 64.6784 74.4104 64.2605 74.9819C63.8392 75.5488 63.5048 76.2233 63.2766 76.9664C63.0484 77.7095 62.9309 78.5066 62.9309 79.3116C62.9309 80.1167 63.0484 80.9137 63.2766 81.6568C63.5048 82.4 63.8392 83.0744 64.2605 83.6413L70.1041 91.508H16.1633C15.2424 91.5322 14.327 91.3101 13.4694 90.8543C12.6118 90.3985 11.8287 89.718 11.165 88.8515C10.5013 87.9851 9.96994 86.9498 9.60123 85.8046C9.23253 84.6596 9.03373 83.4271 9.01619 82.1778V67.1153C9.01619 65.4979 8.5426 63.9468 7.69962 62.8032C6.85663 61.6596 5.71329 61.0171 4.52113 61.0171C3.32896 61.0171 2.18563 61.6596 1.34264 62.8032C0.499649 63.9468 0.0260639 65.4979 0.0260639 67.1153V82.1778C0.0436985 85.0287 0.475098 87.8471 1.29563 90.4718C2.11616 93.0966 3.30976 95.4764 4.80826 97.4753C6.30676 99.4743 8.08081 101.053 10.0291 102.122C11.9774 103.191 14.0619 103.728 16.1633 103.704ZM14.8148 47.0523C15.6613 48.2006 16.8093 48.8457 18.0063 48.8457C19.2034 48.8457 20.3514 48.2006 21.1978 47.0523C22.0442 45.904 22.5198 44.3465 22.5198 42.7226C22.5198 41.0986 22.0442 39.5412 21.1978 38.3929L15.3542 30.5262H69.295C70.2159 30.502 71.1313 30.7241 71.9889 31.1799C72.8466 31.6357 73.6296 32.3162 74.2933 33.1827C74.957 34.0491 75.4884 35.0845 75.8571 36.2296C76.2258 37.3747 76.4246 38.6071 76.4421 39.8564V54.9189C76.4421 56.5363 76.9157 58.0874 77.7587 59.231C78.6017 60.3746 79.745 61.0171 80.9372 61.0171C82.1294 61.0171 83.2727 60.3746 84.1157 59.231C84.9587 58.0874 85.4323 56.5363 85.4323 54.9189V39.8564C85.4146 37.0055 84.9832 34.1871 84.1627 31.5624C83.3422 28.9376 82.1486 26.5578 80.6501 24.5589C79.1516 22.5599 77.3775 20.981 75.4292 19.9122C73.4809 18.8434 71.3965 18.3058 69.295 18.3299H15.3542L21.1978 10.4632C21.6191 9.89633 21.9535 9.22187 22.1817 8.47875C22.41 7.73563 22.5274 6.93857 22.5274 6.13353C22.5274 5.3285 22.41 4.53144 22.1817 3.78832C21.9535 3.0452 21.6191 2.37073 21.1978 1.80383C20.7799 1.23226 20.2828 0.778588 19.735 0.468992C19.1872 0.159396 18.5997 0 18.0063 0C17.4129 0 16.8254 0.159396 16.2776 0.468992C15.7299 0.778588 15.2327 1.23226 14.8148 1.80383L1.32963 20.0984C0.908317 20.6653 0.57391 21.3397 0.345701 22.0828C0.117493 22.826 0 23.623 0 24.4281C0 25.2331 0.117493 26.0302 0.345701 26.7733C0.57391 27.5164 0.908317 28.1909 1.32963 28.7578L14.8148 47.0523Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <span class="bottom-name">{{ name }}</span>
      </div>
      <div class="card-back shadowed">
        <span v-if="!isImage">{{ value }}</span>
        <img :src="value" v-if="isImage">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, inject } from "vue";
import { Emitter, EventType } from "mitt";
const props = defineProps({
  name: String,
  values: Array,
  color: String,
  isImage: Boolean,
});
const eventBus: Emitter<Record<EventType, unknown>> = inject("eventBus");

const isFlipped = ref(false);
const value = ref(null);

eventBus.on("resetCard", () => {
  isFlipped.value = false;
});

function toggleFlip() {
  isFlipped.value = !isFlipped.value;
  value.value = props.values[Math.floor(Math.random() * props.values.length)];
}

onMounted(() => {});
</script>

<style lang="scss" scoped>
.card {
  height: 300px;
  width: 250px;
  perspective: 1000px;
  text-transform: uppercase;
  font-size: 1.5em;

  &.flipped .card-inner {
    transform: rotateY(180deg);
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .card-front {
      background-color: v-bind(color);
      display: grid;
      color: white;
      button {
        background-color: transparent;
        border: unset;
        color: white;
        svg {
          transition: opacity 0.3s ease;
        }

        &:hover svg {
          opacity: 0.8;
        }
      }

      .bottom-name {
        transform: rotate(180deg);
      }
    }

    .card-back {
      background-color: dodgerblue;
      color: white;
      transform: rotateY(180deg);
      display: flex;
      align-items: center;
      justify-content: center;

      img { 
        width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }

    .card-front,
    .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
      padding: 1em;
      border-radius: 5px;
      
    }
  }
}
</style>
