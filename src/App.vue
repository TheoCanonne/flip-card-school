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
      "934-392-486",
      "670-294-178",
      "385-018-190",
      "385-174-928",
      "385-927-401",
      "185-982-280",
      "485-913-472",
      "387-285-910",
      "395-017-573",
      "283-374-572",
      "673-926-701",
      "028-591-472",
      "573-496-714",
      "305-716-824",
      "470-198-729",
      "284-183-384",
      "675-185-375",
      "567-829-376",
      "375-381-395",
      "483-184-285",
      "842-368-345"
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
    name: "Address",
    values: [
      'Oxford Street / 48',
      'Wall Street / 36',
      'Washington Street / 51',
      'Bond Street / 92',
      'Baker Street / 23',
      'New Street / 67',
      'Queen Street / 72',
      'Rose Street / 89',
      'High Street / 99',
      'Bank Street / 100',
      'King Street / 13',
      'Wood Street / 15',
      'Fox Street / 37',
      'Bell Street / 94',
      'Bridge Street / 90',
      'Park Street / 80',
      'Main Street / 30'
    ] ,
    color: "#DE0093",
    isImage: false,
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
