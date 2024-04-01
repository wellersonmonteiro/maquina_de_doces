package com.projeto.maquina_doces.api.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    int doce1;
    int doce2;
    int doce3;

    @Column(name = "valor_depositado")
    double valorDepositado;
    double troco;
}
