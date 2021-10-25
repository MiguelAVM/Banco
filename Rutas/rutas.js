const express=require('express');
const conexion = require('../conexion/conexion');
const rutas=express.Router();  
const controller=require('../controlador/controller');
rutas.get('/',controller.index);
rutas.post('/login',controller.login);
/*USUARIOS*/
rutas.get('/consultas',controller.consultageneral);
rutas.post('/frminsertar',controller.insertar);
rutas.post('/actualizar',controller.actualizar);
rutas.post('/eliminar',controller.eliminar);
/*CLIENTES*/
rutas.get('/cliente',controller.consul_cli);
rutas.post('/frminsertar_cli',controller.inser_cli);
rutas.post('/act_cli',controller.act_cli);
rutas.post('/eli_cli',controller.eli_cli);
/*LINEAS*/
rutas.get('/lineas',controller.consul_li);
rutas.post('/frminsertar_li',controller.inser_li);
rutas.post('/act_li',controller.act_li);
rutas.post('/eli_li',controller.eli_li);
/*CREDITOS*/
rutas.get('/creditos',controller.consul_cre);
rutas.post('/frminsertar_cre',controller.inser_cre);
rutas.post('/act_cre',controller.act_cre);
rutas.post('/eli_cre',controller.eli_cre);

rutas.get('/produc_cli',controller.produc_cli);

module.exports=rutas