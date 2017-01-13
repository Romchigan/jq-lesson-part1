jQuery(function ($) {
    var addClass = $('#addClass');
    var removeClass = $('#removeClass');
    var toggleClass = $('#toggleClass');
    var getAttr = $('#getAttr');
    var setAttr = $('#setAttr');
    var alertOnClick = $('#alertOnClick');
    var triggerAlert = $('#triggerAlert');
    var cloneThis = $('#cloneThis');
    var closestElement = $('#closestElement');
    var eachBtnText = $('#eachBtnText');
    var findMe = $('#findMe');
    var fadeInText = $('#fadeInText');
    var fadeOutText = $('#fadeOutText');
    var hideText = $('#hideText');
    var showText = $('#showText');
    var dataAboutMe = $('#dataAboutMe');

    addClass.on('click', function () {
        $(this).addClass('btn-lg');
    });

    removeClass.on('click', function () {
        $(this).removeClass('btn-block');
    });

    toggleClass.on('click',function () {
        $(this).toggleClass('btn-lg');
    });

    getAttr.on('click', function () {
        alert($(this).attr('name'));
    });

    setAttr.on('click', function () {
        $(this).attr('disabled', 'disabled');
    });

    alertOnClick.on('click', function () {
        alert('alertOnClick');
    });

    triggerAlert.on('click', function () {
        $('#alertOnClick').trigger('click');
    });

    cloneThis.on('click', function () {
        var text = $(this).attr('value');
        $(this).clone().text(text + ' (cloned)').insertAfter('#cloneThis');
    });

    closestElement.on('click', function () {
        console.log($(this).parent());
    });

    eachBtnText.on('click', function () {
        var btn = $(".btn");
        console.log(btn.text());
    });

    findMe.on('click', function () {
        console.log($('body').find('#findMe'))
    });

    fadeInText.on('click', function () {
        $('.info').fadeIn(1000);
    });

    fadeOutText.on('click', function () {
        $('.heading').fadeOut(1000);
    });

    hideText.on('click', function () {
        $('.hide-text').hide(500);
    });

    showText.on('click', function () {
        $('.show-text').show(500);
    });

    dataAboutMe.on('click', function () {
        var height = $(this).height();
        var width = $(this).width();
        var offset = $(this).offset();
        var attr = [
            $(this).attr('class'),
            $(this).attr('type'),
            $(this).attr('value'),
            $(this).attr('id') ];
        var parent = $(this).parent();
        var prev = $(this).prev();
        var next = $(this).next();
        var text = $(this).text();

        console.log('heigh:',height, 'width:',width, 'offset:',offset, 'attr:',attr, 'parent:',parent, 'prev:',prev, 'next:',next, 'text:',text);
    });

});