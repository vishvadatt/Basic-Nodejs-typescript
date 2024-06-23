Create Basic Nodejs Project with typescript

Step 1: Initialize the Project

    Create a new directory for your project:
        mkdir project_name
        cd project_name

    Initialize a new Node.js project:
        npm init -y

Step 2: Install Necessary Packages
Install TypeScript and necessary types:
npm install --save-dev typescript @types/node

    Install Express and its types:
        npm install express
        npm install --save-dev @types/express

    Install a TypeScript compiler helper tool, ts-node:
        npm install --save-dev ts-node

Step 3: Configure TypeScript
Create a tsconfig.json file:
npx tsc --init

    Edit tsconfig.json to include the following settings:
        {
            "compilerOptions": {
                "target": "ES6",
                "module": "commonjs",
                "outDir": "./dist",
                "rootDir": "./src",
                "strict": true,
                "esModuleInterop": true
            },
            "include": ["src"],
            "exclude": ["node_modules"]
        }

Step 4: Create the Project Structure
Create the necessary directories and files:
mkdir src
touch src/index.ts

Step 5: Set Up Express with Routing
Create directories for routes and controllers
mkdir src/routes src/controllers

Step 6: Create Controllers
Create a file src/controllers/homeController.ts for handling home routes:

Step 7: Create Routes
Create a file src/routes/homeRoutes.ts for home routes:

    Let's create a common file that aggregates all the routes and then exports them for use in the main application file.

    Create a routes/index.ts file that combines all routes:
    touch src/routes/index.ts

Step 8: Create Common Routes File
Edit src/routes/index.ts to export all routes:

        import { Router } from 'express';
        import homeRoutes from './homeRoutes';
        const router = Router();
        router.use('/', homeRoutes);
        export default router;

Step 9: Update Main Application File
Update src/index.ts to use the home routes:
import routes from './routes';
app.use('/', routes);

Step 10: Install Nodemon
Install nodemon as a development dependency:
npm install --save-dev nodemon

Step 11: Update Package Scripts
Update the scripts section of your package.json to use nodemon:
"scripts": {
"build": "tsc",
"start": "node dist/index.js",
"dev": "nodemon --watch src --exec ts-node src/index.ts"
}
