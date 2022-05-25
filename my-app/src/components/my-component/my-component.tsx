import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import "@my-comps/my-comp"

@Component({
  tag: 'my-component-main',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>
      <my-component-main first="Stencil" last="'Don't call me a framework' JS"></my-component-main>
      <div>Hello, World! I'm {this.getText()}</div>
    </div>;
  }
}
