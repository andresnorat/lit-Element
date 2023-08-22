import { LitElement, html, css, } from "lit-element";

class AccionistaDetalle extends LitElement {
  
  static get properties() {
    return {
      accionista: { type: { Object } },
    };
  }

  constructor() {
    super();
    this.select = "no"
  }


  static styles = css`
        *{
            margin: 0px;
            padding: 0px;
        }

        .form {
          width: 100%;
          height: 100vh;
          justify-content: center;
          display: flex;
          flex-direction: column;
          align-items: center;
      }
       
        }`

  render() {
    return html`
      <form class="form">
        <label>
          Tipo de Documento:
          <select>
            <option disabled selected>${this.accionista.TipoDocumento}</option>
            <option value="pasaporte">NIT</option>
          </select>
        </label>
        <br />
        <label>
          Nombre:
          <input type="text" .value="${this.accionista.Nombre}" readonly />
        </label>
        <br />
        <label>
          N° Identificacion:
          <input type="text" .value="${this.accionista.Documento}" readonly />
        </label>
        <br />
        <label>
          Porcentaje de participacion:
          <input type="text" .value="${this.accionista.Porcentaje}" readonly />
        </label>
        <br />
        Personas expuestas publicamente(PEP).
        <br/>
        <label>
          <input
            type="radio"
            name="opcion"
            value="si"
            .checked="${this.select === "si"}"
            @change="${this._handleRadioChange}"
          />
          Sí
        </label>
        <label>
          <input
            type="radio"
            name="opcion"
            value="no"
            .checked="${this.select === "no"}"
            @change="${this._handleRadioChange}"
          />
          No
          </label>
          <br/>
          <button @click="${this._exit}" >Salir</button>
          </form>
    `;
  }

  _handleRadioChange(e) {
    if (e.target.value === 'si') {
      this.select = 'no';
      e.target.checked = false;
    } else {
      this.select = e.target.value;
    }
  }


  _exit() {
    this.dispatchEvent(new CustomEvent('exit', {
      detail: { exit: true },
      bubbles: true, composed: true
    }));
  }

}

customElements.define("accionista-detalle", AccionistaDetalle);
