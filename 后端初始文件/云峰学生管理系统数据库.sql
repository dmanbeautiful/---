create database if not exists yfStudentSystem;
use yfStudentSystem;

drop database if exists student;
drop database if exists admin;
drop database if exists adminKey;
drop database if exists message;
drop database if exists stuAlter;

create table student
(
    stuId       INT(100) PRIMARY key auto_increment,
    stuAcc       VARCHAR(20)  not null UNIQUE ,
    stuPassword  varchar(15)  not null ,
    stuAnswer1   varchar(20)  null,
    stuAnswer2   varchar(20)  null,
    stuName      varchar(20)  null,
		stuAge       VARCHAR(3)   NULL,
    stuSex       varchar(1)   null,
    stuCollege   VARCHAR(20)  null,
    stuDirection VARCHAR(10)  null,
    stuAwards    VARCHAR(80)  null,
    stuJob       VARCHAR(20)  null,
    stuMsg       VARCHAR(10)  null
);


create table admin
(
    admId       INT(100) PRIMARY key auto_increment,
    admAcc       VARCHAR(20)  not null UNIQUE ,
    admPassword  varchar(15)  not null ,
		admKey     VARCHAR(15)  not null,
    admName      varchar(20)  null,
		admAge       VARCHAR(3)   NULL,
    admSex       varchar(1)   null,
    admCollege   VARCHAR(20)  null,
    admDirection VARCHAR(10)  null,
    admJob       VARCHAR(20)  null
);

create table adminKey
(
    admKey       VARCHAR(20) not null UNIQUE ,
		admIsUsed    varchar(2)not null
);


create table message
(
    msgId       INT(100),
    msgInfo     varchar(200) null    
);

create table stuAlter
(
    atuAlterId  INT(100),
    stuAlterCollege   VARCHAR(20)  null,
    stuAlterDirection VARCHAR(10)  null,
    stuAlterAwards    VARCHAR(80)  null,
    stuAlterJob       VARCHAR(20)  null
);


