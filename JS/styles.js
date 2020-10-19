
//Backend Logic
//Create  Objects and their properties

var sizes ={ small: 500,
    medium : 800,
    large : 1200,
};

var toppings = {
    ham: 100,
    olives : 150,
    cheese : 250
};

var crust ={
    crispy : 100,
    stuffed :150,
    gluttenFree : 200
};

//create Pizza Object and add its properies
class Pizza {
    constructor(pizzaSizes, pizzaToppings, pizzaCrust) {
        this.pizzaSizes = pizzaSizes;
        this.pizzaToppings = pizzaToppings;
        this.pizzaCrust = pizzaCrust;
    }
}

var newPizza = new Pizza(sizes,toppings,crust);

console.log(newPizza.pizzaSizes.small);
console.log(newPizza.pizzaToppings.cheese);
console.log(newPizza.pizzaCrust.crispy);





 $(document).ready(function(){

    /*    SIZE: CHECKBOX BUTTONS FUNCTIONALITY FOR CHEESY PIZZA */

    $("#cheesysmall").click(function(){

        var checkboxValue = $(this).val();
        if(checkboxValue){
            console.log(checkboxValue);
            
        }
        if(checkboxValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="order-number">' +
               
              ' <div class="order-names">' +
                  '<h6><span class="order-name card-title">Cheesey Pizza</span></h6>' +
                   '<h6><span class="order-type card-subtitle mb-2 text-muted ">Small</span></h6>' +

              ' </div>'+
              ' <div class="order-price">' +
                  ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.small+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });
    $("#cheeseymedium").click(function(){

        var checkboxValue= $(this).val();
        if(radioValue){
            console.log(checkboxValue);
            
        }
        if(checkboxValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="order-number">' +
               
              ' <div class="order-names">' +
                  '<h6><span class="order-name card-title">Cheseey Pizza</span></h6>' +
                   '<h6><span class="order-type card-subtitle mb-2 text-muted ">Medium</span></h6>' +

              ' </div>'+
              ' <div class="order-price">' +
                  ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.medium+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });
    $("#cheeseylarge").click(function(){

        var checkboxValue = $(this).val();
        if(checkboxValue){
            console.log(checkboxValue);
            
        }
        if(checkboxValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="order-number">' +
               
              ' <div class="order-names">' +
                  '<h6><span class="order-name card-title">Cheesey Pizza</span></h6>' +
                   '<h6><span class="order-type card-subtitle mb-2 text-muted ">Large</span></h6>' +

              ' </div>'+
              ' <div class="order-price">' +
                  ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.large+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });

    /* CRUST: CHECKBOX BUTTONS FUNCTIONALITY FOR CHEESEY PIZZA*/
    $("#cheeseycrispy").click(function(){

        var checkboxValue = $(this).val();
        if(checkboxValue){
            console.log(checkboxValue);
            
        }
        if(checkboxValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="crust-number">' +
               
              ' <div class="crust-names">' +
                  '<h6><span class="crust-name card-title">Crispy Crust</span></h6>' +
                   

              ' </div>'+
              ' <div class="crust-price">' +
                  ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.crispy+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });
    $("#cheeseystuffed").click(function(){

        var checkboxValue = $(this).val();
        if(checkboxValue){
            console.log(checkboxValue);
            
        }
        if(checkboxValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="crust-number">' +
               
              ' <div class="crust-names">' +
                  '<h6><span class="crust-name card-title">Stuffed Crust</span></h6>' +
                   

              ' </div>'+
              ' <div class="crust-price">' +
                  ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.stuffed+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });
    $("#cheeseyglutenfree").click(function(){

        var checkboxValue = $(this).val();
        if(checkboxValue){
            console.log(checkboxValue);
            
        }
        if(radioValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="crust-number">' +
               
              ' <div class="crust-names">' +
                  '<h6><span class="crust-name card-title">Gluten-Free Crust</span></h6>' +
                   

              ' </div>'+
              ' <div class="crust-price">' +
                  ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.gluttenFree+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });

    /* TOPPINGS:CHECKBOX BUTTONS FUNCTIONALITY FOR CHEESEY PIZZA */
    $("#cheeseycheese").click(function(){

        var checkboxValue = $(this).val();
        if(checkboxValue){
            console.log(checkboxValue);
            
        }
        if(checkboxValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="topping-number">' +
               
              ' <div class="topping-names">' +
                  '<h6><span class="topping-name card-title">Cheese</span></h6>' +
                   

              ' </div>'+
              ' <div class="topping-price">' +
                  ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.cheese+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });
    $("#cheeseyham").click(function(){

        var checkboxValue = $(this).val();
        if(checkboxValue){
            console.log(checkboxValue);
            
        }
        if(checkboxValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="topping-number">' +
               
              ' <div class="topping-names">' +
                  '<h6><span class="topping-name card-title">Ham</span></h6>' +
                   

              ' </div>'+
              ' <div class="topping-price">' +
                  ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.ham+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });
    $("#cheeseyolives").click(function(){

        var checkboxValue = $(this).val();
        if(checkboxValue){
            console.log(checkboxValue);
            
        }
        if(checkboxValue){

                

            $("ul#order-items").show();
            $("ul#order-items").append('<li class="list-group-item">' +
           '<div class="topping-number">' +
               
              ' <div class="topping-names">' +
                  '<h6><span class="topping-name card-title">Olives</span></h6>' +
                   

              ' </div>'+
              ' <div class="topping-price">' +
                  ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.olives+'</span></h6>' +
              ' </div>' +

           '</div>' +
            '</li>'); 



       } 
        

    });

    
   /*    SIZE: CHECKBOX BUTTONS FUNCTIONALITY FOR VEGGIE PIZZA */

   $("#veggiesmall").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Veggie Pizza</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Small</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.small+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#veggiemedium").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Veggie Pizza</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Medium</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.medium+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#veggielarge").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">veggie Large</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Large</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.large+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* CRUST: CHECKBOX FUNCTIONALITY FOR VEGGIE PIZZA*/
$("#veggiecrispy").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Crispy Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.crispy+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#veggiestuffed").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Stuffed Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.stuffed+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#veggieglutenfree").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(cehckboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Gluten-Free Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.gluttenFree+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* TOPPINGS:CHECKBOX FUNCTIONALITY FOR VEGGIE PIZZA*/
$("#veggiecheese").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Cheese</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.cheese+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#veggieham").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Ham</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.ham+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#veggieolives").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Cheese</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.olives+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/*    SIZE: CHECKBOX FUNCTIONALITY FOR PEPERONI */

$("#peperonismall").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Peperoni </span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Small</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.small+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#peperonimedium").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Peperoni Chicken</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Medium</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.medium+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#peperonilarge").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Peperoni </span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Large</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.large+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* CRUST: CHECKBOX FUNCTIONALITY FOR PEPERONI*/
$("#peperonicrispy").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Crispy Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.crispy+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#peperonistuffed").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Stuffed Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.stuffed+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#peperoniglutenfree").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Gluten-Free Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.gluttenFree+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* TOPPINGS:CHECKBOX FUNCTIONALITY FOR PEPERONI */
$("#peperonicheese").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Cheese</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.cheese+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#peperoniham").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Ham</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.ham+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#peperoniolives").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Olives</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.olives+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/*    SIZE: CHECKBOX FUNCTIONALITY FOR NYAMANYAMA PIZZA */

$("#nyamanyamasmall").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(radioValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Nyamanyama</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Small</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.small+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#nyamanyamamedium").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Nyamanyama</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Medium</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.medium+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#nyamanyamalarge").click(function(){

    var checkboxValue = $(this).val();
    if(chekboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Nyamanyama</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Large</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.large+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* CRUST: CHECKBOX FUNCTIONALITY FOR NYAMANYAMA*/
$("#nyamanyamacrispy").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Crispy Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.crispy+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#nyamanyamastuffed").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Stuffed Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.stuffed+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#nyamanyamaglutenfree").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Gluten-Free Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.gluttenFree+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* TOPPINGS:CHECKBOX FUNCTIONALITY FOR NYAMANYAMA */
// $("#nyamanyamacheese").click(function(){

//     var checkboxValue = $(this).val();
//     if(checkboxValue){
//         console.log(checkboxValue);
        
//     }
//     if(checkboxValue){

            

//         $("ul#order-items").show();
//         $("ul#order-items").append('<li class="list-group-item">' +
//        '<div class="topping-number">' +
           
//           ' <div class="topping-names">' +
//               '<h6><span class="topping-name card-title">Cheese</span></h6>' +
               

//           ' </div>'+
//           ' <div class="topping-price">' +
//               ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.cheese+'</span></h6>' +
//           ' </div>' +

//        '</div>' +
//         '</li>'); 



//    } 
    

// });

// $("#nyamanyamaham").click(function(){

//     var checkboxValue = $(this).val();
//     if(checkboxValue){
//         console.log(checkboxValue);
        
//     }
//     if(checkboxValue){

//     if(checkboxValue){

            

//         $("ul#order-items").show();
//         $("ul#order-items").append('<li class="list-group-item">' +
//        '<div class="topping-number">' +
           
//           ' <div class="topping-names">' +
//               '<h6><span class="topping-name card-title">Ham</span></h6>' +
               

//           ' </div>'+
//           ' <div class="topping-price">' +
//               ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.ham+'</span></h6>' +
//           ' </div>' +

//        '</div>' +
//         '</li>'); 



//    } 
    
// });

$("#nyamanyamaolives").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Olives</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.olives+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/*    SIZE: CHECKBOX FUNCTIONALITY FOR THE WORKS PIZZA */

$("#theworkssmall").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">The Works Pizza</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Small</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.small+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#theworksmedium").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){


            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">The Works Pizza</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Medium</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.medium+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#theworkslarge").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">The Works Pizza</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Large</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.large+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* CRUST: CEHCKBOX FUNCTIONALITY FOR THE WORKS*/
$("#theworkscrispy").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Crispy Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.crispy+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#theworkstuffed").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Stuffed Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.stuffed+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#theworksglutenfree").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Gluten-Free Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.gluttenFree+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* TOPPINGS:CHECKBOX FUNCTIONALITY FOR THE WORKS PIZZA */
$("#theworkscheese").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Cheese</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.cheese+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#theworksham").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Ham</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.ham+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#theworksolives").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Olives</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.olives+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});


/*    SIZE: CHECKBOX BUTTONS FUNCTIONALITY FOR BBQ CHICKEN */

$("#bbqchicken").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){


            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">BBQ Chicken</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Small</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.small+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#bbqchickenmedium").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){


            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Meat Deluxe</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Medium</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.medium+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#bbqchickenlarge").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){


            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="order-number">' +
           
          ' <div class="order-names">' +
              '<h6><span class="order-name card-title">Meat Deluxe</span></h6>' +
               '<h6><span class="order-type card-subtitle mb-2 text-muted ">Large</span></h6>' +

          ' </div>'+
          ' <div class="order-price">' +
              ' <h6><span class="order-item-price">' +newPizza.pizzaSizes.large+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* CRUST: CHECKBOX FUNCTIONALITY FOR BBQ CHICKEN*/
$("#meatcrispy").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Crispy Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.crispy+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#bbqchickenstuffed").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Stuffed Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.stuffed+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#bbqchickenglutenfree").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="crust-number">' +
           
          ' <div class="crust-names">' +
              '<h6><span class="crust-name card-title">Gluten-Free Crust</span></h6>' +
               

          ' </div>'+
          ' <div class="crust-price">' +
              ' <h6><span class="crust-item-price">' +newPizza.pizzaCrust.gluttenFree+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

/* TOPPINGS:CHECKBOX FUNCTIONALITY FOR BBQ CHICKEN */
$("#bbqchickencheese").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){


            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Cheese</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.cheese+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#bbqchickenham").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){

            

        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Ham</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.ham+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});
$("#bbqchickenolives").click(function(){

    var checkboxValue = $(this).val();
    if(checkboxValue){
        console.log(checkboxValue);
        
    }
    if(checkboxValue){


        $("ul#order-items").show();
        $("ul#order-items").append('<li class="list-group-item">' +
       '<div class="topping-number">' +
           
          ' <div class="topping-names">' +
              '<h6><span class="topping-name card-title">Olives</span></h6>' +
               

          ' </div>'+
          ' <div class="topping-price">' +
              ' <h6><span class="topping-item-price">' +newPizza.pizzaToppings.olives+'</span></h6>' +
          ' </div>' +

       '</div>' +
        '</li>'); 



   } 
    

});

   
 
  var calculatePizzaTotal = function (){
        var sum =0;
        $("ul").each(function(){
            
             $(this).find(".order-item-price").each(function(){
                // console.log($(this).text());
                sum += parseInt($(this).text());
             });
            
        });
        return sum;
    
 } 

 var calculateCrustTotal = function(){
     var sum =0;
     $("ul").each(function(){
            
        $(this).find(".crust-item-price").each(function(){
           // console.log($(this).text());
           sum += parseInt($(this).text());
        });
       
   });
   return sum;
 }

 var calculateToppingTotal = function(){
    var sum =0;
    $("ul").each(function(){
           
       $(this).find(".topping-item-price").each(function(){
          // console.log($(this).text());
          sum += parseInt($(this).text());
       });
      
  });
  return sum;
}

function  showTotalAmount(){
    totalOrderAmount = calculateToppingTotal() + calculatePizzaTotal() + calculateCrustTotal();
    console.log(totalOrderAmount);

    $(".sum-price span").text(totalOrderAmount);
}

function confirmDelivery(){
    var location = $("#deliverylocation").val();
    var message = "Your order will be delivered to " + location;
    alert(message);
    $("#deliverylocation").val("");
}


 $(".ordernow-button a").click(function(){
     
    showTotalAmount(); 
    confirmDelivery();
    
    
});





});