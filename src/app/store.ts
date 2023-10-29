import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counter-slice'
import { dogsapiSlice } from '../features/dogs/dogs-api-slice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [dogsapiSlice.reducerPath]: dogsapiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(dogsapiSlice.middleware)
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>