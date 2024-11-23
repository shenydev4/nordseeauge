'use client'

import React, { useRef, useEffect } from 'react';

export default function EncodeMail({
  mail
}:{
  mail:string,
}) {
  const emailAddress = mail;

  // Create a ref to store the link element
  const linkRef = useRef<HTMLAnchorElement | null>(null); 

  useEffect(() => {
    const link = linkRef.current;

    if (link) {
      link.innerHTML = decodeHtml(link.innerHTML);
    } else {
      console.error('Link element not found!');
    }
  }, []);


  function decodeHtml(html:any) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  function encodeEmail(email:any) {
    var encodedString = '';
    for (var i = 0; i < email.length; i++) {
      encodedString += '&#' + email.charCodeAt(i) + ';';
    }
    return encodedString;
  }

  const encodedEmail = encodeEmail(emailAddress);

  return (
    <a 
      href={`mailto:${encodedEmail}`} 
      className="link-intext"
      ref={linkRef} // Assign the ref to the link element
    >
      {encodedEmail} 
    </a>
  );
}