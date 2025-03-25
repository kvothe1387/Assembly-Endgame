import React from "react"

export default function AssemblyEndgame() {

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

    </main>
  )
}

