const SLEEP_TIME = 200;

function sleep(fn) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn());
    }, SLEEP_TIME);
  });
}

const dataService = {
  getProductsList() {
    const products = [
      {
        id: '12367',
        title: 'Картошка',
        price: 49.99,
        image: '/products/potato.jpg',
      },
      {
        id: '45',
        title: 'Морковка',
        price: 55.00,
        image: '/products/carrot.jpg',
      },
      {
        id: '34545',
        title: 'Капуста',
        price: 28.50,
        image: '/products/cabbage.jpg',
      }
    ];
    return products;
  },
};

const productsApi = {
  getProductsList() {
    return sleep(dataService.getProductsList);
  },
};

export default productsApi;
