import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  Feedback,
  Overview,
  VaccinationRate,
  SunburstPage,
  TreemapPage,
} from "./pages";
import {
  feedbackLoader,
  sunburstLoader,
  treeMapLoader,
  vacRateLoader,
} from "./loaders";
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
          path="/sunburst"
          element={<SunburstPage />}
          loader={sunburstLoader}
        />
        <Route
          path="/treemap"
          element={<TreemapPage />}
          loader={treeMapLoader}
        />
        <Route
          path="/vaccination-rate"
          element={<VaccinationRate />}
          loader={vacRateLoader}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
