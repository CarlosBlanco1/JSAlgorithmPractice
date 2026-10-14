/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfitFinal = 0;

    let backtracking = function (lastAction, currProf, currDay, isHoldingShare) {

        if (currDay >= prices.length) {
            maxProfitFinal = Math.max(currProf, maxProfitFinal);
            return;
        }

        switch (lastAction) {
            case "hold":
                if (isHoldingShare) {
                    backtracking("sell", currProf + prices[currDay], currDay + 1, false);
                }
                else {
                    backtracking("buy", currProf - prices[currDay], currDay + 1, true);
                }
                break;
            case "buy":
                backtracking("hold", currProf, currDay + 1, isHoldingShare);
                backtracking("sell", currProf + prices[currDay], currDay + 1, false);
                break;
            case "sell":
                backtracking("cooldown", currProf, currDay + 1, isHoldingShare);
                break;
            case "cooldown":
                backtracking("hold", currProf, currDay + 1, isHoldingShare);
                backtracking("buy", currProf - prices[currDay], currDay + 1, true);
        }
    }

    backtracking("hold", 0, 0, false);

    return maxProfitFinal;
};