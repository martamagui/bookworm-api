# Bookworm API
![image](https://user-images.githubusercontent.com/73697174/174844644-1549b230-833e-49b2-8290-34605f6af92a.png)
<br/>

Created to be the server of BookWorm platform.

## Technologies
- TypeScript
- Node
- Express
- JWT
- BCrypt
- Mongoose

## Installation

To run this proyect you need to create this file "configuration/configuration.ts"

```
export default {
  URL: "Your local url",
  PORT: Assigned port,
  DB_CONN:
    "DB connection",
  KEY: "Your encryption key"
};

```
To install project:
```bash
# Installing proyect!
npm install

# Run proyect:
npm run start

```

And install the dependencies.

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0
International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
