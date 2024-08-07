import Footer from "./footer"
import SearchBar from "./SearchBar";
import TopHeader from "./TopHeader";
import Trees from "./Trees";
import Mountains from "./Mountains";
import Helicopter from "./Helicopter";
import FAQHead from "./FAQHead";
import TextBox from "./TextBox";
import Logo from "./Logo";
import Movingpic from "./Movingpic";
import SmallTextBox from "./smallTextBox";


function App() {

    return(
      <>
        <TopHeader />
        <Logo />
        <SearchBar />
        <Helicopter />
        <Movingpic />
        <SmallTextBox />
        <FAQHead />
        <TextBox />
        <Mountains />
        <Trees />
        <Footer />
      </>
    );
}

export default App


