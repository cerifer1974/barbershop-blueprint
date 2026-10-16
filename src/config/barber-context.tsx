import { createContext, useContext } from "react";
import { barberConfig } from "./barber.config";

// Default preserves existing consumers; each landing page supplies its own brand.
export const BarberConfigContext = createContext(barberConfig);
export const useBarberConfig = () => useContext(BarberConfigContext);