import React, { useState } from "react"
import { languages } from "./languages"

export default function AssemblyEndgame() {

  const [currentWord, setCurrentWord] = useState("react")

  const languageElements = languages.map(lang => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return (
      <span
        className="chip"
        style={styles}
        key={lang.name}
      >
        {lang.name}
      </span>
    )
  });

  const letterElements = currentWord.split('').map((letter, index) => (
    <span
      key={index}
      className="letter"
    >
      {letter.toUpperCase()}
    </span>
  ));

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the
          programming world safe from Assembly!</p>
      </header>

      <section className="game-status">
        <div className="status-message">
          <h2>You Win!</h2>
          <p>Well done! <span role="img" aria-label="celebration">🎉</span></p>
        </div>
      </section>

      <section className="current-word">
        {letterElements}
      </section>

      <section className="language-chips">
        {languageElements}
      </section>

    </main>
  )
}

