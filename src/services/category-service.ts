import { http } from "@/http/http";

type CreateCategoryParams = {
  name: string;
  icon: string;
  color: string;
  type: number;
};

export type Category = {
  id: number;
  userId: number;
  name: string;
  icon: string;
  color: string;
  type: number;
};

type LoadAllCategoriesResponse = {
  categories: Category[];
};

export const createCategoryService = {
  createCategory: ({ name, icon, color, type }: CreateCategoryParams) =>
    http.post("/categories/register", { name, icon, color, type }),
};

export const loadCategoriesService = {
  loadAll: async (): Promise<Category[]> => {
    const response = await http.get<LoadAllCategoriesResponse>(
      "/categories/user-categories"
    );
    return response.data.categories;
  },
};

export const deleteCategoryService = {
  deleteCategory: ({ id }: { id: number }) =>
    http.delete("/categories/delete", { data: { id } }),
};

export type UpdateCategoryParams = Partial<CreateCategoryParams> & {
  id: number;
};

export const updateCategoryService = {
  updateCategory: ({ id, ...fields }: UpdateCategoryParams) =>
    http.patch("/categories/update", { id, ...fields }),
};
