import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutPage from "./pages/AboutPage";
import AboutLink from "./components/AboutLink";
import { FeedbackProvider } from "./context/FeedbackContext"




function App() {

    // const [feedback, setFeedback] = useState(FeedbackData);
    // setFeedback({
    //     id: 1,
    //     rating: 10,
    //     text: "Content of this feedback item has been changed by none other than shubham singh!!!"
    // })
    // setFeedback();
    // console.log(feedback);



    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>

                        </Route>
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                    <AboutLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;