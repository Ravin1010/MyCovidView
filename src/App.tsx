import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Feedback, Overview, G11StackedBarChart, SunburstPage } from "./pages";
import { feedbackLoader, stackedBarLoader, sunburstLoader } from "./loaders";
import { Container } from "./layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Container />}>
        <Route index element={<Overview />} />
        <Route
          path="/feedback"
          element={<Feedback />}
          loader={feedbackLoader}
        />
        <Route
          path="/stackbarchart"
          element={<G11StackedBarChart />}
          loader={stackedBarLoader}
        />
        <Route
          path="/sunburst"
          element={<SunburstPage />}
          loader={sunburstLoader}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
