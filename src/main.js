import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import mitt from "mitt";

const eventBus = mitt();

const app = createApp(App);
app.provide('eventBus', eventBus);
app.mount("#app");
app.use(createPinia());
