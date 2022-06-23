import { LightningElement, api } from 'lwc';
 
export default class atividadelwc2 extends LightningElement {
 
    @api codigo;
    @api nome;
    @api valor;
    @api fase;
}
