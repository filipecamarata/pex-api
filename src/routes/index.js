import UserRoutes from "./user-routes.js";

function routes(app) {
    app.use("/users", UserRoutes)
}

export default routes