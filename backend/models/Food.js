module.exports = (sequelize, DataTypes) => {
    const Food = sequelize.define(
        "Food",
        {
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            freezeTableName: true,

        }
    );
    return Food;
};
