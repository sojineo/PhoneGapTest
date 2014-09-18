
var expenseManager = angular.module('expenseManager', ['ngAnimate', 'ngRoute']);
expenseManager.config(function ($routeProvider){
	$routeProvider
		.when('/',
			{
				controller: 'defaultCtrl',
				templateUrl: 'templates/tpl_default.html'
			}
		)
		.when('/home',
			{
				controller: 'defaultCtrl',
				templateUrl: 'templates/tpl_default.html'
			}
		)
		.when('/add_expense',
			{
				controller: 'addExpenseCtrl',
				templateUrl: 'templates/tpl_add_expense.html'
			}
		)
		.when('/all_expense',
			{
				controller: 'allExpenseCtrl',
				templateUrl: 'templates/tpl_all_expenses.html'
			}
		)
		.when('/expense_requests',
			{
				controller: 'expenseRequestsCtrl',
				templateUrl: 'templates/tpl_expense_requests.html'
			}
		)
		.when('/current_status',
			{
				controller: 'currentStatusCtrl',
				templateUrl: 'templates/tpl_current_status.html'
			}
		)
		.when('/change_password',
			{
				controller: 'changePasswordCtrl',
				templateUrl: 'templates/tpl_change_password.html'
			}
		)
		.when('/login',
			{
				controller: 'loginCtrl',
				templateUrl: 'templates/tpl_login.html'
			}
		)
		.otherwise({redirectTo: '/'});
});


expenseManager.directive('footerView', function() {
        return {
            priority: 1000,
            terminal: true,
            transclude: true,
            restrict: 'E',
            templateUrl: 'templates/tpl_footer.html',
            replace: true,
            compile: function(element, attr, transclude) {
                return function (scope, element, attr) {
                   $("body").trigger("create");
                };
            }
        };
    });

expenseManager.run(function($rootScope, $templateCache) {
   $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if (typeof(current) !== 'undefined'){
            $templateCache.remove(current.templateUrl);
        }
    });
});
	
expenseManager.directive('headerView', function() {
        return {
            priority: 1000,
            terminal: true,
            transclude: true,
            restrict: 'E',
            templateUrl: 'templates/tpl_header.html',
            replace: true,
            compile: function(element, attr, transclude) {
                return function (scope, element, attr) {
                   $("body").trigger("create");
                };
            }
        };
    });