import Button from "./Button";
const Recomended = ({clickhandel}) => {
    return ( <>
        <h1>Recomended products</h1>
        <Button onClickHandler={clickhandel} value="" title="All"/>

        <Button onClickHandler={clickhandel}  value="Nike" title="nike"/>
        <Button onClickHandler={clickhandel} value="Adidas" title="stylo"/>
        <Button onClickHandler={clickhandel} value="Puma" title="Maria B"/>
        <Button onClickHandler={clickhandel} value="Vans" title="Korean"/>
        <Button onClickHandler={clickhandel} value="black" title="Black"/>
        <Button onClickHandler={clickhandel} value="red" title="red"/>


    </> );
}
 
export default Recomended;