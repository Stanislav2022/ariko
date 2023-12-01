const products = [
  { id: "h-1", name: "Паркет" },
  { id: "h-2", name: "Плінтус" },
  { id: "h-3", name: "Фанера" },
  { id: "s-1", name: "Дошка" },
  { id: "s-2", name: "Пилети" },
  { id: "s-3", name: "Тирса" },
  { id: "s-4", name: "Дрова" },
];

export const getProducts = () => {
  return products;
};

export const getProductById = (productId) => {
  return products.find((product) => product.id === productId);
};
