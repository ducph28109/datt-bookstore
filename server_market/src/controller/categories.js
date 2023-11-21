import Category from '../models/categories';
import Product from '../models/products';
import { categorySchema } from '../schemas/categories';

export const createCategory = async (req, res) => {
   try {
      const { error } = categorySchema.validate(req.body, { abortEarly: false });
      if (error) {
         const errs = [];
         for (const err of error.details) {
            errs.push(err.message);
         }
         return res.json({
            message: 'Form error',
            errors: errs,
         });
      }
      const category = await Category.create(req.body);
      return res.json({
         message: 'Create category successfully',
         data: category,
      });
   } catch (err) {
      return res.status(500).send({ message: err.message });
   }
};
export const updateCategory = async (req, res) => {
   try {
      const { error } = categorySchema.validate(req.body, { abortEarly: false });
      if (error)
         return res.status(401).json({
            message: error.details.map((err) => err.message),
         });
      const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.status(201).json({
         message: 'Update category successfully',
         category,
      });
   } catch (error) {
      return res.status(400).json({
         message: error.message,
      });
   }
};
export const removeCategories = async (req, res) => {
   try {
      const category = await Category.findOne({ _id: req.params.id });
      const defaultCategoryId = '64ecbaba1afc7bd4ffeb8d9c';
      
      if (req.params.id == defaultCategoryId) {
         return res.status(403).json({
            message: 'Can not delete Default category ',
         });
      }
     
      await Product.updateMany({ categoryId: category._id }, { $set: { categoryId: defaultCategoryId } });

      const defaultCate = await Category.findByIdAndUpdate(
         defaultCategoryId,
         {
            $push: { products: category.productId },
         },
         { new: true },
      );
      await Category.findOneAndDelete({ _id: req.params.id });
      res.json({
         message: 'Delete category successfully',
      });
   } catch (error) {
      return res.status(400).json({
         message: error.message,
      });
   }
};
export const getAllCategory = async (req, res) => {
   try {
      const category = await Category.find().populate('productId');
      return res.status(201).json({
         message: 'Get all category successfully',
         data: category,
      });
   } catch (error) {
      return res.status(400).json({
         message: error.message,
      });
   }
};
export const getOneCategory = async (req, res) => {
   try {
      const category = await Category.findById(req.params.id);
      if (category) {
         return res.status(201).json({
            message: 'Get one category successfully',
            data: category,
         });
      }
      return res.json({
         message: 'Category does not exist',
      });
   } catch (error) {
      return res.status(400).json({
         message: error.message,
      });
   }
};