/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {

    class Queue {
        constructor() {
            this.queue = [];
        }

        enqueue(val) {
            this.queue.push(val);
        }

        dequeue() {
            let val = this.queue[0];
            this.queue = this.queue.slice(1, this.queue.length);
            return val;
        }

        size() {
            return this.queue.length;
        }
    }

    let flightsFromSrc = new Queue();

    let cityToFlights = new Map();

    let exploredFrom = new Array(n)

    for (let i = 0; i < n; i++) {
        cityToFlights.set(i, []);
        exploredFrom[i] = new Map();
    }

    for (let i = 0; i < flights.length; i++) {
        let flight = flights[i];
        let from = flight[0];
        let to = flight[1];
        let price = flight[2];

        if (from === src) {
            flightsFromSrc.enqueue([to, price]);
            exploredFrom[from].set(to, [price, 0]);
        }

        cityToFlights.get(from).push([to, price]);
    }

    let cheapestPrice = Infinity;

    while (flightsFromSrc.size() > 0) {
        let stops = 0;

        let curr = flightsFromSrc.dequeue();

        let dest = curr[0];
        let price = curr[1];

        let flightsFromDest = cityToFlights.get(dest);

        if (dest === dst && stops <= k) {
            cheapestPrice = Math.min(cheapestPrice, price);
            continue;
        }

        let q = new Queue();

        for (let i = 0; i < flightsFromDest.length; i++) {

            let newDest = flightsFromDest[i][0];
            let newPrice = flightsFromDest[i][1];

            if (newDest !== src && (!exploredFrom[dest].has(newDest) ||
                exploredFrom[dest].get(newDest)[0] > (newPrice + price) ||
                exploredFrom[dest].get(newDest)[1] > stops
            )) {
                q.enqueue([newDest, newPrice + price]);
                exploredFrom[dest].set(newDest, [newPrice + price, stops]);
            }
        }

        while (q.size() > 0) {
            let levelSize = q.size();
            stops++;

            if(stops > k) break;

            while (levelSize > 0) {
                levelSize--;
                curr = q.dequeue();

                dest = curr[0];
                price = curr[1];

                if (dest === dst && stops <= k) {
                    cheapestPrice = Math.min(cheapestPrice, price);
                    continue;
                }

                flightsFromDest = cityToFlights.get(dest);

                for (let i = 0; i < flightsFromDest.length; i++) {
                    let newDest = flightsFromDest[i][0];
                    let newPrice = flightsFromDest[i][1];

                    if (newDest !== src && (!exploredFrom[dest].has(newDest) ||
                        exploredFrom[dest].get(newDest)[0] > (newPrice + price) ||
                        exploredFrom[dest].get(newDest)[1] > stops
                    )) {
                        q.enqueue([newDest, newPrice + price]);
                        exploredFrom[dest].set(newDest, [newPrice + price, stops]);
                    }
                }
            }
        }

    }

    return cheapestPrice === Infinity ? -1 : cheapestPrice;
};