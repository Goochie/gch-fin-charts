/**
 * Author : Bill Gooch
 *
 *
 */

angular.module('gch-fin-charts', []);

(function(){

    function gchFinChartsDirective(){

        function Controller(){

        }


        return {
            controller: Controller,
            scope:{},
            replace : 'true',
            template : getHTMLtemplate(),
            restrict: 'E'
        }
    }
    //------------------------
    //  Configure Directive
    //------------------------

     angular.module('gch-fin-charts')
         .directive('gchFincharts',gchFinChartsDirective);


    //-------------------
    //Helper methods
    //-------------------

    function getHTMLtemplate(){

         var temp = '<div id="gchFinCharts">' +
                        '<div class="row-fluid">'+
                            '<div class="span12">' +
                                '<div class="row-fluid">' +
                                    '<div class="span12">' +
                                        '<chart-toolbar></chart-toolbar>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="row-fluid">' +
                                    '<div class="span12">' +
                                        '<chart-view></chart-view>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>'+
                     '</div>';

         return temp;
    }

}())
