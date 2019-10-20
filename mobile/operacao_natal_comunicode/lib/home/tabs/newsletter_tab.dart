import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:operacao_natal_comunicode/pages/newsletter_item_page.dart';

class NewsletterTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FutureBuilder<QuerySnapshot>(
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
        });
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
      },
    );
  }
}
