import { createElement } from 'react';
import type { Preview } from '@storybook/nextjs-vite';

import { Providers } from '../src/app/providers';

const preview: Preview = {
  decorators: [
    (Story) => createElement(Providers, null, createElement(Story)),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
