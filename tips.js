'use strict';

window.addEventListener('load', function () {
    var tip_containers = document.getElementsByClassName('tip-container');
    var tip_triggers = document.getElementsByClassName('tip-trigger');

    for (var i = 0; i < tip_containers.length; i++) {
        tip_containers[i].firstElementChild.addEventListener('click', function () {
            var the_tip = this.parentNode.getElementsByClassName('tip')[0];
            the_tip.classList.add('tip--visible');
        });

        var tip_closers = tip_containers[i].getElementsByClassName('tip__close');

        for (var j = 0; j < tip_closers.length; j++) {
            tip_closers[j].addEventListener('click', function () {
                var the_tip = this.parentNode.parentNode.getElementsByClassName('tip')[0];
                the_tip.classList.remove('tip--visible');
            });
        }
    }
});