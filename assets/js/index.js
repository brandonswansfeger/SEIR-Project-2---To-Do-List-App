$("#submit").click(function(event){
    event.preventDefault();

    var unindexedArray = $(this).serializeArray();
    var data = {}


    $.map(unindexedArray, function (n,i){
        data[n['name']] = n['value']
})

console.log(data);

const request = {
    'url':`http://localhost:3000/api/tasks/${data.id}`,
    "method":"PUT",
    "data": data
    }
    $.ajax(request).done(function(_response){
        alert("Data updated successfully");
})

})