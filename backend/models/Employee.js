module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define(
        "Employee",
        {
            username: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
        },
        {
            freezeTableName: true,

        }
    );
    return Employee;
};
