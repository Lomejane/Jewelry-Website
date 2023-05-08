import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Nav/Navbar";
import Featured from "./Components/Featured";
import ProductPage from "./Product/ProductPage";
import SignUp from "./AuthFinal/SignUp";
import Login from "./AuthFinal/Login";
import Profile from "./AuthFinal/Profile";
import Protected from "./AuthFinal/Protected";
import Update from "./AuthFinal/ProfilePictureUploader.js";
import UserProfile from "./AuthFinal/UserProfile";
import LastProfile from "./AuthFinal/lastProfile";
import SecondProfile from "./AuthFinal/SecondProfile";
import Footer from "./Footer";
import { UserAuthContextProvider } from "./context/AuthContexts";

const App = () => {
  return (
    <>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Protected> 
                <Featured />
              </Protected>}/>
              <Route path="/productPage" element={<Protected>
                <ProductPage />
              </Protected>} />
              <Route path="/profile" element={<Protected>
                <Profile />
                </Protected>} />
              <Route path="/update" element={<Protected>
                <Update />
              </Protected>} />
              <Route path="/userProfile" element={<Protected>
                <UserProfile />
              </Protected>} />
              <Route path="/secondProfile" element={<Protected>
                <SecondProfile />
              </Protected>} />
              <Route path="/lastProfile" element={<Protected>
                <LastProfile />
              </Protected>} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </UserAuthContextProvider>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
};

export default App;