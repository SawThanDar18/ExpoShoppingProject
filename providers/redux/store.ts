import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import productReducer from "@/providers/redux/productSliceForAPI";
//import { apiSlice } from "@/providers/redux/query/apiSlice";

// export const store = configureStore({
//   reducer: { 
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     users: userReducer,
//     usersEntity: usersEntityReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// });

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;