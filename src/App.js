import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"; // Ensure RouterProvider is imported
import CertificateGen from "./component/certificateGen/page";
import ShowingPrev from "./routes/ShowPreview";
import ContextData from "./component/contextCom/page";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<CertificateGen />} />
        <Route path="/showPrev" element={<ShowingPrev />} />
      </>
    )
  );

  return (
    <ContextData>
      <RouterProvider router={router} />
    </ContextData>
  );
}

export default App;