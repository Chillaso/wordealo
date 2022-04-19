import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-home')
export class AppHome extends LitElement {


  static get styles() {
    return css`
    `
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    console.log('Wordealo!');
  }


  render() {
    return html`
      <app-header></app-header>
      <app-wordealo></app-wordealo>
      `
  }
}
