jQuery.ajax({
              type: 'get',
              url: 'http://interviews-env.b8amvayt6w.eu-west-1.elasticbeanstalk.com/products',
              cache:true,
              dataType: 'JSON',
              success: function(response) {
               
              console.log(response);
             
              var setLimitPerPage = 5;
             
              $.each(response,function(index,item){
           
              $("#container").append(
                                   
                                 "<div class='products'><img src='"
                                 
                                 + item.images.thumb +
                                 
                                 "' /><a href='"
                                 
                                   + item.url +
                                 
                                 "' target='_blank'>"
                                   
                                   + item.name +
                                 
                                 "</a><p>"
                                 
                                   + item.descriptions.description_1 +
                                 
                                 "</p><p class='price'>&euro; "
                                 
                                   + item.price.sell +
                                 
                                 ".99</p><img class='like' src='heart.png' /></div>"
                                 
              );
             
              if (index > setLimitPerPage){return false;}
                             
              });
                 
                 
              $('#search_bar').keyup(function(){
             
                    var search = $('#search_bar').val();
                    var regexMatch = new RegExp(search, 'i');
                         
                    $('#container').empty("");
                   
                   
                         
                         
                           $.each(response,function(index,item){
                             
                             
                             
                             
                              if(item.name.search(regexMatch) != -1 ){
                               
                              $("#container").append(
                                   
                                 "<div class='products'><img src='"
                                 
                                 + item.images.thumb +
                                 
                                 "' /><a href='"
                                 
                                   + item.url +
                                 
                                 "' target='_blank'>"
                                   
                                   + item.name +
                                 
                                 "</a><p>"
                                 
                                   + item.descriptions.description_1 +
                                 
                                 "</p><p class='price'>&euro; "
                                 
                                   + item.price.sell +
                                 
                                 ".99</p><img class='like' src='heart.png' /></div>"
                                 
                              );
                             
                              }
                             
                              /*
                              if ($(".products")[0]){
                                        $(".error").text("No Results");
                              }
                              */
                             
                             
                             
                          });
                         
              });
   
              },
             
              error: function(error) {
                console.log("test" + JSON.stringify(error))
                console.log("This Error: "+ error);
               
                $(".error").text("The JSON data was not loaded!");
              }
             
             
             
          });

         
         
         
         
         
         



 
   
       
   

