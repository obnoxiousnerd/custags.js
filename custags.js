class button extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const button = document.createElement('button');
        button.style.cssText = 'display:block';
        button.textContent = super.textContent;
        shadow.appendChild(button);
    }
}
class inputText extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const input = document.createElement('input');
        input.type = 'text';
        input.style.cssText = 'display:block';
        button.textContent = super.textContent;
        shadow.appendChild(input);
    }
}
class inputCheckbox extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.textContent = super.textContent;
        shadow.appendChild(input);
    }
}
class inputColor extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const input = document.createElement('input');
        input.type = 'color';
        input.textContent = super.textContent;
        shadow.appendChild(input);
    }
}
class inputEmail extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const input = document.createElement('input');
        input.type = 'email';
        input.textContent = super.textContent;
        shadow.appendChild(input);
    }
}
class div extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const div = document.createElement('div');
        div.textContent = super.textContent;
        shadow.appendChild(div);
    }
}
class textarea extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const textarea = document.createElement('textarea');
        textarea.textContent = super.textContent;
        shadow.appendChild(textarea);
    }
}
class h1 extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const h1 = document.createElement('h1');
        h1.textContent = super.textContent;
        shadow.appendChild(h1);
    }
}
class code extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const code = document.createElement('code');
        code.textContent = super.textContent;
        shadow.appendChild(code);
    }
}
class h2 extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const h2 = document.createElement('h2');
        h2.textContent = super.textContent;
        shadow.appendChild(h2);
    }
}
class h3 extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const h3 = document.createElement('h3');
        h3.textContent = super.textContent;
        shadow.appendChild(h3);
    }
}
class h4 extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const h4 = document.createElement('h4');
        h4.textContent = super.textContent;
        shadow.appendChild(h4);
    }
}
class h5 extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const h5 = document.createElement('h5');
        h5.textContent = super.textContent;
        shadow.appendChild(h5);
    }
}
class h6 extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({
            mode: 'open'
          });
        const h6 = document.createElement('h6');
        h6.textContent = super.textContent;
        shadow.appendChild(h6);
    }
}
function Ω(selector){
    var self = {};
    self.selector = selector;
    self.element = document.querySelector(self.selector);
    
    self.load = function(fn){
        window.onload = fn;
        return fn;
    }

    self.register = function(className){
        customElements.define(selector, className);
    }
    self.css = function(style){
        const el = document.querySelector(selector);
        el.style.cssText = style;
    }
    self.value = () => {
        const el = document.querySelector(selector).textContent;
        console.log(el);
        return el;
    }
    return self;
}
