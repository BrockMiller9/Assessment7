### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  A JSON Web Token is a JSON object that is used to securely transfer information between two parties. It is digitally signed and can be verified.
  It is composed of three parts: a header, a payload, and a signature.
  It is used to authenticate users and exchange information between parties.

- What is the signature portion of the JWT? What does it do?
  The signature is the third part of the JWT. It is used to verify that the message has not been changed in transit. It is created by hashing the header and payload with a secret key. This secret key is only known by the server.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, the payload is not encrypted. However, the attacker cannot change the payload without invalidating the signature. Once the payload is changed the signature will no longer be valid.

- How can you implement authentication with a JWT? Describe how it works at a high level.
  The server will create a JWT and send it to the client. The client will store the JWT in local storage. The client will send the JWT with every request to the server. The server will verify the JWT and send the requested information back to the client.
  This is a stateless authentication system. The server does not need to store any information about the user. The client will store the JWT and send it with every request.

- Compare and contrast unit, integration and end-to-end tests.
  Unit tests are used to test a single function or component. Integration tests are used to test how multiple components work together. End-to-end tests are used to test the entire system.

- What is a mock? What are some things you would mock?
  A mock is a fake object that is used to test a function or component. It is used to test the function or component in isolation. You would mock any function or component that is not the focus of the test. This allows you to test the function or component in isolation.

- What is continuous integration?
  Continuous integration is the practice of merging all developer working copies to a shared mainline several times a day. This allows for early detection of bugs and conflicts. It also allows for faster integration of new features.

- What is an environment variable and what are they used for?
  Environment variables are variables that are set in the environment. They are used to store information that is needed by the application. They are used to store sensitive information such as API keys and database passwords. They are also used to store information that changes depending on the environment such as the database URL.

- What is TDD? What are some benefits and drawbacks?
  Test Driven Development is a software development process that relies on the repetition of a very short development cycle. The developer writes a failing test, writes just enough code to pass the test, and then refactors the code. The process is repeated until all tests pass. The benefits of TDD are that it forces the developer to think about the requirements before writing the code. It also forces the developer to write testable code. The drawbacks of TDD are that it can be difficult to write tests for some code. It can also be difficult to write tests for code that is already written.

- What is the value of using JSONSchema for validation?
  JSONSchema is a vocabulary that allows you to annotate and validate JSON documents. It allows you to define the structure of the JSON document. It also allows you to define the types of the values in the JSON document. This allows you to validate the JSON document before using it.

- What are some ways to decide which code to test?
  You should test any code that is critical to the application. You should also test any code that is difficult to test. You should also test any code that is likely to change. You should also test any code that is likely to break. The code that is critical to the application is the code that is most likely to break.

- What does `RETURNING` do in SQL? When would you use it?
  The RETURNING clause in SQL is used to return the values of the columns that were modified by the statement. It is used to return the values of the columns that were modified by the INSERT, UPDATE, or DELETE statement.

- What are some differences between Web Sockets and HTTP?
  Web Sockets are a protocol that allows for full-duplex communication between a client and a server. HTTP is a protocol that allows for half-duplex communication between a client and a server. Web Sockets are used for real-time communication between a client and a server. HTTP is used for request-response communication between a client and a server.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I personally enjoyed using Flask over Express. I think both of the technologies are great, however, I was able to pick up on Flask faster than Express. I enjoyed how lightweight Flask was and it seemed to me there were not as many moving parts. The diffferent files, folders, organizations, test and so on involved with Express can get difficult to manage if your not careful.
