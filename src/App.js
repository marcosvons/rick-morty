import React from 'react'
import PageContent from './components/PageContent'
import rickandmorty from './rickandmorty.json'

function App() {
  return (
    <React.Fragment>
    <div id="body">
      <header> 
        <h1>Rick & Morty <span>Characters</span></h1>
      </header>
      <div id="content">
        {
          rickandmorty.map(function(item, idx){
            return(
              <div id='cards' key={idx}>
                <PageContent cardData={item} />
              </div>
            )
          })
        }
      </div>
      <footer>
        <h3>Marcos von Stremayr</h3>
        <p>+54 9 11 5802 2943</p>
        <p>mvonstremayr@udesa.edu.ar</p>
      </footer>

    </div>
    
    </React.Fragment>
  );
}

export default App;
