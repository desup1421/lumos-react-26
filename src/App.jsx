import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Footer from "./components/Footer";

function App() {
  //Ref
  const scrollToRef = useRef(null);
  const handleScrollTo = () =>
    scrollToRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  return (
    <div ref={scrollToRef}>
      <Router>
        <Navbar />
        <main className="px-3 md:px-0 md:w-5/6 mx-auto min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="post/:slug" element={<PostDetail />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>
      </Router>
      <Footer />
      <button
        onClick={handleScrollTo}
        className="fixed bottom-5 right-5 z-40  bg-blue-400 p-1"
      >
        <i className="bx bx-chevron-up font-bold text-4xl text-white"></i>
      </button>
    </div>
  );
}

export default App;
