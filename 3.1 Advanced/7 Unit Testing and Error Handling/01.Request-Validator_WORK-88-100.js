function requestValidator(requestObj) {
  
  let methodArr = ["GET", "POST", "DELETE", "CONNECT"];
  let versionArr = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let uriPattern = /^[\w.]+$|^(\*)$/;
  let messagePattern = /[^\<\>\\\&\'\"]+/g;

  if (!requestObj.hasOwnProperty("method") || !methodArr.includes(requestObj.method))
    throw new Error("Invalid request header: Invalid Method");

  if (!requestObj.hasOwnProperty("uri") || requestObj.uri == "" ||
      requestObj.uri !== "*" && !uriPattern.test(requestObj.uri))
      throw new Error("Invalid request header: Invalid URI");

if (!requestObj.hasOwnProperty("version") || !versionArr.includes(requestObj.version))
    throw new Error("Invalid request header: Invalid Version");

  if (requestObj.hasOwnProperty("message")) {
    if (requestObj.message.length > 0)
      if (!messagePattern.test(requestObj.message))
        throw new Error("Invalid request header: Invalid Message");
  }
  else throw new Error("Invalid request header: Invalid Message");

  // return requestObj;
  console.log(requestObj);
}
  
  requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  });
  // console.log("------------------------------------------------------------------------------");
  // requestValidator({
  //   method: 'OPTIONS',
  //   uri: 'git.master',
  //   version: 'HTTP/1.1',
  //   message: '-recursive'
  // });
  // console.log("------------------------------------------------------------------------------");
  // requestValidator({
  //   method: 'POST',
  //   uri: 'home.bash',
  //   message: 'rm -rf /*'
  // });