npx sequelize-cli db:migrate:undo:all
npx sequelize-cli db:migrate
npx sequelize-cli db:seed --seed 20200717141717-customers
npx sequelize-cli db:seed --seed 20200717142142-orders
npx sequelize-cli db:seed --seed 20200717143519-categories
npx sequelize-cli db:seed --seed 20200717144851-products

## some other instruction..