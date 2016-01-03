# GetUserMedia-

This contains a very basic example to tap into your local camera and start a video . In this node is used because chrome version 47 does not allow to use getUserMedia with http 
Warning shown when used with http is :
"getUserMedia() no longer works on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS."

getUserMedia can be used with http if we are serving feed from local . So node server s created for it .

Source from which this code is taken is :
http://www.html5rocks.com/en/tutorials/getusermedia/intro/


Next step at understanding webrtc is get familiar with step 3 of this https://bitbucket.org/webrtc/codelab/src.

In this we have caller and reciever on the same web page . So we dont need any kind of signalling . Step 3 is used to understand how RTCPeerConnection() api works .
  a) First tap into localstream using getUserMedia . (this is what happens when we press start button).
  b) PLug into your peer connection . Send this video to another peer.
  c) This video will be available as a stream to another peer.
  d) Plug this video into video tag to display on the web page .
  

For understanding the above mentioned go through this tutorial .
http://www.html5rocks.com/en/tutorials/webrtc/basics/
