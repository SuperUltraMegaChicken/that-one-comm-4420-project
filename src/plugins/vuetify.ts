import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labs from 'vuetify/labs/components';

export default createVuetify({
  directives,
  theme: {
    defaultTheme: "dark"
  },
  components: {
    ...components,
    ...labs
  },
  defaults: {
    global: {
      variant: "outlined",
    },
  }
})