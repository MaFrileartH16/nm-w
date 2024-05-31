import './bootstrap'
import '../css/app.css'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/dates/styles.css'

import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
  setup({el, App, props}) {
    const root = createRoot(el);
    
    root.render(
      <MantineProvider theme={{
        colors: {
          red: [
            '#170000',
            '#460000',
            '#740000',
            '#a20000',
            '#d10000',
            '#ff0000',
            '#ff2e2e',
            '#ff5d5d',
            '#ff8b8b',
            '#ffb9b9',
            '#ffe8e8',
          ],
        }
      }}>
        <Notifications position="top-center" />
        
        <App {...props} />
      </MantineProvider>
    );
  },
  progress: {
    color: '#4B5563',
  },
});
