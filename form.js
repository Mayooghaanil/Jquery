
$(document).ready(function(){
    $("#add").click(function(){
        var name = $("#name1").val();
        var markup = "<tr><td><input type='checkbox'name='record'></td><td>" + name + "</td></tr>";
        $("table tbody").append(markup);
    });
$("#delet").click(function(){
    $("table tbody").find('input[name="record"]').each(function(){ 
        if($(this).is(":checked")){
            $(this).parents("tr").remove();
}
    
});
    });
});