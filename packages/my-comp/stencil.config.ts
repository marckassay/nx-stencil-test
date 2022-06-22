import { Config } from '@stencil/core';
import jestConfig from '../../jest.config';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'my-comp',
  taskQueue: 'async',
  plugins: [sass()],
  testing: {
    ...jestConfig,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
