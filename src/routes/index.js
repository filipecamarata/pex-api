import UserRoutes from "./user-routes.js";
import uploadRoutes from "./upload-img-routes.js"
import ProductsRoutes from "./products-routes.js"

function routes(app) {
    app.use("/users", UserRoutes)
    app.use("/upload", uploadRoutes)
    app.use("/products", ProductsRoutes )
}

export default routes