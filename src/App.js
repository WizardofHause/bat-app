import { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import SuspectPage from './components/SuspectPage'
import Search from './components/Search'
import SuspectForm from "./components/SuspectForm";
import SuspectDetails from "./components/SuspectDetails"

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

  //REMOVE SUSPECT & UPDATE ARRAY
  const handleDeleteSuspect = (deletedSuspect) => {
    const updatedSuspects = suspects.filter(
      (suspect) => suspect.id !== deletedSuspect.id
    );
    setSuspects(updatedSuspects);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Routes >
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<SuspectForm onAddSuspect={handleAddSuspect} />} />
            <Route exact path="/suspects" element={
              <>
                <Link to="/home"><img src="https://www.freeiconspng.com/uploads/batman-logo-png-3.png" width="175" alt="Batman Logo" /></Link>
                <Search
                  search={search}
                  handleSearch={handleSearch}
                />
                <SuspectPage
                  suspects={suspects}
                  setSuspects={setSuspects}
                  search={search}
                  onDeleteSuspect={handleDeleteSuspect}
                />
              </>
            }
            />
            <Route path="/suspects/:id" element={<SuspectDetails />} />

          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
