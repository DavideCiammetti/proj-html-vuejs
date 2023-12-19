import { createApp } from 'vue'
import '../style/style.scss'
import App from './App.vue'
// font open-sans
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(fas, far, fab)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
