import { supabase } from "~/connection/supabase";
import slugify from "slugify";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as any,
    status: false,
    message: "",
  }),
  actions: {
    async getProductBySlug(slug: string) {
      let { data: products, error } = await supabase.from("products").select("*").eq("slug", slug);

      if (error) {
        this.status = false;
        this.message = error.message;
      } else if (products) {
        this.status = true;
        this.message = "Get Detail Product successfully";
        this.products = products;
      }
    },
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
      payload.slug = slugify(payload.name).toLowerCase();

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
        this.message = "Create Product successfully";
        this.products = data.value;
      }
    },
  },
});
