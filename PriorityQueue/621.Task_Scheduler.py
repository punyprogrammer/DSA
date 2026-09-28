from collections import Counter, deque
import heapq

class Solution:
    def leastInterval(self, tasks: list[str], n: int) -> int:

        # Frequency of each task
        counter = Counter(tasks)

        # Max heap using negative frequencies
        heap = [-freq for freq in counter.values()]
        heapq.heapify(heap)

        # (available_time, remaining_frequency)
        cooldown = deque()

        time = 0

        while heap or cooldown:

            # Move tasks whose cooldown has expired
            while cooldown and cooldown[0][0] <= time:
                available_time, freq = cooldown.popleft()
                heapq.heappush(heap, freq)

            if heap:
                # Pick task with highest remaining frequency
                freq = heapq.heappop(heap)

                # Execute it
                freq += 1  # negative frequency becomes less negative

                # Still has executions remaining
                if freq < 0:
                    cooldown.append((time + n + 1, freq))

            # CPU moves to next time slot
            time += 1

        return time
