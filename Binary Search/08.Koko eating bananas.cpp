class Solution {
public:
    int isValidAns(vector<int> & piles,int h,int x){
        long long timeTaken = 0;
        for(int i : piles){
            // get ceil value
            timeTaken +=  (i + x - 1) / x; 

        }
        return timeTaken <= h;
    }
    int minEatingSpeed(vector<int>& piles, int h) {
        int l = 1;
        int r = *max_element(piles.begin(),piles.end());
        int ans = -1;
        while(l<=r){
            int mid = l+(r-l)/2;
            if(isValidAns(piles,h,mid)){
                ans = mid;
                r = mid-1;
            }
            else {
                l = mid+1;
            }
        }
        return ans;
    }
};
