export async function analyzeSentiment(text) {
  // Mock sentiment analysis function
  const positiveWords = ['good', 'great', 'happy', 'love', 'excellent'];
  const negativeWords = ['bad', 'sad', 'hate', 'terrible', 'angry'];

  let score = 0;
  text.toLowerCase().split(' ').forEach(word => {
    if (positiveWords.includes(word)) score++;
    if (negativeWords.includes(word)) score--;
  });
  return score / 5; // Normalize score
}
