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
  },
});
