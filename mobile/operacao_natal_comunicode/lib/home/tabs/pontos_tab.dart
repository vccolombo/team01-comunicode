import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:operacao_natal_comunicode/pages/newsletter_item_page.dart';

class PontosTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Row(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
              Text(
                "PONTOS",
                style: TextStyle(
                  color: Theme.of(context).accentColor,
                  fontSize: 20.0,
                  fontWeight: FontWeight.bold,
                ),
              )
            ]),
            Container(
              height: 20.0,
            ),
            Text(
              "PONTUAÇÃO TOTAL\n7500",
              style: TextStyle(
                fontSize: 16.0,
              ),
            ),
            Container(
              height: 10.0,
            ),
            Text(
              "ATIVIDADES GERAIS\n4000",
              style: TextStyle(
                fontSize: 16.0,
              ),
            ),
            Container(
              height: 10.0,
            ),
            Text(
              "ATIVIDADES TIME\n3500",
              style: TextStyle(
                fontSize: 16.0,
              ),
            ),
            Container(
              height: 10.0,
            ),
            Row(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
              Text(
                "PRESENÇA",
                style: TextStyle(
                    color: Theme.of(context).accentColor,
                    fontSize: 20.0,
                    fontWeight: FontWeight.bold),
              )
            ]),
            Container(
              height: 20.0,
            ),
            Text(
              "1º DIA DE MERCADO\n250",
              style: TextStyle(
                fontSize: 16.0,
              ),
            ),
          ],
        ));
  }
}
