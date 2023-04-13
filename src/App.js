import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthenticationGuard } from "./Views/Login/AuthenticationGuard/authentication-guard";
import { useAuth0 } from "@auth0/auth0-react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar";
import SearchResult from "./Components/SearchResult/SearchResult.jsx";
import FormPosteo from "./Components/FormPosteo/FormPosteo.jsx";
import Detail from "./Views/Detail/Detail";
import FormCalification from "./Components/FormCalification/FormCalification";
import AgreementArea from "./Components/AgreementArea/ChatAgreement";
import RegistryForm from "./Views/Login/RegistryForm/RegistryForm.jsx";
import Profile from "./Views/Login/Profile/Profile.jsx";
import UserDetail from "./Views/UserDetail/UserDetail.jsx";
import FooterForm from "./Components/Footer/FooterForm/FooterForm.jsx";
import About from "./Components/About/About.jsx";
import UnderConstruction from "./Components/UnderConstruction/UnderConstruction.jsx";
import WrappedCheckoutForm from "./Components/CheckoutForm/CheckoutForm.jsx";
import RegistryFromMail from "./Views/Login/RegistryForm/RegistryFromMail";

function App() {
  const location = useLocation();

  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className="App">
      {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/construction" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/home/search" element={<SearchResult />} />
        <Route path="/posteo" element={<FormPosteo />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/calification/:id" element={<FormCalification />} />
        <Route path="/contract/:id" element={<AgreementArea />} />
        <Route path="/registryForm" element={<RegistryForm />} />
        <Route
          path="/profile"
          element={<AuthenticationGuard component={Profile} />}
        />
        <Route path="/registryFromMail" element={<RegistryFromMail/>}/>
        <Route
          path="userdetail/:id"
          element={<AuthenticationGuard component={UserDetail} />}
        />
      <Route path="/contact" element={<FooterForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/construction" element={<UnderConstruction />} />
      <Route
        path="/checkout/:id"
        element={
          <Elements
          stripe={loadStripe(
            "pk_test_51MtZHVDhQ0hUgSqkOlAWvWZu8YGVgFDuFYiKgSMVWFFjwfqSjk6VcCvacWNISZ6V7gy82PmGCNlhub0YmA9FeVTn00NlgLySlO"
            )}
            >
            <WrappedCheckoutForm />
          </Elements>
        }
        />
        </Routes>
    </div>
  );
}

export default App;

//
