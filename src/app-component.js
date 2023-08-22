import { LitElement, html } from 'lit-element';
import './components/viewList';
import './components/showdetailUser';

export  class App extends LitElement {

      static get properties(){
        return {
          viewList: {type: Boolean}
        }
      }

      constructor(){
        super();
        this.accionistaUnique = {};
        this.viewList =  false;
      }

      escuchar(e){
        this.accionistaUnique = e.detail.user;
        this.viewList =  true;
      }

      render(){
        return html`
        ${this.viewList ? html `<accionista-detalle .accionista=${{Documento: `${this.accionistaUnique.Documento}`, Nombre: `${this.accionistaUnique.Nombre}`, NIT: `${this.accionistaUnique.NIT}`, Porcentaje: `${this.accionistaUnique.Porcentaje}`, TipoDocumento: `${this.accionistaUnique.TipoDocumento}`}} @exit="${this.exitToBack}" ></accionista-detalle>` : html `<view-list-component @detail="${this.escuchar}"></view-list-component>`}`
      }

      exitToBack(){
        this.viewList = false;
        this.accionistaUnique = {};
      }
    }

customElements.define("app-component", App);