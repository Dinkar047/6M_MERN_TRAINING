import Cinfo from "./cartinfo";

export default function Shopingcart(){
    return(
        <div>
            <table border={1} >
                <thead>
                <tr>
                    <td>Product Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                </tr>
                </thead>
                <tbody>                  
                   <Cinfo pname={"Apple"} price={"5$"} quantity={"1kg"}/>
                   <Cinfo pname={"Mango"} price={"20$"} quantity={"2kg"}/>                   
                </tbody>
            </table>
        </div>
    )
}