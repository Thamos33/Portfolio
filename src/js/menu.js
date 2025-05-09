import $ from 'jquery';

var $sidenav = $('.js-sidenav');
var $openBtn = $('.js-open-btn');
var $closeBtn = $('.js-close-btn');

$openBtn.click(function () {
    $sidenav.addClass('active');
});

$closeBtn.click(function () {
    $sidenav.removeClass('active');
});
