function groupAnagrams(words) {

    keyToWord = {};

    words.forEach(word => {
        var sortedWord = word.split('').sort().join('');

        if(sortedWord in keyToWord)
        {
            keyToWord[sortedWord].push(word);
        }
        else
        {
            keyToWord[sortedWord] = [word];
        }
    });

    anagrams = []

    for(const[_, words] of Object.entries(keyToWord))
    {
        anagrams.push(words);
    }

    return anagrams;   
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams([""]));
// [[""]]

console.log(groupAnagrams(["a"]));
// [["a"]]

console.log(groupAnagrams(["ab","ba","abc","cba","bac"]));
// [["ab","ba"],["abc","cba","bac"]]

console.log(groupAnagrams(["abc","def","ghi"]));
// [["abc"],["def"],["ghi"]]

console.log(groupAnagrams([]));
// []

console.log(groupAnagrams(["aaa","aaa","aaa"]));
// [["aaa","aaa","aaa"]]

console.log(groupAnagrams(["listen","silent","enlist","google","goo"]));
// [["listen","silent","enlist"],["google"],["goo"]]