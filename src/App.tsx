import { ThemeProvider } from "@/components/ThemeProvider";
import { RouterProvider } from "react-router-dom";
import { router } from './lib/routes'

function App({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
    );
}

export default App;
