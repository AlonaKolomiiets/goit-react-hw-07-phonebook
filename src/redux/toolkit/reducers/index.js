import { combineReducers } from "redux";
import contactsReducer from "./contactsReducer";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
