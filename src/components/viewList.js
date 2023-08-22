import { LitElement, html, css } from 'lit-element';
import './getData';

export class ViewList extends LitElement {
  static styles = css`
        *{
            margin: 0px;
            padding: 0px;
        }
        .info{
        width: 110px;
        display: flex;
        justify-content: space-between;
        }
        .container{
            width: 80%;
            height: 110px;
            border-bottom: 2px solid;
            margin: 20px auto;
        }
        accionista-detalle{
          width: 80%;
          height: 110px;
          border-bottom: 2px solid;
          margin: 20px auto;
        }

        .container button {
        width: 100%;
        height: 100px;
        text-align: left;
        border: none;
        background: transparent;
        padding: 10px;
        cursor: pointer;
        line-height: 22px;
        }`
  static get properties() {
    return {
      users: { type: Array }
    }
  }

  constructor() {
    super();
    this.users = [];
    this.showView = false;
    this.addEventListener('userDate', (e) => {
      this.users = e.detail.data;
    })
  }

  render() {
    return html`
        <get-data></get-data>
        ${this.dataTemplate}
        `
  }


  get dataTemplate() {
    let isEmpresa = false;
    for (let obj of this.users) {
      const porcentaje = parseFloat(obj.Porcentaje.replace('%', ''));
      if (obj.hasOwnProperty('CantidadAccionitas') && porcentaje > 5) {
        isEmpresa = true;
      }
    }
    return html`
        ${this.users.map(user => html`
        <div class ="container">
        <button @click="${() => this._showDetail(user)}">
            <h3>${user.Nombre}</h3>
             <div class ="info">
                 <p>${user.TipoDocumento}</p>
                 <p>${user.Documento}</p>
            </div>
                 <p>Participacion: ${user.Porcentaje}</p>
                 <p>Cantidad Accionitas: ${isEmpresa ? user.CantidadAccionitas : '0'}</p>
                 </button>
        </div>
        `)}`
  }


  _showDetail(user) {
    this.dispatchEvent(new CustomEvent('detail', {
      detail: { user },
      bubbles: true, composed: true
    }));
  }
}

customElements.define("view-list-component", ViewList);