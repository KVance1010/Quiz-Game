// question objects
const question1 = {
	question: 'What is not a way to declare a variable in JavaScript?',
	A: 'var',
	B: 'let',
	C: 'const',
	D: 'string',
	answer: 'string',
};
const question2 = {
	question: 'JavaScript is ______ language',
	A: 'Scripting',
	B: 'Programming',
	C: 'Both a and b',
	D: 'Application',
	answer: 'Scripting',
};
const question3 = {
	question: 'JavaScript is ______ Side scripting language.',
	A: 'Server',
	B: 'Client',
	C: 'ISP',
	D: 'Browser',
	answer: 'Browser',
};
const question4 = {
	question: 'The behavior of the document elements can be defined by?',
	A: 'Using document object',
	B: 'Registering appropriate event handlers',
	C: 'Using element object',
	D: 'All of the mentioned',
	answer: 'Registering appropriate event handlers',
};
const question5 = {
	question:
		'The service(s) that enables networking through scripted HTTP requests is?',
	A: 'XMLHttpResponse',
	B: 'XMLRequest',
	C: 'XMLHttpRequest',
	D: 'All of the mentioned',
	answer: 'XMLHttpRequest',
};
const question6 = {
	question: 'The HTML5 specification includes?',
	A: 'Data storage',
	B: 'Graphics APIs',
	C: 'XMLHttpRequest',
	D: 'All of the mentioned',
	answer: 'All of the mentioned',
};
const question7 = {
	question: 'Which of the following are not advanced services?',
	A: 'Data storage',
	B: 'Networking',
	C: 'XMLHttpRequest object',
	D: 'None of the mentioned',
	answer: 'None of the mentioned',
};
const question8 = {
	question: 'JavaScript code between a pair of “script” tags are called?',
	A: 'Non-inline',
	B: 'External',
	C: 'Referenced',
	D: 'Inline',
	answer: 'Inline',
};
const question9 = {
	question: 'Client-side JavaScript code is embedded within HTML documents in?',
	A: 'A URL that uses the special javascript:encoding',
	B: 'A URL that uses the special javascript:stack',
	C: 'A URL that uses the special javascript:protocol',
	D: 'A URL that uses the special javascript:code',
	answer: 'XMLHttpRequest',
};
const question10 = {
	question:
		'What is the programming philosophy that argues that content and behavior should as much as possible be kept separate?',
	A: 'Unobtrusive JavaScript',
	B: 'Obtrusive JavaScript',
	C: 'Inherited JavaScript',
	D: 'Modular JavaScript',
	answer: 'Unobtrusive JavaScript',
};
const question11 = {
	question:
		' Which of the following communicates with server-side CGI scripts through HTML form submissions and can be written without the use of JavaScript?',
	A: 'Static Web Pages',
	B: 'Interactive Web Pages',
	C: 'Conditional Web Pages',
	D: 'None of the mentioned',
	answer: 'Interactive Web Pages',
};
const question12 = {
	question:
		' ______ tag is an extension to HTML that can enclose any number of JavaScript statements.',
	A: '<SCRIPT>',
	B: '<BODY>',
	C: '<HEAD>',
	D: '<TITLE>',
	answer: '<SCRIPT>',
};
const question13 = {
	question: 'How does JavaScript store dates in a date object?',
	A: 'The number of milliseconds since January 1st, 1970',
	B: 'The number of days since January 1st, 1900',
	C: "The number of seconds since Netscape's public stock offering.",
	D: 'None of the above',
	answer: 'The number of milliseconds since January 1st, 1970',
};
const question14 = {
	question: 'Which of the following attribute can hold the JavaScript version?',
	A: 'LANGUAGE',
	B: 'SCRIPT',
	C: 'VERSION',
	D: 'None of the above',
	answer: 'LANGUAGE',
};
const question15 = {
	question: 'What is the correct JavaScript syntax to write "Hello World"?',
	A: 'System.out.println("Hello World")',
	B: 'println ("Hello World")',
	C: 'document.write("Hello World")',
	D: 'response.write("Hello World")',
	answer: 'document.write("Hello World")',
};
const question16 = {
	question:
		'Which of the following way can be used to indicate the LANGUAGE attribute?',
	A: '<LANGUAGE="JavaScriptVersion">',
	B: '<SCRIPT LANGUAGE="JavaScriptVersion">',
	C: '<SCRIPT LANGUAGE="JavaScriptVersion">    JavaScript statements…</SCRIPT>',
	D: '<SCRIPT LANGUAGE="JavaScriptVersion"!>    JavaScript statements…</SCRIPT>',
	answer:
		'<SCRIPT LANGUAGE="JavaScriptVersion">    JavaScript statements…</SCRIPT>',
};
const question17 = {
	question: 'Inside which HTML element do we put the JavaScript?',
	A: '<js>',
	B: '<scripting>',
	C: '<script>',
	D: '<javascript>',
	answer: '<script>',
};
const question18 = {
	question:
		'What is the correct syntax for referring to an external script called " abc.js"?',
	A: '<script href=" abc.js">',
	B: '<script name=" abc.js">',
	C: '<script src=" abc.js">',
	D: 'None of the above',
	answer: '<script src=" abc.js">',
};
const question19 = {
	question: 'Which types of image maps can be used with JavaScript?',
	A: 'Server-side image maps',
	B: 'Client-side image maps',
	C: 'Server-side image maps and Client-side image maps',
	D: 'None of the above',
	answer: 'Client-side image maps',
};
const question20 = {
	question:
		'Which of the following navigator object properties is the same in both   Netscape and IE?',
	A: 'navigator.appCodeName',
	B: 'navigator.appName',
	C: 'navigator.appVersion',
	D: 'None of the above',
	answer: 'navigator.appCodeName',
};
const question21 = {
	question: 'Which is the correct way to write a JavaScript array?',
	A: 'var txt = new Array(1:"tim",2:"kim",3:"jim")',
	B: 'var txt = new Array:1=("tim")2=("kim")3=("jim")',
	C: ' var txt = new Array("tim","kim","jim")',
	D: 'var txt = new Array="tim","kim","jim"',
	answer: 'var txt = new Array("tim","kim","jim")',
};
const question22 = {
	question:
		'What does the <noscript> tag do?',
	A: 'Enclose text to be displayed by non-JavaScript browsers.',
	B: 'Prevents scripts on the page from executing.',
	C: 'Describes certain low-budget movies.',
	D: 'None of the above',
	answer: 'Enclose text to be displayed by non-JavaScript browsers.',
};
const question23 = {
	question:
		' If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?',
	A: '"New Text"?',
	B: 'para1.value="New Text";',
	C: 'para1.firstChild.nodeValue= "New Text";',
	D: 'para1.nodeValue="New Text";',
	answer: 'para1.value="New Text";',
};
const question24 = {
	question:
		'23.  JavaScript entities start with _______ and end with _________.',
	A: 'Semicolon, colon',
	B: 'Semicolon, Ampersand',
	C: 'Ampersand, colon',
	D: 'Ampersand, semicolon',
	answer: 'Ampersand, semicolon',
};
const question25 = {
	question:
		'Which of the following best describes JavaScript?',
	A: 'a low-level programming language.',
	B: 'a scripting language precompiled in the browser.',
	C: 'a compiled scripting language.',
	D: 'an object-oriented scripting language.',
	answer: 'an object-oriented scripting language.',
};
const question26 = {
	question:
		'Choose the server-side JavaScript object?',
	A: 'FileUpLoad',
	B: 'Function',
	C: 'File',
	D: 'Date',
	answer: 'File',
};
const question27 = {
	question:
		'Which of the following is not considered a JavaScript operator?',
	A: 'new',
	B: 'this',
	C: 'delete',
	D: 'typeof',
	answer: 'this',
};
const question28 = {
	question:
		'______method evaluates a string of JavaScript code in the context of the specified object.',
	A: 'Eval',
	B: 'ParseInt',
	C: 'ParseFloat',
	D: 'Efloat',
	answer: 'Eval',
};
const question29 = {
	question:
		'Choose the client-side JavaScript object?',
	A: 'Database',
	B: 'Cursor',
	C: 'Client',
	D: 'FileUpLoad',
	answer: 'FileUpLoad',
};
const question30 = {
	question:
		'Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?',
	A: 'onfocus',
	B: 'onblur',
	C: 'onclick',
	D: 'ondblclick',
	answer: 'onblur',
};
const question31 = {
	question:
		'The syntax of Eval is _______.',
	A: '[objectName.]eval(numeriC.',
	B: '[objectName.]eval(string)',
	C: '[EvalName.]eval(string)',
	D: '[EvalName.]eval(numeriC.',
	answer: '[objectName.]eval(string)',
};
const question32 = {
	question:
		'JavaScript is interpreted by ______.',
	A: 'Client',
	B: 'Server',
	C: 'Object',
	D: 'None of the above',
	answer: 'Client',
};
const question33 = {
	question:
		'Using _______ statement is how you test for a specific condition.',
	A: 'Select',
	B: 'If',
	C: 'Switch',
	D: 'For',
	answer: 'Select',
};
const question34 = {
	question:
		'Which of the following is the structure of an if statement?',
	A: 'if (conditional expression is true) thenexecute this codeend if',
	B: 'if (conditional expression is true)execute this codeend if',
	C: 'if (conditional expression is true)   {then execute this code>->}',
	D: 'if (conditional expression is true) then {execute this code}',
	answer: 'if (conditional expression is true)   {then execute this code>->}',
};
const question35 = {
	question:
		'How to create a Date object in JavaScript?',
	A: 'dateObjectName = new Date([parameters])',
	B: 'dateObjectName.new Date([parameters])',
	C: 'dateObjectName := new Date([parameters])',
	D: 'dateObjectName Date([parameters])',
	answer: 'dateObjectName = new Date([parameters])',
};
const question36 = {
	question:
		'The _______ method of an Array object adds and/or removes elements from an array.',
	A: 'Reverse',
	B: 'Shift',
	C: 'Slice',
	D: 'Splice',
	answer: 'Splice',
};
const question37 = {
	question:
		'To set up the window to capture all Click events, we use which of the following statement?',
	A: 'window.captureEvents(Event.CLICK);',
	B: 'window.handleEvents (Event.CLICK);',
	C: 'window.routeEvents(Event.CLICK );',
	D: 'window.raiseEvents(Event.CLICK );',
	answer: 'window.captureEvents(Event.CLICK);',
};
const question38 = {
	question:
		'Which tag(s) can handle mouse events in Netscape?',
	A: '<IMG>',
	B: '<A>',
	C: '<BR>',
	D: 'None of the above',
	answer: '<A>',
};
const question39 = {
	question:
		'________ is the tainted property of a window object.',
	A: 'Pathname',
	B: 'Protocol',
	C: 'Defaultstatus',
	D: 'Host',
	answer: 'Defaultstatus',
};
const question40 = {
	question:
		'To enable data tainting, the end user sets the _________ environment variable.',
	A: 'ENABLE_TAINT',
	B: 'MS_ENABLE_TAINT',
	C: 'NS_ENABLE_TAINT',
	D: 'ENABLE_TAINT_NS',
	answer: 'NS_ENABLE_TAINT',
};
const question41 = {
	question:
		'In JavaScript, _________ is an object of the target language data type that encloses an object of the source language..',
	A: 'a wrapper',
	B: 'a link',
	C: 'a cursor',
	D: 'a form ',
	answer: 'a wrapper',
};
const question42 = {
	question:
		'When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type ________.',
	A: 'ScriptObject',
	B: 'JSObject',
	C: 'JavaObject',
	D: 'Jobject',
	answer: 'JSObject',
};
const question43 = {
	question:
		' _______ class provides an interface for invoking JavaScript methods and examining JavaScript properties.',
	A: 'ScriptObject',
	B: 'JSObject',
	C: 'JavaObject',
	D: 'Jobject',
	answer: 'JSObject',
};
const question44 = {
	question:
		'_________ is a wrapped Java array, accessed from within JavaScript code.',
	A: 'JavaArray',
	B: 'JavaClass',
	C: 'JavaObject',
	D: 'JavaPackage',
	answer: 'JavaArray',
};
const question45 = {
	question:
		'A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript.',
	A: 'JavaArray',
	B: 'JavaClass',
	C: 'JavaObject',
	D: 'JavaPackage',
	answer: 'JavaClass',
};
const question46 = {
	question:
		'The JavaScript exception is available to the Java code as an instance of _______.',
	A: 'netscape.javascript.JSObject',
	B: 'netscape.javascript.JSException',
	C: 'netscape.plugin.JSException',
	D: 'None of the above',
	answer: 'netscape.javascript.JSException',
};
const question47 = {
	question:
		'To open a dialog box each time an error occurs, which of the following is added to prefs.js?',
	A: 'user_pref("javascript.classic.error_alerts", true);',
	B: 'user_pref("javascript.classic.error_alerts ", false);',
	C: 'user_pref("javascript.console.open_on_error ", true);',
	D: ' user_pref("javascript.console.open_on_error ", false);',
	answer: 'user_pref("javascript.classic.error_alerts", true);',
};
const question48 = {
	question:
		'To automatically open the console when a JavaScript error occurs which of the following is added to prefs.js?',
	A: 'user_pref(" javascript.console.open_on_error", false);',
	B: 'user_pref("javascript.console.open_error ", true);',
	C: 'user_pref("javascript.console.open_error ", false);',
	D: 'user_pref("javascript.console.open_on_error", true);',
	answer: 'user_pref("javascript.console.open_on_error", true);',
};
const question49 = {
	question:
		'The syntax of a blur method in a button object is _______.',
	A: 'Blur()',
	B: 'Blur(contrast)',
	C: 'Blur(value)',
	D: 'Blur(depth)',
	answer: 'Blur()',
};
const question50 = {
	question:
		'The syntax of capture events method for document object is _______.',
	A: 'captureEvents()',
	B: 'captureEvents(args eventType)',
	C: 'captureEvents(eventType)',
	D: 'captureEvents(eventVal)',
	answer: 'captureEvents(eventType)',
};
const question51 = {
	question:
		'The syntax of close method for document object is ________.',
	A: 'Close(doC.',
	B: ' Close(object)',
	C: 'Close(val)',
	D: 'Close()',
	answer: 'Close()',
};
