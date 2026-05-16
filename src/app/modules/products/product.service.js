const prisma = require('../../config/prisma');

const createProduct = async (payload) => {
  const result = await prisma.product.create({
    data: payload,
  });

  return result;
};

const getAllProducts = async () => {
  const result = await prisma.product.findMany();
  return result;
};

module.exports = {
  createProduct,
  getAllProducts,
};