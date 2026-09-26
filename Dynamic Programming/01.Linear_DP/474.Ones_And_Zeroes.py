```python
class Solution:
    def findMaxForm(self, strs: list[str], m: int, n: int) -> int:
        size = len(strs)
        dp = {}

        def solve(idx, m_count, n_count):
            if m_count < 0 or n_count < 0:
                return 0

            if idx == size:
                return 0

            if (idx, m_count, n_count) in dp:
                return dp[(idx, m_count, n_count)]

            one_count = strs[idx].count("1")
            zero_count = strs[idx].count("0")

            include = (
                1 + solve(
                    idx + 1,
                    m_count - zero_count,
                    n_count - one_count
                )
                if m_count - zero_count >= 0
                and n_count - one_count >= 0
                else 0
            )

            skip = solve(
                idx + 1,
                m_count,
                n_count
            )

            res = max(include, skip)

            dp[(idx, m_count, n_count)] = res

            return res

        return solve(0, m, n)
```
