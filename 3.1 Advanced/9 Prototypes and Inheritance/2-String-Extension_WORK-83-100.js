(function stringExtension() {

    String.prototype.ensureStart = function(str) {
        return (this.startsWith(str) ? this.toString() : str.concat(this));
    };

    String.prototype.ensureEnd = function(str) {
        return (this.endsWith(str) ? this.toString() : this.concat(str));
    };

    String.prototype.isEmpty = function() {
        return (this.length === 0 ? true : false);
    };

    String.prototype.truncate = function(n) {
        if (n < 4) return ".".repeat(n);
        if (this.lastIndexOf(" ") === -1) return this.substring(0, n-3).concat("...");
        if (this.length < n) return this.toString();
        // if (this.length >= n) {
        //     return this.substring(0, this.lastIndexOf(" ")).concat("...");
        // }
        let spaceLastIndex = this.lastIndexOf(" ");
        if (spaceLastIndex + 3 >= n) {
            return this.substring(0, n - 3).concat("...");
        } else {
            return this.substring(0, spaceLastIndex).concat("...");
        };
    };

    String.format = function(string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }
        return string;
    };
})();

let str = 'my string';
str = str.ensureStart('my');                                 //'my string'       // 'my' already present
str = str.ensureStart('hello ');                             //'hello my string'
str = str.truncate(16);                                      //'hello my string' // length is 15
str = str.truncate(14);                                      //'hello my...'     // length is 11
str = str.truncate(8);                                       //'hello...'
str = str.truncate(4);                                       //'h...'
str = str.truncate(2);                                       //'..'
str = String.format('The {0} {1} fox', 'quick', 'brown');    //'The quick brown fox'
str = String.format('jumps {0} {1}', 'dog');                 //'jumps dog {1}'   // no parameter at 1