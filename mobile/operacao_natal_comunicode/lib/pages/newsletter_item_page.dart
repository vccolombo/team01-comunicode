import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class NewsletterDescription extends StatelessWidget {
  final DocumentSnapshot snapshot;

  NewsletterDescription(this.snapshot);

  @override
  Widget build(BuildContext context) {
    String message = snapshot.data["message"];
    print(message);
    return Scaffold(
        appBar: AppBar(
          title: Text(snapshot.data["title"]),
          centerTitle: true,
        ),
        body: ListView(
          children: <Widget>[
            Padding(
              padding: EdgeInsets.all(16.0),
              child: Text(message.replaceAll("\\\\n", "\n"),
                  style: TextStyle(fontSize: 16.0) //, fontFamily: "Raleway"),
                  ),
            ),
            Center(
              child: FlatButton(
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(15.0)),
                child: Text(
                  "Leia agora :)",
                  style: TextStyle(color: Colors.white, fontSize: 20.0),
                ),
                color: Theme.of(context).accentColor,
                onPressed: () async {
                  await launch(snapshot.data["file"]);
                },
              ),
            )
          ],
        ));
  }
}
