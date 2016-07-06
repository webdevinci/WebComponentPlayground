//modules not yet supported in browsers
// import createSymbol from '../helpers/createSymbol';
const _radioValue = Symbol('radioValue');
const _labelText = Symbol('labelText');

class StyledRadio extends HTMLElement {
    // Fires when an instance of the element is created.
    createdCallback() {
        this.createShadowRoot().innerHTML = this.template;

        //Grab the elements from the shadow root
        this.$label = this.shadowRoot.querySelector('label');
        this.$radioInput = this.shadowRoot.querySelector('input[type="radio"]');

        //Set radio value and label's text
        this.value = this.getAttribute('data-value');
        this.labelText = this.getAttribute('data-label-text');
    }

    // Fires when an instance was inserted into the document.
    attachedCallback () {};
    // Fires when an attribute was added, removed, or updated.
    attributeChangedCallback (attrName, oldVal, newVal) {};

    get labelText () {
        return this[_labelText];
    }
    set labelText (text) {
        this[_labelText] = text;
        this.$label.append(text);
    }

    get value () {
        return this[_radioValue];
    }
    set value (val) {
        this[_radioValue] = val;
        this.$radioInput.value = val;
    }

    get template () {
        return `
            <style>
                input[type="radio"] { 
                    display: none; 
                
                }
                input[type="radio"] + .styled_radio_label:after {
                    border: 1px solid #72777C;
                    border-radius: 15px;
                    cursor: pointer;
                    color: #3379C2;
                    content: '';
                    display: inline-block;
                    height: 13px;
                    margin-right: .4ex;
                    position: relative;
                    top: .15em;
                    width: 13px;
                }
                input[type="radio"]:checked + .styled_radio_label:after,
                input[type="radio"].checked + .styled_radio_label:after,
                input[type="radio"].radio_on + .styled_radio_label:after {
                    border: 5px solid #3379C2;
                    height: 5px;
                    width: 5px;
                }
                
            </style>
        
            <label>
                <input type="radio">
                <span class="styled_radio_label"></span>
            </label>
            `;
    }
}

document.registerElement('styled-radio', StyledRadio);
//export default StyledRadio;
