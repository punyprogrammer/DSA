int upperBound(vector<int> &arr, int x, int n){
	// upper bound is the smaller index such that arr[i] > x
	int upper_bound = n;
	int l=0,r=n-1;
	while(l<=r){
		int mid = (l+(r-l)/2);
		// probable answer reduce right
		if(arr[mid] > x){
			upper_bound = mid ;
			r = mid - 1;
		}
		else {
			l = mid+1;
		}
	}
	return upper_bound;
}
