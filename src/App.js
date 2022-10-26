import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import SuspectList from './components/SuspectList'
import Search from './components/Search'
import SuspectForm from "./components/SuspectForm";
import SuspectDetails from "./components/SuspectDetails"
import EditSuspectForm from "./components/EditSuspectForm"

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

  const handleToggleSuspect = (toggledSuspect) => {
    const toggledSuspects = suspects.map((suspect) => {
      if (suspect.id === toggledSuspect.id) {
        return toggledSuspect;
      } else {
        return suspect;
      }
    })
    setSuspects(toggledSuspects)
  }

  const handleUpdateSuspect = (updatedSuspect) => {
    setSuspects(suspects => suspects.map(oldSuspect => {
      if (oldSuspect.id === updatedSuspect.id) {
        return updatedSuspect;
      } else {
        return oldSuspect;
      }
    }))
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Routes >
            <Route path="/suspects/:id/edit" element={<EditSuspectForm onUpdateSuspect={handleUpdateSuspect} />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/suspects/new" element={<SuspectForm onAddSuspect={handleAddSuspect} />} />
            <Route exact path="/suspects" element={
              <>
                <Search
                  search={search}
                  handleSearch={handleSearch}
                />
                <SuspectList
                  suspects={suspects}
                  setSuspects={setSuspects}
                  search={search}
                  onDeleteSuspect={handleDeleteSuspect}
                  onToggleSuspect={handleToggleSuspect}
                />
              </>
            }
            />
            <Route path="/suspects/:id"
              element={
                <SuspectDetails
                  onToggleSuspect={handleToggleSuspect}
                />
              }
            />

          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
