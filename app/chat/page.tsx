"use client";

import { useState } from "react";

export default function Page() {
   const [messages, setMessages] = useState<string>(
      "foo",
   );

   return (
      <div>
         <h1>Chat</h1>
         <div>
            {messages}
            {/* interpolation */}
         </div>
         <button
            onClick={() => {
               setMessages("1, 2, 3");
               console.log(messages);
            }}
         >
            Click me
         </button>
      </div>
   );
}
