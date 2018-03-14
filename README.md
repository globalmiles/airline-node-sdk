# Getting started

API for Airlines

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Global%20Miles%20Airline%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Global%20Miles%20Airline%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `GlobalMilesAirlineAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Global%20Miles%20Airline%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Global%20Miles%20Airline%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Global%20Miles%20Airline%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Global%20Miles%20Airline%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Global Miles Airline APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Global%20Miles%20Airline%20APIController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [FlightsController](#flights_controller)

## <a name="flights_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FlightsController") FlightsController

### Get singleton instance

The singleton instance of the ``` FlightsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FlightsController;
```

### <a name="create_recommend_a_new_member"></a>![Method: ](https://apidocs.io/img/method.png ".FlightsController.createRecommendANewMember") createRecommendANewMember

> This endpoint allows to recommend a new member to airlines.


```javascript
function createRecommendANewMember(accept, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  ``` DefaultValue ```  | It advertises which content type is able to understand. |
| contentType |  ``` Required ```  ``` DefaultValue ```  | It tells the client what the content type of the returned. |
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var accept = 'Accept';
    var contentType = 'Content-Type';
    var body = new NewMemberRequest({"key":"value"});

    controller.createRecommendANewMember(accept, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_flight_status"></a>![Method: ](https://apidocs.io/img/method.png ".FlightsController.createFlightStatus") createFlightStatus

> This endpoint allows to search the status of flight.


```javascript
function createFlightStatus(accept, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  ``` DefaultValue ```  | It advertises which content type is able to understand. |
| contentType |  ``` Required ```  ``` DefaultValue ```  | It tells the client what the content type of the returned. |
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var accept = 'Accept';
    var contentType = 'Content-Type';
    var body = new FlightStatusRequest({"key":"value"});

    controller.createFlightStatus(accept, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_flight_creation"></a>![Method: ](https://apidocs.io/img/method.png ".FlightsController.createFlightCreation") createFlightCreation

> This endpoint allows to create a flight on the system and defines the mileage rules for the passenger.


```javascript
function createFlightCreation(accept, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  ``` DefaultValue ```  | It advertises which content type is able to understand. |
| contentType |  ``` Required ```  ``` DefaultValue ```  | It tells the client what the content type of the returned. |
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var accept = 'Accept';
    var contentType = 'Content-Type';
    var body = new FlightCreateRequest({"key":"value"});

    controller.createFlightCreation(accept, contentType, body, function(error, response, context) {

    
    });
```



### <a name="create_member_search"></a>![Method: ](https://apidocs.io/img/method.png ".FlightsController.createMemberSearch") createMemberSearch

> This endpoint allows to search a member on the airline system.


```javascript
function createMemberSearch(accept, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  ``` DefaultValue ```  | It advertises which content type is able to understand. |
| contentType |  ``` Required ```  ``` DefaultValue ```  | It tells the client what the content type of the returned. |
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var accept = 'Accept';
    var contentType = 'Content-Type';
    var body = new MemberSearchRequest({"key":"value"});

    controller.createMemberSearch(accept, contentType, body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



