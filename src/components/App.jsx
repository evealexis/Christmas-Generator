import "../index.css"
import Content from "./Content"
import Header from "./Header"
import Footer from "./Footer"

const App = () => {
  return (
    <>
      <div className="page-container">
      <div className="content-wrapper">
      <Header />
      <Content/>
      <Footer />
      </div>
      </div>

    </>
  )
}

export default App
