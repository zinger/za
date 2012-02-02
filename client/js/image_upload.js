function fileUpload(form, action_url, div_id, performInvite) {
    // Create the iframe...
    var iframe = document.createElement("iframe");
    iframe.setAttribute("id", "upload_iframe");
    iframe.setAttribute("name", "upload_iframe");
    iframe.setAttribute("width", "0");
    iframe.setAttribute("height", "0");
    iframe.setAttribute("border", "0");
    iframe.setAttribute("style", "width: 0; height: 0; border: none;");
 
    // Add to document...
    form.parentNode.appendChild(iframe);
    window.frames['upload_iframe'].name = "upload_iframe";
 
    iframeId = document.getElementById("upload_iframe");
 
    // Add event...
    var eventHandler = function () {
 
            if (iframeId.detachEvent) iframeId.detachEvent("onload", eventHandler);
            else iframeId.removeEventListener("load", eventHandler, false);
 
            var content;
            // Message from server...
            if (iframeId.contentDocument) {
                alert("came in 1");
                content = iframeId.contentDocument.body.innerHTML;
            } else if (iframeId.contentWindow) {
                alert("came in 2");
                content = iframeId.contentWindow.document.body.innerHTML;
            } else if (iframeId.document) {
                alert("came in 3");
                content = iframeId.document.body.innerHTML;
            }
            var contestId = content['cid'];
            za.tempvars.contestid = contestId;
            document.getElementById(div_id).innerHTML = content;
            // Del the iframe...
            setTimeout('iframeId.parentNode.removeChild(iframeId)', 250);
            if (performInvite) {
                alert("perform invite is true");
                za.inviteToContest();
            }
        }
 
    if (iframeId.addEventListener) iframeId.addEventListener("load", eventHandler, true);
    if (iframeId.attachEvent) iframeId.attachEvent("onload", eventHandler);
 
    // Set properties of form...
    form.setAttribute("target", "upload_iframe");
    form.setAttribute("action", action_url);
    form.setAttribute("method", "post");
    form.setAttribute("enctype", "multipart/form-data");
    form.setAttribute("encoding", "multipart/form-data");
    //form.setAttribute("op", "submit_entry");
 
    // Submit the form...
    alert("submitting form.. ");
    
    form.submit();
 
    document.getElementById(div_id).innerHTML = "<img src='../html/images/uploading.gif'><br />Uploading...";
}