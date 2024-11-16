import Footer from "./components/footer";
import Login from "./components/login";
import Sidebar from "./components/sidebar";
import SidebarGuest from "./components/sidebar-guest";
import SocialCard from "./components/SocialCard";

function App() {
  return (
    <div>
      <Login />
      <Sidebar />
      <SidebarGuest />
      <SocialCard />
      <Footer />
    </div>
  );
}

export default App;
