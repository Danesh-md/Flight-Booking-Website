import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CustomerForm from "../components/CustomerForm";
import StaticImage from "../components/StaticImage";

const StartPage = () => {
  return (
    <div>
      <Header />
      <CustomerForm />
      <StaticImage/>
      <Footer />
    </div>
  );
};

export default StartPage;
