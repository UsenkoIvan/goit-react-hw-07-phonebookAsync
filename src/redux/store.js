import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { rootReducer } from "../redux/contacts/reducers";

const middleware = applyMiddleware(thunk);

const persistConfig = {
  key: "contacts",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(middleware)
);

export const persistor = persistStore(store);
