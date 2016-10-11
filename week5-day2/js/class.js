var personGenerator = (function() {
    var settings = {
        nationality: null,
        gender: null
    };

    var loadingIcon = {
        show: function() {
            var source = $('#loading').html();
            var template = Handlebars.compile(source);
            var html = template();

            $(html).prependTo('.people-container').fadeIn();
        },
        hide: function() {
            $('.loader').remove();
        }
    };

    function updateCount() {
        var count = $('.person-container').length;
        var message = count === 1 ? count + ' Person Created' : count + " People Created";
        $('.people-count').text(message);
    }

    function Person(data) {
        this.info = {
            name: {
                first: data.name.first,
                last: data.name.last
            },
            image: data.picture.large,
            details: {
                city: data.location.city,
                state: data.location.state,
                email: data.email,
                cell: data.cell
            }
        };
        this.createTemplate = function() {
            var source = $('#person').html();
            var template = Handlebars.compile(source);
            var context = this.info;
            var html = template(context);

            $(html).prependTo('.people-container').fadeIn();
        };
        this.createTemplate();
        updateCount();
    }

    function updateSettings(customSettings) {
        if (typeof customSettings === 'object') {
            settings = customSettings;
        } else {
            console.log('Settings provided were in an incorrect format');
        }
    }

    function makePerson() {
        loadingIcon.show();

        $.ajax({
            url: 'https://randomuser.me/api/?nat=' + settings.nationality + '&gender=' + settings.gender,
            dataType: 'json',
            success: function(rawData) {
                loadingIcon.hide();
                var newPerson = new Person(rawData.results[0]);
                // console.log(newPerson);
            }
        });
    }

    var selectedPeople = {
        toggleDeleteButton: function() {
            $('.delete-button').fadeToggle();
        },
        deleteRecords: function() {
            $('.person-container.active').remove();
            this.toggleDeleteButton();
            updateCount();
        }
    };

    function init() {
        console.log('in run');

        Handlebars.registerHelper('get-full-name', function(nameObj) {
            return nameObj.first + ' ' + nameObj.last;
        });

        $('.people-container').on('click', '.person-container', function() {
            var lastCount = $('.person-container.active').length;
            $(this).toggleClass('active');
            var currentCount = $('.person-container.active').length;

            if (lastCount === 0 || (lastCount === 1 && currentCount === 0)) {
                selectedPeople.toggleDeleteButton();
            }
        });

        $('.container').on('click', '.delete-button', function() {
            selectedPeople.deleteRecords();
        });
    }

    return {
        run: init,
        create: makePerson,
        customSettings: updateSettings
    };

})();

personGenerator.run();
personGenerator.customSettings({
    nationality: 'fr',
    gender: 'male'
});

$('.container').on('click', '.person-button', function() {
    personGenerator.create();
});


// var personGeneratorNamespace = {
//     Person: function(data) {
//         this.info = {
//             name: {
//                 first: data.name.first,
//                 last: data.name.last
//             },
//             image: data.picture.large,
//             details: {
//                 city: data.location.city,
//                 state: data.location.state,
//                 email: data.email,
//                 cell: data.cell
//             }
//         };
//         this.createTemplate = function() {
//             var source = $('#person').html();
//             var template = Handlebars.compile(source);
//             var context = this.info;
//             var html = template(context);
//
//             $(html).prependTo('.people-container').fadeIn();
//         };
//         this.createTemplate();
//     },
//     makePerson: function() {
//         var self = this;
//         $.ajax({
//             url: 'https://randomuser.me/api/',
//             dataType: 'json',
//             success: function(rawData) {
//                 var newPerson = new self.Person(rawData.results[0]);
//                 console.log(newPerson);
//             }
//         });
//     },
//     init: function() {
//         var self = this;
//         Handlebars.registerHelper('get-full-name', function(nameObj) {
//             return nameObj.first + ' ' + nameObj.last;
//         });
//         $('.container').on('click', '.person-button', function() {
//             self.makePerson();
//         });
//     }
// };
//
// personGenerator.init = function() {
//   console.log('whoops!');
// };
// personGenerator.init();
