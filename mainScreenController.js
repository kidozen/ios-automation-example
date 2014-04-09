var target = UIATarget.localTarget();
var app = target.frontMostApp();


function mainScreenController(){
}

//Here I map all the object and define an action for each

// Add button
mainScreenController.prototype.addTask = function (){
	app.navigationBar().buttons()["Add"].tap();
}

//Completed tasks
mainScreenController.prototype.checkCompletedtasks = function(){
	app.mainWindow().tableViews()["Empty list"].cells()["Completed"].tap();
}

//Pending tasks
mainScreenController.prototype.checkPendingtasks = function(){
	app.mainWindow().tableViews()["Empty list"].cells()["Pending"].tap();
}

//All tasks
mainScreenController.prototype.checkAlltasks = function(){
	app.mainWindow().tableViews()["Empty list"].cells()["All"].tap();
}

// When add a task an alert is shown, so I need to handle it

UIATarget.onAlert = function onAlert(alert) {
	target.delay(1);
	var title = alert.name();
	UIALogger.logWarning("Alert with title '" + title + "' encountered!");
	
	if (title == "New task") 
   		{ 
    		app.alert().tableViews()["Empty list"].cells()[0].textFields()[0].setValue("Meeting");
			app.alert().tableViews()["Empty list"].cells()[1].textFields()[0].setValue("important");
			app.alert().buttons()["Ok"].tap();
    		return true; 
   		}
  	return false;
}

