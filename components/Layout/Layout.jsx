import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}
