/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {

    let binarySums = new Map([
        ["000", "00"],
        ["001", "10"],
        ["010", "10"],
        ["100", "10"],
        ["011", "01"],
        ["110", "01"],
        ["101", "01"],
        ["111", "11"],
        ["1--", "1-"],
        ["0--", "0-"]
    ]);

    let aBin = a.toString(2);
    let bBin = b.toString(2);

    if (aBin.length < bBin.length) {
        while (aBin.length < bBin.length) {
            aBin = `0${aBin}`;
        }
    }
    else if (bBin.length < aBin.length) {
        while (bBin.length < aBin.length) {
            bBin = `0${bBin}`;
        }
    }

    let answerBin = "";
    let result = "";
    let agg = "0";

    if (((a < 0) && (b < 0)) || ((a >= 0) && (b >= 0))) {
        bBin = bBin.split("");
        aBin = aBin.split("");

        while (aBin.length > 0) {
            let toLook = `${agg}${bBin.pop()}${aBin.pop()}`
            result = binarySums.get(toLook);
            answerBin = `${result[0]}${answerBin}`;
            agg = result[1];
        }

        if (agg == 1) answerBin = `1${answerBin}`;
        if (agg == '-') answerBin = `-${answerBin}`;
    }
    else {
        if (a > b) [aBin, bBin] = [bBin, aBin];
        if (bBin == 0) return parseInt(aBin, 2);

        aBin = aBin.split("");

        let aBinComp = "";
        let bit = ""

        while (aBin.length > 0) {
            bit = aBin.pop() == "1" ? "0" : "1";
            aBinComp = `${bit}${aBinComp}`
        }

        aBinComp = getSum(parseInt(aBinComp, 2) ,1)
        aBinComp = aBinComp.toString(2);

        bBin = bBin.split("");
        aBinComp = aBinComp.split("");

        while (aBinComp.length > 0) {
            let toLook = `${agg}${bBin.pop()}${aBinComp.pop()}`
            result = binarySums.get(toLook);
            answerBin = `${result[0]}${answerBin}`;
            agg = result[1];
        }

        if (agg == 1) answerBin = `1${answerBin}`;

        answerBin = answerBin.slice(1);

        if (answerBin[0] == "1") {
            answerBin = answerBin.split("")
            let realAnswerBin = "";

            while (answerBin.length > 0) {
                bit = answerBin.pop() == "1" ? "0" : "1";
                realAnswerBin = `${bit}${realAnswerBin}`
            }

            realAnswerBin = getSum(parseInt(realAnswerBin, 2) ,1)

            return parseInt(`-${realAnswerBin}`)
        }
    }

    return parseInt(answerBin, 2)
};