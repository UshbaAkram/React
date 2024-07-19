import { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import Recomended from "./components/Recomended";
import data from "./db/data";
import Products from "./components/Products";
import Navigation from "./components/Navigation";

function App() {
  const [cate, setCate] = useState(null);
  const [input, setInput] = useState("");
  function clickhandel(e) {
    setCate(e.target.value);
    console.log(cate);
  }
  function handelInput(e){
setInput(e.target.value)
  }
  function filterPro(categ,input, data) {
    let filterProduct = data;
    if (categ) {
      filterProduct = filterProduct.filter(
        ({ category, color, company, newPrice, title }) => 
          category === categ ||
            color === categ ||
            company === categ ||
            title === categ
        
      );
    }
    if(input){
      filterProduct=data.filter((d)=>
      d.title.toLowerCase().indexOf(input.toLowerCase()) !==-1
      )
    }
    return filterProduct.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filterPro(cate,input, data);
  return (
    <>
      <Recomended clickhandel={clickhandel} />
      <Navigation handelInput={handelInput} clickhandel={clickhandel} value={input}/>
      <Products result={result} />
    </>
  );
}

export default App;
