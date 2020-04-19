import Api from './api';

const CategoriesService = {
 show: (id) => Api.get(`/categories/${id}`),
 index: () => Api.get('/categories')
}

export default CategoriesService;