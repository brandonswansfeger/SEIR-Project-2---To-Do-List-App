$("button").submit(function (event) {
  event.preventDefault();

  var unindexedArray = $(this).serializeArray();
  var data = {}


  $.map(unindexedArray, function (n, i) {
    data[n['name']] = n['value']
  })

  console.log(data);

  const request = {
    'url': `http://localhost:3000/api/tasks/${data.id}`,
    "method": "PUT",
    "data": data
  }
  $.ajax(request).done(function (response) {
    alert("Data updated successfully");
  })

})


if (window.location.pathname == "/") {
  $onDelete = $(".table tbody td a.delete");
  $onDelete.click(function () {
    var id = $(this).attr("data-id")

    const request = {
      'url': `http://localhost:3000/api/tasks/${id}`,
      'method': 'DELETE'
    }

    if (confirm("Do u really want to delete")) {
      $.ajax(request).done(function (response) {
        alert("Data deleted successfully");
        location.reload;
      })

    }


  })


}


//You can achieve this on any element using JS. Also, not only you can strike onClick but also remove the striked content back to its original state.

$(function(){
  var $curParent, Content;
  $(document).delegate("span", function(){
    if($(this).closest("s").length) {
      Content = $(this).parent("s").html();
      $curParent = $(this).closest("s");
      $(Content).insertAfter($curParent);
      $(this).closest("s").remove();
    }
    else {
      $(this).wrapAll("<s />");
    }
  });
});