import Footer from "./Footer";
import Header from "./Header";

const Container = ({ children }) => {
  return (
    <div className=" flex flex-col ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Container;
