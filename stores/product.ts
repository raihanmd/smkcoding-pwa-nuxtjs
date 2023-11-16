import { supabase } from "~/connection/supabase";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as any,
    status: false,
    message: "",
  }),
  actions: {
    async getAllProducts() {
      let { data: products, error } = await supabase.from("products").select("*");

      if (error) {
        this.status = false;
        this.message = error.message;
      } else if (products) {
        this.status = true;
        this.message = "Get Products successfully";
        this.products = products;
      }
    },
    async createProduct(payload: any) {
      const { baseUrl, apikey } = useAppConfig();
      const { data, error } = await useFetch("/rest/v1/products", {
        baseURL: baseUrl,
        method: "POST",
        headers: {
          apikey: apikey as string,
        },
        body: payload,
      });

      if (error.value) {
        this.status = false;
        this.message = error.value.message;
      } else if (data) {
        this.status = true;
        this.message = "Get Products successfully";
        this.products = data.value;
      }
    },
  },
});
