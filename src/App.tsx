import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AllRouters } from "./routers/routers";
import ThemeProvider from "./shared/providers/ThemeProvider";
import { DirectionProvider } from "@radix-ui/react-direction";
function App() {
  const router = createBrowserRouter(AllRouters);
  return (
    <DirectionProvider dir="rtl">
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </DirectionProvider>
  );
}

export default App;
