// api.js

const products = [
  { id: 1, name: 'Alternator', description: '12V alternator 2009 Toyota Camry', price: 150 },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20 },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 30 },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    // Simulating an API call delay
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const product = products.find((product) => product.id === productId);

    if (product) {
      resolve(product);
    } else {
      reject(new Error('Product not found'));
    }
  });
};
const app = new Vue({
  el: '#app',
  data: {
    products: [],
  },
  methods: {
    async fetchProducts() {
      try {
        this.products = await getProducts();
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
});


