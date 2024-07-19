const Navigation = ({handelInput, value, clickhandel}) => {
    return ( <>
    <input type="text" placeholder="search.." onChange={handelInput} value={value}/>
    <input type="radio" onChange={clickhandel} value=""/>All
    <input type="radio" onChange={clickhandel} value="heels" title="Heels"/>Heels
    <input type="radio" onChange={clickhandel} value="sneakers" title="Sneakers"/>Sneakers
     <input type="radio" onChange={clickhandel} value="sandals" title="sandals"/>Sandals

    </> );
}
 
export default Navigation;