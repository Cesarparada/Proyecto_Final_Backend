###########################################################

# crear base de datos
sequelize db:create

# crear modelo Nacionalidad
sequelize model:generate --name Nacionalidad --attributes 'nombre_nacion:string'




# crear modelo Direccion
sequelize model:generate --name Role --attributes 'role_usuario:string'

# crear modelo Categoria
sequelize model:generate --name Categoria --attributes 'nombre_categoria:string'

# crear modelo Alumno
sequelize model:generate --name Usuario --attributes 'id_role:integer,nombre:string,apellidos:string,fecha_de_nacimiento:date,email:string,password:string'

# crear modelo Curso
sequelize model:generate --name Curso --attributes 'nombre_curso:string,id_categoria:integer'

###########################################################

# ejecutar migracion
sequelize db:migrate 
sequelize db:migrate  --to 03-create-alumno.js

# revertir la migracion
sequelize db:migrate:undo
sequelize db:migrate:undo:all
sequelize db:migrate:undo:all --to 03-create-alumno.js

# crear seed
sequelize seed:generate --name seed-citas
sequelize seed:generate --name seed-direccion
sequelize seed:generate --name seed-odontologo

# ejecutar seed
sequelize db:seed:all
sequelize db:seed --seed 02-seed-alumno.js

# revertir seed
sequelize db:seed:undo
sequelize db:seed:undo:all
sequelize db:seed:undo --seed 03-seed-alumno.js