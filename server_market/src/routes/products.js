import express from 'express';
import { getAllProduct, createProduct, getOneProduct, removeProduct, updateProduct, getRelatedProducts } from '../controller/products';


const router = express.Router();
router.post('/products', createProduct);
router.patch('/products/:id', updateProduct);
router.get('/products', getAllProduct);
router.get('/products/:id', getOneProduct);
router.delete('/products/:id', removeProduct);
router.get('/products/related/:cate_id/:product_id', getRelatedProducts);
export default router;