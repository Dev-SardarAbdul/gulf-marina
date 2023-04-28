import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "globalStyles";
import { useEffect } from "react";
import { HomeCom } from "components";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeCom />} />
      </Routes>
    </Router>
  );
}

export default App;
