<!DOCTYPE html>
<html>
<head>

<meta charset="utf-8">
<title>Cobalt Pig Latin Exercise</title>
<meta name="viewport" content="initial-scale=1, user-scalable=no, width=device-width">

	<meta name="Author" content="Victor Amokeodo">
	<meta name="resource-type" content="document">
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<meta http-equiv="Content-Language" content="en-uk" />

	<!--
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.0-rc.2/angular.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<script src="https://use.fontawesome.com/84d80f5c79.js"></script>
	-->
	
	<script src="js/angular.min.js"></script>
	<script src="js/angular-route.js"></script>
    <link href="css/bootstrap.css" rel="stylesheet">  
    <link href="font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="css/normalize.css">
</head>

<body id="rootPage" style="font-size:1em" ng-app="myApp">

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" style="margin-right:15px;" href="#!/"><i class="fa fa-home" style="font-size:1.2em" aria-hidden="true"></i> Home</a>
                <a class="navbar-brand" style="margin-right:15px;" href="#!/history"><i class="fa fa-history" style="font-size:1.2em" aria-hidden="true"></i> History</a>
            </div>
			
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
	
	
    <!-- Page Content -->
    <div class="container" style="max-width:900px;">
		<div ng-bind-html="submenu | trust"></div>
		<div ng-view style="margin-top:100px"></div>
    </div>
    <!-- /.container -->

</body>
	<script src="js/inc_cobalt.js"></script>
</html>