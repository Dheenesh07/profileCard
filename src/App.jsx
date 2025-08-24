import "./App.css";
import Name from "./assets/Component/Name/Name";
import ProfileCard from "./assets/Component/ProfileCard/ProfileCard";
import Footer from "./assets/Component/Footer/Footer";
function App() {
  return (
    <div>
      {/* <Name firstName="Dheeneshwaran" lastName="G" /> */}
      <ProfileCard />
      <Footer />
    </div>
  );
}

export default App;