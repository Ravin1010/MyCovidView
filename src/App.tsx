import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Feedback, Overview, G11StackedBarChart } from "./pages";
import { feedbackLoader, stackedBarLoader } from "./loaders";
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
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
