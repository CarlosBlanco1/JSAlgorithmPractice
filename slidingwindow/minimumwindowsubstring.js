/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

    if (t.length > s.length) return "";
    if (s.length == 1) return s[0] === t[0] ? s[0] : "";

    let tMap = new Map();
    let windowMap = new Map();

    for (let i = 0; i < t.length; i++) {
        tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
        windowMap.set(t[i], (windowMap.get(t[i]) ?? 0));
    }

    let possibleSub = "";
    let possibleLength = Infinity;

    let runningLength = 0;
    let L = 0;
    let R = 1;

    if (tMap.has(s[L])) { windowMap.set(s[L], windowMap.get(s[L]) + 1); runningLength += 1 };
    if (runningLength == t.length) return s[L];

    let endHit = false;

    while (L <= R) {
        if (tMap.has(s[R]) && !endHit) {
            if (R == s.length - 1) endHit = true;
            windowMap.set(s[R], windowMap.get(s[R]) + 1);

            if (windowMap.get(s[R]) <= tMap.get(s[R])) runningLength += 1;
        }

        if (runningLength == t.length) {

            while ((runningLength == t.length) && (L <= R)) {
                if ((R - L) + 1 < possibleLength) {
                    possibleLength = (R - L) + 1;
                    possibleSub = s.slice(L, R + 1);
                }

                if (windowMap.has(s[L])) {

                    windowMap.set(s[L], windowMap.get(s[L]) - 1);
                    if (windowMap.get(s[L]) < tMap.get(s[L])) runningLength -= 1;
                    L++;
                }
                else {
                    L++;
                }
            }
        }

        if (R < s.length) {
            R++;
        }
        else {
            if (windowMap.has(s[L])) windowMap.set(s[L], windowMap.get(s[L]) - 1);
            if (windowMap.get(s[L]) < tMap.get(s[L])) runningLength -= 1;
            L++;
        }
    }

    return possibleSub;
};