var app = angular.module('app', []);

app.controller('AppCtrl', function ($scope) {

    $scope.showPopover=false;
      
    $scope.popover = {
        title: 'Title',
        message: 'Message'
    };   

    $scope.categories = [
        { 
          title: 'Computers',
          categories: [
            {
              title: 'Laptops',
              categories: [
                {
                  title: 'Ultrabooks'
                },
                {
                  title: 'Macbooks'            
                }
              ]
            },
      
            {
              title: 'Desktops'
            },
      
            {
              title: 'Tablets',
              categories: [
                { 
                  title: 'Apple'
                },
                {
                  title: 'Android'
                }
              ]        
            }
          ]
        },
      
        {
          title: 'Printers',
          categories: [
            {
              title: 'Laptops',
              categories: [
                {
                  title: 'Ultrabooks'
                },
                {
                  title: 'Macbooks',
                  categories: [
                    { 
                      title: 'Apple',
                      categories: [
                        { 
                          title: 'Apple',
                          categories: [
                            { 
                              title: 'Apple'
                            },
                            {
                              title: 'Android'
                            }
                          ]  
                        },
                        {
                          title: 'Android'
                        }
                      ]  
                    },
                    {
                      title: 'Android'
                    }
                  ]  
                           
                }
              ]
            },
      
            {
              title: 'Desktops'
            },
      
            {
              title: 'Tablets',
              categories: [
                { 
                  title: 'Apple'
                },
                {
                  title: 'Android'
                }
              ]        
            }
          ]
        }
      
      ];


});