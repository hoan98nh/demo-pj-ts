import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../type/product";
import { error, log } from "console";
import NotFound404 from "./notfound";


function DetailPage() {
    const err = "aa";
    const { id } = useParams();
    const [pdt, setProduct] = useState<Product | undefined>();
    const getPdt = async (id: string) => {
        try {
            const { data, status } = await axios.get('http://localhost:3000/product/' + id);
            if (status == 200) { //kiem tra request thanh cong hay ko
                setProduct(data);
            }
            // console.log(data);
        }
        catch (error) {
            console.log(error);

        }
    }
    useEffect(() => { //neu co id  thi goi getPdt, ko thi dung lai
        if (!id) return;
        getPdt(id);
    }, [id])

    if (!pdt) {
        // return component (xml thay the )
        return (<></>);

    }
    console.log(pdt);
    return (
        <>
            <div>
                <h1>Detail Page</h1>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-3 gap-8 border-b border-black pb-5">
                    <div className="col-span-2">
                        <img src={pdt.image} alt="" className="w-full" /></div>
                    <div className="col-span-1">
                        <div>Id: {pdt.id}</div>
                        <div>
                            Name: <span className="font-bold">{pdt.name}</span>
                        </div>
                        <div className="text-red-500">{pdt.price}đ</div>
                    </div>
                </div>
                <div>Mo ta: {pdt.description}</div>
                <div>Thuong hieu: {pdt.brand}</div>
            </div>
        </>
    );
}

export default DetailPage