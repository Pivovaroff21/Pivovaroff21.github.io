const LOCAL_STORAGE_KEY = "cart";

new Vue({
  el: "#article",
  data() {
    return {
      products: [
        {
          id: 1,
          title: "TAG1001",
          short_text: "Best quality peppers",
          image: "pepper-1.jpg",
          desc: "Full desc",
        },
        {
          id: 2,
          title: "TAG1002",
          short_text: "Best quality peppers",
          image: "pepper-2.jpg",
          desc: "Full desc",
        },
        {
          id: 3,
          title: "TAG1003",
          short_text: "Best quality peppers",
          image: "pepper-3.jpg",
          desc: "Full desc",
        },
        {
          id: 4,
          title: "TAG1004",
          short_text: "Best quality peppers",
          image: "pepper-4.jpg",
          desc: "Full desc",
        },
        {
          id: 5,
          title: "TAG1005",
          short_text: "Best quality peppers",
          image: "pepper-5.jpg",
          desc: "Full desc",
        },
      ],
      product: {},
      cartButtonVisible: true,
      cart_arr: {},
      contactFields:{},
      formDataVisible:true,
    };
  },
  mounted() {
    this.getProduct();
    this.checkInCart();
    this.getItem();
  },
  methods: {
    addItem(id) {
      window.localStorage.setItem("prod", id);
    },
    getProduct() {
      if (window.location.hash) {
        var id = window.location.hash.replace("#", "");
        if (this.products && this.products.length > 0) {
          for (i in this.products) {
            if (
              this.products[i] &&
              this.products[i].id &&
              Number(id) === this.products[i].id
            ) {
              this.product = this.products[i];
            }
          }
        }
      }
    },
    checkInCart() {
      if (!this.product?.id) return;

      const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!localStorageData) return;

      if (
        JSON.parse(localStorageData).find(
          (item) => item === this.product.id
        ) !== undefined
      ) {
        this.cartButtonVisible = false;
      }
    },
    addToCart(id) {
      const localStorageCart = localStorage.getItem(LOCAL_STORAGE_KEY);
      let cart = [];

      if (localStorageCart) {
        cart = JSON.parse(localStorageCart);
      }

      if (!cart.find((item) => item === id)) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...cart, id]));
      }
      this.cartButtonVisible = false;
      var element = document.getElementById("add_button");
      if (this.cartButtonVisible == false) {
        element.classList.remove("product_button");
        element.classList.add("disabled");
      }
    },
    getItem() {
      const localStorageCart = localStorage.getItem(LOCAL_STORAGE_KEY);
      let cart_arr = this.products.filter(item => { 
        return JSON.parse(localStorageCart).includes(item.id)
    }) 
      this.cart_arr = cart_arr;
    },
    removeCart(id){
      this.cart_arr = this.cart_arr.filter(item => item.id !== id)
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.cart_arr.map(item => item.id)));
    },
    makeOrder(){
      this.formDataVisible = false;
      this.cart_arr = [];
      window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.cart_arr));

    }
  },
});
