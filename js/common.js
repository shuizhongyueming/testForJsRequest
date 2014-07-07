require.config({
    baseUrl: 'js'
});

require(['tab','tab2','tab3','tab4','selector','selector2','selector3','selector4', 'event2', 'event3', 'event4', 'event'], function($, E) {
    var d = new Date(),
        minutes = d.getMinutes(),
        second = d.getSeconds(),
        milliSecond = d.getMilliseconds();
	console.log('main2 is called at minutes: '+minutes+'  second: '+second+' and millisecond: '+milliSecond);
});
