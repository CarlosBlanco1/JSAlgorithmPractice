
var Trie = function () {
    this.words = new Map();
    this.startLetters = new Map();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    if(!this.startLetters.has(word[0])) this.startLetters.set(word[0], new Map());

    let letterMap = this.startLetters.get(word[0]);

    for (let i = 1; i < word.length; i++) {

        if(!letterMap.has(word[i])) letterMap.set(word[i], new Map());

        letterMap = letterMap.get(word[i])
    }

    letterMap.set('.', true);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    if(!this.startLetters.has(word[0])) return false;

    let chars = this.startLetters.get(word[0]);

    for(let i = 1; i < word.length; i++)
    {
        if(!chars.has(word[i])) return false;

        chars = chars.get(word[i]);
    }

    return chars.has('.');
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    if(!this.startLetters.has(prefix[0])) return false;

    let chars = this.startLetters.get(prefix[0]);

    for (let i = 1; i < prefix.length; i++) {
        if (!chars || !chars.has(prefix[i])) {
            return false;
        }
        chars = chars.get(prefix[i])
    }

    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */