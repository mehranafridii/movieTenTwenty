import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {navigationRef} from '../navigation/NavigationService';
import {logout} from '../store/authSlice';
import api from '../constants/Api.constants';

const baseQuery = fetchBaseQuery({
  baseUrl: api.baseUrl,
  prepareHeaders: (headers, {getState}) => {
    const token = getState()?.auth?.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
      headers.set('Content-type', 'application/json');
      return headers;
    }
  },
});
const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    Alert.alert('Unauthorized', 'Please log in again.'); // Provide feedback for unauthorized access
  }
  return result;
};

const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});

export default baseApi;
//Methods
export const apiMethods = {
  get: 'GET',
  post: 'POST',
  patch: 'PATCH',
  put: 'PUT',
  delete: 'DELETE',
};
