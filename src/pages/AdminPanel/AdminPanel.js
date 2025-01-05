import React from 'react'
import { Admin, fetchUtils, Resource,withLifecycleCallbacks } from 'react-admin'
import simpleRestProvider from "ra-data-simple-rest";
import ProductList from './ProductList';
import EditProduct from './EditProduct';
import CreateProduct from './CreateProduct';
import CategoryList from './Category/CategoryList';
import CategoryEdit from './Category/CategoryEdit';
import { fileUpload } from '../../api/fileUpload';

const httpClient = (url,options={})=>{

  const token = localStorage.getItem('authToken');
  if(!options.headers) options.headers = new Headers();
  options.headers.set('Authorization',`Bearer ${token}`);
  return fetchUtils.fetchJson(url,options);
}

const dataProvider = withLifecycleCallbacks(simpleRestProvider('http://localhost:8080/api',httpClient),[
  {
    resource:"products",
    beforeSave: async (params,dataProvider) =>{
      let requestBody = {
        ...params
      }
      let productResList = params?.productResources ?? [];
      const thumbnailResponse = await fileUpload(params?.thumbnail?.rawFile);
      requestBody.thumbnail = thumbnailResponse
    
      const newProductResList = await Promise.all(productResList?.map(async (productResource)=>{
      const fileUploadRes = await fileUpload(productResource?.url?.rawFile);
        return {
          ...productResource,
          url:fileUploadRes
        };
      }));
      const request = {
        ...requestBody,
        productResources:newProductResList
      }
      return request;

    }
  }
]);
export const AdminPanel = () => {
  return (
    <Admin dataProvider={dataProvider} basename='/admin'>
      <Resource name='products' list={ProductList} edit={EditProduct} create={CreateProduct}/>
      <Resource name='category' list={CategoryList} edit={CategoryEdit}/>
    </Admin>
  )
}
