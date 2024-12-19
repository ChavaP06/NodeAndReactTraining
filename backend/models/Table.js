module.exports = (sequelize, DataTypes) => {
    const Table = sequelize.define(
        "Table",
        {
            ColumnOne: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            ColumnTwo: {
                type: DataTypes.STRING(50),
                allowNull: false,
            }
        },
        {
            freezeTableName: true,

        }
    );
    return Table;
};
