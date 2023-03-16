package com.nfs.project.model;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table
@Entity
public class Product implements Serializable{
    @Id
    // @SequenceGenerator(
    //         name="productSquence",
    //         sequenceName = "productSquence",
    //         allocationSize = 1
    // )
    // @GeneratedValue(
    //         strategy = GenerationType.SEQUENCE,
    //         generator = "productSquence"
    // )

    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "productSquence")
    @SequenceGenerator(name = "productSquence", sequenceName = "PRODUCTSQUENCE", allocationSize = 1)
    private int id;
    private long price;
    private String name,description,type,imagesrc;

    public Product( String name, String Description, String Type, String imagesrc, long Price){

        this.description=Description;
        this.imagesrc=imagesrc;
        this.name=name;
        this.type=Type;
        this.price=Price;
    }
    public Product(int id, String name, String Description, String Type, String imagesrc, long Price){
        this.id=id;
        this.description=Description;
        this.imagesrc=imagesrc;
        this.name=name;
        this.type=Type;
        this.price=Price;
    }
}
