import { LitElement } from 'lit-element';

export class getData extends LitElement {
    
    firstUpdated(){
        this.getData();
    }

    _sendData(data){
        this.dispatchEvent(new CustomEvent('userDate', {
            detail: {data}, bubbles: true, composed: true
        }));
    }

    async getData() {
        try {
          const response = await fetch('http://localhost:30021/accionistas');
          const data = await response.json();
          this._sendData(data);
        } catch (error) {
          console.error('Fetch error: ' + error.message);
        }
      }
}

customElements.define("get-data", getData);