import { helloJs } from './hello-js';
import { helloTsc } from '@nx-stencil/hello-tsc';

describe('helloJs', () => {
  it('should work', () => {
    expect(helloTsc()).toEqual('hello-tsc');
    expect(helloJs()).toEqual('hello-js');
  });
});
