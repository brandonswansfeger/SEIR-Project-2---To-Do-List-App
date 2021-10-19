$("button").submit(function (event) {
            event.preventDefault();

            var unindexedArray = $(this).serializeArray();
            var data = {}


            $.map(unindexedArray, function (n, i) {
                data[n['name']] = n['value']
            })

            console.log(data);

            var request = {
                'url': `http://localhost:3000/api/tasks/${data.id}`,
                "method": "PUT",
                "data": data
            }



if (window.location.pathname == "./") {
    $btnDelete = $(".table tbody td a.delete");
    $btnDelete.click(function () {
         var id = $(this).attr("data-id")

         var request = {
           'url': `http://localhost:3000/api/tasks/${id}`,
            'method': 'DELETE'
                    }

        if (confirm("Do u really want to delete")) {
            $.ajax(request).done(function (response) {
               alert("Data deleted successfully");
                location.reload;
        })

     }
8

})

$(document).ready(function(){

    $("#tbody").on('click','.btnDelete',function(){
          $(this).closest('tr').remove();
        });





                // $("#submit").click(function(event){
                //     event.preventDefault();

                //     var unindexedArray = $(this).serializeArray();
                //     var data = {}


                //     $.map(unindexedArray, function (n,i){
                //         data[n['name']] = n['value']
                // })

                // console.log(data);

                // const request = {
                //     'url':`http://localhost:3000/api/tasks/${data.id}`,
                //     "method":"PUT",
                //     "data": data
                //     }
                //     $.ajax(request).done(function(_response){
                //         alert("Data updated successfully");
                //         window.location.assign("http://localhost:3000/"); 
                // })

                // })