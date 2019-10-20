import 'package:flutter/material.dart';

class ProximosEventosTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: EdgeInsets.all(16.0),
      children: <Widget>[
        _getProximoEventoTile(context),
        _getProximoEventoTile(context),
      ],
    );
  }

  Widget _getProximoEventoTile(BuildContext context) {
    return Card(
        child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        Container(
          padding: EdgeInsets.all(8.0),
          child: Text(
            "COMUNICODE\n19 E 20 DE OUTUBRO",
            textAlign: TextAlign.center,
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
          ),
          color: Theme.of(context).accentColor,
        ),
        Image.asset("images/comunicode.jpg"),
        Padding(
            padding: EdgeInsets.all(8.0),
            child: Row(
              children: <Widget>[
                Expanded(
                    child: Text(
                  "SAIBA MAIS\nE SE INSCREVA",
                  style: TextStyle(color: Theme.of(context).accentColor),
                )),
                IconButton(
                  icon: Icon(Icons.add, color: Theme.of(context).accentColor),
                  onPressed: () {},
                )
              ],
            ))
      ],
    ));
//    return Container(
//      decoration: BoxDecoration(
//        border: Border.all(color: Theme.of(context).accentColor),
//        borderRadius: BorderRadius.circular(15.0)
//      ),
//    child: Column(
//      crossAxisAlignment: CrossAxisAlignment.stretch,
//      children: <Widget>[
//        Container(
//          padding: EdgeInsets.all(4.0),
//          child: Text("COMUNICODE\n19 E 20 DE OUTUBRO"),
//          color: Theme
//              .of(context)
//              .accentColor,
//        ),
//        Image.asset("images/comunicode.jpg"),
//        Row(
//          children: <Widget>[
//            Expanded(
//                child: Text("SAIBA MAIS\nE SE INSCREVA")
//            ),
//            Icon(Icons.add)
//          ],
//        )
//      ],
//    ));
  }
}
