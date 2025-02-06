
# 📦 Product Card Frontend Test

A simple **Product Card** built with **React** and **Chakra UI**. This project demonstrates responsive design, accessibility, and modular component development.

---

## 🚀 **Project Overview**

This project implements a reusable **Product Card** component with the following features:

- Product Image
- Product Name and Description
- Price
- "Buy Now" Button with click handler

Designed using **Chakra UI**, it supports responsive layouts, hover effects, accessibility compliance, and consistent theming.

---

## 🖥️ **Installation Guide** (From Scratch)

### **1️⃣ System Requirements**

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### **2️⃣ Clone the Repository**

```bash
git clone https://github.com/your-username/frontend-test.git
cd frontend-test
```

### **3️⃣ Install Dependencies**

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### **4️⃣ Run the Development Server**

```bash
npm start
```

### **5️⃣ Deploy to GitHub Pages (Optional)**

```bash
npm install gh-pages --save-dev

# Add to package.json
# "homepage": "https://<your-username>.github.io/frontend-test"
# Add scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"

npm run deploy
```

---

## 💡 **Project Structure & Key Concepts**

```
frontend-test/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── ProductCard.js
│   ├── index.js
│   └── theme.js
├── package.json
└── node_modules/
```

### **Components:**

1. **ProductCard.js** - A modular, reusable card with consistent layout and styles.
2. **theme.js** - Global theme settings for colors, fonts, and spacing.
3. **App.js** - Renders multiple ProductCards using Chakra UI's grid system.

### **Key Features:**

- **Responsive Design:** Adjusts layout based on screen size.
- **Accessibility:** ARIA roles, focus states, and keyboard navigation support.
- **State Management:** Button click events logged to the console.
- **Theming:** Consistent global styles with Chakra UI’s `extendTheme`.

---

## ⚠️ **Troubleshooting Guide**

### **A. React 18 Compatibility Issues**

If you encounter the following error:

```bash
TypeError: react_dom__WEBPACK_IMPORTED_MODULE_1__.render is not a function
```

**Solution:** Use `createRoot` for React 18:

```javascript
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

### **B. Chakra UI Version Issues**

If `extendTheme` is not recognized:

```bash
ERROR: export 'extendTheme' was not found in '@chakra-ui/react'
```

**Solution:** Make sure you have the correct Chakra UI version:

```bash
npm uninstall @chakra-ui/react
npm install @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion
```

---

### **C. Image Loading Errors (https://placehold.co/)**

If images don’t load and you see:

```bash
GET https://placehold.co/300x200 net::ERR_NAME_NOT_RESOLVED
```

**Solution:**

- Ensure you're connected to the internet.
- If issues persist, replace with another placeholder service like:

```javascript
image="https://via.placeholder.com/300x200"
```

Or use a local image file.

---

## 🤝 **Contributing**

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature-branch
```

3. Commit your changes:

```bash
git commit -m "Add new feature"
```

4. Push to the branch:

```bash
git push origin feature-branch
```

5. Open a Pull Request.
