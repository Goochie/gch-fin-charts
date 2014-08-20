/**
 * Author : Bill Gooch
 *
 *
 */

(function(){

    function chartToolBarDirective(){

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
        .directive('chartToolbar',chartToolBarDirective);


    //-------------------
    //Helper methods
    //-------------------

    function getHTMLtemplate(){

        var temp = '<div id="chartToolbar">' +
            '' +
            '' +
            '' +
            '' +
            '' +
            '' +
            '' +
            '' +
            '</div>'

        return temp;
    }


}())

