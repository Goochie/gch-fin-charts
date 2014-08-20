/**
 * Author : Bill Gooch
 *
 * gch-fin-charts: Unit tests
 */

describe('Unit test : Fin Charts directive',function(){

    var elem, scope,ctrl,isoScope, injector ;

    beforeEach(module('gch-fin-charts'));

    beforeEach(inject(function($rootScope, $compile,$injector) {

        injector = $injector;

        elem = angular.element('<gch-fincharts></gch-fincharts>');
        scope = $rootScope.$new();
        $compile(elem)(scope);
        scope.$digest();

        ctrl = elem.controller("gchFincharts");
        //As of angular 1.2 you need to use isolate scope method
        isoScope  = elem.isolateScope();
        scope  = elem.scope();
    }));

    it('gch-fincharts should contain an isolated scope', function(){

        expect(isoScope).toBeDefined();
    })

    it('Should contain chart-toolbar directive', function(){
        expect(elem.html()).toContain('chartToolbar');
    })

    it('Should contain chart-view directive', function(){

        expect(elem.html()).toContain('chartView');

    })

    //----------------------------------------------------
    //
    //----------------------------------------------------
    it(' scope should contain selectedChartType property', function(){

        expect(isoScope).toBeDefined();
    })

    it(' scope should contain selectedZoom property', function(){
        expect(elem.html()).toContain('chartToolbar');
    })

    it('Should contain chart-view directive', function(){

        expect(elem.html()).toContain('chartView');

    })

})



describe('Unit test : Chart toolbar',function(){

    var elem, scope,ctrl,isoScope, injector ;

    beforeEach(module('gch-fin-charts'));

    beforeEach(inject(function($rootScope, $compile,$injector) {

        injector = $injector;

        //------------------------------------
        //   (PARENT) Fin charts directive
        //------------------------------------




        //------------------------------------
        //  Chart toolbar directive
        //------------------------------------
        elem = angular.element('<chart-toolbar></chart-toolbar>');
        scope = $rootScope.$new();
        $compile(elem)(scope);
        scope.$digest();

        ctrl = elem.controller("chartToolbar");
        isoScope  = elem.isolateScope();
        scope  = elem.scope();
    }));

    //Chart buttons
    it(' : there should be a bar chart button',function(){
        expect(elem.html()).toContain('barChart')
    })
    it(' : there should be a line chart button',function(){
        expect(elem.html()).toContain('lineChart')
    })
    it(' : there should be a candle stick chart button',function(){
        expect(elem.html()).toContain('candleStickChart')
    })
    //Zoom buttons
    it(' : there should be a zoom out button',function(){
        expect(elem.html()).toContain('zoomOut')
    })
    it(' : there should be a zoom in button',function(){
        expect(elem.html()).toContain('zoomIn')
    })
    //Time frame
    it(' : there should be a time frame menu button',function(){
        expect(elem.html()).toContain('selectTimeFrame')
    })

    describe(' chart type', function(){


           it(' bar chart display should be triggered', function(){


           })
           it(' line chart display should be triggered', function(){


           })
           it(' candle chart display should be triggered', function(){


           })
    })
    describe(' zoom ', function(){

        it(' should have increased', function(){


        })
        it(' should have decreased', function(){


        })

    })
    describe(' timeframe ', function(){

        it(' should have changed', function(){


        })

    })



})


describe('Unit test : Chart data window',function(){

    var elem, scope,ctrl,isoScope, injector ;

    beforeEach(module('gch-fin-charts'));

    beforeEach(inject(function($rootScope, $compile,$injector) {

        injector = $injector;

        elem = angular.element('<chart-view></chart-view>');
        scope = $rootScope.$new();
        $compile(elem)(scope);
        scope.$digest();

        ctrl = elem.controller("chartView");
        //As of angular 1.2 you need to use isolate scope method
        isoScope  = elem.isolateScope();
        scope  = elem.scope();
    }));








})





/*
 describe('myDir directive', function () {
 var element, scope;

 // Load the directive's module
 beforeEach(module('myDir-module'));

 // Compile the directive and store the element and scope for testing later
 beforeEach(function(){
 inject(function($compile, $rootScope) {
 var linkingFn = $compile('<my-dir></my-dir>');
 scope = $rootScope;
 element = linkingFn(scope);
 });
 });

 it('has some properties', function() {
 expect(element.someMethod()).toBe(XXX);
 });

 it('does something to the scope', function() {
 expect(scope.someField).toBe(XXX);
 });

 it("updates the scope via a $watch", function() {
 scope.someField = 'something';
 scope.$digest();
 expect(scope.someOtherField).toBe('something');
 });
 });*/


