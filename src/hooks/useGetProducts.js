import { useEffect, useState } from "react";
import axios from 'axios';

const useGeProducts = (API) => {
    const [products, setProducts] = useState([]);

	useState(async() =>{
		const response = await axios(API);
		setProducts(response.data);
	}, []);

    return products;
};

export default useGeProducts;