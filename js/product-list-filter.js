const ProducListData = {
  data() {
    return {
      checkPriceFilter: [],
      cartClass: "cart",
      keyword: "",
      products: [
        {
          pro_name:
            "Viên Ăn Ngon GG A | Hỗ Trợ Tăng Cân Hiệu Quả An Toàn | Chính Hãng Phiên Bản Mới 2021 | Freeship Toàn Quốc",
          pro_img: "./image/pro1.jpeg",
          pro_shop: "./image/pro1.jpeg",
          isCart: false,
          price: 120,
        },
        {
          pro_name:
            "Băng Đô Tuban, Bờm Rửa Mặt Tai Thỏ 3D Mới Hót Trend Xu Hướng",
          pro_img: "./image/pro2.jpeg",
          pro_shop: "./image/pro2.jpeg",
          isCart: false,
          price: 90,
        },
        {
          pro_name: "Diên Ăn Ngon GG | Hỗ Trợ Tăng Cân Hiệu Quả An Toàn",
          pro_img: "./image/pro3.jpeg",
          pro_shop: "./image/pro3.jpeg",
          isCart: false,
          price: 40,
        },
        {
          pro_name: "LeoChính Hãng Phiên Bản Mới 2021 | Freeship Toàn Quốc",
          pro_img: "./image/pro4.jpeg",
          pro_shop: "./image/pro4.jpeg",
          isCart: false,
          price: 100,
        },
        {
          pro_name:
            "Viên Ăn Ngon B | Hỗ Trợ Tăng Cân Hiệu Quả An Toàn | Chính Hãng Phiên Bản Mới 2021 | Freeship Toàn Quốc",
          pro_img: "./image/pro5.jpeg",
          pro_shop: "./image/pro5.jpeg",
          isCart: false,
          price: 200,
        },
        {
          pro_name:
            "Viên Ăn Ngon GG C | Hỗ Trợ Tăng Cân Hiệu Quả An Toàn | Chính Hãng Phiên Bản Mới 2021 | Freeship Toàn Quốc",
          pro_img: "./image/pro6.jpeg",
          pro_shop: "./image/pro6.jpeg",
          isCart: false,
          price: 150,
        },
      ],
    };
  },
  methods: {
    addToCartHandle(event, product) {
      product.isCart = !product.isCart;
      console.log(this.checkPriceFilter);
    },
  },
  computed: {
    filterProducts: function () {
      let newFilterProducts = {};
      if (this.checkPriceFilter.length == 0 && this.keyword.length == 0) {
        newFilterProducts = this.products;
      } else {
        if (this.checkPriceFilter.length > 0) {
          newFilterProducts = this.products.filter(
            (product) =>
              product.price >= parseInt(Math.min(...this.checkPriceFilter))
          )
          if (this.keyword.length > 0) {
            newFilterProducts = newFilterProducts.filter(
              (product) => !product.pro_name.indexOf(this.keyword)
            );
          }
        }
        else if (this.keyword.length > 0) {
          newFilterProducts = this.products.filter(
            (product) => !product.pro_name.indexOf(this.keyword)
          );
        }
      }
      return newFilterProducts;
    },
  },
};

Vue.createApp(ProducListData).mount(".container");
