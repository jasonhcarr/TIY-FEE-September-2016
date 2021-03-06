'use strict';

(function ($) {
    var allGhosts = [];
    var storage = {
        set: function set() {
            localStorage.setItem("ghosts", JSON.stringify(allGhosts));
        },
        get: function get() {
            var ghosts = localStorage.ghosts === undefined ? false : JSON.parse(localStorage.ghosts);
            return ghosts;
        },
        clear: function clear() {
            localStorage.removeItem('ghosts');
            console.log('localStorage cleared!');
        }
    };

    Ghost.prototype.buildGhost = function () {
        var source = $('#ghost').html(),
            template = Handlebars.compile(source),
            context = this.info,
            html = template(context);

        $(html).prependTo('.main-content').fadeIn();

        return $('.ghost').first();
    };

    Ghost.prototype.animate = function () {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'primary';

        var thisGhost = this.info;
        $(thisGhost.self).addClass(thisGhost[type]);
        $(thisGhost.self).on('animationend', function () {
            $(this).removeClass(thisGhost[type]);
        });
    };

    function Ghost(context) {
        var _this = this;

        this.info = context;
        this.info.self = this.buildGhost();
        allGhosts.push(this);
        this.animate();

        $(this.info.self).on('click', function () {
            _this.animate('secondary');
        });

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

    if (storage.get()) {
        var ghosts = storage.get();
        $('.empty-container').remove();

        for (var index = 0; index < ghosts.length; index++) {
            new Ghost(ghosts[index].info);
        }
    }

    $('form').on('submit', function (event) {
        event.preventDefault();
        new Ghost(formValues());
        $(this).trigger('reset');

        if ($('.empty-container').length) {
            $('.empty-container').remove();
        }
    });

    $('body').on('keypress', function (event) {
        if (event.keyCode === 99) {
            storage.clear();
        }
    });
})(jQuery);
//# sourceMappingURL=app.js.map
