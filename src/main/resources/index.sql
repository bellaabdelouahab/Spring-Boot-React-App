CREATE SEQUENCE ACCOUNT_SEQ
  START WITH 1
  INCREMENT BY 1
  NOCACHE
  NOCYCLE;

DROP TABLE account;

CREATE TABLE account (
  id INTEGER PRIMARY KEY,
  firstname VARCHAR2(255),
  lastname VARCHAR2(255),
  email VARCHAR2(255) UNIQUE,
  password VARCHAR2(255),
  Userrole VARCHAR2(255)
);




CREATE TABLE customer (
    id INTEGER PRIMARY KEY,
    First_Name VARCHAR2(255) NOT NULL,
    Last_Name VARCHAR2(255) NOT NULL,
    Address VARCHAR2(255) NOT NULL,
    city VARCHAR2(255) NOT NULL,
    postalcode VARCHAR2(255) NOT NULL,
    phone_Number VARCHAR2(255) NOT NULL,
    Join_Date DATE NOT NULL
);


CREATE SEQUENCE CUSTUMERSQUENCE
START WITH 1
INCREMENT BY 1
NOCACHE
NOCYCLE;




CREATE TABLE Product (
    id NUMBER(10) PRIMARY KEY,
    price NUMBER(10),
    name VARCHAR2(255),
    description VARCHAR2(255),
    type VARCHAR2(255),
    imagesrc VARCHAR2(255)
);

CREATE SEQUENCE productsquence
START WITH 1
INCREMENT BY 1
NOCACHE;

select * from product order by id desc;
CREATE TABLE stock_operation (
  id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  quantity_consumed INTEGER NOT NULL,
  entered_date DATE NOT NULL,
  label VARCHAR(255) NOT NULL,
  exited_date DATE,
  PRIMARY KEY (id)
);
ALTER TABLE stock_operation ADD CONSTRAINT fk_product_id
  FOREIGN KEY (product_id)
  REFERENCES product (id);


CREATE SEQUENCE stockOpSequence
START WITH 1
INCREMENT BY 1
NOCACHE;




drop table orders_operation;
CREATE TABLE orders_operation (
    id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    ProductId NUMBER NOT NULL,
    customerid NUMBER NOT NULL,
    Label VARCHAR2(255) NOT NULL,
    TotalOrderPrice FLOAT NOT NULL,
    priceperunit FLOAT NOT NULL,
    OrderDate DATE NOT NULL,
    confirmed NUMBER(1) DEFAULT 0 NOT NULL,
    Shipped NUMBER(1) DEFAULT 0 NOT NULL,
    Received NUMBER(1) DEFAULT 0 NOT NULL,
    quantity NUMBER NOT NULL,
    CONSTRAINT fk_product
        FOREIGN KEY (ProductId)
        REFERENCES product (id),
    CONSTRAINT fk_customer
        FOREIGN KEY (customerid)
        REFERENCES customer (id),
    CONSTRAINT check_total_price
        CHECK (TotalOrderPrice > 0),
    CONSTRAINT check_price_per_unit
        CHECK (priceperunit > 0),
    CONSTRAINT check_quantity
        CHECK (quantity > 0)
);

-- rename TotalOrderPrice to TOTAL_ORDER_PRICE
alter table orders_operation rename column TotalOrderPrice to TOTAL_ORDER_PRICE;
-- rename orderDate to ORDER_DATE
alter table orders_operation rename column orderDate to ORDER_DATE;
-- rename productId to PRODUCT_ID
alter table orders_operation rename column productId to PRODUCT_ID;

CREATE SEQUENCE OrdersOPSquence
START WITH 1
INCREMENT BY 1
NOCACHE;



