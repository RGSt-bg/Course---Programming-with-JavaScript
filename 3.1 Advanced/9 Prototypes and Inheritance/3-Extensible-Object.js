function extensibleObject() {

    return {
        extend: function (template) {
          for (const property in template) {
            if (template.hasOwnProperty(property)) {
              if (typeof template[property] === 'function') {
                // Ако свойството на шаблона е функция, добавете го към прототипа
                this.__proto__[property] = template[property];
              } else {
                // В противен случай, копирайте свойството в текущия обект
                this[property] = template[property];
              }
            }
          }
        },
    };
}

const myObj = extensibleObject();
console.log("------------------------------------------");
const template = { 
    extensionMethod: function () {}, 
    extensionProperty: 'someString' 
    } 
myObj.extend(template);  