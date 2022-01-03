import { 
    authRoutes, 
    dashRoutes 
} from "./routes";

export const Routes = {
    ...authRoutes,
    ...dashRoutes
};