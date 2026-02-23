# 🌤️ Weather App

A clean, responsive weather application built using **vanilla HTML, CSS, and JavaScript** that focuses not only on functionality, but also on **good UX, error handling, and real-world frontend best practices**.

🔗 **Live Demo:** <https://pranitajainb.github.io/Weather-App/>

---

## ✨ Features

- 🔍 **Search weather by city name**
- ⌨️ **Enter key support** for faster search
- 🧭 **Real-time weather data** using OpenWeatherMap API
- 📱 **Responsive UI** (works across mobile, tablet, and desktop)
- ⚠️ **User-friendly error handling**
- 🔄 **Reset UI on error**
- 🛡️ **XSS-safe DOM updates**
- 🎯 **Thoughtful UX behaviors**

---

## 🧠 Design & UX Considerations

This project goes beyond a basic API fetch and display:

### ✅ Input & Keyboard UX
- Users can press **Enter** instead of clicking the search button
- Input text is **auto-selected on focus** for quick correction
- Errors are **cleared automatically while typing**

### ✅ Error Handling
- Handles common API errors:
  - Invalid city names (404)
  - Network or server errors
- Displays **friendly messages** instead of raw API errors
- Error messages animate to draw attention without being disruptive

### ✅ Loading State
- UI indicates when data is being fetched
- Prevents confusing blank or frozen states during API calls

### ✅ Security Awareness
- Uses `textContent` instead of `innerHTML` to prevent **XSS vulnerabilities**
- No unsafe DOM injection from external API data

---

## 🧱 Tech Stack

- **HTML** – semantic structure
- **CSS** – responsive layout using `clamp()`, `vw`, and flexible units
- **JavaScript (ES6+)** – async/await, event handling, clean separation of concerns
- **OpenWeatherMap API**

