class Twitter {
  constructor() {
    this.tweetsMap = new Map();       // userId → [{tweetId, tweetTime}]
    this.followingMap = new Map();    // userId → Set(followeeIds)
    this.tweetTimer = 0;              // Global tweet counter
  }

  postTweet(userId, tweetId) {
    const tweetTime = this.tweetTimer++;
    const userTweets = this.tweetsMap.get(userId) || [];
    userTweets.push({ tweetId, tweetTime });
    this.tweetsMap.set(userId, userTweets);
  }

  getNewsFeed(userId) {
    const followees = this.followingMap.get(userId) || new Set();
    const allTweets = [];
    
    // Add tweets from all followees (including self)
    for (const followeeId of [...followees, userId]) {
      if (this.tweetsMap.has(followeeId)) {
        allTweets.push(...this.tweetsMap.get(followeeId));
      }
    }
    
    // Sort by time (newest first) and return top 10 tweet IDs
    return allTweets
      .sort((a, b) => b.tweetTime - a.tweetTime)
      .slice(0, 10)
      .map(tweet => tweet.tweetId);
  }

  follow(followerId, followeeId) {
    // Prevent self-follow
    if (followerId === followeeId) return;
    
    const following = this.followingMap.get(followerId) || new Set();
    following.add(followeeId);
    this.followingMap.set(followerId, following);
  }

  unfollow(followerId, followeeId) {
    if (!this.followingMap.has(followerId)) return;
    
    const following = this.followingMap.get(followerId);
    following.delete(followeeId);
    
    // Clean up empty follow sets
    if (following.size === 0) {
      this.followingMap.delete(followerId);
    }
  }
}
