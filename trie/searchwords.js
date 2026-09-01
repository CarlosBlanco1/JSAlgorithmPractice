
var WordDictionary = function() {
    this.trie = new Map();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if(!this.trie.has(word[0])) this.trie.set(word[0], new Map());

    let chars = this.trie.get(word[0]);

    for(let i = 1; i < word.length; i++)
    {
        if(!chars.has(word[i])) chars.set(word[i], new Map());
        chars = chars.get(word[i]);
    }

    chars.set('$', new Map());
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let chars = this.trie;

    for(let i = 0; i < word.length; i++)
    {
        let char = word[i];

        if(char == '.')
        {
            for (const [char, map] of chars) {
                if(DFS(word, i+1, map)) return true;
            }
            return false
        }
        else
        {
            if(!chars.has(char)) return false;
            chars = chars.get(char);
        } 
    }

    return chars.has('$');
};

const DFS = function(word, index, path) {
    if(index >= word.length && path.has('$')) return true;
    if(!path.has(word[index]) && word[index] != '.') return false;

    if(word[index] == '.')
    {
        for (const [char, map] of path) {
            if(DFS(word, index+1, map)) return true;
        }
    }
    else
    {
        return DFS(word, index+1, path.get(word[index]))
    }

    return false
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */