import { DataTypes } from 'sequelize';

export default ( { sequelize } ) => {
    sequelize.define('Book', {
        book_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true,
                notEmpty: true
            },
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        electron: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        audio: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'books'
    })
}