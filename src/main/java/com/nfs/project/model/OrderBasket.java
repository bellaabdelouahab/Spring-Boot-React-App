/**
 * @author abdelouahabella
 * Date: Mar 17, 2023
 * Time: 11:14:01 PM
*/
package com.nfs.project.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "order_basket")
public class OrderBasket {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_basket_seq")
    @SequenceGenerator(name = "order_basket_seq", sequenceName = "ORDER_BASKET_SEQ", allocationSize = 1)
    private int basketid;
    
    @Column(name = "productid")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "productid")
    private Product product;

    @Column(name = "orderid")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "orderid")
    private customer customer;


    @Column(name = "quantity")
    private int quantity;

    @Column(name = "priceperunit")
    private double priceperunit;

    
}
