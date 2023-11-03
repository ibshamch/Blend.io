import favicon from "./assets/logo-fl-svgrepo-com.svg";
import takequiz from "./assets/connected-svgrepo-com.svg";
import profile from "./assets/istockphoto-825383494-612x612.jpg";
import instagram from "./assets/instagram-round-svgrepo-com.svg";
import facebook from "./assets/facebook.svg";
import amazon from "./assets/amazon-round-svgrepo-com.svg";
import share from "./assets/share-svgrepo-com(1).svg";
const App = () => {
  const socialLinks = [instagram, facebook, amazon];
  return (
    <div className="App">
      <div className="header">
        <div className="favicon">
          <div className="favicon-main">
            <img src={favicon} alt="logo" /> v.Blend
          </div>
          <div className="about">About</div>
          <div className="e-gift">Send e-gift</div>
        </div>
        <div className="takequiz">
          Take the Quiz
          <img src={takequiz} alt="takequiz" />
        </div>
        <div className="social-container">
          <div className="share">
            <img src={share} alt="share" className="share-img" />
          </div>
          <div className="social-links">
            {socialLinks.map((e) => {
              return <img src={e} alt="social link" />;
            })}
          </div>
          <img className="profile-pic" src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default App;
