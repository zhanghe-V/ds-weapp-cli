/*
 * @Date: 2020-07-28 14:58:55
 * @Description:  api 文件可以去掉省略，但是觉得，还是分开好一点
 */ 
import request from '../../utils/request'
export const getProductListApi = () => request.post('695/point/listPointRecords', {})