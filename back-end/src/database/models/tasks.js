const Tasks = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('tasks', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    task: DataTypes.STRING,
    status: DataTypes.STRING,
    taskDate: DataTypes.DATEONLY,
  }, {
    timestamps: false,
    tableName: 'tasks',
  });
  return Tasks;
}

module.exports =  Tasks;
