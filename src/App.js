import { useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from "./pages/LoadingScreen";

function App() {
 const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Stop loading after 2 seconds for demo
    }, []);

    return (
        <div className="App">
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <h1>Development running...</h1>
            )}
        </div>
    );
}

export default App;
