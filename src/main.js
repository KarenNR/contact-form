import { createApp } from 'vue'
import App from './App.vue'

import {createVuetify} from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const lightTheme = {
    dark: false,
    colors: {
        primary: "hsl(169, 82%, 27%)",
        secondary: "hsl(186, 15%, 59%)",
        dark: "hsl(187, 24%, 22%)",
        background: "hsl(148, 38%, 91%)",
        error: "hsl(0, 66%, 54%)",
        info: "#2980b9",
        success: "#27ae60",
        warning: "#f1c40f"
    },
};

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "light",
        themes: {
            light: lightTheme
        },
    },
});

createApp(App).use(vuetify).mount('#app')
