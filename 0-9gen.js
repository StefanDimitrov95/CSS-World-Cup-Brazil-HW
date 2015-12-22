$(function(){
    var $select = $(".0-9");
    for (i=0;i<=9;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});