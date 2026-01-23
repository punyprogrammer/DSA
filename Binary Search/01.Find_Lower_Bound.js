class Solution {
    lowerBound(arr, target) {
        // code here
        // lower bound is the smallest i such that arr[i]>=target
        const n = arr.length;
        let [l,r] = [0,n-1];
        let res = n;
        while(l<=r){
            const mid = Math.floor(l+(r-l)/2);
            if(arr[mid]< target) l = mid+1;
            else {
                res = mid;
                r = mid-1;
            }
        }
        return res;
    }
}
