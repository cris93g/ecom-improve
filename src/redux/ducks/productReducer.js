import axios from "axios";

const GET_PRODUCTS = "GET_PRODUCTS";
const GET_TVS = "GET_TVS";

export function getProducts() {
	return {
		type: GET_PRODUCTS,
		payload: axios.get("/api/products")
	};
}
export function getTvs() {
	return {
		type: GET_TVS,
		payload: axios.get("/api/tv")
	};
}
const initialState = {
	products: [],
	tvs: []
};
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case "GET_PRODUCTS_PENDING":
			return { ...state };
		case "GET_PRODUCTS_FULFILLED":
			return { ...state, products: action.payload.data };

		case "GET_PRODUCTS_REJECTED":
			return { ...state, error: action.payload };

		case GET_PRODUCTS + "_FULFILLED":
			return { ...state, products: action.payload.data };

		case "GET_TVS_PENDING":
			return { ...state };
		case "GET_TVS_FULFILLED":
			return { ...state, tvs: action.payload.data };

		case "GET_PTVS_REJECTED":
			return { ...state, error: action.payload };

		case GET_PRODUCTS + "_FULFILLED":
			return { ...state, products: action.payload.data };
		// case GET_TV + "_FULFILLED":
		// 	return { ...state, products: action.payload.data };
		default:
			return state;
	}
}
