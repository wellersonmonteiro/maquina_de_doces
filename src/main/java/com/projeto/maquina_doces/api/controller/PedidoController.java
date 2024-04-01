package com.projeto.maquina_doces.api.controller;

import com.projeto.maquina_doces.api.model.Pedido;
import com.projeto.maquina_doces.api.model.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {
    @Autowired
    public PedidoRepository pedido;

    @CrossOrigin(origins = "http://localhost:63342", allowCredentials = "true")


    @GetMapping
    public List<Pedido> obterPedido(){
        return pedido.findAll();
    }
}
