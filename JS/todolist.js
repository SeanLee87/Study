
$("#addBtn").on('click', function(){
    $(".addLine").css("display", "block");
});

$("#addTextBtn").on('click', function(){
    
    let addText = $("#addText").val();
    let todoList = $(".list");
    if (addText == ""){
        alert("할 일을 입력하세요.");
    } else {
        let addHtml = '<li>';
        addHtml += '<input type="checkbox" name="" id="">';
        addHtml += addText
        addHtml += '<button class="removeBtn">삭제</button>';
        addHtml += '</li>';

        todoList.append(addHtml);
    }
});

$("#cancelBtn").on('click', function(){
    $(".addLine").css("display", "none");
});

$(document).on('click', '.removeBtn', function(index){
    let num = $(".removeBtn").index(this);
    console.log(num);
    let todoList = $(".list li").get(num);
    todoList.remove();
})
