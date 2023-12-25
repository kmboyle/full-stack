Get Started
pre-req:
    rust, docker

1. `mkdir myDir` and `cd myDir` `git init`
2. `touch .gitignore`
3. `touch compose.yaml`
4. `docker compose up -d`
5. `docker ps -a` (view container and ports)
6. `docker exec -it db psql -U postgres`
7. Inside container
    a. `\l` - list of databases
    b. `\dt` - find relations
    cd. `exit`
8. Create back end - `cargo new backend`
9. Add dependencies to Cargo.toml
    - postgres = "0.19"
    - serde = "1.0"
    - serde_json = "1.0"
    - serde_derive = "1.0"
10. Edit backend/src/main.rs file: add dependencies
11. Add macro for serde_derive
12. Complete Backend
13. Dockerize app
    - `cd backend`
    - `touch .dockerignore rust.Dockerfile`
14. `docker compose build`
15. `docker compose up -d rustapp`
16. Test endpoints in Postman
17. Create next.js `npx create-next-app@latest --no-git`
18. Project name: frontend
19. All defaults - NO App Router, Yes src/ directory
20. `cd frontend && npm i axios`
21. `npm run dev`
22. Create front end
23.  Go to next.config.js and replace `reactStrictMode: true,` with `output: standalone`
24. `touch .dockerignore next.dockerfile`
25. add `**/node_modules` to `.dockerignore`
26. add next.js build steps to `next.dockerfile` (from vercel documentation)
27. Add `nextapp` service to `compose.yaml`
28. `docker compose build`
29. `docker compose up -d`
30. `docker ps -a` to see containers