expenseManager.factory('expenseManagerFactory', function($http,$window,$location){	
	var factory = {};
	factory.headerText = 'Test App';
	factory.footerText = 'Test Footer';	
	
	factory.clickBackbutton = function(){
		$window.history.back();
	};
	
	factory.checkConnection = function(){
		var networkState = navigator.connection.type;
			console.log(networkState);
            var states = {};
            states[Connection.UNKNOWN] = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI] = 'WiFi connection';
            states[Connection.CELL_2G] = 'Cell 2G connection';
            states[Connection.CELL_3G] = 'Cell 3G connection';
            states[Connection.CELL_4G] = 'Cell 4G connection';
            states[Connection.CELL] = 'Cell generic connection';
            states[Connection.NONE] = 'No network connection';

            if (states[networkState] == 'No network connection') {

                navigator.notification.confirm(
                          'No Internet Connection. Please connect the internet and relaunch the application.',
                          onConfirmQuit,
                          'No Internet Connection',
                          'OK,Cancel'
                      );
            }
	};
	
	factory.clickHomebutton = function(){
		$location.path("/home");
	};
	/*factory.getData = function(method, url, callback, postData){
		$http({method:method, url: url, data: postData})
			.success(function(data){
				if(callback == 'showHomeData')
					showHomeData(data);
				else if(callback == 'showMyContacts')
					showMyContacts(data);
				else if(callback == 'saveContact')
					saveContact(data);
				else if(callback == 'deletedContact')
					deletedContact(data);
				else if(callback == 'editContact')
					editContact(data);
			})
			.error(function(){
				alert("Try again");
			});
	
	};*/
	return factory;
});