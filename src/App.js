import { auth } from "./services/firebase";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [ user, setUser ] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {setUser(user)});

    return unsubscribe;
  }, []);

  return (
    <div className="App">
    <Header user={user}/>
    <Main user={user}/>
    <Footer />
    </div>
  );
}


export default App;