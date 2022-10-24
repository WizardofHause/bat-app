import { useState, useEffect } from "react";

import NavBar from './components/NavBar'
import Home from './components/Home'
import SuspectPage from './components/SuspectPage'
import Search from './components/Search'
import SuspectForm from "./components/SuspectForm";

function App() {
  const [suspects, setSuspects] = useState([])
  const [search, setSearch] = useState('')

  // FETCH DATA FROM DB.JSON
  useEffect(() => {
    fetch("http://localhost:3000/suspects")
    .then((r) => r.json())
    .then((suspects) => setSuspects(suspects))
  }, [])

  //SEARCH HANDLER
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  //ADD NEW SUSPECT FORM HANDLER
  const handleAddSuspect = (newSuspect) => {
    setSuspects((suspects) => [...suspects, newSuspect])
  }

  const handleDeleteSuspect = (deletedSuspect) => {
    const updatedSuspects = suspects.filter(
      (suspect) => suspect.id !== deletedSuspect.id
    );
    setSuspects(updatedSuspects);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Home />
        <Search 
          search={search}
          handleSearch={handleSearch}
        />
        <SuspectForm onAddSuspect={handleAddSuspect} />
        <SuspectPage 
          suspects={suspects}
          setSuspects={setSuspects}
          search={search} 
          onDeleteSuspect={handleDeleteSuspect}
        />
      </header>
    </div>
  );
}

export default App;
