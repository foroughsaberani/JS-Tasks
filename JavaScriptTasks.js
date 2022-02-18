function welcome(firstName,lastName) {
   const welcomeMassage = `Welcome ${firstName} ${lastName} to this website`;
    return welcomeMassage;
  }

function getProduct(ProductName , urlImageAddress , Price){
    const Product = `
        <div style="width: 400px;
            height: 300px;
            padding: 10px;
            background-color: lightblue;
            color: darkblue;
            border-radius: 10px;
            text-align: center;
            align-items: center;
            justify-content: center;
            margin: auto auto;
            margin-top: 20px;">
                <img src="${urlImageAddress}" style="width: 200px;">
                <h3> ${ProductName} <h3>
                <h4> ${Price} </h4>
        </div>`;
    return Product;}



// javaScript Function3 checkAge  
function checkAge(age){
    if (age >= 18)
        return true;
    else
       return false;
}



    function countryNametocountryCode(country){
        if (country === "Iran") {return "+98";
        } else if (country === "USA") {return "+1";
        } else if (country === "Spain") {return "+34";
        } else if (country === "Norway")  {return "+47";
        } else if (country ==="Sweden")  {return "+46";
    }
    }
    // function test()  {
    //     let enter =countryNametocountryCode("USA") ;
    //     document.getElementById("demo").innerHTML=enter;
    //     }
    