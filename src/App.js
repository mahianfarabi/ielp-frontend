import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("https://ielp-backend.vercel.app/")
      .then(res => setMessage(res.data))
      .catch(err => console.error(err));
      console.log(message,"Frontend connected to backend");
  }, [message]);


  return <h1>frontend working <br/>{message}</h1>;
}

export default App;
