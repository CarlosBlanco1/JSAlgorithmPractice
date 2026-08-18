
var MedianFinder = function() {
    this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.nums.length == 0)
    {
        this.nums.push(num);
        return;
    }

    if(this.nums.length == 1)
    {
        var onlyNum = this.nums[0];
        if(onlyNum > num)
        {
            this.nums.splice(0,0,num);
        }
        else
        {
            this.nums.push(num);
        }
        return;
    }

    var p1 = 0;
    var p2 = this.nums.length - 1;
    var mid = 0;

    while(p1 <= p2)
    {
        mid = Math.floor((p1 + p2)/2);

        if(num == this.nums[mid])
        {
            break;
        }

        if(num < this.nums[mid])
        {
            p2 = mid - 1;
        }
        else
        {
            p1 = mid + 1;
        }
    }

    if(num < this.nums[mid])
    {
        this.nums.splice(mid,0,num);
    }
    else
    {
        this.nums.splice(mid + 1,0,num);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.nums.length % 2 == 0)
    {
        var med2 = this.nums.length / 2;
        var med1 = med2 - 1;

        return ( (this.nums[med2] + this.nums[med1]) / 2 ); 
    }
    else
    {
        return this.nums[Math.floor(this.nums.length / 2)];
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */