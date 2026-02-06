// Simple Q&A database
const qaDatabase = {
  "hello": "Hi friend! How can I help you?",
  "hii": "Hi friend! How can I help you?",
  "how are you": "I’m doing great, thanks for asking! and What about you? ",
  "I am fine":"Great. How can I help you?",
  "suggest crop for me": "You can grow wheat, rice or maize and for better result you can give more information.",
  "I am from sahibganj, suggest best crop for my location":"According to your location, the most commonly grown crops are rice and maize, Because maize requires less water and paddy is the main food source for you  and demanding crops are like Pulse, oilseed and paddy.",
  "my soil have low nitrogen level suggest crop":"Nitrogen-deficient soil is best for pulses,soyabeen & groundnut as they fix nitrogen naturally.",
  "after harvesting wheat suggest best crop for soil health":"To maintain soil fertility, masoor,checkpeas, or green gram. Rotating wheat with liquers will keep your soil fertile & reduce the need for fertilizer.",
  "suggest less risky crop in market fall":"Crops covered under MSP(Minimum Support Price) are less risky because the government ensures a minimum price. For example, wheat, maize and tur. If you want to know about MSP then Type MSP.",
  "msp":"According to Google !  Minimum Support Price (MSP) full form is a government tool used in India to protect farmers from sharp declines in crop prices. Announced by the Government of India at the start of the sowing season, MSPs are based on recommendations suggested by the Commission for Agricultural Costs and Prices (CACP).",
  "best roi crops in my area":" High-value crops like tobacco or green chili may be more profitable, while barley and wheat offer stable returns. If you want, I can suggest a list of crops likely to give the best returns in Jharkhand.",
  "ncdex use for farmer":"Okay, here’s a complete but simple explanation of NCDEX for farmers: NCDEX (National Commodity & Derivatives Exchange) is an online trading platform for agricultural commodities.Uses for Farmers: Price Discovery – Farmers know future market prices of crops (like wheat, soybean, chana, guar, etc.). Hedging Risk – Farmers can lock in future prices, protecting themselves from sudden market price drops. Better Planning – Helps decide which crop to grow and when to sell. Transparency – Prices are not controlled by middlemen; farmers get real-time, nationwide price updates. Liquidity – Easy to buy/sell produce contracts anytime during market hours. Finance Access – Farmers can show NCDEX contracts to banks/finance institutions for loans.  Storage & Quality – NCDEX provides accredited warehouses where farmers can store crops safely with quality certification. In short: NCDEX helps farmers earn better income, reduce risks, and access fair, transparent markets.",
  "high demanding veggies and grain on social media and food delivery platform":"Tomato, Onion, Potato, Capsicum, Coriander, Spinach, Lady Finger, Cauliflower, Basmati Rice, Wheat, Pulses (Chana, Moong, Masoor), Maize.",
  "weather": "Currently, I can't fetch live weather but you will see very soon.",
  "bye": "Goodbye! Have a nice day. I am ready whenever you need me, don't hesitate to ask me anything."
};

// Elements
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatWindow = document.getElementById("chat-window");
const historyList = document.getElementById("history-list");

// Send message function
function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  // Add user message
  const userMsgElem = document.createElement("div");
  userMsgElem.className = "user-message";
  userMsgElem.textContent = message;
  chatWindow.appendChild(userMsgElem);

  // Add to history
  const historyItem = document.createElement("li");
  historyItem.textContent = message;
  historyList.appendChild(historyItem);

  // Bot response
  let response = "Sorry, I don’t have an answer for that yet.";
  const lowerMsg = message.toLowerCase();
  if (qaDatabase[lowerMsg]) {
    response = qaDatabase[lowerMsg];
  }

  const botMsgElem = document.createElement("div");
  botMsgElem.className = "bot-message";
  botMsgElem.textContent = response;
  chatWindow.appendChild(botMsgElem);

  // Auto-scroll down
  chatWindow.scrollTop = chatWindow.scrollHeight;

  // Clear input
  userInput.value = "";
}

// Events
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});
