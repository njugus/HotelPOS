import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/SignUp"
import Login from "./Pages/Login"
import SalesEntryPage from "./Pages/Main"
import Home from "./Pages/Home"
import Settings from "./Pages/Settings"
import AnalyticsByItem from "./Pages/AnalyticsByItem"
import AnalyticsOverTime from "./Pages/AnalyticsOverTime"
import AnalyticsOverview from "./Pages/AnalyticsOverview"
import SalesEntryForm from "./Components/SalesEntryForm"

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Wrap all children inside Main layout */}
        <Route path="/" element={<SalesEntryPage />}>
          <Route index path = "home" element={<Home />} />
          <Route path="sales-entry" element={<SalesEntryForm />} />
          <Route path="analytics/overview" element={<AnalyticsOverview />} />
          <Route path="analytics/by-item" element={<AnalyticsByItem />} />
          <Route path="analytics/over-time" element={<AnalyticsOverTime />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
