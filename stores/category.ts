import { supabase } from "~/connection/supabase";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: {} as any,
    status: false,
    message: "",
  }),
  actions: {
    async getAllCategory() {
      let { data: categories, error } = await supabase.from("categories").select("*");

      if (error) {
        this.status = false;
        this.message = error.message;
      } else if (categories) {
        this.status = true;
        this.message = "Get Category successfully";
        this.categories = categories;
      }
    },
    async createCategory(payload: any) {
      const { baseUrl, apikey } = useAppConfig();
      const { data, error } = await useFetch("/rest/v1/categories", {
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
        this.categories = data.value;
      }
    },
  },
});
