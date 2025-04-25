import UserRoutes from "./user-routes.js";

function routes(app) {
    app.use("/user", UserRoutes)
}

export default routes