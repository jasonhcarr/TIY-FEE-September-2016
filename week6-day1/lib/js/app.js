// (function($) {
//     "use strict";
//     $(document).ready(function() {
//         var allGhosts = [];
//         var storage = {
//             set: function() {
//                 localStorage.setItem('ghosts', JSON.stringify(allGhosts));
//             },
//             get: function() {
//                 var ghosts = localStorage.ghosts === undefined
//                     ? false
//                     : localStorage.ghosts;
//                 return JSON.parse(ghosts);
//             }
//         }
//
//         Ghost.prototype = {
//             build: function(context) {
//                 var source = $('#ghost').html(),
//                     template = Handlebars.compile(source),
//                     context = context,
//                     html = template(context);
//
//                 $(html).prependTo('.main-content').fadeIn();
//                 return $('.ghost').first();
//             },
//             init: function() {
//                 var _this = this;
//
//                 if ($('.empty-container').length > 0) {
//                     $('.empty-container').remove();
//                 }
//
//                 this.info.self = this.build(this.info);
//
//                 this.animate(this, 'primary');
//                 $(this.info.self).on('click', function() {
//                     Ghost.prototype.animate(_this, 'secondary');
//                 });
//
//                 allGhosts.push(_this);
//                 storage.set();
//             },
//             animate: function(ghost, action) {
//                 $(ghost.info.self).addClass(ghost.info.actions[action]);
//                 $(ghost.info.self).on('animationend', function() {
//                     $(this).removeClass(ghost.info.actions[action])
//                 });
//             }
//         };
//
//         function Ghost(context) {
//             this.info = {
//                 name: context.name,
//                 self: null,
//                 actions: {
//                     primary: context.actions.primary,
//                     secondary: context.actions.secondary
//                 },
//                 color: context.color
//             };
//             this.init();
//         }
//
//         if (storage.get()) {
//             var localGhosts = storage.get();
//             for (var index = 0; index < localGhosts.length; index++) {
//                 if ($('.empty-container').length > 0) {
//                     $('.empty-container').remove();
//                 }
//                 new Ghost(localGhosts[index].info);
//             }
//         }
//
//         $('form').on('submit', function(event) {
//             event.preventDefault();
//             var context = {
//                 name: $(this).find('#ghost-name').val(),
//                 color: $(this).find('#ghost-color').val(),
//                 actions: {
//                     primary: $(this).find('#ghost-primary').val(),
//                     secondary: $(this).find('#ghost-secondary').val()
//                 }
//             };
//             $(this).trigger('reset');
//             new Ghost(context);
//         })
//     });
// })(jQuery);
;(function($) {
    /* allGhosts stores every ghost that is created. */
    var allGhosts = [];

    /* Using localStorage to store the allGhosts[] array after each new ghost is built. */
    var storage = {
        set: function() {
            localStorage.setItem("ghosts", JSON.stringify(allGhosts));
        },
        get: function() {
            var ghosts = localStorage.ghosts === undefined
                ? false
                : JSON.parse(localStorage.ghosts);
            return ghosts;
        },
        clear: function() {
            localStorage.removeItem('ghosts');
        }
    }

    Ghost.prototype.buildGhost = function() {
        var source = $('#ghost').html(),
            template = Handlebars.compile(source),
            context = this.info,
            html = template(context);

        $(html).prependTo('.main-content').fadeIn();

        /* After building the ghost template and prepending it to the page, let's return the first .ghost element we find to store it as that ghost's self */
        return $('.ghost').first();
    }

    /* The animate() method is called from the Ghost constructor. It accepts an argument specifying whether to do the primary or secondary animation type */
    Ghost.prototype.animate = function(type) {
        var thisGhost = this.info;
        $(thisGhost.self).toggleClass(thisGhost[type]);
        $(thisGhost.self).on('animationend', function() {
            $(this).toggleClass(thisGhost[type]);
        });
    }

    /* Ghost Constructor */
    function Ghost(context) {
        this.info = context;
        this.info.self = this.buildGhost();

        allGhosts.push(this);

        /* Whenever we build a new Ghost, we call prototype.animate to execute the first/primary action */
        this.animate('primary');

        /* Then we bind a click event handler to the new Ghost element that will call the same animate method but passing in secondary to run the secondary action */
        /* We're using the .bind() method here to use 'this' as the context of the method call. */
        $(this.info.self).on('click', (function() {
            this.animate('secondary');
        }).bind(this));

        storage.set();
    }

    function formValues() {
        var context = {
            name: $('#ghost-name').val(),
            color: $('#ghost-color').val(),
            primary: $('#ghost-primary').val(),
            secondary: $('#ghost-secondary').val()
        };
        return context;
    }

    /* Local Storage Check */
    if (storage.get()) {
        var ghosts = storage.get();
        $('.empty-container').remove();

        for (var index = 0; index < ghosts.length; index++) {
            new Ghost(ghosts[index].info);
        }
    }

    /* Event Listeners */
    $('form').on('submit', function(event) {
        event.preventDefault();
        new Ghost(formValues());
        $(this).trigger('reset');

        if ($('.empty-container').length) {
            $('.empty-container').remove();
        }
    });

})(jQuery);
;;// function romanNumerals(number) {
//   var romanNum;
//   switch (number) {
//     case 1:
//     romanNum = 'i';
//     break;
//   }
//
//   return romanNum;
// }
// module.exports = romanNumerals;
