import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import SuspectList from './components/SuspectList'
import Search from "./components/Search"
import SuspectForm from "./components/SuspectForm"
import EditSuspectForm from "./components/EditSuspectForm"
import SuspectDetails from "./components/SuspectDetails"

// import SuspectContainer from "./components/SuspectContainer"


function App() {
  const [suspects, setSuspects] = useState([])
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState(false)

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

  //HANDLE FREEDOM BUTTON
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

  //HANDLE EDIT FORM
  const handleUpdateSuspect = (updatedSuspect) => {
    setSuspects(suspects => suspects.map(oldSuspect => {
      if (oldSuspect.id === updatedSuspect.id) {
        return updatedSuspect;
      } else {
        return oldSuspect;
      }
    }))
  }

  //HANDLE FREEDOM FILTER
  const handleFiltered = () => {
    setFiltered(prevState => !prevState)
  }

  return (
    <Router>
      <div>
        <NavBar />
        <Routes >
          <Route
            path="/"
            element={
              <div className="home-container">
                <p className="crime-punch">
                  Time to punch crime in the face (ง'̀-'́)ง
                </p>
                <Link to="/home">
                <img
                  src="https://www.freeiconspng.com/uploads/batman-logo-png-3.png"
                  alt="Batman Logo"
                  className="main--logo"
                />
                </Link>
              </div>
            }
          />
          <Route
            path="/home"
            element={<Home suspects={suspects} />}
          />
          <Route
            path="/suspects/new"
            element={<SuspectForm
              onAddSuspect={handleAddSuspect}
            />
            }
          />
          {/* <Route
            exact path="/suspects"
            element={
              <SuspectContainer
                suspects={suspects}
                search={search}
                onSearch={handleSearch}
                onDeleteSuspect={handleDeleteSuspect}
                onToggleSuspect={handleToggleSuspect}
                filtered={filtered}
                onFiltered={handleFiltered}
              />
            }
          /> */}
          <Route
            path="/suspects"
            element={
              <>
                <Search
                  search={search}
                  onSearch={handleSearch}
                  onFiltered={handleFiltered}
                />
                <SuspectList
                  suspects={suspects}
                  search={search}
                  onDeleteSuspect={handleDeleteSuspect}
                  onToggleSuspect={handleToggleSuspect}
                  filtered={filtered}
                />
              </>
            }
          />
          <Route path="/suspects/:id"
            element={
              <SuspectDetails
              />
            }
          />
          <Route
            path="/suspects/:id/edit"
            element={
              <EditSuspectForm
                onUpdateSuspect={handleUpdateSuspect}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
