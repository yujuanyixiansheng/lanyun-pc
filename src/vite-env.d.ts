/// <reference types="vite/client" />  声明.vue文件后缀,会识别编译
//以下是自己按照视频加的内容
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
