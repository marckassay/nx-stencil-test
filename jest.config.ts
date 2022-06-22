import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  moduleNameMapper: {
    '@nx-stencil/hello-tsc': '<rootDir>/../../dist/packages/hello-tsc/src/index.js',
  }
};
