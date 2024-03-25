import {Express} from "express";
import {
    getProduct,
    getProductById,
    createProducts,
    updateProducts,
    deleteProducts
} from "../controllers/Products.js";

const router = Express.Router();

router.get('/products', getProduct);
router.get('/products/:id', getProductById);
router.post('/products', createProducts);
router.put('/products/.id', updateProducts);
router.delete('/products/:id', deleteProducts);

export default router;