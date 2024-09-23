class TokenBucket {
  constructor(maxTokens, refillRate) {
    this.maxTokens = maxTokens; // Maximum capacity of tokens
    this.refillRate = refillRate; // How often tokens are added in milliseconds
    this.tokens = maxTokens; // Start with full bucket
    this.lastRefill = Date.now(); // Track when tokens were last refilled
  }

  refillTokens() {
    const now = Date.now();
    const timeSinceLastRefill = now - this.lastRefill;

    // Calculate how many tokens to add based on the time passed
    const tokensToAdd = Math.floor(timeSinceLastRefill / this.refillRate);

    if (tokensToAdd > 0) {
      this.tokens = Math.min(this.maxTokens, this.tokens + tokensToAdd);
      this.lastRefill = now; // Reset last refill time
    }
  }

  isAllowed() {
    this.refillTokens(); // Always refill tokens before checking

    if (this.tokens > 0) {
      this.tokens--;
      return true;
    }

    return false;
  }
}

// Example usage
const bucket = new TokenBucket(10, 1000); // Max 10 tokens, 1 token added every 1000ms (1 second)

function handleRequest() {
  if (bucket.isAllowed()) {
    console.log('Request allowed.');
  } else {
    console.log('Rate limit exceeded. Please try later.');
  }
}

// Simulate requests every 500ms
setInterval(handleRequest, 500);
