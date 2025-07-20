int lowerBound(vector<int> arr, int n, int x) {
	// Write your code here
    // lower bound is the smallest index i such that arr[i] >= num
    int lower_bound = n ;
    int l = 0,r=n-1;
    while(l<=r){
        int mid = (l+ (r-l)/2);
        // probable answer go left 
        if(arr[mid]>=x){
            lower_bound = mid;
            r = mid - 1;
        }
        else {
            l = mid+1;
        }
    }
    return lower_bound;
}
