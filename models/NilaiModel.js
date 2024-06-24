import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Nilai= db.define('nilai',{
    uuid:{
        type :DataTypes.STRING,
        defaultValue :DataTypes.UUIDV4,
        allowNull : false,
        validate :{
            notEmpty : true
        }
    },
    name:{
        type : DataTypes.STRING,
        allowNull : false,
        validate:{
            notEmpty: true,
            len: [3,100]
        }  
    },
    matkul:{
        type : DataTypes.STRING,
        allowNull : false,
        validate:{
            notEmpty: true,
            len: [3,100]
        }  
    },
    
    role:{
        type : DataTypes.STRING,
        allowNull : false,
        validate:{
            notEmpty: true,
           
        }  
    },
},{
    freezeTableNames : true
});

export default Nilai;
