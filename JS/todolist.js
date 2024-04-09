
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
        addHtml += '<span class="todoText">';
        addHtml += addText
        addHtml += '</span>';
        addHtml += '<button class="completBtn">완료</button>';
        addHtml += '<button class="modifyBtn">수정</button>';
        addHtml += '<button class="removeBtn">삭제</button>';
        addHtml += '</li>';

        todoList.append(addHtml);
    }
});

$("#cancelBtn").on('click', function(){
    $(".addLine").css("display", "none");
});

$(document).on('click', '.removeBtn', function(index){
    // let num = $(".removeBtn").index(this);
    // console.log(num);
    // let todoList = $(".list li").get(num);
    // todoList.remove();
    let parentsLi = $(this).parents('li');
    parentsLi.remove();
})

$(document).on('click', '.modifyBtn', function(index){
    // console.log('수정버튼');
    $(this).parents('li').addClass('modify');
    let spanTag = $(this).parents('li').find('.todoText');
    let orgText = spanTag.text();
    console.log(orgText);
    let inputHtml = '<input type="text" class="" value="'+orgText+'" />';
    spanTag.html(inputHtml);


})

$(document).on('click', '.completBtn', function(index){
    //console.log('완료버튼');
    $(this).parents('li').removeClass('modify');
    let spanTag = $(this).parents('li').find('.todoText');
    let afterText = spanTag.find('input').val();
    spanTag.html(afterText);

})