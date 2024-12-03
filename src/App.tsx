import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AllRouters } from "./routers/routers";
import ThemeProvider from "./shared/providers/ThemeProvider";
function App() {
  const router = createBrowserRouter(AllRouters);
  return (
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
  );
}

export default App;
