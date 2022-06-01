import { DataTypes } from 'sequelize';

export default ( { sequelize } ) => {
    sequelize.define('Store', {
        store_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            references: {
                model: 'User',
                key: 'user_id'
            }
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            references: {
                model: 'Book',
                key: 'book_id'
            }
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'store'
    })
}