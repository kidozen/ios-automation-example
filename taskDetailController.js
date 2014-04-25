var target = UIATarget.localTarget();
var app = target.frontMostApp();

function taskDetailController (){
}

//Here I map all the object and define an action for each

// tap on a task
taskDetailController.prototype.tapTask = function(title, description){
	app.mainWindow().tableViews()["Empty list"].cells()[0].elements()["More info, Meeting_important"].tap();
}

// delete task
taskDetailController.prototype.tapDelete = function (){
	app.mainWindow().buttons()["Delete"].tap();
}

//complete task
taskDetailController.prototype.tapComplete = function(){
	app.mainWindow().buttons()["Complete"].tap();
}

//send task
taskDetailController.prototype.tapSend = function(){
	app.mainWindow().buttons()["Send"].tap();
}

//back button
taskDetailController.prototype.tapBack = function(){
	app.navigationBar().leftButton().tap();
}

