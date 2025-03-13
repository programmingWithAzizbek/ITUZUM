import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="container mx-auto py-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
