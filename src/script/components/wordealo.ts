import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-wordealo')
export class AppWordealo extends LitElement {

  @property({type: Number, reflect: true})
  myVar = 0;

  constructor() {
    super();
  }

  static get styles() {
    return css`
    `;
  }

  render() {
    return html`
      <p> Hello, friend.</p>
    `;
  }
}
