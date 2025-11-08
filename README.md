# Assembly: Endgame

> A fun word-guessing game where you must guess the word correctly to save programming languages from Assembly!

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://resplendent-fudge-531719.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Assembly: Endgame Screenshot](./public/wonShot.png)

## 🎮 Game Overview

In **Assembly: Endgame**, you're tasked with saving the programming world from Assembly language taking over. Each incorrect guess eliminates one of your favorite programming languages forever! Can you guess the word before Assembly becomes the only language left?

**[🎯 Play Now](https://resplendent-fudge-531719.netlify.app/)**

### Features

- 🎯 **Word Guessing Gameplay** - Classic hangman-style mechanics with a programming twist
- 🚫 **Language Elimination** - Watch programming languages disappear with each wrong guess
- 🏆 **Win Condition** - Complete the word before all 8 languages are lost
- 💀 **Progressive Difficulty** - Feel the pressure as languages fall one by one
- ♿ **Accessibility** - Screen reader support and keyboard navigation
- 📱 **Responsive Design** - Works seamlessly on mobile and desktop
- 🎨 **Visual Feedback** - Color-coded keyboard and animated game states
- 🎭 **Clever Farewells** - Randomized goodbye messages for eliminated languages

## 🛠️ Technologies Used

- **React 19** - Latest React with modern hooks
- **Vite** - Fast build tool and dev server
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom styling with animations
- **clsx** - Utility for conditional className management

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18.0.0 or higher recommended)
- npm (version 9.0.0 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/assembly-endgame.git
   cd assembly-endgame
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 📝 How to Play

1. **Start the Game** - A random word is chosen automatically
2. **Guess Letters** - Click letters on the on-screen keyboard
3. **Watch the Languages** - Each wrong guess eliminates a programming language
4. **Win or Lose**:
   - ✅ **Win** - Reveal the entire word before losing all 8 languages
   - ❌ **Lose** - Make 8 incorrect guesses and Assembly takes over
5. **Play Again** - Click "New Game" to try another word

### Game Rules

- You have **8 attempts** (one for each language except Assembly)
- Correct guesses reveal all instances of that letter
- Incorrect guesses eliminate a programming language
- Each letter can only be guessed once
- Languages eliminated: HTML → CSS → JavaScript → React → TypeScript → Node.js → Python → Ruby

## 🏗️ Project Structure

```
assembly-endgame/
├── public/
│   └── wonShot.png
├── src/
│   ├── App.jsx          # Main game component with logic
│   ├── languages.js     # Programming languages data & styling
│   ├── utils.js         # Helper functions (word selection, farewells)
│   ├── words.js         # 500+ word dictionary
│   ├── index.jsx        # React entry point
│   └── index.css        # Global styles and animations
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md
```

## 🎨 Key Components

### State Management
- `currentWord` - The secret word to guess
- `guessedLetters` - Array of all attempted letters

### Derived State
- `wrongGuessCount` - Tracks incorrect guesses
- `isGameWon` - All letters guessed correctly
- `isGameLost` - 8 incorrect guesses made
- `isGameOver` - Either win or loss condition met

### Accessibility Features
- ARIA live regions for screen reader updates
- Semantic HTML structure
- Keyboard-friendly button controls
- Status announcements for each guess
- Visually hidden helper text

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run lint` | Run ESLint to check for code issues |
| `npm run preview` | Preview the production build locally |

## 🔮 Future Improvements

- [ ] Add difficulty levels (4, 6, 8, or 10 letter words)
- [ ] Implement high score leaderboard with localStorage
- [ ] Add sound effects and background music
- [ ] Create themed word categories (tech, nature, food, etc.)
- [ ] Add multiplayer support
- [ ] Include hints system
- [ ] Add animations for language elimination
- [ ] Create daily challenge mode
- [ ] Add dark/light theme toggle

## 🌐 Deployment

This project is deployed on Netlify. To deploy your own version:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/assembly-endgame)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/assembly-endgame/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

- GitHub: [David McCullough](https://github.com/kvothe1387)
- LinkedIn: [David McCullough](https://www.linkedin.com/in/davidmcc-webdev/)
- Portfolio: [My Portfolio](https://davidmcc.netlify.app/)

---

<p align="center">Made with ❤️ and React</p>
