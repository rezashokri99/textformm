import Form from "./components/Form";
import IntroductoryTexts from "./components/IntroductoryTexts";
import LogoHeader from "./components/LogoHeader";
import MainText from "./components/MainText";
import MainVideo from "./components/MainVideo";
import HeaderTitle from "./components/Title";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <LogoHeader />
      <HeaderTitle />
      <Form />
      <MainText />
      <MainVideo />
      <IntroductoryTexts />
    </div>
  );
}

export default App;
