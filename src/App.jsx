import React from "react"
import Header from "./components/header.jsx"  // Import the header component
import Introduction from "./components/introduction.jsx"  // Import the section component
import Diagnostic from "./components/diagnostic.jsx"
import Orgidentity from "./components/org_idn.jsx"
import StrategicGoalsTable from "./components/obj.jsx"
import Footer from "./components/footer.jsx"
export default function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Introduction />
        <Diagnostic />
        <Orgidentity />
        <StrategicGoalsTable />
      </main>
      <Footer />
    </React.Fragment>
  )
}
