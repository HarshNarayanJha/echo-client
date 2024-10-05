declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
