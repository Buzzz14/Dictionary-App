import React, { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState(null);

  const findMeaning = async () => {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    setWordData(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    findMeaning();
  };

  const definitions = wordData?.[0]?.meanings?.[0]?.definitions?.[0] || {};
  const antonyms = definitions.antonyms || [];
  const synonyms = definitions.synonyms || [];

  return (
    <>
      <header className='bg-teal-green text-mint-cream text-center text-3xl p-4 font-medium'>
        <nav>
          <h2>Dictionary App</h2>
        </nav>
      </header>

      <main className='min-h-over-half max-w-600 mx-auto p-5'>
        <form className='grid grid-cols-1 justify-center sm:grid-cols-2-1 shadow-lg' onSubmit={handleSubmit}>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder='Enter a word...'
            className="p-3 outline-none"
          />
          <button
            type="submit"
            className="bg-teal-green text-mint-cream p-3 hover:bg-seafoam-green"
          >
            Search
          </button>
        </form>

        <div className="min-h-half bg-mint-cream mt-10 p-10 rounded-xl shadow-lg">
          {wordData ? (
            <div>
              <h2 className="text-2xl"><strong>Word: </strong>{wordData[0].word}</h2>
              <p className="italic">{wordData[0].meanings[0].partOfSpeech}</p>
              <p className="mt-2"><strong>Meaning: </strong>{definitions.definition || "Not Found"}</p>
              <p className="mt-1"><strong>Example: </strong>{definitions.example || "Not Found"}</p>
              <p className="mt-1"><strong>Antonyms: </strong></p>
              {antonyms.length === 0 ? (
                <p>Not Found</p>
              ) : (
                <ul>
                  {antonyms.map((antonym, index) => (
                    <li key={index}>{antonym}</li>
                  ))}
                </ul>
              )}
              <p className="mt-1"><strong>Synonyms: </strong></p>
              {synonyms.length === 0 ? (
                <p>Not Found</p>
              ) : (
                <ul>
                  {synonyms.map((synonym, index) => (
                    <li key={index}>{synonym}</li>
                  ))}
                </ul>
              )}
              <div className="mt-6">
                <a className="mt-1 bg-teal-green text-mint-cream hover:bg-seafoam-green p-3" href={wordData[0].sourceUrls} target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          ) : null}
        </div>
      </main>

      <footer>
        <p className="text-center">&copy; 2024 Dictionary App</p>
      </footer>
    </>
  );
}

export default App;
