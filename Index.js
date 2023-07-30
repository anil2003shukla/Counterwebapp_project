const count=document.querySelector('#zero');
const increment=()=>{
      let value=parseInt( count.innerText);
      value=value+1;
      count.innerText=value;
};
const decrement=()=>{
    let value=parseInt( count.innerText);
      value=value-1;
      count.innerText=value;

};