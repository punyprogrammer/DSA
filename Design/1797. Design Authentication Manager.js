class AuthenticationManager {
  constructor(timeToLive) {
    this.tokenExpiry = timeToLive;
    this.expiryMap = new Map();
  }
  generate(tokenId, currentTime) {
    this.expiryMap.set(tokenId, currentTime + this.tokenExpiry);
  }
  renew(tokenId, currentTime) {
    if (!this.expiryMap.has(tokenId)) return;
    const tokenExpiryTime = this.expiryMap.get(tokenId);
    if (tokenExpiryTime <= currentTime) return;
    this.expiryMap.set(tokenId, currentTime + this.tokenExpiry);
  }
  countUnexpiredTokens(currentTime) {
    let result = 0;
    for (let value of this.expiryMap.values()) {
       result +=(value > currentTime);
    }
    return result;
  }
}
