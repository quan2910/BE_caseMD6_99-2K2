export declare class CategoryService {
    categoryRepo: any;
    constructor();
    createCategory: (category: any) => Promise<void>;
    getCategory: () => Promise<any>;
    findOneCategoryById: (idCategory: any) => Promise<any>;
    upDateCategory: (idCategory: any, editCategory: any) => Promise<void>;
}
