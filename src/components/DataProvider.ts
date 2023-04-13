
export default {
  props: {
    category: {
      type: String,
      required: true
    }
  },
  name: "DataProvider",
  data: () => ({
    data: null,
    loaded: false
  }),
  async created() {
    const response = await fetch(
      `https://dummyjson.com/products/category/${this.category}`
    ).then((res) => res.json());
    this.data = response.products;
  },
  render() {
    const slot = this.$slots.default({
      loading: !this.loaded,
      data: this.data
    });

    return Array.isArray(slot) ? slot[0] : slot;
  }
};