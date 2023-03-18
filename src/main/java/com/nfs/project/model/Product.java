package com.nfs.project.model;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Product implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "productSquence")
    @SequenceGenerator(name = "productSquence", sequenceName = "PRODUCTSQUENCE", allocationSize = 1)
    private int id;
    private long price;
    private String name,description,type,imagesrc;

}
