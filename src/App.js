import "./App.css";
import Profile from "./components/Profile";
import { ProfileContextProvider } from "./ProfileContext";

function App() {
  return (
    <ProfileContextProvider>
      <section>
        <Profile />
      </section>
    </ProfileContextProvider>
  );
}

export default App;
