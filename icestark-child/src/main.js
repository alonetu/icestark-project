import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import setLibraryName from '@ice/stark-app/lib/setLibraryName';

// // 注意：`setLibraryName` 的入参需要与 webpack 工程配置的 output.library 保持一致
// setLibraryName('icestark-child');

// export function mount(props) {
//   console.log('mount', props)
//   createApp(App).use(store).use(router).mount("#app");
// }

// export function unmount() {
//   vue && vue.$destroy();
// }

let vue = null;

// 注意：`setLibraryName` 的入参需要与 webpack 工程配置的 output.library 保持一致
setLibraryName('icestark-child')

export function mount({ container }) {
  vue = createApp(App);
  vue.use(store);
  vue.use(router);
  vue.mount(container);
}

export function unmount() {
  vue.unmount();
}

if (!isInIcestark()) {
  createApp(App).use(store).use(router).mount("#app");
}