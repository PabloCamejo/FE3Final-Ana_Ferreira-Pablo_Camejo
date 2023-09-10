
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useAppContext } from "./Context/AppContext/useAppContext";
import { Home, DentistDetail, Contact, Favorites } from "./Routes";


function App() {
  const { state } = useAppContext(); // Accede al estado global
  return (
      
  <div className={state.darkMode ? 'dark' : ''}>
      <Navbar/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dentist/:id" element={<DentistDetail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/favs" element={<Favorites />} />
      </Routes>
  </div>
  );
}

export default App;


