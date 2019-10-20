import 'package:flutter/material.dart';
import 'package:operacao_natal_comunicode/model/user.dart';

class ViewPerfilTab extends StatefulWidget {
  final User user;

  ViewPerfilTab(this.user);

  @override
  _ViewPerfilTabState createState() => _ViewPerfilTabState();
}

class _ViewPerfilTabState extends State<ViewPerfilTab> {
  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: EdgeInsets.all(16.0),
      children: <Widget>[
        _getLabel("IDN"),
        _getData(widget.user.idn),
        Container(
          height: 16.0,
        ),
        _getLabel("Time"),
        _getData(widget.user.timeString),
        Container(
          height: 16.0,
        ),
        _getLabel("Nome Completo"),
        _getData(widget.user.nomeCompleto),
        Container(
          height: 16.0,
        ),
        _getLabel("Telefone"),
        _getData(widget.user.telefone),
        Container(
          height: 16.0,
        ),
        _getLabel("Operadora"),
        _getData(widget.user.operadora),
        Container(
          height: 16.0,
        ),
        _getLabel("Facebook"),
        _getData(widget.user.facebook),
        Container(
          height: 16.0,
        ),
        _getLabel("Universidade"),
        _getData(widget.user.universidade),
        Container(
          height: 16.0,
        ),
        _getLabel("Curso"),
        _getData(widget.user.curso),
        Container(
          height: 16.0,
        ),
        _getLabel("Ano de Ingresso na Universidade"),
        _getData(widget.user.anoIngressoFaculdade.toString()),
        Container(
          height: 16.0,
        ),
        _getLabel("Aniversário"),
        _getData(widget.user.aniversario),
        Container(
          height: 16.0,
        ),
        _getLabel("Carro Disponível"),
        _getData(widget.user.temCarro ? "Sim" : "Não"),
        Container(
          height: 16.0,
        ),
      ],
    );
  }

  Widget _getLabel(String text) {
    return Text(text, style: TextStyle(fontSize: 14.0));
  }

  Widget _getData(String text) {
    return Text(text, style: TextStyle(fontSize: 18.0));
  }
}
