import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router.tsx";
import { ChakraProvider } from '@chakra-ui/react'
import ContextProvider from "./ContextProvider/ContextProvider.tsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <ChakraProvider>

        <RouterProvider router={router} />
        </ChakraProvider>
      </HelmetProvider>
      <Toaster />
    </ContextProvider>
  </StrictMode>
);
