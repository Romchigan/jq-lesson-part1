jQuery(function ($) {
    var detach = $('#detach');
    var eq = $('#eq');
    var hasClass = $('#hasClass');
    var html = $('#html');
    var index = $('#index');
    var off = $('#off');
    var on = $('#on');
    var prop = $('#prop');
    var remove = $('#remove');
    var removeAttr = $('#removeAttr');
    var scrollTop = $('#scrollTop');
    var slideUp = $('#slideUp');
    var slideDown = $('#slideDown');
    var slideToggle = $('#slideToggle');

    detach.on('click',function () {
        $('div').detach('.content');
    });

    eq.on('click',function () {
        $('li:eq(2)').css('color', 'red');
    });

    hasClass.click(function(){
        alert($("li").hasClass(".text-primary"));
    });

    html.click(function(){
        $('div.wrap p').html('<b>Jquery</b>!');
    });

    index.on('click',function () {
        alert('Index: ' + $('#active').index("ol li"));
    });

    on.on("click", function(){
        alert("The button was clicked.");
    });

    off.on("click", function(){
        $(on).off();
        alert('Обработчик события on удален ')
    });

    prop.on("click", function(){
        $("input[type='checkbox']").prop({disabled: true});
    });

    remove.on("click", function(){
        $('div.removed-text').remove();
    });

    removeAttr.on("click", function(){
        $('#removeAttr').removeAttr('value');
        alert('remove value attr')
    });

    slideUp.click(function(){
        $('.bootstrap-info').slideUp();
    });

    slideDown.click(function(){
        $('.bootstrap-info-second').slideDown();
    });

    slideToggle.click(function(){
        $('.bootstrap-info-third').slideToggle();
    });



});
