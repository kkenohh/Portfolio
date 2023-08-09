import Footer from "./footer"
import Navbar from "./navbar"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}