import ProductRow from "./ProductRow";
function ProductTable (props){

    const tituloProdutos = props.products.map( (product)=>{
        return( 
            <ProductRow name = {product.name}/>)});
    const priceProdutos = props.products.map( (product)=>{
        return( 
            <ProductRow price = {product.price}/>)});
    const stockProdutos = props.products.map( (product)=>{
        return( 
            <ProductRow price = {product.inStock}/>)});
return (
<div className="tablecss">
    <table>
            <tr className="title">
            <th>Name</th>  
            <th>Price</th> 
            </tr>
            <tr>
            {stockProdutos ? <td>{tituloProdutos}</td>: <td className='redProduct'>{tituloProdutos}</td>}
              <td>{priceProdutos}</td>
            </tr>

    </table>  
</div>  
);
}
export default ProductTable;