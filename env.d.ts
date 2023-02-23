/// <reference types="vite/client" />


declare module "*.vue" {
    import { DefineComponent } from "vue";
    const compent:DefineComponent;
    export default compent
}