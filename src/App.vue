<template>
  <div id="app">
    <div class="header">
      <button class="button shadowed" @click="opened = true">Administration</button>
    </div>
    <Administration :datas="cards" :opened="opened" @close="opened = false"/>
    <div class="card-container">
      <Card
       v-for="card in cards.filter(e => e.visible)"
      :key="card.name"
      :name="card.name"
      :values="card.values"
      :color="card.color"
      :isImage="card.isImage"
      :big="card.big"
      />
    </div>
    <div class="actions">
      <button class="button reset-button shadowed" @click="resetFlipped">Reset</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Emitter, EventType } from "mitt";
import { inject, ref } from "vue";
import Card from "./components/Card.vue";
import Administration from "./components/Administration.vue";
import images from "./utils/image";

console.log(images);
const eventBus: Emitter<Record<EventType, unknown>> = inject("eventBus");
const cards = ref([
  {
    name: "Name",
    values: [
      "Phoebe",
      "Mary",
      "Liza",
      "Kate",
      "Rose",
      "Laura",
      "Andrew",
      "Ben",
      "Edward",
      "Steven",
      "Allan",
      "Dan",
      "Sean",
      "Brad",
      "David",
      "Michael",
      "Bruce",
      "Linda",
      "Eileen",
      "Fiona",
      "Samantha",
      "Sue",
    ],
    color: "#F2A000",
    isImage: false,
    big: true,
    visible: true
  },
  {
    name: "Mood",
    values: images.moods,
    color: "#D00000",
    isImage: true,
    big: false,
    visible: true
  },
  {
    name: "Age",
    values: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    color: "#00BA34",
    isImage: false,
    big: true,
    visible: true
  },
  {
    name: "Phone Number",
    values: [
      "731-8562",
      "06 31 38 79 46",
      "859-251673",
      "5794-2631",
      "925-483417",
      "07 19 27 65 34",
      "690-8524",
      "41-7329168",
      "2037-1958",
      "579-268157",
    ],
    color: "#00B998",
    isImage: false,
    big: true,
    visible: true
  },
  {
    name: "Email Address",
    values: [
      "Phoebe.Cross18<br>@hotmail.ie",
      "Michael.Jones13<br>@hotmail.com",
      "Mary.book15<br>@gmail.com",
      "Fabien.english20<br>@laposte.net",
      "Peter.Scott17<br>@hotmail.ie",
      "Kate.King19<br>@hotmail.au",
      "Liza.Hudson18<br>@gmail.com",
      "Andrew.Cook14<br>@hotmail.net",
      "Rose.Smith16<br>@hotmail.au",
    ],
    color: "#0097D8",
    isImage: false,
    big: false,
    visible: true
  },
  {
    name: "Country Nationality",
    values: images.countries,
    color: "#9600DC",
    isImage: true,
    big: false,
    visible: true
  },
  {
    name: "House",
    values: images.houses,
    color: "#DE0093",
    isImage: true,
    big: false,
    visible: true
  },
]);
const opened = ref(false);

function resetFlipped() {
  eventBus.emit("resetCard");
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Roboto;
}

button {
  cursor: pointer;
}

.shadowed {
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
}
</style>

<style lang="scss">
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
}

.actions {
  display: grid;
  place-items: center;
  margin-top: 2rem;
}
.button {
  background-color: #0569c8;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  color: white;
  padding: 10px;
}

.reset-button {
  text-transform: uppercase;
  margin: auto;
  font-size: 2.5em;
  width: 300px;
  height: 100px;
}

.header {
  display:flex;
  padding: 1rem;
  justify-content: flex-end;
}
</style>
