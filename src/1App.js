import React, { useState } from 'react';

function MathApp() {
  const [firstNumber, setFirstNumber] = useState(generateRandomNumber(10, 20));
  const [secondNumber, setSecondNumber] = useState(generateRandomNumber(0, 10));
  const [userAnswer, setUserAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function checkAnswer(answer) {
    const correctAnswer = firstNumber - secondNumber;
    setUserAnswer(answer);
    if (answer === correctAnswer) {
      setFeedback("Richtig!");
    } else {
      setFeedback(`Falsch! Die richtige Antwort ist ${correctAnswer}.`);
    }
    // Neue Aufgabe generieren
    setFirstNumber(generateRandomNumber(10, 20));
    setSecondNumber(generateRandomNumber(0, 10));
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Subtraktionsspiel</h1>
      <div style={styles.question}>
        <span>{firstNumber}</span> - <span>{secondNumber}</span> = ?
      </div>
      <div style={styles.buttonsContainer}>
        {Array.from({ length: 21 }, (_, i) => (
          <button
            key={i}
            style={styles.button}
            onClick={() => checkAnswer(i)}
          >
            {i}
          </button>
        ))}
      </div>
      {userAnswer !== null && <div style={styles.feedback}>{feedback}</div>}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: 'auto',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  question: {
    fontSize: '30px',
    marginBottom: '20px',
  },
  buttonsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '10px',
  },
  button: {
    fontSize: '20px',
    padding: '15px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
    textAlign: 'center',
  },
  feedback: {
    marginTop: '20px',
    fontSize: '20px',
    color: 'green',
  },
};

export default MathApp;
