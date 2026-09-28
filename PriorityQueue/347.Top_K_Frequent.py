class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        
        counter = Counter(nums)
        heap = []
        for item,freq in counter.items():
            heapq.heappush(heap,(freq,item))
            if len(heap) > k:
                heapq.heappop(heap)
        return [item for _,item in heap]
        
