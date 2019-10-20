import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:operacao_natal_comunicode/login/login_presenter.dart';
import 'package:operacao_natal_comunicode/login/login_view.dart';
import 'package:operacao_natal_comunicode/pages/newsletter_item_page.dart';
import 'package:firebase_auth/firebase_auth.dart';

class NewsletterPage extends StatefulWidget {
  @override
  _NewsletterPageState createState() => _NewsletterPageState();
}

Future<Null> _ensureLogin(context) async {
  FirebaseUser user = await FirebaseAuth.instance.currentUser();
  if (user == null) {
    Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => LoginPage(LoginPresenter.instance),
        ));
  }
}

class _NewsletterPageState extends State<NewsletterPage> {
//  void getCurrentUser() async {
//    print(await FirebaseAuth.instance.currentUser());
//  }

  @override
  Widget build(BuildContext context) {
//    _ensureLogin(context);
    return Scaffold(
        appBar: AppBar(
          title: Text("Newsletters"),
          centerTitle: true,
        ),
//        drawer: CustomDrawer(),
        body: FutureBuilder<QuerySnapshot>(
            future: Firestore.instance.collection("newsletter").getDocuments(),
            builder: (context, snapshot) {
              if (!snapshot.hasData) {
                return Center(
                  child: CircularProgressIndicator(),
                );
              } else {
                print(snapshot);

                var tiles = snapshot.data.documents.map((doc) {
                  return NewsletterTile(doc);
                }).toList();

                return ListView(
                  children: tiles,
                );
              }
            }));
  }
}

class NewsletterTile extends StatelessWidget {
  final DocumentSnapshot snapshot;

  NewsletterTile(this.snapshot);

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(snapshot.data["title"]),
      onTap: () async {
        Navigator.push(
            context,
            MaterialPageRoute(
                builder: (context) => NewsletterDescription(snapshot)));
//        await launch(snapshot.data["file"]);
      },
    );
//       GestureDetector(
//          onTap: () {
//            print(snapshot.data["file"]);
//          },
//          child: Card(
//              child: Text(snapshot.data["title"])
//          )));
  }
}
