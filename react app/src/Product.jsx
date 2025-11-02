import './product.css';
//adding prop
function Product(props){
    console.log(props.title)
    return( 
        <div className="Product">
            <h3>{props.title}</h3>
            <h6>This is Product description</h6>
        </div>
    );
}
export default Product;