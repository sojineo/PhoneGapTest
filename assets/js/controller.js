window.loggedIn = true;
expenseManager
.controller('homeCtrl', function($scope,$location,expenseManagerFactory){	
		$scope.headerText 			= expenseManagerFactory.headerText;
		$scope.footerText 			= expenseManagerFactory.footerText;
		$scope.backButton 			= false;
		$scope.homeButton 			= false;
		$scope.notificationButton 	= true;
		$scope.logoutButton 		= true;
		$scope.test 				= 'Test';			
		
		expenseManagerFactory.checkConnection();
		
		$scope.addExpense 			= function(){
			$location.path("/add_expense");
		};
		
		$scope.allExpense 			= function(){
			$location.path("/all_expense");
		};
		
		$scope.expenseRequests 		= function(){
			$location.path("/expense_requests");
		};
		
		$scope.currentStatus 		= function(){
			$location.path("/current_status");
		};	
		
		$scope.changePassword 		= function(){
			$location.path("/change_password");
		};
		
		//$("#home").trigger("create");	
})

.controller('addExpenseCtrl', function($scope,expenseManagerFactory){	
		$scope.headerText 				= expenseManagerFactory.headerText;
		$scope.footerText 				= expenseManagerFactory.footerText;
		$scope.backButton 				= true;
		$scope.homeButton 				= true;
		$scope.notificationButton 		= true;
		$scope.logoutButton 			= false;
		
		$scope.clickHomebutton 		= function(){
			expenseManagerFactory.clickHomebutton();
		};
		
		$scope.clickBackbutton 		= function(){
			expenseManagerFactory.clickBackbutton();
		};
		
		//$("#home").trigger("create");
})

.controller('addExpenseCtrl', function($scope,expenseManagerFactory){	
		$scope.headerText 				= expenseManagerFactory.headerText;
		$scope.footerText 				= expenseManagerFactory.footerText;
		$scope.backButton 				= true;
		$scope.homeButton 				= true;
		$scope.notificationButton 		= true;
		$scope.logoutButton 			= false;
		
		$scope.clickHomebutton 		= function(){
			expenseManagerFactory.clickHomebutton();
		};
		
		$scope.clickBackbutton 		= function(){
			expenseManagerFactory.clickBackbutton();
		};
		
		//$("#home").trigger("create");
})

.controller('expenseRequestsCtrl', function($scope,expenseManagerFactory){	
		$scope.headerText 				= expenseManagerFactory.headerText;
		$scope.footerText 				= expenseManagerFactory.footerText;
		$scope.backButton 				= true;
		$scope.homeButton 				= true;
		$scope.notificationButton 		= true;
		$scope.logoutButton 			= false;
		
		$scope.clickHomebutton 		= function(){
			expenseManagerFactory.clickHomebutton();
		};
		
		//$("#home").trigger("create");
})

.controller('allExpenseCtrl', function($scope,expenseManagerFactory){	
		$scope.headerText 				= expenseManagerFactory.headerText;
		$scope.footerText 				= expenseManagerFactory.footerText;
		$scope.backButton 				= true;
		$scope.homeButton 				= true;
		$scope.notificationButton 		= true;
		$scope.logoutButton 			= false;
		
		$scope.clickTableRow 		= function(){
			alert('Test');
		};
		
		$scope.clickHomebutton 		= function(){
			expenseManagerFactory.clickHomebutton();
		};
		
		$scope.clickBackbutton 		= function(){
			expenseManagerFactory.clickBackbutton();
		};
		
		//$("#home").trigger("create");
})

.controller('currentStatusCtrl', function($scope,expenseManagerFactory){
		
		$scope.headerText 				= expenseManagerFactory.headerText;
		$scope.footerText 				= expenseManagerFactory.footerText;
		$scope.backButton 				= true;
		$scope.homeButton 				= true;
		$scope.notificationButton 		= true;
		$scope.logoutButton 			= false;
		
		$scope.clickHomebutton 		= function(){
			expenseManagerFactory.clickHomebutton();
		};
		
		//$("#home").trigger("create");
})

.controller('changePasswordCtrl', function($scope,expenseManagerFactory){	
		$scope.headerText 				= expenseManagerFactory.headerText;
		$scope.footerText 				= expenseManagerFactory.footerText;
		$scope.backButton 				= true;
		$scope.homeButton 				= true;
		$scope.notificationButton 		= true;
		$scope.logoutButton 			= false;
		
		$scope.clickHomebutton 		= function(){
			expenseManagerFactory.clickHomebutton();
		};
		
		//$("#home").trigger("create");
})

.controller('loginCtrl', function($scope,expenseManagerFactory){	
		$scope.headerText 				= expenseManagerFactory.headerText;
		$scope.footerText 				= expenseManagerFactory.footerText;
		$scope.backButton 				= false;
		$scope.homeButton 				= false;
		$scope.notificationButton 		= false;
		$scope.logoutButton 			= false;
		//$("#home").trigger("create");	
})

.controller('defaultCtrl', function($scope,$location){
		$scope.getTemplate 				= function(){
				if (!window.loggedIn ){
					return "templates/tpl_login.html";
				}else{
					return "templates/tpl_home.html";
				}
		};
})
;