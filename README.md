# Tech Session: Bootstrapping Web Development

In this session, we will build a simple web application that allows users to register, login, and view a shop page.

## Your Tasks

To begin, simply run `docker compose up` in your terminal to start the application.
Verify that the stup works by accessing the frontend at `http://localhost:3003`, and the backend at `http://localhost:5000`.

### Task 1: Get familiar with JWT

(10 minutes + 5 minutes presentation)

In the presentation we have seen multiple ways to authenticate users:
- Basic Auth
- Digest (encrypted username and password combination) 
- Bearer Token (JWT)
- OAuth 2.0

For this exercise, we will use JWT (JSON Web Tokens) for authentication.
Answer the following questions and present them to the group:
- How does JWT encode data?
Der Header und die Nutzdaten werden als JSON-Objekte in Base64Url kodiert. Das System generiert die Signatur mithilfe eines geheimen Schlüssels und der Informationen aus dem Header und der Nutzlast.

- Is there a fixed structure for the encoded data?
Ein JSON Web Token (JWT) besteht aus drei Teilen: Header, Nutzlast und Signatur. Die einzelnen Teile sind durch Punkte (.) voneinander getrennt. 

  - Header: Enthält den Signaturalgorithmus (z. B. HS256 oder RS256).
  - Payload: Enthält die Nutzerdaten und Metainformationen (iat, exp, etc.).
  - Signatur: Eine kryptografische Signatur zur Integritätsprüfung.

- Is a JWT token encrypted?
Ein JSON Web Token (JWT) besteht aus einer Gruppe von JSON-Claims, die signiert und/oder verschlüsselt und in einer websicheren Form codiert sind.d

- How does the server verify the token?
Er berechnet die Signatur erneut mit dem geheimen Schlüssel (bei HS256) oder dem öffentlichen Schlüssel (bei RS256) und vergleicht sie mit der Signatur im Token.

Der Server prüft:
  - Gültigkeitsdauer (exp): Ist das Token abgelaufen?
  - Ausstellungszeit (iat): Wurde das Token in der Vergangenheit ausgestellt?
  - Issuer (iss): Wurde das Token von einem vertrauenswürdigen Server ausgestellt?
  - Audience (aud): Ist das Token für diesen Server bestimmt?

- What are the advantages of using JWT for authentication?
Sicherheit: JWTs werden digital signiert, entweder mit einem Geheimnis (HMAC) oder einem öffentlichen/privaten Schlüsselpaar (RSA oder ECDSA), wodurch sie vor Änderungen durch den Client oder einen Angreifer geschützt sind

### Task 2: Implement JWT Authentication

(30 minutes + 5 minutes presentation)

In this task, you will implement JWT authentication in the **backend** part of our application.
Our Python backend uses [Flask](https://flask.palletsprojects.com/en/stable/) as a web framework to handle HTTP requests.

Follow the TODOs in the `backend/app.py` directory to implement JWT authentication.
The TODOs are numbered and should be implemented in this order.

### Task 3: Implement Registration Form

(30 minutes + 5 minutes presentation)

In this task, you will implement a registration form in the **frontend** part of our application.
Our frontend uses [Next.JS](https://nextjs.org/) as a React framework to build the user interface.

Follow the TODOs in [register/page.tsx](frontend/app/register/page.tsx) to implement the registration form using React.

Which parts of your code run on the client side, and which parts run on the server side?
Note that server-side does not necessarily mean that the code runs on the (Python) backend server - 
our Next.JS frontend also has a server-side component that renders the pages.

## Your Homework

### Task 1: Improve the application

Follow the remaining TODOs in the repository. You will add some new features to the application:
- Add a login page. *Hint: this might be very similar to our existing registration page. Try to reasonably re-use code where possible.*
- Add a shop page. Only authorized users should be able to view content on this page. Unauthorized users should be redirected to the login page.
  - Write the frontend component for the shop page.
  - Write the backend API for the shop page.
  - You will need at least two endpoints: one GET endpoint to fetch the list of products and one POST endpoint to add a product to the cart.
  - You can store the products in-memory for now.
- The website currently looks boring! Style the website. You can use plain CSS or Tailwind. 

### Task 2: Run server-side code on the frontend

Remember how we implemented the registration form submission during the tech session.
We used `preventDefault` to prevent the default form submission behavior and instead send the data directly to the Python backend using a fetch request.
Your task is to utilize the default form submission behavior and run the form submission logic on the (Next.JS) server side.

Which advantages do we get if the user's browser never directly talks to our Python backend?

### Task 3: Add a load balancer

You have seen that it is common practice to use a load balancer in front of web applications to distribute incoming traffic.
Add a load balancer to the application. You can use the `nginx` docker image as a load balancer.
The load balancer can also handle SSL termination. You can use a self-signed certificate for this purpose.

- Add an nginx service to your `docker-compose.yml` file.
- Use Google or ChatGPT to find out a minimal working configuration for the nginx service.
- Create a self-signed certificate for a domain of your choice. You can use `openssl` for this purpose. *Note: you need not own this domain. You can simply edit your `/etc/hosts` file on your computer to point the domain to `127.0.0.1`.*
- Configure the nginx service to use the self-signed certificate for SSL termination.
- You can also configure the nginx service to automatically redirect all HTTP traffic to HTTPS.
- For extra protection, add basic auth to the nginx service. You can use a tool like `htpasswd` to generate the password hash.
- For some minimal DoS protection, you can limit the number of connections per IP address. Add a reasonable rate limit to the nginx service.

### Task 4: Read variables from the environment

Our backend currently has a major security flaw: we hard-coded the secret key for signing the JWT tokens in the code,
and we even commited it to the repository. This is a big no-no in production applications.
Adjust the backend to read the secret key from an environment variable.
The environment variable should be specified in a `.env` file that is not added to the repository (use `.gitignore`).

### Task 5: Add a database

The backend application currently stores everything in-memory. This is not ideal for production applications.
Use a database of your choice to store the users and products, and add it to the docker setup.
You can use an SQL database like PostgreSQL, or a NoSQL database like MongoDB.
Find out what an ORM is and use it to interact with the database.
What is an advantage of using ORMs over writing raw SQL queries, regarding security?

### Task 6: Securely store passwords

Think about why it is a bad idea to store your users' passwords in plain text.

A password should always be hashed before storing it in a database.
For this purpose we do not use just any hash function, but a secure, cryptographic one-way hash function.
Find out what that is.

Popular algorithms for this purpose are `bcrypt`, and `Argon2`.
Use one of these algorithms to hash the passwords of the users before storing them in the database.

How will you authenticate the users, now that you do not know their passwords, but only their hashes?
*Hint: hashes are deterministic one-way functions.*

What further measures can you take to secure the passwords of your users?

### Task 7: Bonus questions

- What is the difference between authentication and authorization?
- Which properties do hash functions have?
- Which advantages and disadvantages do relational versus non-relational databases have?
- What is the major difference between symmetric and asymmetric encryption?
- What is the difference between a reverse proxy and a load balancer?
- What is a rainbow table?
