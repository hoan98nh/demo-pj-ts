import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../type/product";

function Homepage() {
    const pdtUrl = "./product/"
    const [products, setProducts] = useState<Product[]>([]);
    const getPdts = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/product');
            setProducts(data);
        }
        catch (error) {

        }
    }
    useEffect(() => {
        getPdts();
    }, [])
    return (
        <div>
            <h1>Trang chủ</h1>
            <table className="table-auto border border-collapse border-black">
                <thead className="border border-black">
                    <th>ID</th>
                    <th>name</th>
                    <th>price</th>
                    <th>Image</th>
                    <th>desc</th>
                    <th>brand</th>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr className="border border-black">
                            <td>{product.id}</td>
                            <td><a href={pdtUrl + product.id}>{product.name}</a></td>
                            <td>{product.price}</td>
                            <td><img src={product.image} alt="" /></td>
                            <td>{product.description}</td>
                            <td>{product.brand}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}
export default Homepage