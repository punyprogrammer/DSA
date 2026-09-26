class Solution:
    def minSteps(self, n: int) -> int:
        dp={}
        def solve(length,char_copied):
            if length > n:
                return float("inf")
            if length == n:
                return 0 
            if (length,char_copied) in dp:
                return dp[(length,char_copied)]
            copy = 2 + solve(2*length,length)
            paste = 1 + solve(length+char_copied,char_copied)
            res = min(copy,paste)
            dp[(length,char_copied)] = res
            return res
        return 1+solve(1,1) if n > 1 else 0
            
