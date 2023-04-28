import { combineReducers } from "redux";

// Web3 Connect
import { web3Reducer } from "../redux/slices/wallet3Connect/web3ConnectSlice";
import { modelReducer } from "../redux/slices/helperSlices/modelSlice";

const parentReducer = combineReducers({
  web3Connect: web3Reducer,
  model: modelReducer
});

export default parentReducer;
