const products = ["apples", "oranges", "bananas"]

// const createProducts = () => {
//     const myProducts = [];
//     products.forEach(product, index => {
//         myProducts.push(<Product name={product} key={index} />);
//     })
//     return myProducts
// }
const createProducts = () => {
    return products.map((product, index) => {
        const name = product.toUpperCase();
        return <Product name={product} key={index}  />
    })
}

const Product = (props) => {
    const {name, index} = props
    console.log(props);
    
    return <li key={index}>{name}</li>
}

const ShoppingList = () => {
    return (
        <ul>
            {createProducts()}
        </ul>
    )
}

const App = () => {
    return (
        <div>
            <h1> h1 from react </h1>
            <ShoppingList />
        </div>
    )
}




const root = document.querySelector('.root');
ReactDOM.render(<App />, root);