import { DataTypes } from 'sequelize';

export default ( { sequelize } ) => {
    sequelize.define('User', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Username already exists'
            },
            validate: {
                isAlpha: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Email already exists'
            },
            validate: {
                isEmail: true
            }
        },
        credit_card: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isCreditCard: true
            },
            unique: {
                args: true,
                msg: 'Credit card already exists'
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isAlpha: true
            }
        },
        liked_books: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true,
            defaultValue: []
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            validate: {
                isBoolean: true
            }
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'users'
    })
}