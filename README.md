
# 🧠🎤 Feeling Your Feelings

**Feeling Your Feelings** is a playful browser-based experience that combines the power of your **voice** with lightweight **machine learning** — right on the edge. Built with the **Web Speech API** and **WebNN API**, this project listens to your voice, evaluates your emotional tone (mock sentiment), and uses WebNN to amplify that score in real time.

Because sometimes your feelings need to be *felt* a little louder. 💫

---
<img width="513" alt="Screenshot 2025-05-18 at 15 49 19" src="https://github.com/user-attachments/assets/f686b255-71d1-42ee-87e6-aea8b0de26e9" />

## ✨ What It Does

- 🎙️ Listens to your speech using the Web Speech API  
- 📈 Generates a mock **sentiment score**  
- 🤖 Uses WebNN to apply a simple AI computation client-side  
- 🖼️ Displays both your original and enhanced emotional scores  

---


## ⚙️ Pre-requirements

Before you start, you’ll need:

- A modern Chromium-based browser with Webnn enable to experiment (e.g., Chrome Canary or Edge)
- **Enable the WebNN API** by visiting:  
  `chrome://flags/#enable-web-machine-learning` → Enable  
  (Alternatively, use the [WebNN polyfill](https://webmachinelearning.github.io/webnn-polyfill/))
- A working **microphone**
- Internet connection (for loading polyfills, if needed)

---

## 🔧 Setup

1. **Clone or download this repo**

```bash
git clone https://github.com/lauramorinigo/feelingwebnn
cd feelingwebnn
```

2. **Open `index.html` directly in your browser**  
You can use also a local server 

```bash
open index.html
```

3. **Speak your truth**  
Click the mic button, talk for a bit, and watch how your feelings are translated and amplified ✨

---

## 🛠️ Tech Stack

| Tech              | Purpose                                      |
|-------------------|----------------------------------------------|
| **Web Speech API** | Captures voice input in the browser          |
| **WebNN API**      | Performs basic ML computation client-side    |
| **JavaScript**     | Core logic and DOM interaction               |
| **HTML/CSS**       | Basic UI structure and style (minimal, clean)|

---

## 🌐 Browser Compatibility

- ✅ **Web Speech API**: Supported in most modern browsers (Chrome, Edge, Safari)
- ⚠️ **WebNN API**: Experimental — best viewed in Chromium-based browsers with flag or polyfill enabled

---

## 💡 Why WebNN?

This project uses WebNN to demonstrate how *simple inference operations* can be executed locally on the user's device — efficiently and with privacy in mind. It’s a glimpse into the future of **client-side AI experiences**, where real-time, personal data stays on your device.

---

## 🤩 Use Case Inspiration

- Workshops and live demos on browser-native AI
- Intro to voice interfaces for beginners
- Hands-on play with emerging web APIs
- Teaching low-level ML concepts in a visual, engaging way

---

## 📚 Resources

Here are some helpful links to learn more about the tools and ideas behind this project:

- [Web Speech API - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Web Speech API - My blog about it](https://medium.com/samsung-internet-dev/web-speech-api-cool-stuff-that-you-didnt-know-that-you-can-do-with-the-web-1-41a3e8e60588)
- [WebNN Explainer on GitHub](https://github.com/webmachinelearning/webnn)
- [WebNN Polyfill Project](https://webmachinelearning.github.io/webnn-polyfill/)
- [Web Machine Learning Community Group](https://webmachinelearning.github.io/)
- [Intro to WebNN by Kinuko Yasuda](https://www.youtube.com/watch?v=WE3_UghVhPg)
- [Tensor Operations Explained](https://pytorch.org/tutorials/beginner/blitz/tensor_tutorial.html)
- [MLGraphBuilder API Spec (W3C Draft)](https://webmachinelearning.github.io/webnn/#api-mlgraphbuilder)

---

## 👩‍💻 Author

Created with love by **Laura Morinigo**  

---

## 📄 License

MIT — Free to use, remix, and feel your feelings 🫶
