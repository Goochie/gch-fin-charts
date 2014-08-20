/**
 * Author : Bill Gooch
 *
 *
 */

(function(){

    function chartViewDirective(){

        function Controller(){

        }


        return {
            require : '^gchFincharts',
            controller: Controller,
            replace : 'true',
            template : getHTMLtemplate(),
            restrict: 'E'
        }

    }

    //------------------------
    //  Configure Directive
    //------------------------

    angular.module('gch-fin-charts')
        .directive('chartView',chartViewDirective);


    //-------------------
    //Helper methods
    //-------------------

    function getHTMLtemplate(){

        var temp = '<div id="chartView">' +
                        '<div class="btn-group">' +
                            '<label class="btn btn-primary" ng-model="radioModel" btn-radio="'Left'">Left</label>' +
                            '<label class="btn btn-primary" ng-model="radioModel" btn-radio="'Middle'">Middle</label>' +
                            '<label class="btn btn-primary" ng-model="radioModel" btn-radio="'Right'">Right</label>' +
                       ' </div>' +


                   '</div>'

        return temp;
    }


}())

