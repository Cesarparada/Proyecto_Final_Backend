###########################################################

# crear base de datos
sequelize db:create

# crear modelo roles
sequelize model:generate --name Role --attributes 'role_usuario:string'
# crear modelo contacto
sequelize model:generate --name Contacto --attributes 'id_usuario:integer,nombre:string,email:string'
# crear modelo proyecto
sequelize model:generate --name Proyecto --attributes 'titulo:string,descripcion:string'
# crear modelo usuario
sequelize model:generate --name Usuario --attributes 'id_role:integer,nombre:string,apellidos:string,fecha_de_nacimiento:date,email:string,password:string'
# crear modelo lista
sequelize model:generate --name Lista --attributes 'titulo:string,descripcion:string,tarea:string'
# crear modelo usuarios_proyectos
sequelize model:generate --name Usuario_Proyecto --attributes 'id_usuario:integer,id_proyecto:integer'
# crear modelo usuarios_tareas_proyecto
sequelize model:generate --name Tarea_Proyecto --attributes 'id_lista:integer,id_usuario:integer,id_proyecto:integer'


###########################################################

# ejecutar migracion
sequelize db:migrate 
sequelize db:migrate  --to role.js

# revertir la migracion
sequelize db:migrate:undo
sequelize db:migrate:undo:all
sequelize db:migrate:undo:all --to 03-create-alumno.js

# crear seed
sequelize seed:generate --name seed-role
sequelize seed:generate --name seed-proyecto
sequelize seed:generate --name seed-lista
sequelize seed:generate --name seed-usuario
sequelize seed:generate --name seed-contacto
sequelize seed:generate --name seed-tarea_proyecto
sequelize seed:generate --name seed-usuario_proyecto

# ejecutar seed
sequelize db:seed:all
sequelize db:seed --seed 02-seed-alumno.js

# revertir seed
sequelize db:seed:undo
sequelize db:seed:undo:all
sequelize db:seed:undo --seed 03-seed-alumno.js