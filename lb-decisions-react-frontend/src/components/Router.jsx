import {BrowserRouter, Route, Routes} from "react-router-dom";
import CalculationPage from "../pages/CalculationPage";

const Router = () => {
    return (
            <div className="app-container">
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<CalculationPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        
    );
}

export default Router;