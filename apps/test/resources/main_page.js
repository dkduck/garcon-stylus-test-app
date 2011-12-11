// ==========================================================================
// Project:   Test - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Test */

// This page describes the main user interface for your application.  
Test.mainPage = SC.Page.design({

    // The main pane is made visible on screen as soon as your app is loaded.
    // Add childViews to this pane for views to display immediately on page
    // load.
    mainPane: SC.MainPane.design({
        childViews: 'labelView'.w(),

        labelView: SC.LabelView.design({
            classNames: ['test-view'],
            layout: { centerX: 0, centerY: 0, width: 432, height: 172 },
            textAlign: SC.ALIGN_CENTER,
            value: "Welcome to SproutCore!",
            render: function(context, firstTime) {
                context.push(
                    '<div class="top-left"></div>' +
                    '<div class="top"></div>' +
                    '<div class="top-right"></div>' +
                    '<div class="left"></div>' +
                    '<div class="middle"></div>' +
                    '<div class="right"></div>' +
                    '<div class="bottom-left"></div>' +
                    '<div class="bottom"></div>' +
                    '<div class="bottom-right"></div>' +
                    '<h1>%@</h1>'.fmt(this.get('value'))
                );
            }
        })
    })

});
