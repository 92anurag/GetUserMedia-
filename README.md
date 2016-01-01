# GetUserMedia-

This contains a very basic example to tap into your local camera and start a video . In this node is used because chrome version 47 does not allow to use getUserMedia with http 
Warning shown when used with http is :
"getUserMedia() no longer works on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS."

getUserMedia can be used with http if we are serving feed from local . So node server s created for it .

Source from which this code is taken is :
http://www.html5rocks.com/en/tutorials/getusermedia/intro/
