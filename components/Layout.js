import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="container">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
