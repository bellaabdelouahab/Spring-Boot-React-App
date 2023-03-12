CREATE TABLE customer(
   fullName  VARCHAR(17) NOT NULL PRIMARY KEY
  ,adresse   VARCHAR(120) NOT NULL
  ,orders    INTEGER  NOT NULL
  ,dateOrder DATE  NOT NULL
);
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Marni Coon','Apt 363',1,to_date('2/20/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Dwain Mannin','1st Floor',2,to_date('7/17/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Ced Dominico','Suite 99',3,to_date('11/17/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Aaren Relton','Apt 962',4,to_date('4/24/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Fraser Freeland','Room 669',5,to_date('10/2/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Meir Victoria','Room 1207',6,to_date('8/16/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Claudelle Jaggar','18th Floor',7,to_date('3/25/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Renado Pullinger','7th Floor',8,to_date('7/9/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Lothario Grocock','Room 634',9,to_date('4/29/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Shurlock Tree','Room 1568',10,to_date('12/30/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Arden Ruddom','PO Box 47357',11,to_date('6/12/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Eyde Davson','11th Floor',12,to_date('1/8/2023','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Clayborn Cronchey','Room 183',13,to_date('10/15/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Quill Keetley','Suite 82',14,to_date('10/15/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Cyndi Sewards','Room 1011',15,to_date('9/21/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Arne Lowfill','19th Floor',16,to_date('7/19/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Bonni Hackney','Apt 1545',17,to_date('1/6/2023','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Vivyanne OReilly','Suite 100',18,to_date('8/27/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Shea Yarnley','Suite 69',19,to_date('6/3/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Hattie Halligan','Suite 64',20,to_date('9/3/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Rina Gainor','Room 67',21,to_date('6/20/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Kinny Ovendale','13th Floor',22,to_date('7/5/2022','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Kurt Kiff','Suite 93',23,to_date('1/31/2023','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Kendre Treacher','Apt 1543',24,to_date('2/7/2023','mm/dd/yyyy'));
INSERT INTO customer(fullName,adresse,orders,dateOrder) VALUES ('Dorette Penney','PO Box 53065',25,to_date('12/4/2022','mm/dd/yyyy'));




-- ######################


CREATE TABLE orders(
   orderName INTEGER  NOT NULL PRIMARY KEY 
  ,price     INTEGER  NOT NULL
  ,quantity  INTEGER  NOT NULL
  ,Total     INTEGER  NOT NULL
  ,Status    VARCHAR(9) NOT NULL
);
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (1,10,1,139,'Pending');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (2,20,2,1652,'Delivered');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (3,30,3,881,'Pending');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (4,40,4,100,'Delivered');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (5,50,5,09,'Pending');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (6,60,6,2692,'Delivered');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (7,70,7,95,'Delivered');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (8,80,8,4,'Pending');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (9,90,9,5942,'Delivered');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (10,100,10,056,'Pending');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (11,101,11,16394,'Pending');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (12,102,12,4099,'Pending');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (13,103,13,035,'Delivered');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (14,104,14,2725,'Delivered');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (15,105,15,7,'Pending');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (16,106,16,97780,'Delivered');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (17,107,17,07433,'Delivered');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (18,108,18,8,'Pending');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (19,109,19,9293,'Delivered');
INSERT INTO orders(orderName,price,quantity,Total,Status) VALUES (20,200,20,005,'Delivered');


-- ######################


CREATE TABLE produit(
   produitName VARCHAR(120) NOT NULL PRIMARY KEY
  ,quantity    INTEGER  NOT NULL
  ,price       INTEGER  NOT NULL
  ,description VARCHAR(500) NOT NULL
);
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Garam Marsala',1,1,'Accidental malfunction of unsp larger firearm, init encntr');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Chicken Thigh - Bone Out',2,2,'Congenital cystic lung');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('7up Diet, 355 Ml',3,3,'Laceration of plantar artery of right foot, subs encntr');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Filter - Coffee',4,4,'Nondisp fx of shaft of 5th MC bone, r hand, 7thP');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Lemon Balm - Fresh',5,5,'Anterior dislocation of left sternoclavicular joint, subs');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Appetizer - Smoked Salmon / Dill',6,6,'Unsp traum nondisp spondylolysis of sixth cervcal vert, sqla');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Apple - Northern Spy',7,7,'Unsp injury at C1 level of cervical spinal cord, init encntr');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Canadian Emmenthal',8,8,'Injury of oth nerves at lower leg level, right leg, subs');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Bread - Roll, Canadian Dinner',9,9,'Oth traum nondisp spondylolysis of 5th cervcal vert, 7thK');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Corn Shoots',10,10,'Allergy status, oth than to drugs and biological substances');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Soup - Campbellschix Stew',11,11,'Peripheral tear of medial meniscus, current injury');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Yeast - Fresh, Fleischman',12,12,'Underdosing of opium, subsequent encounter');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Soup - Knorr, French Onion',13,13,'Vertigo from infrasound, subsequent encounter');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Danishes - Mini Cheese',14,14,'Nondisp suprcndl fx w/o intrcndl extn low end unsp femr,7thD');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Tray - 12in Rnd Blk',15,15,'Superficial frostbite of other part of head, subs encntr');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Bagel - Whole White Sesame',16,16,'Pre-existing essential htn comp pregnancy, third trimester');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Bananas',17,17,'Blindness, left eye, low vision right eye');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Brocolinni - Gaylan, Chinese',18,18,'Endometriosis of ovary');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Dried Cranberries',19,19,'Chronic gout due to renal impairment, right shoulder, w toph');
INSERT INTO produit(produitName,quantity,price,description) VALUES ('Apples - Spartan',20,20,'Anterior cord syndrome at C3, subs');





-- rename CUSTOMER to costumer
ALTER TABLE costumer RENAME TO customer;

drop table produit;
DROP TABLE orders;



CREATE SEQUENCE productSquence START WITH 1 INCREMENT BY 1 CACHE 10;
CREATE SEQUENCE custumerSquence START WITH 1 INCREMENT BY 1 CACHE 10;



CREATE TABLE product (
    id number,
    price NUMBER,
    name VARCHAR2(255),
    description VARCHAR2(1000),
    type VARCHAR2(255),
    imagesrc VARCHAR2(1000)
);

create table customer(
    id number,
    firstName VARCHAR2(255),
    lastName VARCHAR2(255),
    address VARCHAR2(255),
    city VARCHAR2(255),
    postalcode VARCHAR2(255),
    phone_number VARCHAR2(255)
);

drop table customer;
