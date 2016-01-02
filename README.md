# GetUserMedia-

This contains a very basic example to tap into your local camera and start a video . In this node is used because chrome version 47 does not allow to use getUserMedia with http 
Warning shown when used with http is :
"getUserMedia() no longer works on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS."

getUserMedia can be used with http if we are serving feed from local . So node server s created for it .

Source from which this code is taken is :
http://www.html5rocks.com/en/tutorials/getusermedia/intro/


2nd step at understanding webrtc is get familiar with step 3 https://bitbucket.org/webrtc/codelab/src
In this we will caller and callee on the smae web page . So we dont need any signalling . Step 3 is used to understand how RTCPeerConnection() api works .
  a) First tap into localstream using getUserMedia . (this is what happens when we press start button)
  b) Now create a localRTCpeer object and add the stream to this object.
  c) Create a remoteRTCPeer object .
  d) Set remote and local description for the objects .
  

For understanding the above mentioned go through this tutorial .
http://www.html5rocks.com/en/tutorials/webrtc/basics/
