/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {

    class MonotonicStack {
        constructor() {
            this.mono = [];
        }

        peek() {
            return this.mono[this.mono.length - 1]
        }

        pop() {
            return this.mono.pop();
        }

        push(record) {
            
            while(this.mono.length > 0 && this.peek().temp <= record.temp)
            {
                this.mono.pop();
            }

            this.mono.push(record);
        }

        size() {
            return this.mono.length;
        }
    }

    let answer = new Array(temperatures.length).fill(0);

    let monoStack = new MonotonicStack();

    monoStack.push({ temp: temperatures[temperatures.length - 1], day: temperatures.length - 1 })

    for (let i = answer.length - 2; i >= 0; i--) {
        let todayRecord = { temp: temperatures[i], day: i };

        while(monoStack.size() > 0 && monoStack.peek().temp <= todayRecord.temp)
        {
            monoStack.pop()
        }

        if(monoStack.size() > 0) answer[i] = monoStack.peek().day - todayRecord.day;

        monoStack.push(todayRecord)
    }

    return answer;
};