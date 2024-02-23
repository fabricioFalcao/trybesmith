import joi from 'joi';

const productSchema = joi.object({
  name: joi.string().min(3).required(),
  userId: joi.number().strict().required(),
  price: joi.string().min(3).required(),
});

export default {
  productSchema,
};