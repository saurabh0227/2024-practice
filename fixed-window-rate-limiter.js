class RateLimiter {
  constructor(maxRequests, windowTime) {
    this.maxRequests = maxRequests;
    this.windowTime = windowTime; // in milliseconds
    this.requestCounts = new Map(); // to store user request counts by user ID/IP/etc.
  }

  isAllowed(userId) {
    const currentTime = Date.now();

    // Initialize the user if not already tracked
    if (!this.requestCounts.has(userId)) {
      this.requestCounts.set(userId, { count: 1, startTime: currentTime });
      return true;
    }

    const userData = this.requestCounts.get(userId);

    // If the time window has passed, reset the count and start time
    if (currentTime - userData.startTime >= this.windowTime) {
      userData.count = 1;
      userData.startTime = currentTime;
      return true;
    }

    // If within the window, check if request count exceeds the limit
    if (userData.count < this.maxRequests) {
      userData.count++;
      return true;
    }

    // Rate limit exceeded
    return false;
  }
}

// Example usage
const limiter = new RateLimiter(5, 60000); // 5 requests per 60 seconds

function handleRequest(userId) {
  if (limiter.isAllowed(userId)) {
    console.log(`Request allowed for user: ${userId}`);
  } else {
    console.log(`Rate limit exceeded for user: ${userId}`);
  }
}

// Simulate requests
setInterval(() => handleRequest('user-123'), 10000); // User sends a request every 10 seconds
