  import React from "react";
  import { useEffect } from "react";
  import { connect } from "react-redux";


  const DiscussionMessageComponent = ({message, timestamp}) => {
  
  
    return (
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M3.25 4a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 01.75.75v3.19l3.72-3.72a.75.75 0 01.53-.22h10a.25.25 0 00.25-.25V4.25a.25.25 0 00-.25-.25H3.25zm-1.75.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 01-1.75 1.75h-9.69l-3.573 3.573A1.457 1.457 0 015 21.043V18.5H3.25a1.75 1.75 0 01-1.75-1.75V4.25z"></path></svg> 
      <h3>userName * {timestamp}</h3>
          <p>{message}</p>
          <hr />
      </div>
    );
  };
 
  
 

  
  export default DiscussionMessageComponent
  