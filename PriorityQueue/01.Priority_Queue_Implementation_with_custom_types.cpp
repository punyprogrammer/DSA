#include <iostream>
#include <queue>
#include <vector>

struct Task {
    int id;
    int priority;
};

// Custom comparator (min-heap: lower priority value comes first)
struct CompareTask {
    bool operator()(const Task& a, const Task& b) {
        return a.priority < b.priority; // max-heap: higher priority first
    }
};

int main() {
    std::priority_queue<Task, std::vector<Task>, CompareTask> pq;

    pq.push({1, 10});
    pq.push({2, 5});
    pq.push({3, 15});

    while (!pq.empty()) {
        Task t = pq.top(); pq.pop();
        std::cout << "Task " << t.id << " with priority " << t.priority << "\n";
    }
}
