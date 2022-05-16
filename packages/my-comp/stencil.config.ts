import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'my-comp',
  taskQueue: 'async',
  plugins: [sass()],
  testing: {
    moduleNameMapper: {
      '@nx-stencil/hello-tsc': '<rootDir>/../../dist/packages/hello-tsc/src/index.js',
    }
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


