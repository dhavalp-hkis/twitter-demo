import TwitterLogin from "react-twitter-login";
import "./App.css";

function App() {
  const CONSUMER_KEY = "cHZkUmRnOTlBYVpFd0xBclRnWkY6MTpjaQ";
  const CONSUMER_SECRET = "KxaudeuF9Ozs8LXbJilarLp9tKMB0YA8LiGkR5RSC1QuJAOWmh";
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <div className="App">
      <TwitterLogin
        authCallback={authHandler}
        consumerKey={CONSUMER_KEY}
        consumerSecret={CONSUMER_SECRET}
      />
    </div>
  );
}

export default App;
