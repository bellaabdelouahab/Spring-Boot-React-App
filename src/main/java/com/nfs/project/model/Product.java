package com.nfs.project.model;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

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

    private Product() {

    }
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



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImagesrc() {
        return imagesrc;
    }

    public void setImagesrc(String imagesrc) {
        this.imagesrc = imagesrc;
    }

    @Override
    public String toString() {
        return "products{" +
                "id=" + id +
                ", price=" + price +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", type='" + type + '\'' +
                ", imagesrc='" + imagesrc + '\'' +
                '}';
    }
}
