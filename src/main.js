import { createApp, watch } from 'vue';
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import axios from 'axios';
import App from './App.vue';
import VueAwesomePaginate from "vue-awesome-paginate";
import VueSelect from "vue-select";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "vue-awesome-paginate/dist/style.css";
import router from './router';
import components from './components/global-components';

const pinia = createPinia();
const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component)
});
app.component("v-select", VueSelect);

app.use(router);
pinia.use(piniaPluginPersistedState);
app.use(pinia);
app.use(VueAwesomePaginate);
app.config.globalProperties.axios = axios;
app.mount('#app');