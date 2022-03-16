function render(data){

  var html = "<div class='commentBox'><div class='leftPannel'><img src='jack.jpg' style='border-radius:50%;height:40px;width:40px;margin-top:10%;'></div><div class='rightPannel'><p>"+data.body+"</p></div></div>";

  $('#container').append(html);
}

$(document).ready(function(){

  var coment = [
  {"body":"This is a comment 1"}  
  
  ];

       for(var i=0;i<coment.length;i++){
  
        render(coment[i]);
       }
 
     $('#addComent').click(function(){
     var addObj = {
     "body":$('#bodyText').val()
    };
    console.log(addObj);
    coment.push(addObj);
    render(addObj);
    $('#bodyText').val('');

  });




});








 