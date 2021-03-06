import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { registerSW } from 'virtual:pwa-register';

import './script/pages/app-home';
import './script/components/header';
import './script/components/wordealo';
import './styles/global.css';

@customElement('app-index')
export class AppIndex extends LitElement {
  static get styles() {
    return css`
      main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
      }
      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/

    registerSW({ immediate: true });
  }

  render() {
    return html`
      <div>
        <main>
          <app-home></app-home>
        </main>
      </div>
    `;
  }
}
