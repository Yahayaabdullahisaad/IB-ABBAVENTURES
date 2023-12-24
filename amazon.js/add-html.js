const addImage=document.querySelector('.add-image'),
 deleteProduct=document.querySelector('.delete-product'),
 addImageFile=document.querySelector('.add-image-file'),
 addproductName=document.querySelector('.add-product-name'),
 addproductId=document.querySelector('.add-product-description'),
 addPrice=document.querySelector('.add-price'),
 addRating=document.querySelector('.add-rating'),
 addCount=document.querySelector('.add-count'),
addNewButton=document.querySelector('.add-new-button');
/**
 let products=JSON.parse(localStorage.getItem('product'))||localStorage.setItem('product',JSON.stringify([]));
 */

function addProduct(){
let cart=[];
let searchShowsArray=[];
searchShowsArrayOrders=[];
let allProductsHtml,searchShows;
searchShows='';
allProductsHtml='';
console.log(JSON.parse(localStorage.getItem('product')))

localStorage.setItem('product',JSON.stringify(products))
  for(let i=0;i<products.length;i++){
    allProductsHtml+=`
      <section section id="product-catch-${i}">
      
        <div class="product-container">
        <button class="delete-product"onclick="
        products.splice(${i},1);
        addProduct()
        ">x</button>
        <div class="product-image-container">
          <img class="product-image"
            src=${products[i].image}>
        </div>
  
        <div class="product-name limit-text-to-2-lines">
          ${products[i].name}
        </div>
  
        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="images/ratings/rating-${products[i].rating.stars * 10}.png">
          <div class="product-rating-count link-primary">
            ${products[i].rating.count}
          </div>
        </div>
  
        <div class="product-price">
          $${(products[i].priceCents/100).toFixed(2)}
        </div>
  
        <div class="product-quantity-container">
          <select class="add-select" data-select-id="${products[i].id}">
            <option selected class="display-none-a" value="0">+1</option>
            <option  value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
  
        <div class="product-spacer"></div>
  
        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>
  
        <button class="add-to-cart-button button-primary" data-product-id='${products[i].id}'>
          Add to Cart
        </button>
    </div>
  </section>`;
    searchShows+=`<a href="#product-catch-${i}" class="search-shows-a" onclick="
    document.querySelector('.search-shows-div').style.display='none';
    "><p class="search-shows-p" data-search-p-id=${i}>${products[i].name}
        </p></a>`;
      searchShowsArray.push(`<a href="#product-catch-${i}" class="search-shows-a" onclick="
       document.querySelector('.search-shows-div').style.display='none';
       "><p class="search-shows-p" data-search-p-id=${i}>${products[i].name}
           </p></a>`)
        
  } 
  document.querySelector('.products-grid').innerHTML=allProductsHtml;
  document.querySelector('.search-shows-div').innerHTML=searchShows;
  document.querySelectorAll('.button-primary').forEach((allAddbutton)=>{
    allAddbutton.addEventListener('click',()=>{
      let cartId=allAddbutton.dataset.productId;
      let marchingItem;
      let setdate,setMonth,monthAndDay;
      getdate=new Date();
      setmonth=getdate.getMonth();
      getday=getdate.getDay();
      getdateday=getdate.getDate();
      const monthsArray=['January','February','March','April','May','June','July','August','September','October','November','December'];
      getmonth=monthsArray[setmonth];
      //change month
      let datedays;
      let changemonth,changemonthi,changemonthii,changemonthiii;
      let changedayi,changedayii,changedayiii;
      datedays=getdateday;
     if(datedays>=25 && getmonth==='January'){
      //changemonthi
      if(datedays>29){
        changemonthi=monthsArray[Number(setmonth)+1];
        if(datedays===30){
          changedayi=1;
        }else if(datedays===31){
          changedayi=2;
        }
       }else{
        changemonthi=monthsArray[Number(setmonth)];
        changedayi=datedays+2;
       }
       //changemonthii
       if(datedays>27){
        changemonthii=monthsArray[Number(setmonth)+1];
        if(datedays===28){
          changedayii=1;
        }else if(datedays===29){
          changedayii=2;
        }else if(datedays===30){
          changedayii=3;
        }else if(datedays===31){
          changedayii=4;
        }
       }else{
        changemonthii=monthsArray[Number(setmonth)];
        changedayii=datedays+4;
       }
       //changemonthiii
       if(datedays>25){
        changemonthiii=monthsArray[Number(setmonth)+1];
        if(datedays===26){
          changedayiii=1;
        }else if(datedays===27){
          changedayiii=2;
        }else if(datedays===38){
          changedayiii=3;
        }else if(datedays===29){
          changedayiii=4;
        }else if(datedays===30){
          changedayiii=5;
        }else if(datedays===31){
          changedayiii=6;
        }
       }else{
        changemonthiii=monthsArray[Number(setmonth)];
        changedayiii=datedays+6;
       }
      
     }else if(datedays>=23 && getmonth==='February'){
      //changemonthi
      if(datedays>27){
        changemonthi=monthsArray[Number(setmonth)+1];
        if(datedays===28){
          changedayi=1;
        }else if(datedays===29){
          changedayi=2;
        }
       }else{
        changemonthi=monthsArray[Number(setmonth)];
        changedayi=datedays+2;
       }
       //changemonthii
       if(datedays>25){
        changemonthii=monthsArray[Number(setmonth)+1];
        if(datedays===26){
          changedayii=1;
        }else if(datedays===27){
          changedayii=2;
        }else if(datedays===28){
          changedayii=3;
        }else if(datedays===29){
          changedayii=4;
        }
       }else{
        changemonthii=monthsArray[Number(setmonth)];
        changedayii=datedays+4;
       }
       //changemonthiii
       if(datedays>23){
        changemonthiii=monthsArray[Number(setmonth)+1];
        if(datedays===24){
          changedayiii=1;
        }else if(datedays===25){
          changedayiii=2;
        }else if(datedays===26){
          changedayiii=3;
        }else if(datedays===27){
          changedayiii=4;
        }else if(datedays===28){
          changedayiii=5;
        }else if(datedays===29){
          changedayiii=6;
        }
       }else{
        changemonthiii=monthsArray[Number(setmonth)];
        changedayiii=datedays+6;
       }   
     }else if(datedays>=25 && getmonth==='March'){
      //changemonthi
      if(datedays>29){
        changemonthi=monthsArray[Number(setmonth)+1];
        if(datedays===30){
          changedayi=1;
        }else if(datedays===31){
          changedayi=2;
        }
       }else{
        changemonthi=monthsArray[Number(setmonth)];
        changedayi=datedays+2;
       }
       //changemonthii
       if(datedays>27){
        changemonthii=monthsArray[Number(setmonth)+1];
        if(datedays===28){
          changedayii=1;
        }else if(datedays===29){
          changedayii=2;
        }else if(datedays===30){
          changedayii=3;
        }else if(datedays===31){
          changedayii=4;
        }
       }else{
        changemonthii=monthsArray[Number(setmonth)];
        changedayii=datedays+4;
       }
       //changemonthiii
       if(datedays>25){
        changemonthiii=monthsArray[Number(setmonth)+1];
        if(datedays===26){
          changedayiii=1;
        }else if(datedays===27){
          changedayiii=2;
        }else if(datedays===38){
          changedayiii=3;
        }else if(datedays===29){
          changedayiii=4;
        }else if(datedays===30){
          changedayiii=5;
        }else if(datedays===31){
          changedayiii=6;
        }
       }else{
        changemonthiii=monthsArray[Number(setmonth)];
        changedayiii=datedays+6;
       }
      
     }else if(datedays>=24 && getmonth==='April'){
      //changemonthi
      if(datedays>28){
        changemonthi=monthsArray[Number(setmonth)+1];
        if(datedays===29){
          changedayi=1;
        }else if(datedays===30){
          changedayi=2;
        }
       }else{
        changemonthi=monthsArray[Number(setmonth)];
        changedayi=datedays+2;
       }
       //changemonthii
       if(datedays>26){
        changemonthii=monthsArray[Number(setmonth)+1];
        if(datedays===27){
          changedayii=1;
        }else if(datedays===28){
          changedayii=2;
        }else if(datedays===29){
          changedayii=3;
        }else if(datedays===30){
          changedayii=4;
        }
       }else{
        changemonthii=monthsArray[Number(setmonth)];
        changedayii=datedays+4;
       }
       //changemonthiii
       if(datedays>24){
        changemonthiii=monthsArray[Number(setmonth)+1];
        if(datedays===25){
          changedayiii=1;
        }else if(datedays===26){
          changedayiii=2;
        }else if(datedays===27){
          changedayiii=3;
        }else if(datedays===28){
          changedayiii=4;
        }else if(datedays===29){
          changedayiii=5;
        }else if(datedays===30){
          changedayiii=6;
        }
       }else{
        changemonthiii=monthsArray[Number(setmonth)];
        changedayiii=datedays+6;
       }
     }else if(datedays>=25 && getmonth==='May'){
      //changemonthi
      if(datedays>29){
        changemonthi=monthsArray[Number(setmonth)+1];
        if(datedays===30){
          changedayi=1;
        }else if(datedays===31){
          changedayi=2;
        }
       }else{
        changemonthi=monthsArray[Number(setmonth)];
        changedayi=datedays+2;
       }
       //changemonthii
       if(datedays>27){
        changemonthii=monthsArray[Number(setmonth)+1];
        if(datedays===28){
          changedayii=1;
        }else if(datedays===29){
          changedayii=2;
        }else if(datedays===30){
          changedayii=3;
        }else if(datedays===31){
          changedayii=4;
        }
       }else{
        changemonthii=monthsArray[Number(setmonth)];
        changedayii=datedays+4;
       }
       //changemonthiii
       if(datedays>25){
        changemonthiii=monthsArray[Number(setmonth)+1];
        if(datedays===26){
          changedayiii=1;
        }else if(datedays===27){
          changedayiii=2;
        }else if(datedays===38){
          changedayiii=3;
        }else if(datedays===29){
          changedayiii=4;
        }else if(datedays===30){
          changedayiii=5;
        }else if(datedays===31){
          changedayiii=6;
        }
       }else{
        changemonthiii=monthsArray[Number(setmonth)];
        changedayiii=datedays+6;
       }
      
     }else if(datedays>=24 && getmonth==='June'){
      //changemonthi
      if(datedays>28){
        changemonthi=monthsArray[Number(setmonth)+1];
        if(datedays===29){
          changedayi=1;
        }else if(datedays===30){
          changedayi=2;
        }
       }else{
        changemonthi=monthsArray[Number(setmonth)];
        changedayi=datedays+2;
       }
       //changemonthii
       if(datedays>26){
        changemonthii=monthsArray[Number(setmonth)+1];
        if(datedays===27){
          changedayii=1;
        }else if(datedays===28){
          changedayii=2;
        }else if(datedays===29){
          changedayii=3;
        }else if(datedays===30){
          changedayii=4;
        }
       }else{
        changemonthii=monthsArray[Number(setmonth)];
        changedayii=datedays+4;
       }
       //changemonthiii
       if(datedays>24){
        changemonthiii=monthsArray[Number(setmonth)+1];
        if(datedays===25){
          changedayiii=1;
        }else if(datedays===26){
          changedayiii=2;
        }else if(datedays===27){
          changedayiii=3;
        }else if(datedays===28){
          changedayiii=4;
        }else if(datedays===29){
          changedayiii=5;
        }else if(datedays===30){
          changedayiii=6;
        }
       }else{
        changemonthiii=monthsArray[Number(setmonth)];
        changedayiii=datedays+6;
       }
     }else if(datedays>=25 && getmonth==='July'){
      //changemonthi
      if(datedays>29){
        changemonthi=monthsArray[Number(setmonth)+1];
        if(datedays===30){
          changedayi=1;
        }else if(datedays===31){
          changedayi=2;
        }
       }else{
        changemonthi=monthsArray[Number(setmonth)];
        changedayi=datedays+2;
       }
       //changemonthii
       if(datedays>27){
        changemonthii=monthsArray[Number(setmonth)+1];
        if(datedays===28){
          changedayii=1;
        }else if(datedays===29){
          changedayii=2;
        }else if(datedays===30){
          changedayii=3;
        }else if(datedays===31){
          changedayii=4;
        }
       }else{
        changemonthii=monthsArray[Number(setmonth)];
        changedayii=datedays+4;
       }
       //changemonthiii
       if(datedays>25){
        changemonthiii=monthsArray[Number(setmonth)+1];
        if(datedays===26){
          changedayiii=1;
        }else if(datedays===27){
          changedayiii=2;
        }else if(datedays===38){
          changedayiii=3;
        }else if(datedays===29){
          changedayiii=4;
        }else if(datedays===30){
          changedayiii=5;
        }else if(datedays===31){
          changedayiii=6;
        }
       }else{
        changemonthiii=monthsArray[Number(setmonth)];
        changedayiii=datedays+6;
       }
      
     }else if(datedays>=24 && getmonth==='August'){
      //changemonthi
      if(datedays>28){
        changemonthi=monthsArray[Number(setmonth)+1];
        if(datedays===29){
          changedayi=1;
        }else if(datedays===30){
          changedayi=2;
        }
       }else{
        changemonthi=monthsArray[Number(setmonth)];
        changedayi=datedays+2;
       }
       //changemonthii
       if(datedays>26){
        changemonthii=monthsArray[Number(setmonth)+1];
        if(datedays===27){
          changedayii=1;
        }else if(datedays===28){
          changedayii=2;
        }else if(datedays===29){
          changedayii=3;
        }else if(datedays===30){
          changedayii=4;
        }
       }else{
        changemonthii=monthsArray[Number(setmonth)];
        changedayii=datedays+4;
       }
       //changemonthiii
       if(datedays>24){
        changemonthiii=monthsArray[Number(setmonth)+1];
        if(datedays===25){
          changedayiii=1;
        }else if(datedays===26){
          changedayiii=2;
        }else if(datedays===27){
          changedayiii=3;
        }else if(datedays===28){
          changedayiii=4;
        }else if(datedays===29){
          changedayiii=5;
        }else if(datedays===30){
          changedayiii=6;
        }
       }else{
        changemonthiii=monthsArray[Number(setmonth)];
        changedayiii=datedays+6;
       }
     }else if(datedays>=25 && getmonth=='September'){
       //changemonthi
       if(datedays>29){
        changemonthi=monthsArray[Number(setmonth)+1];
        if(datedays===30){
          changedayi=1;
        }else if(datedays===31){
          changedayi=2;
        }
       }else{
        changemonthi=monthsArray[Number(setmonth)];
        changedayi=datedays+2;
       }
       //changemonthii
       if(datedays>27){
        changemonthii=monthsArray[Number(setmonth)+1];
        if(datedays===28){
          changedayii=1;
        }else if(datedays===29){
          changedayii=2;
        }else if(datedays===30){
          changedayii=3;
        }else if(datedays===31){
          changedayii=4;
        }
       }else{
        changemonthii=monthsArray[Number(setmonth)];
        changedayii=datedays+4;
       }
       //changemonthiii
       if(datedays>25){
        changemonthiii=monthsArray[Number(setmonth)+1];
        if(datedays===26){
          changedayiii=1;
        }else if(datedays===27){
          changedayiii=2;
        }else if(datedays===38){
          changedayiii=3;
        }else if(datedays===29){
          changedayiii=4;
        }else if(datedays===30){
          changedayiii=5;
        }else if(datedays===31){
          changedayiii=6;
        }
       }else{
        changemonthiii=monthsArray[Number(setmonth)];
        changedayiii=datedays+6;
       }
     }else if(datedays>=24 && getmonth==='October'){
      //changemonthi
      if(datedays>28){
        changemonthi=monthsArray[Number(setmonth)+1];
        if(datedays===29){
          changedayi=1;
        }else if(datedays===30){
          changedayi=2;
        }
       }else{
        changemonthi=monthsArray[Number(setmonth)];
        changedayi=datedays+2;
       }
       //changemonthii
       if(datedays>26){
        changemonthii=monthsArray[Number(setmonth)+1];
        if(datedays===27){
          changedayii=1;
        }else if(datedays===28){
          changedayii=2;
        }else if(datedays===29){
          changedayii=3;
        }else if(datedays===30){
          changedayii=4;
        }
       }else{
        changemonthii=monthsArray[Number(setmonth)];
        changedayii=datedays+4;
       }
       //changemonthiii
       if(datedays>24){
        changemonthiii=monthsArray[Number(setmonth)+1];
        if(datedays===25){
          changedayiii=1;
        }else if(datedays===26){
          changedayiii=2;
        }else if(datedays===27){
          changedayiii=3;
        }else if(datedays===28){
          changedayiii=4;
        }else if(datedays===29){
          changedayiii=5;
        }else if(datedays===30){
          changedayiii=6;
        }
       }else{
        changemonthiii=monthsArray[Number(setmonth)];
        changedayiii=datedays+6;
       }
      
     }else if(datedays>=25 && getmonth==='November'){
      //changemonthi
      if(datedays>29){
        changemonthi=monthsArray[Number(setmonth)+1];
        if(datedays===30){
          changedayi=1;
        }else if(datedays===31){
          changedayi=2;
        }
       }else{
        changemonthi=monthsArray[Number(setmonth)];
        changedayi=datedays+2;
       }
       //changemonthii
       if(datedays>27){
        changemonthii=monthsArray[Number(setmonth)+1];
        if(datedays===28){
          changedayii=1;
        }else if(datedays===29){
          changedayii=2;
        }else if(datedays===30){
          changedayii=3;
        }else if(datedays===31){
          changedayii=4;
        }
       }else{
        changemonthii=monthsArray[Number(setmonth)];
        changedayii=datedays+4;
       }
       //changemonthiii
       if(datedays>25){
        changemonthiii=monthsArray[Number(setmonth)+1];
        if(datedays===26){
          changedayiii=1;
        }else if(datedays===27){
          changedayiii=2;
        }else if(datedays===38){
          changedayiii=3;
        }else if(datedays===29){
          changedayiii=4;
        }else if(datedays===30){
          changedayiii=5;
        }else if(datedays===31){
          changedayiii=6;
        }
       }else{
        changemonthiii=monthsArray[Number(setmonth)];
        changedayiii=datedays+6;
       }
     }else if(datedays>=24 && getmonth==='December'){
       //changemonthi
        if(datedays>28){
          changemonthi=monthsArray[Number(setmonth)+1];
          if(datedays===29){
            changedayi=1;
          }else if(datedays===30){
            changedayi=2;
          }
        }else{
          changemonthi=monthsArray[Number(setmonth)];
          changedayi=datedays+2;
        }
        //changemonthii
        if(datedays>26){
          changemonthii=monthsArray[Number(setmonth)+1];
          if(datedays===27){
            changedayii=1;
          }else if(datedays===28){
            changedayii=2;
          }else if(datedays===29){
            changedayii=3;
          }else if(datedays===30){
            changedayii=4;
          }
        }else{
          changemonthii=monthsArray[Number(setmonth)];
          changedayii=datedays+4;
        }
        //changemonthiii
        if(datedays>24){
          changemonthiii=monthsArray[Number(setmonth)+1];
          if(datedays===25){
            changedayiii=1;
          }else if(datedays===26){
            changedayiii=2;
          }else if(datedays===27){
            changedayiii=3;
          }else if(datedays===28){
            changedayiii=4;
          }else if(datedays===29){
            changedayiii=5;
          }else if(datedays===30){
            changedayiii=6;
          }
        }else{
          changemonthiii=monthsArray[Number(setmonth)];
          changedayiii=datedays+6;
        }
     }else{
      changemonthi=monthsArray[Number(setmonth)];
      changedayi=datedays+2;
      changemonthii=monthsArray[Number(setmonth)];
      changedayii=datedays+4;
      changemonthiii=monthsArray[Number(setmonth)];
      changedayiii=datedays+6;
     }
     
      //weeks pick getday-3
      let normalweekspick,iiweekspick,ivweekspick,viweekspick,weeksArray;
      let normalgetweeks,iigetweeks,ivgetweeks,vigetweeks;
      weeksArray=['sunday','Monday','Tuesday','Wednesday','Thursday','Friday','saturday'];
      
      //normalweek-iiweek-ivweek-viweek
      normalweekspick=getday;
      if(normalweekspick<=6){
        //normal week
        normalweekspick=getday;
        normalgetweeks=weeksArray[normalweekspick];
        // ii week
        iiweekspick=(getday)+2<6?(getday)+2:(getday)+2-6;
        iigetweeks=weeksArray[iiweekspick];
        // iv week
        ivweekspick=(getday)+4<6?(getday)+4:(getday)+4-6;
        ivgetweeks=weeksArray[ivweekspick];
        
        // vi week
        viweekspick=(getday)+6<6?(getday)+6:(getday)+6-6;
        vigetweeks=weeksArray[viweekspick];

      }
      
      let normalweeks,iiweeks,ivweeks,viweeks;
      normalweeks=normalgetweeks;
      iiweeks=iigetweeks;
      ivweeks=ivgetweeks;
      viweeks=vigetweeks;

      cart.forEach((cart)=>{
        if(cartId===cart.id){
          marchingItem=cart;
        }
      })
      if(marchingItem){
        marchingItem.quantity+=1;
      }else{
        cart.push({
          id:cartId,
          quantity:1,
          normalsetweek:normalweeks,
          setmonth:getmonth,
          setdateday:getdateday,
          iisetweek:iiweeks,
          ivsetweek:ivweeks,
          visetweek:viweeks,
          changemonthi:changemonthi,
          changemonthii,changemonthii,
          changemonthiii:changemonthiii,
          changedayi:changedayi,
          changedayii:changedayii,
          changedayiii:changedayiii
        })
      }
      let alltracking,allCart,allcheckout,searchShowsOrders,totalPrice,checkoutTable;
      allCart,alltracking,allcheckout='','','';
      allCart='';
      searchShowsOrders='';
      totalPrice=0;
      
      for(let i=0;i<cart.length;i++){
        let cartId,cartSetDateDay,productName,productPrice,productId,productImage;
        
        cartId=cart[i].id;
        cartSetDateDay=cart[i].setdateday;
        cartquantity=cart[i].quantity;
        cartsetmonth=cart[i].setmonth;
        cartsetday=cart[i].setday;
        cartnormalsetweek=cart[i].normalsetweek;
        cartiisetweek=cart[i].iisetweek;
        cartivsetweek=cart[i].ivsetweek;
        cartvisetweek=cart[i].visetweek;
        //changeMonth
        changeMonthi=cart[i].changemonthi;
        changeMonthii=cart[i].changemonthii;
        changeMonthiii=cart[i].changemonthiii;
        //changeday
        changeDayi=cart[i].changedayi;
        changeDayii=cart[i].changedayii;
        changeDayiii=cart[i].changedayiii;
        productName='';
        productPrice='';
        
        for(let i=0;i<products.length;i++){
          if(cartId===products[i].id){
            productName=products[i].name;
            productId=products[i].id;
            productImage=products[i].image;
            productPrice=products[i].priceCents;
          }
        }
        //checkout total
        totalPrice+=productPrice*cartquantity;
        let totalQuantity=document.querySelector(".cart-quantity");
        
        checkoutTable=`
              <div class="payment-summary-title">
                  Order Summary
              </div>

              <div class="payment-summary-row">
                  <div>Items (<span class="checkout-summary-quantity">${Number(totalQuantity.innerText)+1}</span>):</div>
                  <div class="payment-summary-money">$<span class="checkout-payment-total">${(totalPrice/100).toFixed(2)}</span></div>
              </div>

              <div class="payment-summary-row">
                  <div>Shipping &amp; handling:</div>
                  <div class="payment-summary-money">$<span class="shipping-hadling">0.00</span></div>
              </div>

              <div class="payment-summary-row subtotal-row">
                  <div>Total before tax:</div>
                  <div class="payment-summary-money">$<span class="total-before-tax">${(totalPrice/100).toFixed(2)}</span></div>
              </div>

              <div class="payment-summary-row">
                  <div>Estimated tax (10%):</div>
                  <div class="payment-summary-money">$<span class="Estimated-tax">${((totalPrice/100)*0.1).toFixed(2)}</span></div>
              </div>

              <div class="payment-summary-row total-row">
                  <div>Order total:</div>
                  <div class="payment-summary-money">$<span class="all-order-total">${((totalPrice/100)+((totalPrice/100)*0.1)).toFixed(2)}</span></div>
              </div>

              <button class="place-order-button button-primary">
                  Place your order
              </button>
              </div>
          </div>`;
        allcheckout+=`
        <div class="cart-item-container">
          <div class="delivery-date">
            Delivery date: <span class="span-delivery-date-${i}">${cartiisetweek}, ${changeMonthiii} ${changeDayi}</span> 
            </div>

            <div class="cart-item-details-grid">
            <img class="product-image"
                src="${productImage}">

            <div class="cart-item-details">
                <div class="product-name-checkout">
                ${productName}
                </div>
                <div class="product-price-checkout">
                $<span class="checkout-product-price-${i}">${(productPrice*cart[i].quantity/100).toFixed(2)}</span>
                </div>
                <div class="product-quantity-checkout">
                <span>
                    Quantity: <span class="quantity-label-${i}">${cart[i].quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                    Update
                </span>
                <span class="delete-quantity-link link-primary">
                    Delete
                </span>
                </div>
            </div>

            <div class="delivery-options">
                <div class="delivery-options-title">
                Choose a delivery option:
                </div>
                <div class="delivery-option">
                <input type="radio" onclick="
                
                
                <!--first radio pick-->
                let spanDeliveryDate,deliveryOpationDatei,spanTrackingDate,productOderDate;
                productOderDate=document.querySelector('.product-order-date-${i}');
                spanTrackingDate=document.querySelector('.span-tracking-date-${i}');
                spanDeliveryDate=document.querySelector('.span-delivery-date-${i}');
                deliveryOpationDatei=document.querySelector('.delivery-option-date-i-${i}');
                spanDeliveryDate.innerText=deliveryOpationDatei.innerText;
                spanTrackingDate.innerText=deliveryOpationDatei.innerText;
                productOderDate.innerText=deliveryOpationDatei.innerText;
                //checkout-payment-total
                let checkoutTotal=document.querySelector('.checkout-payment-total');
                //shipping-hadling
                let shippingHandling=document.querySelector('.shipping-hadling');
                shippingHandling.innerHTML=(0).toFixed(2);
                //total-before-tax
                let totalBeforeTax=document.querySelector('.total-before-tax');
                totalBeforeTax.innerHTML=(Number(checkoutTotal.innerText)+Number(shippingHandling.innerText)).toFixed(2);
                //Estimated-tax
                EstimatedTax=document.querySelector('.Estimated-tax');
                //all-order-total
                let orderTotal=document.querySelector('.all-order-total');
                orderTotal.innerHTML=(Number(checkoutTotal.innerText)+Number(EstimatedTax.innerText)+Number(shippingHandling.innerText)).toFixed(2);
                document.querySelector('.p-${i}').innerHTML='';
                document.querySelector('.pp-${i}').innerHTML='';
                "
                    class="delivery-option-input"
                    name="delivery-option-1">
                <div>
                    <div class="delivery-option-date delivery-option-date-i-${i}" //>
                    ${cartiisetweek}, ${changeMonthiii} ${changeDayi}
                    </div>
                    <div class="delivery-option-price">
                    FREE Shipping
                    </div>
                </div>
                </div>
                <div class="delivery-option">
                <input type="radio"
                    class="delivery-option-input"  onclick="
                    
                    <!--secound radio pick-->
                    let spanDeliveryDate,deliveryOpationDateii,spanTrackingDate,productOderDate;
                    productOderDate=document.querySelector('.product-order-date-${i}');
                    spanTrackingDate=document.querySelector('.span-tracking-date-${i}');
                    spanDeliveryDate=document.querySelector('.span-delivery-date-${i}');
                    deliveryOpationDateii=document.querySelector('.delivery-option-date-ii-${i}');
                    spanDeliveryDate.innerText=deliveryOpationDateii.innerText;
                    spanTrackingDate.innerText=deliveryOpationDateii.innerText;
                    productOderDate.innerText=deliveryOpationDateii.innerText;
                    //checkout-payment-total
                    let checkoutTotal=document.querySelector('.checkout-payment-total');
                    //shipping-hadling
                    let shippingHandling=document.querySelector('.shipping-hadling');
                    shippingHandling.innerHTML=(Number(checkoutTotal.innerText)/11).toFixed(2);
                    //total-before-tax
                    let totalBeforeTax=document.querySelector('.total-before-tax');
                    totalBeforeTax.innerHTML=(Number(checkoutTotal.innerText)+Number(shippingHandling.innerText)).toFixed(2);
                    //Estimated-tax
                    EstimatedTax=document.querySelector('.Estimated-tax');
                    //all-order-total
                    let orderTotal=document.querySelector('.all-order-total');
                    orderTotal.innerHTML=(Number(checkoutTotal.innerText)+Number(EstimatedTax.innerText)+Number(shippingHandling.innerText)).toFixed(2);
                    document.querySelector('.p-${i}').innerHTML='true';
                    document.querySelector('.pp-${i}').innerHTML='';
                    "
                    name="delivery-option-1">
                <div>
                    <div class="delivery-option-date delivery-option-date-ii-${i}" //>
                    ${cartivsetweek}, ${changeMonthii} ${changeDayii}
                    </div>
                    <div class="delivery-option-price">
                    $<span class="radio-shipping-handling-11">${((totalPrice/100)/11).toFixed(2)}</span> - Shipping
                    </div>
                </div>
                </div>
                <div class="delivery-option">
                <input type="radio"
                    class="delivery-option-input" onclick="
                    
                    <!--last radio pick-->
                    let spanDeliveryDate,deliveryOpationDateiii,spanTrackingDate,productOderDate;
                    productOderDate=document.querySelector('.product-order-date-${i}');
                    spanTrackingDate=document.querySelector('.span-tracking-date-${i}');
                    spanDeliveryDate=document.querySelector('.span-delivery-date-${i}');
                    deliveryOpationDateiii=document.querySelector('.delivery-option-date-iii-${i}');
                    spanDeliveryDate.innerText=deliveryOpationDateiii.innerText;
                    spanTrackingDate.innerText=deliveryOpationDateiii.innerText;
                    productOderDate.innerText=deliveryOpationDateiii.innerText;
                    //checkout-payment-total
                    let checkoutTotal=document.querySelector('.checkout-payment-total');
                    //shipping-hadling
                    let shippingHandling=document.querySelector('.shipping-hadling');
                    shippingHandling.innerHTML=(Number(checkoutTotal.innerText)/8).toFixed(2);
                    //total-before-tax
                    let totalBeforeTax=document.querySelector('.total-before-tax');
                    totalBeforeTax.innerHTML=(Number(checkoutTotal.innerText)+Number(shippingHandling.innerText)).toFixed(2);
                    //Estimated-tax
                    EstimatedTax=document.querySelector('.Estimated-tax');
                    //all-order-total
                    let orderTotal=document.querySelector('.all-order-total');
                    orderTotal.innerHTML=(Number(checkoutTotal.innerText)+Number(EstimatedTax.innerText)+Number(shippingHandling.innerText)).toFixed(2);
                    document.querySelector('.pp-${i}').innerHTML='true';
                    document.querySelector('.p-${i}').innerHTML='';
                    "
                    name="delivery-option-1">
                <div>
                    <div class="delivery-option-date delivery-option-date-iii-${i}">
                    ${cartvisetweek}, ${changeMonthi} ${changeDayiii} 
                    </div>
                    <div class="delivery-option-price">
                    $<span class="radio-shipping-handling-8">${((totalPrice/100)/8).toFixed(2)}</span> - Shipping
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
       `; 
        alltracking+=`
        <section id="tracking-${i}" class="tracking-section">
          <div class="main-tracking">
          <div class="order-tracking">
            <a class="back-to-orders-link link-primary" href="#orders">
              View all orders
            </a>
    
            <div class="delivery-date">
              Arriving on: <span class="span-tracking-date-${i}">${cartiisetweek}, ${changeMonthiii} ${changeDayi}</span>
            </div>
    
            <div class="product-info">
              ${productName}
            </div>
    
            <div class="product-info">
              Quantity: <span class="addcart-${i}">${cart[i].quantity}</span> 
            </div>
    
            <img class="product-image" src="${productImage}">
    
            <div class="progress-labels-container">
              <div class="progress-label progress-current-preparing-${i}">
                Preparing
              </div>
              <div class="progress-label progress-current-shipped-${i}">
                Shipped
              </div>
              <div class="progress-label progress-current-delivered-${i}">
                Delivered
              </div>
            </div>
    
            <div class="progress-bar-container">
              <div class="progress-bar progress-bar-reading-${i}"></div>
            </div>
          </div>
        </div>
      </section>
        
         `;
        allCart+=`
        <section id="order-container-${i}">
          <div class="order-container">
          <p class="p-${i} p"></p>
          <p class="pp-${i} p"></p>
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>${cartnormalsetweek}, ${cartsetmonth} ${cartSetDateDay}
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                $<span class="order-product-price-${i}">${(productPrice*cart[i].quantity/100).toFixed(2)}</span>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${cart[i].id}</div>
            </div>
          </div>

          <div class="order-details-grid">
            <div class="product-image-container">
              <img src="${productImage}">
            </div>

            <div class="product-details">
              <div class="product-name">
              ${productName}
              </div>
              <div class="product-delivery-date">
              arriving on:<span class="product-order-date-${i}">${cartiisetweek}, ${changeMonthiii} ${changeDayi} </span>
              </div>
              <div class="product-quantity">
                Quantity: <span class="cart-quantity-${i}">${cart[i].quantity}<span> 
              </div>
              <div class="product-quantity-container">
                <select class="add-select" >
                  <option selected class="display-none-a">+1</option>
                </select>
              </div>
              <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message" data-product-id='${productId}' onclick="
                //addQuantityLabel-checkout
                let addQuantityLabel=document.querySelector('.quantity-label-${i}');
                addQuantityLabel.innerHTML=Number(addQuantityLabel.innerText)+1;
                //addcartQuantity-tracking
                let addcartQuantity=document.querySelector('.addcart-${i}');
                addcartQuantity.innerHTML=Number(addcartQuantity.innerText)+1;
                //cartQuantity-buyagain-button
                let cartQuantity=document.querySelector('.cart-quantity-${i}');
                cartQuantity.innerHTML=Number(cartQuantity.innerText)+1;
                //order-product-price
                let orderProductPrice;
                orderProductPrice=document.querySelector('.order-product-price-${i}');
                orderProductPrice.innerText=(${productPrice/100}*cartQuantity.innerText).toFixed(2);
                //checkout-product-price
                let checkoutProductPrice;
                checkoutProductPrice=document.querySelector('.checkout-product-price-${i}');
                checkoutProductPrice.innerText=(${productPrice/100}*cartQuantity.innerText).toFixed(2);
                //checkout-payment-total
                let checkoutTotal=document.querySelector('.checkout-payment-total');
                checkoutTotal.innerHTML=(Number(checkoutTotal.innerText)+${productPrice/100}).toFixed(2);
                //radio-shipping-handling-11
                let radioShippingXi=document.querySelector('.radio-shipping-handling-11');
                radioShippingXi.innerHTML=((Number(checkoutTotal.innerText)+${productPrice/100})/11).toFixed(2);
                //radio-shipping-handling-8
                let radioShippingViii=document.querySelector('.radio-shipping-handling-8');
                radioShippingViii.innerHTML=((Number(checkoutTotal.innerText)+${productPrice/100})/8).toFixed(2);
                //total-before-tax
                let totalBeforeTax=document.querySelector('.total-before-tax');
                totalBeforeTax.innerHTML=(${productPrice/100}*cartQuantity.innerText).toFixed(2);
                //Estimated-tax
                EstimatedTax=document.querySelector('.Estimated-tax');
                EstimatedTax.innerHTML=((${productPrice/100}*cartQuantity.innerText)*0.1).toFixed(2);
                //checkout-summary-quantity
                let checkoutSummaryQuantity=document.querySelector('.checkout-summary-quantity');
                checkoutSummaryQuantity.innerHTML=Number(checkoutSummaryQuantity.innerText)+1;
                //all-order-total
                let orderTotal=document.querySelector('.all-order-total');
                orderTotal.innerHTML=(Number(checkoutTotal.innerText)+Number(EstimatedTax.innerText)).toFixed(2);
                ">Buy it again</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="#tracking-${i}">
                <button class="track-package-button button-secondary" data-track-package="${cart[i].id}" onclick="
                ///////////////////////////////////////////////////////////////////////////////////////////////
                
                  let progressLabelPreparing,progressLabelShipped,progressLabelDelivered;
                  let getDate=new Date().getDate();
                  let p=document.querySelector('.p-${i}');
                  let pp=document.querySelector('.pp-${i}');
                  console.log(p.innerText)
                  progressLabelPreparing=document.querySelector('.progress-current-preparing-${i}');
                  progressLabelShipped=document.querySelector('.progress-current-shipped-${i}');
                  progressLabelDelivered=document.querySelector('.progress-current-delivered-${i}');
                  //
                  console.log(getDate);
                  let progressBarReading=document.querySelector('.progress-bar-reading-${i}');
                  if(p.innerText){
                    if(getDate===${cartSetDateDay}){
                      progressBarReading.style.width='15%';
                      progressLabelPreparing.style.color='rgb(6, 125, 98)';
                    }else if(getDate===${cartSetDateDay+2}){
                      progressBarReading.style.width='50%';
                      progressLabelShipped.style.color='rgb(6, 125, 98)';
                    }else if(getDate===${cartSetDateDay+4}){
                      progressBarReading.style.width='100%';
                      progressLabelDelivered.style.color='rgb(6, 125, 98)';
                    }
                  }else if(pp.innerText){
                    if(getDate===${cartSetDateDay}){
                      progressBarReading.style.width='15%';
                      progressLabelPreparing.style.color='rgb(6, 125, 98)';
                    }else if(getDate===${cartSetDateDay+4}){
                      progressBarReading.style.width='50%';
                      progressLabelShipped.style.color='rgb(6, 125, 98)';
                    }else if(getDate===${cartSetDateDay+6}){
                      progressBarReading.style.width='100%';
                      progressLabelDelivered.style.color='rgb(6, 125, 98)';
                    }
                  }else{
                    if(getDate===${cartSetDateDay}){
                      progressBarReading.style.width='15%';
                      progressLabelPreparing.style.color='rgb(6, 125, 98)';
                    }else if(getDate===${cartSetDateDay+1}){
                      progressBarReading.style.width='50%';
                      progressLabelShipped.style.color='rgb(6, 125, 98)';
                    }else if(getDate===${cartSetDateDay+2}){
                      progressBarReading.style.width='100%';
                      progressLabelDelivered.style.color='rgb(6, 125, 98)';
                    }
                  }
                  
                ">
                  Track package
                </button>
              </a>
            </div>
          </div>
          </div>
        </section>`;
        searchShowsOrders+=`<a href="#order-container-${i}" class="order-search-shows-a" onclick="
        document.querySelector('.order-search-shows-div').style.display='none';
        "><p class="order-search-shows-p"data-order-search-p-id="${i}">${cartId}
            </p></a>`;
            
        searchShowsArrayOrders.push(`<a href="#order-container-${i}" class="order-search-shows-a" onclick="
        document.querySelector('.order-search-shows-div').style.display='none';
        "><p class="order-search-shows-p" data-order-search-p-id="${i}">${cartId}
            </p></a>`)
            
      }
          
          document.querySelector('.payment-summary').innerHTML=checkoutTable;
          document.querySelector('.order-search-shows-div').innerHTML=searchShowsOrders;
          document.querySelector('.order-summary').innerHTML=allcheckout;
          document.querySelector('.orders-grid').innerHTML=allCart;
          document.querySelector('.tracking').innerHTML=alltracking;
          document.querySelectorAll('.buy-again-message').forEach((buyAgain)=>{
            buyAgain.addEventListener('click',()=>{
              let cartId=buyAgain.dataset.productId;
              let marchingItem;
              cart.forEach((cart)=>{
                if(cartId===cart.id){
                  marchingItem=cart;
                }
              })
              if(marchingItem){
                marchingItem.quantity+=1;
              }  
              
              let totalCart=0;
            cart.forEach((cart)=>{
              totalCart+=cart.quantity;
            })
            
            document.querySelector(".cart-quantity")
            .innerHTML=totalCart;
            document.querySelector(".cart-quantity-checkout")
            .innerHTML=totalCart;
            })
          })
       addtotal();
    })
  })

function addtotal(){
  let totalCart=0;
  cart.forEach((cart)=>{
  totalCart+=cart.quantity;
  })
  
  document.querySelector('.cart-quantity').innerHTML=totalCart;
  document.querySelector('.cart-quantity-checkout').innerHTML=totalCart;  
}
/*
let addButtonforEach;
addButtonforEach=document.querySelectorAll('.add-select');
addButtonforEach.forEach((allAddbutton)=>{
  allAddbutton.addEventListener('click',(value)=>{
    for(let i=0;i<cart.length;i++){
      let cartId,cartSetDateDay,productName,productPrice,productId,productImage;
        cartId=cart[i].id;
        cartSetDateDay=cart[i].setdateday;
        cartquantity=cart[i].quantity;
        cartsetmonth=cart[i].setmonth;
        cartsetday=cart[i].setday;
        cartnormalsetweek=cart[i].normalsetweek;
        cartiisetweek=cart[i].iisetweek;
        cartivsetweek=cart[i].ivsetweek;
        cartvisetweek=cart[i].visetweek;
        //changeMonth
        changeMonthi=cart[i].changemonthi;
        changeMonthii=cart[i].changemonthii;
        changeMonthiii=cart[i].changemonthiii;
        //changeday
        changeDayi=cart[i].changedayi;
        changeDayii=cart[i].changedayii;
        changeDayiii=cart[i].changedayiii;
      for(let i=0;i<products.length;i++){
        if(cartId===products[i].id){
          productName=products[i].name;
          productId=products[i].id;
          productImage=products[i].image;
          productPrice=products[i].priceCents;
        }
      }
      if(allAddbutton.dataset.selectId===cart[i].id){
        //addQuantityLabel-checkout
        let addQuantityLabel=document.querySelector(`.quantity-label-${i}`);
        addQuantityLabel.innerHTML=Number(addQuantityLabel.innerText)+Number(allAddbutton.value);
        //addcartQuantity-tracking
        let addcartQuantity=document.querySelector(`.addcart-${i}`);
        addcartQuantity.innerHTML=Number(addcartQuantity.innerText)+Number(allAddbutton.value);
        //cartQuantity-buyagain-button
        let cartQuantity=document.querySelector(`.cart-quantity-${i}`);
        cartQuantity.innerHTML=Number(cartQuantity.innerText)+Number(allAddbutton.value);
        if(!Number(allAddbutton.value)){
          //order-product-price-----
          let orderProductPrice;
          orderProductPrice=document.querySelector(`.order-product-price-${i}`);
          orderProductPrice.innerText=(productPrice/100*(Number(Number(cartQuantity.innerText)+Number(allAddbutton.value)))).toFixed(2);
        }
        //checkout-product-price
        let checkoutProductPrice;
        checkoutProductPrice=document.querySelector(`.checkout-product-price-${i}`);
        checkoutProductPrice.innerText=(productPrice/100*cartQuantity.innerText).toFixed(2);
        //checkout-payment-total
        let checkoutTotal=document.querySelector('.checkout-payment-total');
        checkoutTotal.innerHTML=(Number(checkoutTotal.innerText)+(productPrice/100*Number(allAddbutton.value))).toFixed(2);
        //radio-shipping-handling-11
        let radioShippingXi=document.querySelector('.radio-shipping-handling-11');
        radioShippingXi.innerHTML=((Number(checkoutTotal.innerText)+(productPrice/100*Number(allAddbutton.value)))/11).toFixed(2);
        //radio-shipping-handling-8
        let radioShippingViii=document.querySelector('.radio-shipping-handling-8');
        radioShippingViii.innerHTML=((Number(checkoutTotal.innerText)+(productPrice/100*Number(allAddbutton.value)))/8).toFixed(2);
        //total-before-tax
        let totalBeforeTax=document.querySelector('.total-before-tax');
        totalBeforeTax.innerHTML=(Number(checkoutTotal.innerText)+(productPrice/100*Number(allAddbutton.value))).toFixed(2);
        //Estimated-tax
        EstimatedTax=document.querySelector('.Estimated-tax');
        EstimatedTax.innerHTML=((productPrice/100*(Number(cartQuantity.innerText)+Number(allAddbutton.value)))*0.1).toFixed(2);
        //checkout-summary-quantity
        let checkoutSummaryQuantity=document.querySelector('.checkout-summary-quantity');
        checkoutSummaryQuantity.innerHTML=Number(checkoutSummaryQuantity.innerText)+Number(allAddbutton.value);
        //all-order-total
        let orderTotal=document.querySelector('.all-order-total');
        orderTotal.innerHTML=(Number(checkoutTotal.innerText)+Number(EstimatedTax.innerText)).toFixed(2);
          ////////////////////////////////////////////
        
        cart[i].quantity+=Number(allAddbutton.value);
      }
      
    }
    addtotal();
    allAddbutton.value=0;
  })
})
*/
// amazon product search item
let input,searchButton,searchP;
  input=document.querySelector('.search-bar'),
  searchP=document.querySelectorAll('.search-shows-p'),
  searchShowsDiv=document.querySelector('.search-shows-div'),
  searchButton=document.querySelector('.search-button'),
  
searchButton.addEventListener('click',()=>{
  searchShowsDiv.style.display='block';
  let b;
  b='';
  searchP.forEach((searchP)=>{
    if(searchP.innerText.includes(input.value)){

      b+=searchShowsArray[searchP.dataset.searchPId];
    }
  })
  if(b===""){
    searchShowsDiv.innerHTML=`<p class="input-not-item">${input.value} not in the items</p>`;
  }else{
    searchShowsDiv.innerHTML=b;
  }
  input.value="";

})
input.addEventListener('keydown',(event)=>{
  if(event.key==="Enter"){
    document.querySelector('.search-shows-div').style.display='block';
  let b;
  b='';
  searchP.forEach((searchP)=>{
    if(searchP.innerText.includes(input.value)){

      b+=searchShowsArray[searchP.dataset.searchPId];
    }
  })
  if(b===""){
    searchShowsDiv.innerHTML=`<p class="input-not-item">${input.value} not in the items</p>`;
  }else{
    searchShowsDiv.innerHTML=b;
  }
  
  input.value="";

  }
})

// orders search item
let searchButtonOrders,ordersSearchShowsDiv;
  ordersSearchShowsDiv=document.querySelector('.order-search-shows-div'),
  searchButtonOrders=document.querySelector('.search-button-order');
  
  searchButtonOrders.addEventListener('click',()=>{
    let ordersSearchP;
    ordersSearchP=document.querySelectorAll('.order-search-shows-p');
    ordersSearchShowsDiv.style.display='block';
    
    let c;
    c='';
    ordersSearchP.forEach((ordersSearchP)=>{
      if(ordersSearchP.innerText.includes(input.value)){
       c+=searchShowsArrayOrders[ordersSearchP.dataset.orderSearchPId];
      }
    })
    
    if(c===""){
      ordersSearchShowsDiv.innerHTML=`<p class="input-not-item"
      >${input.value} not in the orders</p>`;
      
    }else{
      ordersSearchShowsDiv.innerHTML=c;
    }
    input.value="";
})

}


addImageFile.addEventListener('change',()=>{
  addImage.src=URL.createObjectURL(addImageFile.files[0]);
})
addNewButton.addEventListener('click',()=>{
  
let image,productName,description,id,price,ratingStars,ratingCount;
image=URL.createObjectURL(addImageFile.files[0]);
productName=addproductName.value;
description=addproductId.value;
price=addPrice.value;
ratingStars=addRating.value;
rantingCount=addCount.value;
id=crypto.randomUUID();
  products.push({
    id: `${id}`,
    image: `${image}`,
    name: `${productName}`,
    description:description,
    rating: {
      stars:ratingStars,
      count: rantingCount
    },
    priceCents: price
  })
  addProduct()
  console.log(products)
  addproductName.value='';
  addproductId.value='';
  addPrice.value='';
  addRating.value='';
  addCount.value='';
})