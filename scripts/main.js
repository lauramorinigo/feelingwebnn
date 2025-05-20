import { analyzeSentiment } from './sentiment.js';
import { inferSentimentWebNN } from './webnn.js';

const startBtn = document.getElementById('start-btn');
const transcriptEl = document.getElementById('transcript');
const sentimentEl = document.getElementById('sentiment');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

startBtn.addEventListener('click', () => {
  sentimentEl.textContent = '';
  transcriptEl.textContent = '';
  recognition.start();
});

recognition.onresult = async (event) => {
  const transcript = event.results[0][0].transcript;
  transcriptEl.textContent = `You said: "${transcript}"`;

  const sentimentScore = await analyzeSentiment(transcript);
  const nnResult = await inferSentimentWebNN(sentimentScore);

  let emoji = '😐';
  if (nnResult > 0.5) emoji = '😊';
  if (nnResult < -0.5) emoji = '😠';

  sentimentEl.textContent = `Sentiment: ${emoji} (${nnResult.toFixed(2)})`;
};

recognition.onerror = (event) => {
  sentimentEl.textContent = 'Error occurred: ' + event.error;
};

