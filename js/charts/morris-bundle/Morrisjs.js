(function(window, document, $, undefined) {
    "use strict";
    $(function() {
        if ($('#morris_bar').length) {
            Morris.Bar({
                element: 'morris_bar',
                data: [
                    { x: '1', y: 1000 },
                    { x: '2', y: 5000 },
                    { x: '3', y: 7000 },
                    { x: '5', y: 8000 },
                    { x: '6', y: 2000 },
                    { x: '7', y: 5000 },
                    { x: '8', y: 6000 },
                    { x: '9', y: 7000 },
                    { x: '10', y: 8000 },
                    { x: '11', y: 1000 },
                    { x: '12', y: 4000 },
                    { x: '13', y: 2000 },
                    { x: '15', y: 4000 },
                    { x: '16', y: 5000 },
                    { x: '17', y: 3000 },
                    { x: '18', y: 7000 },
                    { x: '19', y: 6000 },
                    { x: '20', y: 7500 },
                    { x: '21', y: 6000 },
                    { x: '22', y: 1000 },
                    { x: '23', y: 2500 },
                    { x: '25', y: 3300 },
                    { x: '26', y: 4600 },
                    { x: '27', y: 8033 },
                    { x: '28', y: 2670 },
                    { x: '29', y: 5900 },
                    { x: '30', y: 4600 }
                ],
                xkey: 'x',
                hideHover: 'auto',
                ykeys: ['y'],
                labels: ['Y'],
                axes:'x',
                   barColors: ['#5969ff'],
                     resize: true,
                        gridTextSize: '14px'


            });
        }
    });

})(window, document, window.jQuery);