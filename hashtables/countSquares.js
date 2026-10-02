
var DetectSquares = function () {
    this.pointToFreq = new Map();
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {

    let key = JSON.stringify(point);

    this.pointToFreq.set(key, (this.pointToFreq.get(key) ?? 0) + 1);
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {

    let possibleSquares = 0;

    let pointKey = JSON.stringify(point);

    for (const [key, freq] of this.pointToFreq) {
        if (pointKey === key) continue;

        let currPoint = JSON.parse(key);

        if (point[0] === currPoint[0]) {
            let [upper, lower] = currPoint[1] > point[1] ? [currPoint, point] : [point, currPoint];
            let edgeDist = upper[1] - lower[1];

            let leftTop = [upper[0] - edgeDist, upper[1]];
            let leftBottom = [lower[0] - edgeDist, lower[1]];

            let leftTopKey = JSON.stringify(leftTop);
            let leftBottomKey = JSON.stringify(leftBottom);

            if (this.pointToFreq.has(leftTopKey) && this.pointToFreq.has(leftBottomKey)) {
                possibleSquares += (freq * this.pointToFreq.get(leftTopKey) * this.pointToFreq.get(leftBottomKey));
            }

            let rightTop = [upper[0] + edgeDist, upper[1]];
            let rightBottom = [lower[0] + edgeDist, lower[1]];

            let rightTopKey = JSON.stringify(rightTop);
            let rightBottomKey = JSON.stringify(rightBottom);

            if (this.pointToFreq.has(rightTopKey) && this.pointToFreq.has(rightBottomKey)) {
                possibleSquares += (freq * this.pointToFreq.get(rightTopKey) * this.pointToFreq.get(rightBottomKey));
            }
        }
    }

    return possibleSquares;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */